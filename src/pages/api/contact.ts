import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Contact form handler.
 *
 * Leads are written to D1 (SQLite on Cloudflare), which replaces the Supabase
 * `leads` table. D1 is reached through a binding rather than the REST API, so
 * no API token is involved and nothing has to be configured at build time.
 *
 * A notification is emailed via Cloudflare Email Service, which replaces
 * Resend. Both the storage and the notification are best-effort and
 * independent: whichever works, works. The lead is more likely to survive in
 * two places than in one, and neither failure is worth showing the visitor.
 *
 * The write is best-effort by design. A storage failure must never cost the
 * lead the submission: the form says "thanks" and the error goes to the logs,
 * because a visitor who sees an error usually does not come back.
 */

interface ContactPayload {
  name?: string;
  email?: string;
  website?: string;
  comment?: string;
}

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request, locals }) => {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const website = (data.website || '').trim();
  const comment = (data.comment || '').trim();

  if (!name || !email) {
    return json({ error: 'Name and email are required.' }, 400);
  }

  // The binding is absent in `astro dev` and in any environment where the D1
  // database has not been attached yet. Log loudly rather than 500 — losing
  // the submission is worse than not storing it.
  const db = (locals as { runtime?: { env?: { DB?: D1Database } } })?.runtime?.env?.DB;

  if (!db) {
    console.error('[contact] no D1 binding (env.DB) — lead NOT stored:', { name, email, website });
    return json({ ok: true }, 200);
  }

  try {
    await db
      .prepare(
        `INSERT INTO leads (practice_name, email, website_url, comment, created_at)
         VALUES (?, ?, ?, ?, datetime('now'))`,
      )
      .bind(name, email, website, comment)
      .run();
  } catch (err) {
    console.error('[contact] D1 insert failed — lead NOT stored:', err, { name, email });
  }

  await notify({ name, email, website, comment }, locals);

  return json({ ok: true }, 200);
};

/**
 * Email the practice that a lead arrived.
 *
 * Two transports, because Pages support for the send_email binding is not
 * guaranteed and the REST API works everywhere. The binding is preferred when
 * present (no credential to manage); otherwise a scoped token is used. If
 * neither is configured, this logs and returns — a missing notification must
 * never turn a captured lead into an error page.
 *
 * Sending is from a subdomain onboarded to Email Sending, NOT from
 * groundworkdental.com itself. The apex already publishes Google Workspace's
 * SPF, and a domain may carry only one SPF record — a second one is a
 * permerror that breaks authentication for all mail, including the real
 * mailbox. A dedicated sending subdomain keeps the two apart.
 */
async function notify(
  lead: { name: string; email: string; website: string; comment: string },
  locals: unknown,
): Promise<void> {
  const env = (locals as { runtime?: { env?: Record<string, unknown> } })?.runtime?.env ?? {};

  const to = String(env.LEAD_NOTIFY_TO || 'hello@groundworkdental.com');
  const from = String(env.LEAD_NOTIFY_FROM || '');
  const subject = `New lead: ${lead.name}`;

  const text = [
    `Name:    ${lead.name}`,
    `Email:   ${lead.email}`,
    `Website: ${lead.website || '(none given)'}`,
    '',
    lead.comment || '(no message)',
  ].join('\n');

  // Replying to the notification should reach the prospect, not us.
  const replyTo = lead.email;

  if (!from) {
    console.error('[contact] LEAD_NOTIFY_FROM unset — no notification sent for', lead.email);
    return;
  }

  try {
    const binding = env.EMAIL as { send?: (msg: unknown) => Promise<unknown> } | undefined;
    if (binding?.send) {
      await binding.send({
        to,
        from: { email: from, name: 'Groundwork Dental' },
        replyTo,
        subject,
        text,
      });
      return;
    }

    const accountId = String(env.CLOUDFLARE_ACCOUNT_ID || '');
    const token = String(env.EMAIL_API_TOKEN || '');
    if (!accountId || !token) {
      console.error('[contact] no EMAIL binding and no REST credentials — no notification sent');
      return;
    }

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/email/sending/send`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        // REST uses `address` and snake_case where the binding uses `email`
        // and camelCase. Mixing them is a silent 400.
        body: JSON.stringify({
          to: [{ address: to }],
          from: { address: from, name: 'Groundwork Dental' },
          reply_to: { address: replyTo },
          subject,
          text,
        }),
      },
    );
    if (!res.ok) {
      console.error('[contact] email send failed:', res.status, (await res.text()).slice(0, 300));
    }
  } catch (err) {
    console.error('[contact] email send threw:', err);
  }
}
