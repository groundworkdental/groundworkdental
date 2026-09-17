import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Contact form handler.
 *
 * Leads are written to D1 (SQLite on Cloudflare), which replaces the Supabase
 * `leads` table. D1 is reached through a binding rather than the REST API, so
 * no API token is involved and nothing has to be configured at build time.
 *
 * NOTE ON NOTIFICATION: this no longer sends email. Resend was removed
 * deliberately, which means a submitted lead now sits in D1 until someone
 * looks. If the practice wants to be told, the native option on this stack is
 * Cloudflare Email Sending — see docs. Until then, check the table.
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

  return json({ ok: true }, 200);
};
