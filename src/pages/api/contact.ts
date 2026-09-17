import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Contact form handler.
 *
 * Leads are written to D1 (SQLite on Cloudflare), which replaces the Supabase
 * `leads` table. D1 is reached through a binding rather than the REST API, so
 * no API token is involved and nothing has to be configured at build time.
 *
 * A notification is emailed through Gmail, which replaces Resend. Both the storage and the notification are best-effort and
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
 * Email the practice that a lead arrived, through Gmail.
 *
 * Sends as the practice's own Workspace user with the gmail.send scope — the
 * narrowest one Google offers. It can send mail as us; it cannot read the
 * inbox. No third-party email service is involved and nothing is billed.
 *
 * The Worker never performs an OAuth redirect. It exchanges a long-lived
 * refresh token for a short-lived access token, server to server, on each
 * send. The refresh token is stable because the OAuth app is Internal to the
 * Workspace org — an External app in Testing expires refresh tokens after
 * seven days, which would stop notifications silently every week.
 *
 * Failure is logged and swallowed. A lead is already committed to D1 by the
 * time this runs, and a notification problem must never turn a captured lead
 * into an error page for the visitor.
 */
async function notify(
  lead: { name: string; email: string; website: string; comment: string },
  locals: unknown,
): Promise<void> {
  const env = (locals as { runtime?: { env?: Record<string, unknown> } })?.runtime?.env ?? {};

  const clientId = String(env.GMAIL_CLIENT_ID || '');
  const clientSecret = String(env.GMAIL_CLIENT_SECRET || '');
  const refreshToken = String(env.GMAIL_REFRESH_TOKEN || '');
  const to = String(env.LEAD_NOTIFY_TO || 'hello@groundworkdental.com');
  const from = String(env.LEAD_NOTIFY_FROM || 'garrett@groundworkdental.com');

  if (!clientId || !clientSecret || !refreshToken) {
    console.error('[contact] Gmail credentials missing — no notification sent for', lead.email);
    return;
  }

  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    });
    const token = (await tokenRes.json()) as { access_token?: string };
    if (!token.access_token) {
      console.error('[contact] token refresh failed:', tokenRes.status);
      return;
    }

    // Header values cannot contain CR or LF: a newline in a submitted name
    // would otherwise let a visitor inject extra headers (Bcc, Reply-To) into
    // the message we send — classic header injection.
    const clean = (v: string) => v.replace(/[\r\n]+/g, ' ').trim();

    const raw = [
      `From: Groundwork Dental <${from}>`,
      `To: ${to}`,
      // Replying to the notification reaches the prospect, not ourselves.
      `Reply-To: ${clean(lead.email)}`,
      `Subject: New lead: ${clean(lead.name)}`,
      'Content-Type: text/plain; charset=UTF-8',
      '',
      `Name:    ${lead.name}`,
      `Email:   ${lead.email}`,
      `Website: ${lead.website || '(none given)'}`,
      '',
      lead.comment || '(no message)',
    ].join('\r\n');

    // Gmail wants base64url of the RFC 822 message, unpadded.
    const encoded = btoa(unescape(encodeURIComponent(raw)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const sendRes = await fetch(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ raw: encoded }),
      },
    );
    if (!sendRes.ok) {
      console.error('[contact] gmail send failed:', sendRes.status, (await sendRes.text()).slice(0, 300));
    }
  } catch (err) {
    console.error('[contact] notification threw:', err);
  }
}
