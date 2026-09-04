# Account setup checklist

**You own the hosting. We build in your Cloudflare account. You can remove our access anytime.**

Go-live does **not** require moving your domain registrar to Cloudflare — usually we only change **nameservers** at GoDaddy (or wherever you renew). GitHub can wait until later.

Live page: [https://groundworkdental.com/guides/account-setup](https://groundworkdental.com/guides/account-setup)

---

## Before go-live

### 1. Domain registrar

Where you renew `yourpractice.com` (GoDaddy, Google/Squarespace Domains, Namecheap, etc.).

- [ ] Confirm you can log in
- [ ] Reply with: registrar name + can you log in? (Yes / No / Not sure)
- [ ] **Don’t change nameservers or DNS yet** (especially mail / MX) — that can break email

Can’t find or log in? Email us — we’ll help.

### 2. Cloudflare (required for go-live)

- [ ] Sign up at [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) with a practice email (Free plan)
- [ ] **Manage Account** → **Members** → invite `hello@groundworkdental.com` as **Administrator**
- [ ] Reply when the invite is sent

Prefer we drive this on Zoom? Reply and ask for a setup call — bring practice email + registrar login.

---

## At go-live — nameservers only

We prepare everything in **your** Cloudflare account (copy email DNS, connect the site). Then the registrar needs one change: point nameservers at Cloudflare. You keep renewing the domain where it is today.

Pick one:

**[Option 1 — On a call together](#option-1)** (recommended)  
Screenshare. You open the registrar; we walk you through pasting two nameserver values (~5 minutes).

**[Option 2 — You change nameservers yourself](#option-2)**  
We email the exact two nameservers and where to click. You paste them and reply when done.

You do **not** need to transfer the domain registration to Cloudflare for launch.

---

<a id="option-1"></a>

## Option 1 — On a call together

- [ ] Reply to schedule a short Zoom for cutover
- [ ] Join with registrar login ready
- [ ] We’ll give you two nameserver values to paste
- [ ] We confirm the website and email both work

---

<a id="option-2"></a>

## Option 2 — You change nameservers yourself

- [ ] Wait until we say it’s ready and send the two nameservers
- [ ] At your registrar: find **Nameservers** / **Custom DNS** / **Change nameservers**
- [ ] Replace the current nameservers with the two we sent
- [ ] Save and reply when done
- [ ] We’ll confirm site + email

---

## Later (not required for go-live)

- **GitHub** — code ownership / handoff (we’ll set this up when useful)
- **Transfer domain to Cloudflare Registrar** — optional, so renewals live next to hosting. Extra steps; skip until the site is stable.

After launch, ongoing cost is usually just domain renewal (~$12–15/year). Hosting stays free.

---

Questions: [hello@groundworkdental.com](mailto:hello@groundworkdental.com)
