# Account setup checklist

**You own the accounts. We build in them. You can remove our access anytime.**

One-time setup, about 15 minutes. Start with your **domain** (that’s the part most practices already know), then pick how you want to handle Cloudflare + GitHub.

Live page: [https://groundworkdental.com/guides/account-setup](https://groundworkdental.com/guides/account-setup)

---

## 1. Your domain registrar (do this first)

Your **domain registrar** is where you bought and renew `yourpractice.com` — often GoDaddy, Google Domains / Squarespace Domains, Namecheap, Hover, Network Solutions, Wix, or Squarespace.

That account is separate from your website builder. Even if the site was on Wix or PatientPop, the domain might still live at GoDaddy.

### Find it

- [ ] Search your email for “domain renewal,” “GoDaddy,” “Namecheap,” “Google Domains,” or your practice URL
- [ ] Or look up the registrar at [lookup.icann.org](https://lookup.icann.org) (search your domain → “Registrar”)
- [ ] Write down which company it is: _______________

### Confirm you control it

- [ ] Log in to that registrar account
- [ ] Find your domain in the dashboard (Domain / DNS / My Products)
- [ ] Confirm the practice owns it (your name or practice name — not an old agency’s, if you can tell)

**If you can’t log in:** stop and tell us. We’ll help recover access or request a transfer from whoever holds it. Don’t skip this — the domain is what patients type and what email depends on.

### Leave these alone for now

- [ ] **Do not** change nameservers
- [ ] **Do not** delete or edit DNS records (especially anything labeled MX, mail, email, SPF, DKIM, Google Workspace, Microsoft 365)
- [ ] **Do not** transfer the domain yet unless we ask

Changing those early is the usual way office email breaks. At go-live we’ll update DNS carefully (or walk you through one nameserver change) so the new site and email both keep working.

### Tell us

- [ ] Reply with: registrar name + whether you can log in (Yes / No / Not sure)

That’s enough on the domain side until launch.

---

## 2. Choose how to set up Cloudflare & GitHub

Cloudflare = hosting + DNS. GitHub = the website code. Both should end up in **your** name.

**[Option 1 — Live on Zoom](#option-1)**  
We drive on a shared screen. You verify email and set passwords.

**[Option 2 — You set up, invite us](#option-2)**  
You create Cloudflare + GitHub, then invite Groundwork as admin.

Same result either way.

---

## Before the Zoom / DIY steps

- [ ] Have a practice email ready (e.g. `front@yourpractice.com`)
- [ ] Have ~15 minutes
- [ ] Domain checklist above done (or blocked on login — tell us)

---

<a id="option-1"></a>

## Option 1 checklist — Zoom

- [ ] Reply on your project thread asking for a Zoom setup
- [ ] Join with your practice email inbox open
- [ ] Have your **domain registrar** login available (we may look at it together — we still won’t change DNS until go-live)
- [ ] Verify the Cloudflare and GitHub emails when they arrive
- [ ] Set passwords and save them somewhere safe

We’ll handle admin invites, site connection, and the domain cutover later.

---

<a id="option-2"></a>

## Option 2 checklist — Do it yourself

### Cloudflare

- [ ] Go to [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
- [ ] Sign up with your **practice email**
- [ ] Verify the email and set a password (Free plan)
- [ ] Open **Manage Account** → **Members** → **Invite**
- [ ] Invite `hello@groundworkdental.com` as **Administrator**
- [ ] Send the invite

### GitHub

- [ ] Go to [github.com/signup](https://github.com/signup)
- [ ] Sign up with the **same practice email** when possible
- [ ] Verify the email and set a password (Free plan)
- [ ] When we send your repo link: **Settings** → **Collaborators** → **Add people**
- [ ] Invite Groundwork’s GitHub account (we’ll send the username) with **Write** or **Admin**

### Wrap up

- [ ] Reply when Cloudflare + GitHub invites are sent
- [ ] Confirm domain registrar name + login status again if you haven’t
- [ ] Still leave DNS / nameservers alone

---

## At go-live (we handle this — for clarity)

When you’re ready for the real domain:

1. We copy your current DNS (especially email / MX) into Cloudflare
2. At the registrar, nameservers get pointed to Cloudflare (one change — we’ll do it with you or send exact values)
3. We connect `yourpractice.com` to the new site
4. We check website + email both work
5. You get a handoff doc with every login

Optional later: move the domain registration itself into Cloudflare so renewals live in the same place as hosting. Not required for launch.

After launch, your only required cost is domain renewal (~$12–15/year). Hosting stays free.

---

## Questions

Email [hello@groundworkdental.com](mailto:hello@groundworkdental.com) — or reply on your project thread.
