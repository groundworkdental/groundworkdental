# Account setup checklist

**You own the hosting. We build in your Cloudflare account. You can remove our access anytime.**

Go-live does **not** require moving your domain registration to Cloudflare — usually we only change **nameservers** at GoDaddy (or wherever you renew). GitHub can wait until later.

Live page: [https://groundworkdental.com/guides/account-setup](https://groundworkdental.com/guides/account-setup)

---

## Before go-live — two things

### 1. Create a Cloudflare account

- [ ] Sign up at [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) with a practice email (Free plan)
- [ ] **Manage Account** → **Members** → invite `hello@groundworkdental.com` as **Administrator**
- [ ] Reply when the invite is sent

Prefer we drive this on Zoom? Reply and ask for a setup call — bring practice email + registrar login.

### 2. Tell us where the domain is registered

Where you renew `yourpractice.com` (GoDaddy, Google/Squarespace Domains, Namecheap, etc.).

- [ ] Reply with: **registrar name** + can you log in? (Yes / No / Not sure)
- [ ] **Don’t change nameservers or DNS yet** (especially mail / MX) — that can break email

If you’re comfortable finding the nameserver settings yourself, see [Common registrars](#common-registrars) below — still wait until we send your two Cloudflare nameservers before changing anything.

Can’t find or log in? Email us — we’ll help.

---

## At go-live — nameservers only

We prepare everything in **your** Cloudflare account (copy email DNS, connect the site). Then the registrar needs one change: point nameservers at Cloudflare. You keep renewing the domain where it is today.

Pick one:

**[Option 1 — On a call together](#option-1)** (recommended)  
Screenshare. You open the registrar; we walk you through pasting two nameserver values (~5 minutes).

**[Option 2 — You change nameservers yourself](#option-2)**  
We email the exact two nameservers. Use the registrar steps below, paste them, and reply when done.

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

- [ ] Wait until we say it’s ready and send the **two Cloudflare nameservers** (they look like `ada.ns.cloudflare.com` / `bob.ns.cloudflare.com` — yours will be specific)
- [ ] At your registrar, follow the matching steps under [Common registrars](#common-registrars)
- [ ] Replace the current nameservers with the two we sent (remove old ones; don’t leave a mix)
- [ ] Save and reply when done
- [ ] We’ll confirm site + email

---

<a id="common-registrars"></a>

## Common registrars — where to change nameservers

**Do this only after we email your two Cloudflare nameservers.** Menus move around; if something doesn’t match, reply and we’ll walk you through it (or use Option 1).

### GoDaddy

1. Log in → **My Products** → Domains → select the domain → **DNS** or **Manage DNS**
2. Scroll to **Nameservers** → **Change** / **Change Nameservers**
3. Choose **Enter my own nameservers** (or **Custom**)
4. Paste the two nameservers we sent → Save

### Namecheap

1. Log in → **Domain List** → **Manage** next to the domain
2. **Nameservers** → **Custom DNS**
3. Paste the two nameservers → the checkmark / Save

### Google Domains / Squarespace Domains

Google Domains moved to Squarespace.

1. Log in at [domains.squarespace.com](https://domains.squarespace.com) (or Squarespace → Domains)
2. Select the domain → **DNS** / **DNS Settings**
3. **Nameservers** → **Use custom nameservers**
4. Paste the two nameservers → Save

### Cloudflare Registrar

If the domain is already registered at Cloudflare, you’re mostly done — DNS already lives there. Tell us; we’ll connect Pages in the same account. No nameserver change needed.

### Network Solutions

1. Log in → account / domain manager → select the domain
2. **Nameservers** / **Change Nameservers** / **Advanced Tools**
3. Choose custom / “I’m using my own nameservers”
4. Paste the two nameservers → Save

### Hover

1. Log in → Domains → select the domain
2. **Nameservers** tab
3. **Edit** → paste the two nameservers → Save

### Porkbun

1. Log in → **Domain Management** → details for the domain
2. **Authoritative Nameservers** → **Edit**
3. Paste the two nameservers → Submit

### Bluehost / HostGator / other web hosts

Often the “registrar” is bundled with hosting.

1. Log in to the host control panel (cPanel / “Domains”)
2. Find **Nameservers** / **DNS Zone** / **Domain** settings for this domain
3. Switch from “default” / host nameservers to **custom** and paste ours
4. If you only see DNS *records* (A, CNAME) and not nameservers, reply — we may need a different path

### Not listed?

Reply with the registrar name (or a screenshot of the domain dashboard). We’ll send click-by-click steps. WHOIS lookup tip: search “whois yourpractice.com” — **Registrar** is the company you renew with.

---

## Later (not required for go-live)

- **GitHub** — code ownership / handoff (we’ll set this up when useful)
- **Transfer domain to Cloudflare Registrar** — optional, so renewals live next to hosting. Extra steps; skip until the site is stable.

After launch, ongoing cost is usually just domain renewal (~$12–15/year). Hosting stays free.

---

Questions: [hello@groundworkdental.com](mailto:hello@groundworkdental.com)
