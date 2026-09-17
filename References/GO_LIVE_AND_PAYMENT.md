# Go-live & payment policy

> Operator policy. Public offer on the website stays: free preview → $2,000 → live on their domain + 30 days of revisions.  
> Related: playbook §18.2 (ownership stages) · website copy on `/pricing`, `/how-it-works`, `/faq`.

---

## Public offer (what the website says)

Preview on our URL → pay $2,000 → site can go live on **their** domain that day. 30 days of included revisions, clock starting on first feedback after full payment.

Do **not** advertise a $500 deposit, a three-step payment ladder, or “go live as-is” on the site. $2,000 is the price. No asterisks.

---

## $500 side offer (ops only)

Not a SKU. Not on Stripe from the pricing page. Offer it in conversation after they’ve seen the preview and want to keep moving — they like it, they want the domain live, they aren’t ready to pay $2,000 or send a revision round yet.

**What $500 buys:** the approved preview, as-is, live on **their** Cloudflare + custom domain. Credited to the $2,000. No revision rounds.

**What it does not buy:** feedback iteration, GBP website update, GSC push, launch announcement help, GitHub collaborator invite. Those wait on the remaining $1,500.

**When to offer it:** they ask to go live before full payment, or momentum is stalling and putting the real URL live would keep the deal moving.

**When not to:** they can pay $2,000 now. Default path is pay once.

If this path becomes common, raise the deposit or stop offering early go-live. $500 is 25% of the job for a live site on infrastructure they control — a seriousness check, not a payment plan.

### Blurb (before they pay the $500)

> Paying the $500 deposit moves this preview live onto your Cloudflare and domain as-is — no revision rounds yet. The deposit applies to the $2,000 build. The remaining $1,500 completes the build and starts the 30-day revision window — the clock starts when you send your first feedback after that payment.

### Blurb (if deposit is already live, before the balance)

> The remaining $1,500 completes the build fee. After it posts, you get 30 days of included revisions starting when you send your first feedback request.

---

## Hard rule (Mansfield, 2026-09)

Went live on the client domain with Pages already in **their** Cloudflare before payment. That removed the easy custom-domain lever.

**Going forward:** $500 (side offer) or $2,000 in full **before** their Cloudflare + custom domain. Not unpaid ownership transfer.

Disconnecting the GitHub repo from Cloudflare Pages does **not** take the site down. The last successful deployment stays live. Don’t treat repo disconnect as a kill switch. Don’t mention this on the website.

| Control | When it helps |
|---------|----------------|
| Keep Pages on **Groundwork** CF | Preview and any pre-deposit work — you can remove the custom domain |
| **$500** before their CF + domain | Paid commitment before you hand over hosting |
| Hold GBP / GSC / announcement / GitHub invite | Soft leverage after deposit |
| Written terms | Fee due, revision rules, what’s included |

Once Pages + domain are in **their** Cloudflare, you are not relying on a kill switch. Don’t skip the deposit.

---

## 30-day revision window

- Included revisions start after **full payment** ($2,000 total).
- Clock starts on the **first revision request after full payment**.
- Then 30 consecutive days of included feedback.
- Waiting after payment is fine — we already have the money.
- **Internal backstop (do not publish):** if they never send feedback, the window starts 90 days after `full_payment_date`.
- After the window: self-serve, $100 change month, or managed hosting.

Record on the Account: `full_payment_date`, `revision_window_start` (first feedback, or 90 days after payment), `revision_window_end` (start + 30 days).

### What “deposit live, no changes” means

- Deploy the approved preview into **their** Cloudflare Pages and attach the domain.
- No copy/design revision rounds until full payment.
- Critical fixes only (site down, SSL, broken book button) — not taste/content iteration.
- Hold: GBP website update, GSC push, launch announcement help, GitHub collaborator invite — until full payment.

---

## Operator checklist

### Preview ($0)

- [ ] Build on Groundwork Pages
- [ ] Client reviews preview URL
- [ ] Default ask: $2,000 to go live on their domain + start the revision path

### $500 side offer (only if they need early live / momentum)

- [ ] Deposit received (credited to $2,000)
- [ ] Blurb acknowledged
- [ ] New Pages project in **their** CF; custom domain attached
- [ ] No revision rounds (critical fixes only)
- [ ] Hold GBP / GSC / announcement / GitHub invite until full payment

### Full payment ($2,000 total)

- [ ] Balance posted (or $2,000 once)
- [ ] Record `full_payment_date`
- [ ] Their CF + domain if not already done via deposit
- [ ] Unlock revisions; window starts on first revision request (or 90 days after payment)
- [ ] On first feedback: record `revision_window_start` and `revision_window_end`
- [ ] GBP, GSC, handoff, GitHub access

---

## Cloudflare Pages notes (ops)

Astro 6 needs Node ≥ 22.12. If the client repo has `wrangler.toml` with `pages_build_output_dir`, pin Node in Wrangler — dashboard env vars are ignored:

```toml
[vars]
NODE_VERSION = "22"
```

Also keep `.nvmrc` / `package.json` `engines` aligned.  
`*.pages.dev` names can’t be renamed; a suffix is fine — production uses the custom domain.  
Add the domain in **Pages → Custom domains** first; a raw CNAME with no Pages association returns 522.

---

## Website vs ops

| Topic | Public site | Ops / email after preview |
|-------|-------------|---------------------------|
| Free preview, then $2,000 | Yes — the whole offer | Yes |
| Go live on their domain after $2,000 | Yes | Yes |
| 30-day revisions; clock starts on first feedback | Yes — FAQ | Record dates |
| 90-day backstop if they never send feedback | No | Yes |
| $500 early go-live as-is | No | Yes, when they ask or momentum stalls |
| Critical fixes only on deposit | No | Yes |
| Hold GBP / GSC / GitHub | No | Yes |
| Repo disconnect ≠ take site down | No | Yes |
