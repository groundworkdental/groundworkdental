# Account setup — Cloudflare & GitHub

**You own the accounts. We build in them. You can remove our access anytime.**

This is a **one-time setup** (~15 minutes). Pick whichever option is easier.

Live page: [https://groundworkdental.com/guides/account-setup](https://groundworkdental.com/guides/account-setup)

---

## Choose one

| | Option 1 — Live on Zoom | Option 2 — You set up, invite us |
|---|---|---|
| **Best if** | You want it done with zero guesswork | You’re comfortable clicking through signups |
| **Your job** | Join Zoom, verify email, set passwords | Create accounts + invite us as admin |
| **Our job** | Drive the whole setup on a shared screen | Accept invites and finish the site connection |
| **Time** | ~15 minutes live | ~15 minutes on your own |

**Same end result either way:** Cloudflare + GitHub in *your* name, Groundwork added as admin so we can build and deploy. You can remove our access anytime.

Reply with **“Option 1”** or **“Option 2”** on your project thread (or just book Zoom / follow the steps below).

---

## Why this matters

Your website runs on **Cloudflare Pages** (hosting + DNS + SSL) and lives in a **GitHub** repository (the code). Both accounts should be in **your practice’s name**, not ours.

After launch, your only required ongoing cost is domain renewal (~$12–15/year). Hosting stays free.

---

## What you’ll need (both options)

- A practice email you control (e.g. `front@yourpractice.com`)
- ~15 minutes
- Your domain registrar login nearby (GoDaddy, Google, Namecheap, Wix, etc.) — **don’t change DNS yet**

---

## Option 1 — We do it live on Zoom

1. Reply on your project thread and we’ll schedule a short Zoom.
2. We create Cloudflare and GitHub using **your** email (shared screen).
3. You click the verification emails and set passwords.
4. We add ourselves as **Administrator** (Cloudflare) and **Collaborator** (GitHub).
5. We connect the site and prepare DNS. At go-live we cut over carefully so email keeps working.

You don’t need to figure out nameservers or API tokens.

---

## Option 2 — You create the accounts and invite us

### A. Cloudflare

1. Go to [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Sign up with your **practice email**
3. Verify the email → set a strong password (save it)
4. Use the **Free** plan
5. **Manage Account** → **Members** → **Invite**
   - Email: `hello@groundworkdental.com`
   - Role: **Administrator**
6. Send the invite

### B. GitHub

1. Go to [https://github.com/signup](https://github.com/signup)
2. Use the **same practice email** when possible
3. Verify email → set a password (Free plan is fine)
4. When we send your repo link (or after we create it):
   - **Settings** → **Collaborators** → **Add people**
   - Invite `hello@groundworkdental.com` (or the GitHub username we send)
   - Permission: **Write** or **Admin**

### C. Tell us where the domain lives

Reply with:

- Where `yourdomain.com` is registered (GoDaddy, Google, Namecheap, Wix, Squarespace, etc.)
- Whether you can log in to that account

### D. Do **not** change nameservers yet

Don’t update nameservers or delete DNS records until we say so. Office email depends on MX records. We’ll copy those safely before cutover.

Optional later: transfer the domain into Cloudflare so domain + DNS + hosting share one dashboard. Not required for launch.

---

## What happens next (launch)

| Step | Who |
|------|-----|
| Preview site on a temporary URL | Groundwork |
| Cloudflare + GitHub in your name | You + Groundwork (Option 1 or 2) |
| Copy DNS (especially email / MX) | Groundwork |
| Connect custom domain on Cloudflare Pages | Groundwork |
| Point domain / nameservers at go-live | Groundwork (with your OK) |
| Confirm site + email both work | Both |
| Handoff doc with every login | Groundwork |

---

## Developer access (API / AI tools)

**Yes — we can still deploy and automate after accounts are in your name.**

If Groundwork is a Cloudflare **Administrator** and a GitHub **collaborator**, we create API tokens *inside your account* for our tools (Wrangler, GitHub Actions, Cursor, Claude Code). You can revoke them anytime. If you remove our access, the site keeps running.

You do **not** need to create API tokens yourself.

---

## Checklist (copy/paste reply)

```
Option chosen: 1 (Zoom) / 2 (I’ll invite you)

Cloudflare account created: Yes / Not yet / N/A (doing Zoom)
Practice email used: ________
Groundwork invited as Cloudflare Administrator: Yes / Not yet / N/A
GitHub account created: Yes / Not yet / N/A
Groundwork invited on GitHub: Yes / Not yet / N/A
Domain registrar (where the domain is): ________
I can log into the registrar: Yes / No / Not sure
```

---

## Questions

Email [hello@groundworkdental.com](mailto:hello@groundworkdental.com) — or reply on your project thread.

**Don’t change DNS or nameservers until we confirm email records are copied.** That’s the one step that can break mail if done early.
