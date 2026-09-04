# Account setup

**You own the hosting. We build in your Cloudflare account. You can remove our access anytime.**

Live page: [https://groundworkdental.com/guides/account-setup](https://groundworkdental.com/guides/account-setup)

---

## How go-live works

1. **Cloudflare** — You create a free account and invite us. We move the site into your account so you own hosting.
2. **Nameservers** — At go-live, your registrar points nameservers at Cloudflare so the real domain shows the new site. You keep renewing where you do today.

No domain registration transfer required for launch. **Don’t change nameservers or DNS until we say it’s ready** — that can break email.

---

## Before go-live — two things

### 1. Create Cloudflare + invite us

1. Sign up free at [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) (use an email you check for the practice)
2. **Manage Account → Members** → invite `hello@groundworkdental.com` as **Administrator**
3. Reply when the invite is sent

Prefer a video call? Reply and ask — bring that email + registrar login.

### 2. Tell us your registrar

Where you renew the domain (GoDaddy, Namecheap, Squarespace Domains, etc.).

Reply with: **registrar name** + can you log in? (Yes / No / Not sure)

Can’t find it? Email us — or search “whois yourdomain.com” and look for *Registrar*.

---

## At go-live

We finish setup in your Cloudflare account first. Then one nameserver change at the registrar.

### On a call together (recommended)

Reply to schedule a short Google Meet (~5 minutes). Join with registrar login ready. We’ll give you two nameserver values to paste, then confirm site + email.

### I’ll do it myself

1. Wait until we email your **two Cloudflare nameservers** (specific to you)
2. At your registrar, follow the matching steps below
3. Replace old nameservers with ours (don’t leave a mix) → Save → reply when done

#### GoDaddy
1. My Products → Domains → select domain → DNS / Manage DNS
2. Nameservers → Change → Enter my own nameservers (Custom)
3. Paste the two nameservers we sent → Save

#### Namecheap
1. Domain List → Manage
2. Nameservers → Custom DNS
3. Paste the two nameservers → Save

#### Squarespace Domains (includes old Google Domains)
1. domains.squarespace.com → select domain → DNS
2. Nameservers → Use custom nameservers
3. Paste the two nameservers → Save

#### Cloudflare Registrar
Domain already at Cloudflare — no nameserver change. Tell us and we’ll connect the site in the same account.

#### Network Solutions
1. Domain manager → select domain
2. Nameservers / Change Nameservers → custom
3. Paste the two nameservers → Save

#### Hover
1. Domains → select domain → Nameservers
2. Edit → paste the two nameservers → Save

#### Porkbun
1. Domain Management → domain details
2. Authoritative Nameservers → Edit
3. Paste the two nameservers → Submit

#### Bluehost / HostGator / other host
1. Control panel → Domains / Nameservers for this domain
2. Switch from default host nameservers to custom
3. Paste ours. If you only see A/CNAME records (no nameservers), reply — different path.

#### Not listed
Reply with the registrar name or a screenshot.

---

## Later (not needed for launch)

GitHub for code ownership when useful. Optional: move domain registration to Cloudflare Registrar after the site is stable. Hosting stays free; domain renewal is usually ~$12–15/year.

---

Questions: [hello@groundworkdental.com](mailto:hello@groundworkdental.com)
