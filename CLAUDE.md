# Groundwork Dental — Agency Website

## What This Is
The marketing website for Groundwork Dental, a productized dental website agency. Built with Astro v5 + Tailwind CSS, hosted on Cloudflare Pages.

## Commands
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build

## Project Structure
- `src/config/site.ts` — agency info, Organization schema (single source of truth)
- `src/config/navigation.ts` — header nav (dropdowns); see `navMain` / `navLinks`
- `src/layouts/BaseLayout.astro` — master layout (SEO head, OG, schema, GA4, fonts)
- `src/components/` — shared Astro components (Header, Footer, CTABlock, FAQBlock, etc.)
- `src/pages/` — marketing routes, `dental-websites/` specialty landers, `blog/`, `api/` (`api/contact.ts` writes leads to Cloudflare D1 + emails via Gmail)
- `src/content/blog/` — markdown blog posts
- `src/styles/global.css` — Tailwind utilities and component classes
- `public/images/` — static assets served at `/images/...` (screenshots, branding)
- `public/_redirects` — forwards legacy `/audits/*` and `/pitch/*` links to `reports.groundworkdental.com` (per-prospect reports now live in the builder-owned `groundwork-reports` Pages project)
- `References/` — internal operator docs (not deployed): playbook, client build standards, `sales/` for business artifacts
- `DESIGN.md` — design system tokens and patterns

## Design System
- **Palette:** charcoal `#334155`, sage `#5F7F6B` (accent) / sage-dark `#4A6B55` (text & buttons), surface-2 `#F8F8F3`, mid-gray `#556070`
- **Typography:** Georgia (serif, body + headings), Figtree (sans, buttons/nav/labels), system mono (pricing numbers only)
- **NOT dental blue.** Warm, honest, tech-forward.
- **No stock photos.** Real screenshots, PageSpeed scores, founder photos only.
- **Buttons:** `.btn-primary` (sage green), `.btn-secondary` (outlined), `.btn-dark` (charcoal)
- **Cards:** `.card` class for bordered surface-2 cards
- **Full design reference:** `DESIGN.md`

## Brand Voice
Calm, competent, honest. An engineer explaining to a smart friend how something works, what it costs, and whether they need it — including when the answer is no. Answer first, personality second. Numbers over adjectives. Never salesy, never urgent, never fear-based.
- **Full voice/tone source of truth (read before writing any copy):** `References/voice-and-tone.md`

## Key Reference
- Full playbook: `References/groundwork-dental-playbook.md`
- Go-live & payment (ops): `References/GO_LIVE_AND_PAYMENT.md` — $2,000 is the public offer; $500 is a side path, not a website SKU
- Client build standards (IA, SEO, schema, crawl): `References/client-site-build-best-practices.md`
- DNS & email at engagement (nameservers, MX, DKIM per provider): `References/dns-and-email.md`
- Reference client site (legacy, pre-builder): `/Users/garrettgunther/Projects/hbimplants/`
- First builder-produced client site: https://github.com/groundworkdental/mansfielddds
- Build pipeline & agents live in `/Users/garrettgunther/Projects/groundwork-builder/` (it pushes audit/pitch artifacts into this repo — see `public/audits/`)
