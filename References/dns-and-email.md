# DNS and email at engagement

What to ask, what to capture, and what to change — before touching a practice's
nameservers.

Companion to [launch-operations.md](launch-operations.md) §13, which covers
auditing a zone once you hold it. This covers the decision that comes first:
**whether to take the zone at all**, and what breaks if you take it carelessly.

The stakes are not the website. A practice can lose its site for an afternoon
and reschedule. If patient email stops — referrals, lab results, appointment
confirmations, the form on the old site that still forwards somewhere — nobody
notices for hours, and what is lost cannot be re-sent because the sender got a
delivery success.

---

## 1. The question that comes first

> **Do we need their nameservers at all?**

Usually not. Cloudflare Pages serves a custom domain from a CNAME, and a CNAME
can live at their existing DNS host. Taking nameservers is convenient for us
and is the single highest-risk action in an engagement.

| Situation | Take nameservers? |
|---|---|
| Apex domain needed and their host has no ALIAS/ANAME support | Yes — this is the real reason |
| They want us managing DNS ongoing, and email is simple | Yes, with capture |
| Email is Microsoft 365, or has DKIM/autodiscover records | Prefer not. If yes, capture obsessively |
| Practice management software sends mail as the domain | Prefer not |
| We only need `www` or a subdomain | **No** — add a CNAME and stop |

The default answer is **no**. Change it when a specific technical need appears,
not because it is tidier.

---

## 2. Capture before you change anything

Whatever the decision, record the current state first. This is the step that
makes a mistake recoverable.

```bash
# every record type that matters, as the internet currently sees it
for t in NS MX TXT CNAME A AAAA SRV CAA; do
  echo "--- $t"; dig +short "$t" <domain> @8.8.8.8
done | tee ~/.secrets/Groundwork/dns-before-<slug>.txt

# mail-specific records live at known names
for n in _dmarc default._domainkey selector1._domainkey selector2._domainkey \
         google._domainkey autodiscover enterpriseregistration; do
  echo "--- $n"; dig +short TXT CNAME "$n.<domain>" @8.8.8.8
done | tee -a ~/.secrets/Groundwork/dns-before-<slug>.txt
```

Use `@8.8.8.8`. A local resolver answers from cache for the full TTL, so a
record can look unchanged when it is not — and can look present when it has
already been removed.

Keep that file until the practice has sent and received mail for a week after
cutover. It is the rollback.

---

## 3. By provider

### Google Workspace

The common case, and the most forgiving.

- **MX**: a single `smtp.google.com` (modern) or five `aspmx` hosts (older
  setups). Both are correct; do not "tidy" five into one.
- **SPF**: `v=spf1 include:_spf.google.com ~all` — plus an include for anything
  else that sends.
- **DKIM**: `google._domainkey` TXT. **DNS-only, never proxied.**
- **DMARC**: `_dmarc` TXT. Read the policy before changing anything: `p=none`
  is observation, `p=quarantine` or `p=reject` means a mistake sends mail to
  spam silently.

### Microsoft 365

The one that has already bitten us.

- **MX**: `<tenant>.mail.protection.outlook.com`.
- **DKIM**: `selector1._domainkey` and `selector2._domainkey`, both **CNAMEs**
  to `*.dkim.mail.microsoft`. Both must be DNS-only.
- **autodiscover**: CNAME to `autodiscover.outlook.com`. Outlook clients break
  without it, and the failure looks like a password problem to the user.
- **enterpriseregistration** / **enterpriseenrollment**: present when they use
  Intune. Leave them.
- **SIP / Teams discovery**: `_sip`, `_sipfederationtls` SRV records.

Every one of these must stay grey-clouded. Proxying a DKIM selector means
Cloudflare answers the lookup with its own IPs instead of the TXT record a
verifier needs, so **outbound mail cannot be signed** — while sending still
appears to work from the practice's side.

### A registrar-bundled mailbox (GoDaddy, Namecheap, Bluehost)

Often the practice does not know they have one. Symptoms: MX pointing at the
registrar, mail read through a webmail page rather than an app.

These break most easily, because moving nameservers away from the registrar
can deprovision the mailbox rather than merely redirect it. **Ask explicitly
whether email is included with the domain**, and if so, prefer not taking
nameservers.

### No email on the domain

Confirm rather than assume — a domain with no MX may still receive mail via a
forwarding rule at the registrar.

If genuinely none, add a null MX and an SPF that authorises nothing:

```
MX     .                     0
TXT    v=spf1 -all
TXT    _dmarc  v=DMARC1; p=reject;
```

That stops a practice's domain being used to spoof patients, which is worth
doing even when nobody sends from it.

---

## 4. What the practice does at the registrar

Only ever one of these, and only after capture:

- **Nameserver change** — replace the existing nameservers with the two
  Cloudflare gives you. Propagation is usually minutes, occasionally 24 hours.
- **A single CNAME** — if we are not taking the zone.

Both are done by whoever holds the registrar login, which is frequently not the
practice. Find out **at kickoff**, not on launch day: "our old web guy" is a
common and slow answer.

---

## 5. After the switch

```bash
node scripts/pipeline/audit-client-zone.js <domain>   # from groundwork-builder
```

Then confirm, by hand, in this order:

1. **MX resolves** to the same host as the capture file
2. **DKIM selectors are grey-clouded** and return the same TXT/CNAME
3. **Send a test message out**, and check the headers say `dkim=pass` and
   `spf=pass`
4. **Send one in** from an outside address
5. Only then point the website

Mail first, site second. The site failing is visible and reversible; mail
failing is neither.

---

## 6. Ask this at onboarding

> Does anything other than your mail provider send email from your domain?

Booking reminders, review requests, practice management software, a Gmail
account configured to "send as", an old contact form. Each needs its own SPF
`include:`. A strict SPF (`-all`) authorises only what it lists, and adding a
sender without updating it means patient-facing mail lands in spam while
sending still looks successful.

Ask before the sender goes live, not after.
