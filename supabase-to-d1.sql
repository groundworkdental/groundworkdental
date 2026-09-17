-- Leads table for D1, replacing the Supabase `leads` table.
--
--   npx wrangler d1 create groundworkdental
--   npx wrangler d1 execute groundworkdental --remote --file=./supabase-to-d1.sql
--
-- Then add the binding to wrangler.toml:
--
--   [[d1_databases]]
--   binding = "DB"
--   database_name = "groundworkdental"
--   database_id = "<id printed by d1 create>"
--
-- No RLS equivalent is needed: nothing reads this table from the browser.
-- The only writer is the server-side contact endpoint.
CREATE TABLE IF NOT EXISTS leads (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  practice_name TEXT NOT NULL,
  email         TEXT NOT NULL,
  website_url   TEXT,
  comment       TEXT,
  created_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
