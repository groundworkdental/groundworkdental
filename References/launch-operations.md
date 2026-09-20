# Launch Operations Runbook

What to collect, from whom, in what order — and which steps a machine can do.

Written after a launch where the site went live technically sound and
commercially inert: no phone number, no contact form, no email link, and a
Google listing with 45 customer interactions and no website URL on it. Every
individual task in the playbook had been done. The **order** was wrong, and
nothing enforced that a patient could actually reach the practice.

Companion to [the playbook](groundwork-dental-playbook.md) §13, §21 and §29.
Platform-level behaviour lives in the builder repo's
`docs/engineering/platform-gotchas.md`.

---

## 1. The one rule

> **A site does not launch without a working contact path.**

At least one of: a working form, a `tel:` link with a real number, or a
`mailto:` link. Everything else — schema, sitemaps, analytics, Core Web Vitals
— is instrumentation on a conversion path that has to exist first.

Analytics installed over a site nobody can convert on measures the wrong
problem. We shipped `form_submit` tracking to a site with no forms.

`verify-launch.js` in groundwork-builder enforces this as a fatal gate.

---

## 2. Intake — what to collect, from whom

Mark each item **blocking** or **deferred** at kickoff. Blocking items stop
launch; deferred items must degrade gracefully in the template.

### Blocking — launch cannot happen without these

| Item | Source | Why blocking |
|---|---|---|
| Practice phone number | Office manager | Top conversion path for dental. Also the NAP anchor GBP and schema key off. Missing = `href="tel:"` and no `telephone` in LocalBusiness. |
| Physical address | Office manager | NAP + schema + GBP + map embed |
| Hours | Office manager | Schema `openingHours`, must match GBP exactly |
| At least one contact channel | Practice | See §1 |
| Domain + registrar access | Owner / their IT | Determines DNS control (see §3) |
| Which Cloudflare account owns the zone | Owner / their IT / MSP | Frequently **not** ours. Discover at kickoff, not launch day. |
| Google account that will own GBP/GA4/GSC | Owner | Must be a real account, not an alias (§3) |

### Deferred — template must degrade cleanly

| Item | Source | Fallback while missing |
|---|---|---|
| Booking URL (Weave/NexHealth/etc.) | Practice / their vendor | CTA ladder falls back to phone, then email. **Never** ship a button reading "booking coming soon" — a CTA that announces it doesn't work is worse than no CTA. |
| Doctor bios, headshots | Practice | Placeholder blocks flagged in What's Missing |
| Insurance carrier list | Office manager | Generic "most major PPO plans" copy |
| Real patient photos | Practice | Stock, flagged for replacement |
| GA4 measurement id | Created by us (§5) | No gtag emitted at all — never a partial tag |

**Design principle:** an unset value must render as *nothing*, not as a broken
link. Guard at point of use. This is the single most common source of shipped
defects — see platform-gotchas.md.

---

## 3. Accounts and ownership

### Identity rules

- **Google aliases cannot sign in.** `hello@practice.com` as an alias of
  `garrett@practice.com` means you log in as the latter. Decide which *real*
  account owns client assets before creating anything.
- Create client assets under a **client-facing identity**, never a personal or
  unrelated-brand account. Handoff is otherwise a migration.
- **Add the practice as Admin/Owner immediately after creating each property**,
  not at handoff. GA4: Admin → Account access management → Administrator (at
  *account* level, not property). GSC: Settings → Users and permissions →
  Owner. If we vanish, they keep their data.
- GBP: the practice should hold **Owner**, we hold **Manager**. Never the
  reverse.

### Never sign in as the client

The rule above says what to give *them*. This says what to take for *ourselves*:
a named role on our own identity, never a seat in their account.

Borrowing the practice's login feels faster on the setup call and costs you
three things that only show up later:

| | Shared login | Delegated role |
|---|---|---|
| Their password or 2FA changes | You are locked out, silently | Unaffected |
| Who did what | Everything reads as the owner | Attributable to you |
| Offboarding | They must change a password and hope | They remove a role, done |

The third is the one that matters. An engagement that ends cleanly is one where
**the client can revoke us without our cooperation**. That is impossible if our
access *is* their account.

So grant yourself, signed in as them exactly once:

| Service | Where | Take |
|---|---|---|
| Business Profile | business.google.com → Settings → People | **Manager** |
| Search Console | Settings → Users and permissions | **Owner** if verifying or automating, else Full |
| Analytics | Admin → Property access management | **Editor**, or Administrator if you will manage access |
| **Google Cloud project** | Cloud Console → IAM | **Editor** |

The Cloud project is the one that gets forgotten, because nothing on the site
points at it. It holds the OAuth client, the consent screen and any service
account — so without Editor there you cannot rotate a credential, enable an
API, or fix a consent screen without booking time with the practice. Every
Google credential in the engagement ultimately depends on it.

**OAuth consent must be published, and it must be ours.** A refresh token binds
to whichever identity clicked Allow, and an app left in *Testing* publishing
status issues tokens Google expires after seven days. Both failures surface as
a bare `invalid_grant` weeks later, with nothing saying which. Full procedure:
`groundwork-builder/docs/gbp/gbp-setup-walkthrough.md`; the matching teardown is
`gbp-offboarding.md`.

### Cloudflare access

The zone often lives in the client's own account, or their **MSP's**. Establish
at kickoff:

1. Which account holds the zone
2. Which Pages project actually serves the domain — verify via its **Custom
   domains** tab, not its name (two projects can share a name across accounts)
3. What role we hold there

**A Cloudflare API token can only grant permissions the creating user already
holds.** A member with read-only DNS hits `Unauthorized to access requested
resource` at the token review step. Either get the role raised to Administrator
/ DNS Administrator, or have the account owner perform the changes.

For a handful of one-time changes, **batch them into a single request to the
account owner** rather than negotiating a token. Faster in practice:

> 1. Redirect Rule: www → apex, 301, dynamic, preserve query string
> 2. DNS TXT record for Search Console verification
> 3. Pages env var + retry deployment

---

## 4. Manual vs automatable

Be honest about this — we lost time investigating API paths that were never
going to be faster for a single practice.

| Task | Status | Notes |
|---|---|---|
| Site build, deploy, redeploy | **Automated** | Pipeline + git push |
| robots.txt, sitemap, schema | **Automated** | Generated from config |
| Launch gates | **Automated** | `verify-launch.js`, fatal |
| Cloudflare DNS, redirect rules, env vars | **Automatable** with `Zone:DNS:Edit` + `Zone Settings:Edit` token | Only if our role permits (§3) |
| GBP reviews, replies, posts | **Automated** | `scripts/gbp-*.js`, OAuth — needs approved API access |
| GA4 / GSC reporting | **Automated** | `ga4-report.js`, `gsc-report.js` |
| **GA4 account creation** | **Manual** | Admin API creates *properties* inside an existing account; account creation is console-only |
| **GA4 property creation** | Manual in practice | API needs OAuth scopes + the account to exist first; ~2 min in console |
| **GSC verification** | **Manual** | Inherently a DNS handshake |
| **GBP field edits** (NAP, categories, services, photos) | **Manual** for single-location | API is OAuth-only (no API keys) and gated behind an access-request form taking days–weeks, aimed at bulk managers. Category/name edits trigger re-review regardless. |
| **GBP verification** | **Manual, on-site** | Video walkthrough of signage, interior, equipment. Cannot be automated by anyone. |

**Worth applying for GBP API access at agency scale** — bulk hours updates,
programmatic posts, review data in reporting. Approval is slow and costs
nothing to hold before you need it. Never block a launch on it.

---

## 5. Launch sequence

Ordered by dependency and lead time. Start the slow things first.

**Week 1 — start the long poles**

1. **GBP audit.** Do this before assuming anything. A listing usually already
   exists (Google auto-generates them) and may be claimed, unclaimed, or
   duplicated from a prior practice at the same suite. Request access or claim.
   If unverified, start verification immediately — video walkthrough takes
   5–14 days and gates nothing else we can do meanwhile.
2. **Search for duplicate listings** by address and phone. Duplicates split
   reviews and rankings; request merge/removal.
3. **Confirm infrastructure ownership** (§3).

**Week 2 — build and instrument**

4. Build, deploy to preview, run launch gates.
5. **GA4**: create account → property → web stream. Enhanced measurement on.
   Data-sharing: keep *Modeling contributions* (powers conversion modeling) and
   *Technical support*; decline *Google products & services* and
   *Recommendations*. Objectives: Generate leads + Understand web traffic.
6. **GSC**: add a **Domain** property (covers apex + www + subdomains; URL-prefix
   covers less). Copy the TXT value.
7. **Batch the Cloudflare request** (§3) — GA4 var, GSC TXT, www redirect —
   into one message.

**Launch day**

8. Verify gates pass, custom domain attached, www redirects, gtag firing.
9. Submit sitemap in GSC. Request indexing on homepage + service hubs.
10. **GBP: add the website URL** with UTMs
    (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`) so listing
    traffic is attributable, **and the phone number**. This is the step most
    likely to be skipped and the most costly — a verified listing with traffic
    and no website link converts nobody.
11. Link GSC to GA4 (Admin → Product links).

**Week 3+**

12. GBP services, photos, review link into the site config.
13. Mark GA4 Key Events once data flows.
14. Check GSC → Pages for indexing status (~1–2 weeks to settle).

---

## 6. Google Business Profile — beyond the basics

Supplements playbook §13.

**Primary category is the heaviest single ranking lever.** Audit what's
actually set — auto-generated listings often land on something adjacent like
"Dental clinic" where **"Dentist"** is correct. Demote, don't delete, the
original.

**Services should be more granular than the site's page structure.** GBP
matches service entries against query text, so "Clear Aligners" catches
searches "Smile Enhancement" never will. A four-hub site can carry seven or
more GBP services.

**Attach services to multiple categories.** The same service can exist under
several — GBP weights them in the context of their category. Duplicate, don't
move:

| Category | Services |
|---|---|
| Dentist (primary) | all of them |
| Cosmetic dentist | Smile Enhancement, Whitening, Clear Aligners |
| Dental implants periodontist | Implant Care |
| Emergency dental service | Emergency / Comprehensive Care |

**Service ↔ page parity is a real requirement.** Every GBP service needs
content on the site that answers it. We listed Advanced Whitening and Clear
Aligners on a listing whose linked page mentioned neither — patients clicked
through to a page about something else. Audit both directions before launch.

**Only promise what the practice staffs.** Don't add "Emergency dental service"
unless they genuinely accommodate same-day. An unmet promise generates exactly
the one-star reviews a new listing can least afford.

**Reviews are the binding constraint for a new practice.** Zero reviews caps
local ranking regardless of everything else here. Get the `g.page/r/…` short
link into site config and into the front desk's post-visit routine on day one.

---

## 7. HIPAA guardrails

A dental practice is a covered entity. **Google will not sign a BAA for
Analytics**, and HHS OCR treats tracking technologies on provider sites as a
real exposure.

A marketing site with no portal, no login and no records is fine. Hold these
lines:

- **No PHI in URLs or query strings — ever.** Form submissions must POST and
  redirect cleanly; never pass name, email or reason-for-visit into
  `/thank-you/?...`.
- **Analytics events carry structure, not content.** Our handlers record page
  path, UI region, form `id`/`name`/`action` — never field values. Keep it that
  way; a `data-no-track` opt-out exists for any form that needs it.
- **Email is not a secure channel.** If email is the interim contact path, the
  prefilled draft and the visible page copy must both ask for *scheduling
  logistics only* — name, phone, preferred times — and state that medical
  history will be taken by phone. Never add a symptoms or history field.
- **Exclude any patient portal or authenticated booking flow from analytics.**
  Watch for this when an embedded booking vendor lands on-site rather than
  off-site.
- Site search captures query strings into GA4. Patients type identifying things
  into search boxes. If a site gains search, revisit.

---

## 8. Pre-launch gates

Run `node scripts/pipeline/verify-launch.js clients/<slug>` — fatal, five
checks: contact path, empty hrefs, placeholders, sitemap-vs-redirects, wrangler
vars. See the builder repo for what each caught.

Beyond the script, confirm by hand:

- [ ] `www` 301s to apex with path and query preserved
- [ ] gtag present in production page source (**not** just configured in the
      dashboard — see the wrangler.toml trap)
- [ ] Every sitemap URL returns 200
- [ ] GBP website URL **and** phone number populated on the listing
- [ ] Site phone/address/hours character-identical to GBP
- [ ] Every GBP service has corresponding site content
- [ ] No published post or page is an unwritten stub
- [ ] A nonexistent URL returns **404**, not the homepage with a 200

Neither of those last two is hypothetical. A post shipped live and indexed
containing only `[Write an introduction addressing why patients search for this
topic.]` and a literal `[PHONE]` token — filtering drafts on the index page does
not stop the detail route from building them.

And with no `404.html` in the build, Cloudflare Pages serves `index.html` with a
**200** for every unmatched route, so each typo becomes an indexable duplicate
of the homepage. Nothing looks broken in a browser; check it with a deliberately
bogus URL.

---

## 9. Content sourcing and compliance

A practice hands over documents written for internal use — payor rosters, fee
schedules, operations manuals — and asks for the content on the site. Two
judgements have to happen before any of it is published.

### Check the document's own restrictions

Source documents often carry their own terms: "internal use only",
"confidential", network-participation agreements with redistribution clauses.

**Surface these to the client rather than silently complying or silently
refusing.** Neither default is right. Quietly publishing exposes them to a
contract or licensing problem they never agreed to take; quietly refusing
removes a decision that is legitimately theirs. Quote the restriction, say
plainly what the exposure is, and let them decide with the facts in hand.

If they decide to proceed, note it in the project record. That is the point of
asking.

### Separate patient-facing content from internal operations

Source documents mix the two freely, because internally there is no reason not
to. A payor roster carries carrier and plan names a patient needs **and**
fee-schedule logic, provider portal URLs, network-alias trivia and
state-eligibility rules they do not.

Publish only what the patient uses. Internal notes belong in office
documentation. This is the same instinct as the HIPAA guardrails in §7 — the
boundary just moves from patient data to the practice's own business data.
Neither belongs on a public page by accident.

### Re-read it as a patient once it is on the page

Phrasing that is fine in an internal document is often bloated or confusing on
a public one: parenthetical caveats, state lists, jargon, hedging. A "is this
too much detail" pass after the content is placed is normal and worth doing
before calling it final. Expect to cut.

### Confirm the structure before building it

When several content items arrive at once, do not assume one nav entry each.
Map them to a grouping first — how many top-level entries, what becomes a
sub-page — and confirm it. It is a cheap question that prevents both a bloated
nav and a mis-scoped rebuild.

Standalone topics with real search intent (insurance, a distinct service,
pricing) generally earn their own top-level URL rather than a section inside a
general page: better for ranking, and shareable as a link.

---

## 10. Working tree is not deployable

**"Push" and "deploy" are different risk levels, and the difference has
bitten us.**

- `git push` ships **committed history**. Reviewed, attributable, revertible.
- A deploy builds **whatever is physically on disk** — including uncommitted
  edits nobody has reviewed, and including other people's if a checkout is
  shared between collaborators or agent sessions.

One client repo had 33 uncommitted files diverging from production, with the
live site running an older design for weeks. The builder repo had 99. In that
state every "small fix" is a choice between shipping someone's unfinished work
and hand-picking files, and hand-picking is how a change goes out missing the
file it depended on.

**Rules**

1. `git status` before any deploy. Every time.
2. Unfamiliar uncommitted work is not yours to ship. Find out whose it is and
   whether it is finished before bundling it.
3. If you must ship narrowly, commit **only** the files your change needs, and
   check that none of them depend on an uncommitted sibling. A page that
   references CSS variables from an uncommitted stylesheet builds fine and
   renders unstyled.
4. Do not let a working tree diverge for weeks. Either ship it or branch it.

`verify-launch.js` reports a dirty tree as an advisory — it cannot know whose
work it is, which is exactly why a human has to look.

---

## 11. Process habits

**Inactive code paths still ship.** The template carries several layout
variants per section with one selected by config. The unselected ones do not
render today, but they are one config change from rendering. When a ground or
token changes, convert all of them in the same pass — otherwise it is a
landmine for whoever flips a variant in six months.

**Prefer one systemic fix to many local ones.** Recurring defects usually have
a single generator. One config change fixed ~470 usages; one CTA refactor
fixed every dead button on a site at once. When you find yourself fixing the
third instance of something, stop and find the source.

**Verify against computed values, not screenshots.** Screenshots catch layout.
They do not catch a 4.47:1 contrast ratio, a token resolving to the wrong
value, or a theme variable that looks right in the CSS and is baked at the
wrong scope. Read `getComputedStyle` and assert on numbers; use screenshots for
what numbers cannot see, like a white headshot on a black page.

**Budget for asset rework when a ground changes.** Logos and cut-out
photography carry their original background with them, and no amount of CSS
fully hides it. Recrop from the original rather than from an already-processed
output, match the crop convention of the set, and generate size variants at the
same aspect ratio as their parent.

---

## 12. Client infrastructure access

The single change that turns client configuration from dashboard clicking into
scripted work.

### Two tokens: ours, and theirs

Internal work and client work get separate tokens. Not for blast radius —
for **offboarding**.

When an engagement ends you revoke your access to that practice's Cloudflare.
If client access shares a token with the builder's own, revoking it takes down
the pipeline, and keeping it means holding access to a former client's
infrastructure. One token makes that a choice between two wrong answers; two
tokens make it a non-question.

| | Reaches | Permissions | Lifecycle |
|---|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Groundwork Dental only | D1, R2, Workers, Pages, Access, DNS on our zone | permanent |
| `CLOUDFLARE_API_TOKEN_CLIENTS` | client accounts we are a member of | Zone DNS Edit, Pages Edit — nothing else | edited per engagement |

The client token has no D1, no R2 and no Access on purpose. A credential used
on someone else's infrastructure must not be able to reach our ledger.

**Create the second token when the engagement build needs it, not before.**
Everything automated today runs on our own account: cold-build previews are
`<slug>.groundworkdental.com` on Groundwork's Cloudflare, and the move to a
client's account is still a manual step. A `CLOUDFLARE_API_TOKEN_CLIENTS`
variable already existed here once, sat empty for months, reached zero
accounts, and told nobody — an unused credential decays into a thing nobody
can explain or safely delete.

### Use a USER token, not an Account token

Creating an **Account-owned** token generally requires **Super Administrator**
on that account. On a client's account — or their MSP's — you are a member, so
the create fails at the review step with `Unauthorized to access requested
resource`. That message reads like the permissions you selected are wrong.
They are not; the token *type* is.

A **User** token only requires that you personally hold what you are granting.
Same account, same member role, creates fine.

**My Profile → API Tokens** (not Manage Account → Account API Tokens) →
Create Custom Token:

| Type | Resource | Level |
|---|---|---|
| Zone | Zone | Read |
| Zone | DNS | Edit |
| Zone | Zone Settings | Edit |
| Account | Cloudflare Pages | Read (Edit if you want to change Pages settings) |

- **Zone Resources:** `Include → Specific zone`, listed explicitly.
- **Account Resources:** include each client account (the Pages row needs it).
- **TTL:** set one. 90 days.

Never `All zones`. It silently absorbs every future client, so one leaked
string grows with the book of business instead of with a decision. Listing
zones explicitly costs thirty seconds per client and makes "get granular
later" automatic.

**Not covered by the above:** Rulesets. Reading redirect rules needs its own
permission and fails with a bare `Authentication error [code: 10000]`. Verify
redirects behaviourally instead — curl the `www` host and confirm the
`location` header preserves both path and query string.

### Where the token lives

Not in any repo. A credential used by more than one repo should not live
inside one of them, and the client repo is one you contractually hand over.

```
~/.config/groundwork/cloudflare.env   chmod 600
```

Shell environment beats `node --env-file`, so tooling that expects a repo
`.env` still works:

```
set -a; . ~/.config/groundwork/cloudflare.env; set +a
```

Skip IP filtering unless the IP is static and it is the only machine using the
token. Do not allowlist a mobile carrier range — that is a range shared with
thousands of strangers, added while believing you added a small one.

### One token while small is a defensible call

At one or two clients the blast radius is small enough to hold in your head,
and juggling four tokens creates friction that makes people skip steps. Split
when: anyone but you uses it (CI, a contractor, a second machine), a client
contractually requires scoped access, or you take on a client you cannot
afford to break. Not at a particular client count.

---

## 13. Audit the client's DNS, not just their site

A zone we inherit carries whatever the previous provider left. This is
invisible from the repo and from the rendered site, and it is where the
expensive failures live.

> This section is about a zone you already hold. The decision that comes
> first — whether to take their nameservers at all, what to capture before
> you do, and what changes per email provider — is in
> [dns-and-email.md](dns-and-email.md).

Run `node scripts/pipeline/audit-client-zone.js <domain>` from
groundwork-builder at onboarding and before go-live.

### Proxying is for HTTP, and only HTTP

One client zone had every record orange-clouded, including the Microsoft 365
DKIM selectors. Cloudflare's proxy terminates HTTP, so a proxied DKIM lookup
answers with Cloudflare's IPs instead of the TXT record a verifier needs —
**mail could not be signed**. With SPF `-all` and DMARC `p=quarantine`
alongside, the practice's outbound mail was liable to be quarantined. Nothing
looks wrong from the sender's side, which is why it can run for months.

Must stay DNS-only: `*._domainkey`, `autodiscover`, `enterpriseenrollment`,
`enterpriseregistration`, `_dmarc`, mail hosts, SIP/Teams discovery. The rule
generalises: if the hostname does not serve HTTP, the proxy has nothing useful
to do with it.

### Ask who else sends mail as the domain

A strict SPF (`-all`) authorises only what it lists. Every tool that sends as
the practice — booking reminders, review requests, practice management
software, a Gmail account configured to "send as" — needs its own `include:`.
Adding one without updating SPF means patient-facing mail lands in spam, and
nobody notices because sending still appears to work.

**Ask before a new sender goes live, not after.** This is the question to put
to the practice during onboarding: *"does anything other than your mail
provider send email from your domain?"*

### Zone security baseline

| Setting | Target |
|---|---|
| SSL mode | Full or Full (strict). **Never Flexible** — it sends unencrypted traffic to the origin |
| Minimum TLS | 1.2. 1.0/1.1 are deprecated and a compliance flag for a healthcare site |
| Always Use HTTPS | On |
| HSTS | Deliberate, and usually **without** `includeSubDomains` |

HSTS is the one that deserves a pause: browsers cache the policy for its full
max-age, so a mistake is not something a later fix undoes. Check whether any
subdomain (`autodiscover`, enrollment hosts) needs plain HTTP before including
them.

### Verify the way the internet sees it

- A **local resolver answers from cache** for the full TTL, so a changed record
  can look unchanged. Use `dig @8.8.8.8`.
- **OpenSSL 3 refuses obsolete TLS client-side.** `-tls1_1` returning `no
  protocols available` is your own client declining, not the server refusing.
  Add `-cipher 'DEFAULT@SECLEVEL=0'` for a real answer.

---

## 14. Decommissioning a preview

When a client goes live on their own infrastructure, the preview we built on
has to be retired. **Order matters**, and getting it wrong leaves artefacts
that are awkward to clear afterwards.

### The sequence

1. **Verify the client's site is actually serving.** Apex returns 200, `www`
   301s to it, the deployed commit is the one you expect, and their DNS points
   at *their* project. Everything below is irreversible; do not start until
   this is true.

2. **Confirm what is not in the repo made it across.** `wrangler.toml` carries
   vars and bindings. Encrypted secrets do not, and neither does anything set
   only in a dashboard. Check the new project has them — and that a *fresh
   deployment* carries them, because on Pages configuration only reaches the
   runtime through a build.

3. **Remove the custom domain from the Pages project.** Cloudflare may enforce
   this before it lets you delete anything, which is good: deleting a project
   while it still holds a custom hostname orphans that hostname. The name then
   keeps resolving to Cloudflare and returns 1016 with no project to detach it
   from, and clearing it means recreating a throwaway project just to release
   the name.

4. **Delete the DNS record** for the preview subdomain.

5. **Disconnect git from the old project.** Do this on its own and before
   deleting. It stops duplicate builds immediately and is reversible;
   deletion is not.

6. **Wait for one successful deployment on the client's side**, then delete
   the old project.

### Why the preview cannot just be left running

- The `*.pages.dev` and preview subdomain keep serving a copy of the client's
  site, which Google can index — a duplicate competing with the domain we are
  being paid to rank.
- If git is still connected, both projects build on every push and the
  dashboard stops telling you which one is live. Two projects sharing a name
  across two accounts is how an afternoon gets lost.
- Preview deployments are public by default, so client content stays reachable
  from our account after handoff.

### Two cautions

**Deleting a Pages project is irreversible** — every deployment and its
history goes with it. That is acceptable because the repository is the real
artefact, but make sure the repo is transferred, or the client has their own
copy, before deleting the deploy target.

**Never delete while DNS still points at our project.** Check the CNAME first.
If it still targets our `pages.dev`, deleting takes the client's live site
down.

### After it is gone

Resolution takes a few minutes to settle. A preview hostname that briefly
returns 530 or 1016 immediately after removal is the edge catching up, not a
failure — confirm with an authoritative query rather than a browser:

```bash
dig +short @<zone-ns> preview.ourdomain.com     # empty once fully released
```
