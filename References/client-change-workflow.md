# Working on a Client Site

How a fix on one practice's site becomes a fix for every future one.

Without this, the same defect is discovered and repaired once per client, and
the repair quality depends on who happened to catch it. With it, a client site
is where problems are *found* and the builder is where they are *solved*.

Companion to [launch-operations.md](launch-operations.md), which covers the
launch itself. This covers the loop afterwards.

---

## 1. The triage question

Every time you fix something on a client site, ask one question before you
close the task:

> **Would this defect exist on the next site we build?**

That splits everything into two piles.

**Site-specific** — a wrong phone number, this practice's service copy, a
photo crop. Fix it in the client repo. Done.

**Generated** — the defect came out of the template, the pipeline, or the
platform. Fix the client site so the practice is not waiting, then **fix the
generator in the same session, while you still have the evidence**.

The second half is the part that gets skipped, because the client's problem
is already solved and the next site is hypothetical. It is not hypothetical;
it is next week.

---

## 2. Where each kind of learning goes

| What you found | Where the real fix lives |
|---|---|
| Template ships a placeholder or wrong default | `groundwork-builder` — the template file |
| Generator emits something wrong | `groundwork-builder/scripts/pipeline/lib/` |
| Defect that shipped and nobody noticed | A **gate** — `verify-launch.js` or `verify-build.js` |
| Platform behaves counter-intuitively | `groundwork-builder/docs/engineering/platform-gotchas.md` |
| Process or ordering mistake | `References/launch-operations.md` |
| Pricing, scope, client-facing policy | `References/groundwork-dental-playbook.md` |

**A gate is the strongest of these.** Documentation relies on someone
remembering to read it; a gate fails the build. Prefer a gate whenever the
defect is machine-detectable, and write the doc for the part a machine cannot
judge.

---

## 3. Worked examples

Every one of these was found on a live client site and ended as a systemic
fix. They are listed because the shape repeats.

| Found on the client site | Systemic fix |
|---|---|
| `robots.txt` pointed at `example.com` | Template now generates it from `site` config, plus a placeholder gate |
| Unset phone rendered `href="tel:"` | Empty-href gate; templates guard at point of use |
| Unmatched URLs returned the homepage with a 200 | `404.astro` in the template, plus a gate that checks it builds and is noindexed |
| A blog post published with only section stubs | Placeholder gate matching scaffold *shape* |
| GA4 id set in the dashboard was ignored | `platform-gotchas.md`, plus a gate on `wrangler.toml [vars]` |
| Client zone had DKIM records proxied | `audit-client-zone.js` |
| Audit tool reported a placeholder GA4 id as "detected" | Scanner now scores it as misconfigured |

The pattern: **the client site is a test case the generator failed.**

---

## 4. Order of work in a session

1. **Fix the client site first.** They are live and possibly losing business.
   Ship it, verify it in production, tell them.
2. **Then generalise, before context is lost.** You know exactly what broke
   and why; in a week you will know only that something broke.
3. **Commit separately.** The client fix and the builder fix are different
   repos, different reviewers, different risk.
4. **Write the failure into the commit message and the code comment.** Not
   "add 404 page" — *why* there was no 404 page, what it caused, how it went
   unnoticed. The next person needs the reasoning, not the diff.

---

## 5. Commit discipline in client repos

Client repos are handed over. They are read by other developers and,
eventually, by whoever replaces us.

- **Commit only what your change needs.** Check `git status` first; a client
  repo often carries unrelated work in progress.
- **Never bundle someone else's uncommitted work** into your commit to make a
  deploy work. If your change depends on an uncommitted sibling file, that is
  a signal to stop and reconcile, not to sweep it in.
- **Do not let a working tree diverge for weeks.** One client site ran an old
  design in production for a month because the redesign lived only on disk.
- **No credentials in a client repo**, including in a gitignored `.env`. The
  repo gets transferred. Credentials live in `~/.config/groundwork/`.

---

## 6. Verify in production, not locally

A client fix is not done when it builds. It is done when it is correct on the
live site.

- **Check the deployed URL**, not `localhost`. Several defects in this
  codebase's history existed only in production: a route that worked in dev
  because dev has a filesystem, a binding that was configured but never
  reached a deployment.
- **Assert on values, not appearance.** `getComputedStyle` for colour and
  contrast, a DNS query through a public resolver, the actual HTTP status.
  Screenshots catch layout and nothing else.
- **For anything that stores or sends, exercise it for real.** Submit the
  form. Confirm the row exists and the email arrived. A contact endpoint
  returned `{"ok":true}` for two deploys while silently discarding every
  lead — nothing in the response, the logs, or the dashboard showed it.

---

## 7. Re-run the gates after

From `groundwork-builder`:

```bash
node scripts/pipeline/verify-launch.js <client-dir>        # launch blockers
node scripts/pipeline/verify-breakpoints.js <url> / /about # layout at breakpoint edges
CLOUDFLARE_API_TOKEN=… node scripts/pipeline/audit-client-zone.js <domain>
```

If a gate would not have caught what you just fixed, **that is the finding**.
Add the check while the example is in front of you — a gate written from a
real failure is worth more than three written from imagination.
