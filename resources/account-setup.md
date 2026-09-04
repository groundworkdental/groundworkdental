# Account setup — Cloudflare & GitHub

**You own the accounts. We build in them. You can remove our access anytime.**

This guide is for Groundwork Dental clients. It takes about 15 minutes. Prefer a shared screen? Reply to your kickoff email and we’ll walk through it live — you only need to verify your email and set a password.

Live page: [https://groundworkdental.com/guides/account-setup](https://groundworkdental.com/guides/account-setup)

---

## Why this matters

Your website runs on **Cloudflare Pages** (hosting + DNS + SSL) and lives in a **GitHub** repository (the code). Both accounts should be in **your practice’s name**, not ours.

After launch, your only required ongoing cost is domain renewal (~$12–15/year). Hosting stays free.

---

## What you’ll need

- A practice email you control (e.g. `front@yourpractice.com`) — not a personal Gmail if you can avoid it
- ~15 minutes
- Your domain registrar login nearby (GoDaddy, Google Domains, Namecheap, Wix, etc.) — **don’t change DNS yet**

We’ll add Groundwork as an admin/collaborator so we can deploy and manage the site. You remain the owner.

---

## Preferred path: we drive, you own

1. Schedule a short Zoom (or follow the DIY steps below).
2. We create Cloudflare and GitHub using **your** email.
3. You click the verification emails and set passwords.
4. We invite ourselves as **Administrator** (Cloudflare) and **Collaborator** (GitHub).
5. We connect the site, prepare DNS, and cut over at launch — carefully so email keeps working.

You never need to figure out nameservers or API tokens yourself unless you want to.

---

## DIY: Cloudflare account

### 1. Create the account

1. Go to [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Sign up with your **practice email**
3. Verify the email Cloudflare sends you
4. Set a strong password (save it in a password manager)

Use the **Free** plan. That’s enough.

### 2. Invite Groundwork as Administrator

1. In the Cloudflare dashboard, open the account menu (top right / sidebar)
2. Go to **Manage Account** → **Members**
3. Click **Invite**
4. Email: `hello@groundworkdental.com`
5. Role: **Administrator**
6. Send invite

We’ll accept from our side. You can remove this access anytime under Members.

### 3. Do **not** change nameservers yet

Don’t update nameservers or delete DNS records until we say so. Your email (e.g. `front@…`) depends on MX and related records. We’ll copy those safely before cutover.

### 4. Tell us where the domain lives

Reply with:

- Where `yourdomain.com` is registered (GoDaddy, Google, Namecheap, Wix, Squarespace, etc.)
- Whether you can log in to that account

Optional later: transfer the domain registration into Cloudflare so domain + DNS + hosting share one dashboard. Not required for launch.

---

## DIY: GitHub account

### 1. Create the account

1. Go to [https://github.com/signup](https://github.com/signup)
2. Use the **same practice email** when possible
3. Verify email and set a password
4. Free plan is fine

### 2. Invite Groundwork as Collaborator

When we create your repository (or if we send you a repo invite link):

1. Open the repository on GitHub
2. **Settings** → **Collaborators** (or **Collaborators and teams**)
3. **Add people**
4. Invite `hello@groundworkdental.com` (or the GitHub username we send you)
5. Permission: **Write** or **Admin**

We’ll push builds from here. The repo is yours.

---

## What happens next (launch)

| Step | Who |
|------|-----|
| Preview site on a temporary URL | Groundwork |
| Cloudflare + GitHub in your name | You + Groundwork |
| Copy DNS (especially email / MX) | Groundwork |
| Connect custom domain on Cloudflare Pages | Groundwork |
| Point domain / nameservers at go-live | Groundwork (with your OK) |
| Confirm site + email both work | Both |
| Handoff doc with every login | Groundwork |

Until kickoff / go-live, the preview can stay on a Groundwork subdomain. Production moves into **your** Cloudflare account before the real domain is attached.

---

## Developer access (API / AI tools)

**Yes — we can still deploy and automate after accounts are in your name.**

If Groundwork is a Cloudflare **Administrator** and a GitHub **collaborator**:

- We create a **Cloudflare API token** *inside your account* (scoped to Pages, DNS, Workers as needed)
- We use your **Cloudflare Account ID** + that token in our tools (Cursor, Claude Code, Wrangler, GitHub Actions)
- We use GitHub access (collaborator invite or fine-grained token on *your* repo) to push and open PRs

What that means for you:

- Tokens live in your account’s security settings — you can revoke them
- Nothing depends on Groundwork’s personal Cloudflare login long-term
- If you remove our Member access and revoke tokens, we lose access; the site keeps running

You do **not** need to create API tokens yourself unless you want a developer of your own to use them.

---

## Checklist (copy/paste reply)

```
Cloudflare account created: Yes / Not yet
Practice email used: ________
Groundwork invited as Cloudflare Administrator: Yes / Not yet
GitHub account created: Yes / Not yet
Groundwork invited on GitHub: Yes / Not yet
Domain registrar (where the domain is): ________
I can log into the registrar: Yes / No / Not sure
```

---

## Questions

Email [hello@groundworkdental.com](mailto:hello@groundworkdental.com) — or reply on your project thread.

**Don’t change DNS or nameservers until we confirm email records are copied.** That’s the one step that can break mail if done early.
