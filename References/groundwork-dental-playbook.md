# Groundwork Dental — Complete Operator Playbook

> **Purpose:** This is the single source of truth for every aspect of the business — philosophy, positioning, strategy, sales, production, operations, and growth. It serves as the operating manual for the founder and the scope document for every client engagement. If you're reading this and you're not me, you're either a developer I'm onboarding or someone who's going to steal this playbook. Either way — welcome. The voice you'll hear throughout is the same voice that shows up in sales calls, marketing, and client emails. That's intentional. The business *is* the voice.
>
> **Business:** Groundwork Dental — groundworkdental.com
>
> **Audience:** Internal / operator only. Sections marked *[Customer-Facing]* can be shared with clients. Everything else is backend operational knowledge.
>
> **Last Updated:** 2026-03-09

---

## Table of Contents

**Part I — Business Philosophy & Strategy**
1. [Business Model & Value Proposition](#1-business-model--value-proposition)
2. [Founder Story & Brand Identity](#2-founder-story--brand-identity)
3. [The Dental SEO Landscape](#3-the-dental-seo-landscape)
4. [Ideal Customer & Positioning](#4-ideal-customer--positioning)
5. [Sales Messaging & Competitive Positioning](#5-sales-messaging--competitive-positioning)

**Part II — Product & Pricing**
6. [Service Catalog & Pricing](#6-service-catalog--pricing)
7. [Payment Infrastructure](#7-payment-infrastructure)

**Part III — Sales & Onboarding**
8. [Sales Process](#8-sales-process)
9. [Customer Onboarding](#9-customer-onboarding)

**Part IV — Production**
10. [Production Pipeline — Website Build](#10-production-pipeline--website-build)
11. [Website Architecture Standards](#11-website-architecture-standards)
12. [SEO & Schema Implementation](#12-seo--schema-implementation)
13. [Google Business Profile Setup & Optimization](#13-google-business-profile-setup--optimization)
14. [Forms, CAPTCHA & Lead Capture](#14-forms-captcha--lead-capture)
15. [Content System — Blog & Content Collections](#15-content-system--blog--content-collections)
16. [Photo Workflow](#16-photo-workflow)

**Part V — Infrastructure & Deployment**
17. [Technology Stack & Infrastructure Decisions](#17-technology-stack--infrastructure-decisions)
18. [Infrastructure Ownership Model](#18-infrastructure-ownership-model)
19. [Deployment & CI/CD Pipeline](#19-deployment--cicd-pipeline)
20. [Migration From Existing Website](#20-migration-from-existing-website)

**Part VI — Quality & Launch**
21. [Quality Assurance & Launch Checklist](#21-quality-assurance--launch-checklist)
22. [Post-Launch Handoff](#22-post-launch-handoff)

**Part VII — Ongoing Operations**
23. [Ongoing Operations & Maintenance](#23-ongoing-operations--maintenance)
24. [Growth Services — Detailed Operations](#24-growth-services--detailed-operations)

**Part VIII — Marketing Your Agency**
25. [Marketing Strategy for Groundwork Dental](#25-marketing-strategy-for-groundwork-dental)
26. [Agency Website Structure](#26-agency-website-structure)

**Part IX — Backend Operations**
27. [AI Generation Pipeline](#27-ai-generation-pipeline)
28. [Agency Master Systems](#28-agency-master-systems)
29. [Tools, Accounts & Cost of Ownership](#29-tools-accounts--cost-of-ownership)
30. [Automation Scripts — Operator Reference](#30-automation-scripts--operator-reference)
31. [Customer Communication Templates](#31-customer-communication-templates)
32. [Timeline — Week-by-Week Delivery](#32-timeline--week-by-week-delivery)
33. [Scaling & Capacity Planning](#33-scaling--capacity-planning)
34. [Failure Modes & Risk Mitigation](#34-failure-modes--risk-mitigation)

**Appendices**
- [Appendix A — File Structure Reference](#appendix-a--file-structure-reference)
- [Appendix B — Glossary](#appendix-b--glossary)

---

# PART I — BUSINESS PHILOSOPHY & STRATEGY

---

## 1. Business Model & Value Proposition

### What This Business Is

Groundwork Dental is a productized website and digital presence service for dental practices. It uses AI-assisted workflows to build custom, production-grade websites dramatically faster and cheaper than traditional agencies — then hands everything to the dentist with zero lock-in.

The core value proposition:

> *"We instantly rebuild outdated dental websites into modern, search-ready sites. All heavy lifting off your shoulders. You own everything."*

### Why It Exists

Here's the dirty secret of the dental marketing industry: most agencies charge $300-500/month to host a WordPress site that loads in 6 seconds and shares a template with 400 other dentists. The dentist doesn't know this, because "it looks fine on my phone." Meanwhile the agency owns the hosting, the CMS login, sometimes even the domain. If the dentist stops paying, the website vanishes. That's not a service — that's a hostage situation with nice fonts.

Modern AI tools have made it possible for a single engineer to build high-quality, unique websites dramatically faster and cheaper than a traditional agency team. Groundwork Dental brings that efficiency to the dental industry. Not because AI is magic — it's not — but because it turns a 6-week agency timeline into a weekend of focused work, and the savings get passed to the dentist instead of funding someone's office ping-pong table.

### Why It Wins

| Advantage | Traditional Agency | Groundwork Dental |
|---|---|---|
| **Ownership** | Agency owns hosting, CMS, sometimes domain | Customer owns GitHub repo, Cloudflare account, domain, Google accounts — everything transfers instantly |
| **Ongoing cost** | $200-500/month hosting + maintenance fees (that's $2,400-6,000/year for hosting that costs $5/month wholesale) | ~$12-15/year (domain renewal only) if self-managing. Just keeping the lights on. |
| **Performance** | WordPress/Wix average 40-70 PageSpeed | Static HTML, 90+ PageSpeed, zero JavaScript by default |
| **SEO** | Basic meta tags, maybe schema | Comprehensive JSON-LD schema on every page (LocalBusiness, FAQPage, MedicalProcedure, Physician, BreadcrumbList, BlogPosting, AggregateRating) |
| **AI/LLM visibility** | Not optimized | Content structured for AI citation — entity optimization, structured FAQs, authoritative formatting |
| **Lock-in** | Proprietary CMS, can't export | Open-source stack, standard Git repo, any developer can pick it up |
| **Design** | Shared templates across hundreds of clients | 100% custom per practice — no templates reused |
| **Vendor switching** | Weeks/months of migration, content loss | Hand the GitHub URL to any developer. Done. |
| **Build time** | 6-12 weeks | 3-7 business days |

### Core Positioning Pillars

1. **Ownership:** The dentist owns the website, code, hosting, domain, analytics, and all content. Period. Not "owns" with an asterisk. Actually owns. Like, "fire us and nothing changes" owns.
2. **Transparency:** Explain exactly how dental SEO works, what agencies charge, what dentists actually need. Give away all the knowledge for free. (Most dentists will read it, nod, and hire us anyway. That's the point.)
3. **Speed:** Build sites in days, not weeks. AI makes this possible. Your current agency's "6-8 week timeline" is mostly waiting for someone to assign your project to a junior dev.
4. **Fair Pricing:** One transparent price. No hidden fees. No middleman hosting markup. No "oh, that's a separate line item."
5. **AI Efficiency:** Be upfront about using AI. Not in an apologetic way — in a "this is why it costs $2k instead of $15k" way. The dentist benefits from the efficiency. We just need to not be weird about it.

### Revenue Streams

1. **One-time website build** — primary revenue ($2,000). This is the door-opener. The thing that gets them in.
2. **Managed hosting** — recurring ($100/month for hands-off clients). Pure margin — the hosting itself is free. They're paying for the management, not the server. Be transparent about this; it builds trust.
3. **Content growth plans** — recurring (monthly articles, TikTok prompts, SEO expansion). This is where the long-term relationship lives.
4. **One-time add-ons** — logo design, extended location pages, photography coordination. Nice-to-have revenue; don't push these.

---

## 2. Founder Story & Brand Identity

### The Story (Tell This Everywhere)

This should appear on the website, in sales calls, videos, and articles. It is the single most powerful trust-builder.

> *"Dental practices deserve better websites than what most agencies deliver. The average dental website is slow, templated, and technically locked — owned by the agency, not the practice. Meanwhile, modern tools have made it possible to build high-quality, custom, search-optimized websites dramatically faster and cheaper than the traditional agency model. That efficiency belongs to the dentist, not the agency."*

> **Note on public-facing copy:** The website avoids specific personal backstory (no family-in-dentistry, no school names). The "why" is abstract and universal — dentists as a category are underserved by the agency model. Keep sales calls and copy grounded in that framing, not personal biography.

### Brand Identity

The entire brand should feel like: **"The honest dental website guy."**

Not an agency. Not a marketing firm. Not a growth hacker. A dentist-friendly engineer who builds good websites at fair prices.

### The AI Transparency Message

Do not hide AI usage. Lean into it. Every agency in 2026 is using AI — most just won't admit it because they're still charging 2019 prices. We say the quiet part out loud:

> *"Most dentists could technically build their own website today using AI tools. Seriously — if you've used ChatGPT, you're already halfway there. The other half is the part where things start breaking: your SSL certificate expires, your sitemap isn't submitting, your schema markup is invalid, and your contact form is emailing submissions into the void. That's where I come in."*

The honesty is the differentiator. People trust you more when you tell them they could theoretically do it themselves. (They still won't. But they respect that you said it.)

### The Honest Marketing Philosophy

Do not promise patient growth. Do not promise marketing magic. Every dental marketing agency on earth promises "more patients." We promise a website that doesn't embarrass you when someone Googles your name. The bar is low. We clear it by a lot.

> *"If you want to spend huge money on ads, I'm probably not the right fit. If you're looking for a silver bullet that instantly brings in patients, that doesn't exist — and anyone promising it is hoping you don't ask for proof. What I focus on: building the best possible foundation for your online presence. Once that foundation exists, you have options. Real ones. Not 'keep paying us or your site disappears' options."*

### The Ownership Guarantee

This should be a massive section on the website and all sales materials. It's the thing that makes people's eyebrows go up. It's the thing that makes them trust you. Because no other agency says it:

> *"After the project's done, you could hand the whole thing off to your tech-savvy niece and let her vibe-code it from there. Seriously. She'll understand what that means, even if you don't. The point is: it's yours. Fire me tomorrow, hire someone else, or never talk to me again. Your website keeps working. No kill switch. No hostage negotiation."*

If the dentist stops working with you, they keep: the domain, the hosting, the website code, the design assets, the SEO content, all Google accounts, all analytics. You walk away clean. This is the single most trust-building thing about the business. Say it everywhere, constantly, until you're sick of saying it. Then say it again.

---

## 3. The Dental SEO Landscape

This section captures the deep industry knowledge that differentiates the service. This knowledge drives the website content, sales conversations, article strategy, and authority page architecture. **Give all of this information away for free.** Seriously — publish it, put it on YouTube, hand it out at conferences. Dentists will read it, appreciate the honesty, realize they don't want to do any of this themselves, and hire you. That's the whole marketing strategy.

### 3.1 — What "Baseline SEO Presence" Actually Means

Baseline is not growth. It is being eligible to appear in local search. Think of it as local discoverability, not marketing. 90% of dental offices never get past baseline. They set up a decent site and Google Business Profile and stop. That baseline alone can generate patients because dental search is heavily local-intent ("dentist near me"). But the ceiling is low.

**Website baseline (minimum viable SEO foundation):**
- **Site structure:** Homepage, service pages (cleanings, implants, Invisalign, etc.), contact page, location page
- **Technical basics:** Mobile-friendly, fast load time, HTTPS, proper title tags + meta descriptions, basic schema markup (LocalBusiness/Dentist)
- **On-page SEO:** Keywords like "dentist in [city]" and "family dentist [city]", clear service descriptions, internal links between pages
- **Conversion basics:** Phone number prominent, online booking, map embed

**Google Business Profile baseline (matters more than the website):**
- Profile completeness: correct NAP, categories, hours, website link
- Photos: exterior, waiting room, staff, treatment rooms
- Reviews: at least 20-40 real reviews, respond to all of them
- Basic activity: occasional updates, answer Q&A

**Directory citations baseline:**
- Healthgrades, Yelp, Zocdoc, Bing Places, Apple Maps, YellowPages, dental directories
- Key rule: Name / Address / Phone must match exactly everywhere

**What baseline results look like:** If the area isn't hyper-competitive: rank in local map pack for brand + some services, 20-100 organic visitors per month, occasional new patients. Caps out quickly.

### 3.2 — Beyond Baseline: Growth Levels

Going beyond baseline gets you three things baseline cannot deliver: **scale, stability, and patient quality.**

**Level 1 Growth — Content + Activity (Moderate effort)**
- Blog posts, FAQ pages, treatment explainers (e.g., "How long do dental implants last?")
- Weekly GBP activity: posts, new photos, review replies, service updates
- Basic link acquisition: chamber of commerce, local sponsorships, dental associations
- Results: ranking for informational searches, long-tail queries. Traffic grows 2-4x baseline.

**Level 2 Growth — Authority SEO (High effort)**
- Topical authority clusters: instead of random blog posts, build content hubs (e.g., dental implants hub with 10+ pages covering cost, recovery, alternatives, candidacy)
- Active backlink outreach: health publications, dental blogs, local media, university resources
- Location expansion pages: multiple geo pages for surrounding cities/neighborhoods
- Review velocity strategy: continuous generation of 5-10 new reviews/month
- Results: top 3 for core services, rankings across nearby cities, hundreds to thousands of organic visits/month

**Level 3 Growth — Competitive Dominance (Very high effort)**
- Aggressive content publishing: 20-100+ SEO pages
- Local PR and link campaigns
- Structured entity authority (advanced schema, doctor entity pages, citation networks)
- YouTube + video SEO
- Results: owns entire search category locally

| Stage | Effort | Typical Result |
|---|---|---|
| Baseline | Low | Shows up locally, 20-100 visits/month |
| Level 1 Growth | Moderate | Traffic 2-4x, informational rankings |
| Level 2 Authority | High | Dominates city, hundreds-thousands visits |
| Level 3 Dominance | Very High | Owns entire search category locally |

### 3.3 — Why Broad Treatment Keywords Matter Locally

Google localizes almost every healthcare query. When someone searches "dental implant cost," Google injects local dentists into results. A Long Beach dentist ranking for "dental implant cost" is really ranking for "dental implant cost near Long Beach." Users just don't type the city.

~80-90% of healthcare searches start informational, not provider-based. Most patients search for their problem first, then a provider. If your site answers the earlier questions, you own the research phase.

### 3.4 — Treatment Keywords Are Insanely Valuable

Generic dentist searches skew cheap procedures. Treatment research keywords bring high-value cases:

| Query | Intent | Patient Value |
|---|---|---|
| dentist near me | Cleaning / exam | $100-$300 |
| emergency dentist | Urgent visit | $200-$500 |
| dental implant cost | Research | $5k-$40k |
| Invisalign cost | Research | $4k-$7k |
| veneers cost | Research | $8k-$20k |

One implant case pays for years of SEO work.

### 3.5 — The Three Ranking Engines

The entire dental SEO game reduces to three ranking engines. Everything else is noise:

1. **Google Maps** (GBP + reviews) — captures most calls from local intent searches
2. **Local Organic Pages** — service pages and location pages that rank for treatment + city queries
3. **Authority Signals** (links + content) — topical depth and backlinks that improve ranking power across all pages

### 3.6 — The Non-Obvious Truth

The biggest lever for dentists isn't blogging. It's **reviews + Google Business Profile optimization.** Those two signals often matter more than the website. A mediocre website with 200 reviews will often outrank a perfect website with 10. Google prioritizes local proximity, relevance, and prominence in map rankings.

### 3.7 — What Dental SEO Agencies Like DocSites Actually Do

Most run the same formula: templated site, GBP optimization, directory citations, occasional generic blog content ("5 tips for healthy teeth" — almost useless for SEO).

**Their biggest weaknesses:**
- Rarely target procedure research queries (missing the most valuable patients)
- Template content reused across hundreds of sites (Google penalizes duplicate medical content)
- No authority building (no real backlinks from health publications, dental blogs, universities)
- No topical authority (one implant page instead of a 10-20 page cluster)
- No content funnel (only bottom-funnel "dentist [city]" pages, missing top/mid-funnel research queries)

### 3.8 — The Elite Dental SEO Architecture

The fastest-growing cosmetic dental chains build four-layer site architectures:

1. **Homepage (authority hub):** Signals brand authority, distributes ranking power through internal links
2. **Service pages (revenue drivers):** Rank for high-intent treatment searches with deep content per procedure
3. **Procedure research content (traffic engine):** Content clusters capturing research queries — this is where elite SEO happens
4. **Local landing pages (geographic expansion):** Geo pages for surrounding cities/neighborhoods

Plus: conversion trust pages (before/after galleries, patient stories, doctor authority pages) and a review/reputation layer.

---

## 4. Ideal Customer & Positioning

### 4.1 — Target Customer Profile

**Primary:** Prosthodontists, implant specialists, oral surgeons — practices where average case value is $3,000-50,000+

**Secondary:** High-end cosmetic dentistry practices (veneers, smile makeovers)

**Tertiary:** General dentists who want to emphasize implants or cosmetic services

**Also ideal:** Solo dentists or small practices who are busy, not tech savvy, have an outdated website, had a bad agency experience, or just want control. Typically $500k-$2M practice revenue.

**Geography:** Initially Southern California; model works nationwide.

**Current vendor pain:** Paying $200-500/month for PatientPop, Dex Knows, or a WordPress agency and getting mediocre results with no ownership.

### 4.2 — Who Is NOT a Good Fit

Be explicit about this. Nothing builds trust faster than telling someone *not* to buy from you:

- Dentists wanting a $30,000 fully custom marketing website with a full design team (you exist, and that's fine — we're just not that)
- Practices needing complex CRM or marketing automation systems (if you need Salesforce, you need a different conversation)
- Practices wanting aggressive paid advertising campaigns managed for them (we build the house; we don't run the billboard)
- Large DSOs requiring complex enterprise integrations (if you have an "IT department," we're probably too scrappy for you)
- Anyone expecting a silver bullet for instant patient growth (if someone promises this, check if they also sell bridges)

> *"If you want serious customization or a full management system for your customers, this isn't the right service. But I'll happily tell you what to look for and what to avoid so you don't get burned. That advice is free."*

---

## 5. Sales Messaging & Competitive Positioning

### 5.1 — Core Headlines

- *"Dental Websites Without Agency Lock-In."*
- *"Custom SEO-ready dental sites built in days. You own the code, the hosting, and every account."*
- *"We instantly rebuild outdated dental websites into modern, search-ready drafts."*
- *"Your website costs $12/year to run after we're done. Yes, really."*

### 5.2 — Key Messaging

**The AI Pitch:**
> *"Seriously — if you've used ChatGPT, you're already halfway there. The other half is the part where things start breaking: SSL certificates, sitemap submissions, schema markup, DNS records. You know — the fun stuff. That's where I come in."*

**The Ownership Pitch:**
> *"After the project's done, you could hand the whole thing to your tech-savvy niece and let her vibe-code it from there. (Seriously. She'll know what that means.) Fire me, hire someone else, or never talk to me again. Your website keeps working."*

**The Cost Pitch:**
> *"After the build, your only ongoing cost is ~$12-15/year to keep the domain registered. That's it. Just keeping the lights on. No WordPress subscription you never asked for. No Wix plan paying for a visual editor you'll never touch. No monthly 'hosting fee' that's really just an agency keeping your site on their server so they can turn it off if you leave."*

**The Honest Baseline:**
> *"There's no silver bullet for getting new patients. Anyone promising that is selling marketing fantasy — and probably also selling you a $300/month retainer to maintain the illusion. What I build is a foundation. A really good one. What you do with it is up to you."*

**The Right Fit:**
> *"If you want to spend huge money on ads, I'm probably not the right fit. If you think there's a silver bullet for customers, I'm definitely not the fit. But if you want all best practices implemented and a solid foundation to explore upside — and you want to actually own the thing you're paying for — let's talk."*

### 5.3 — Pricing Comparison vs DocSites *[Customer-Facing]*

This table does a lot of heavy lifting. Let it. When a dentist sees "$79/month required" next to "$0 (self-host)" they start doing math in their head. When they get to "site disappears if you leave" vs. "full transferability" — that's usually when they get angry at their current vendor. Good. Channel that.

| Feature | DocSites | Groundwork Dental |
|---|---|---|
| Setup Cost | $1,999-$3,999 | $2,000 flat |
| Monthly Fee | $79/mo required | $0 (self-host) or $100/mo managed |
| Templates | Shared across clients | 100% custom per practice |
| Content | Pre-populated / generic | Unique authority content |
| Ownership | Agency controls hosting/domain | Dentist owns everything |
| Lock-in | Implicit (site disappears if you leave) | None — full transferability |
| SEO Approach | Basic geo keywords | Authority page architecture |
| Page Count | ~10-20 pages | 30-50+ pages with authority clusters |
| Schema | Basic or none | JSON-LD on every page (7+ schema types) |
| AI Search Optimization | None | Content structured for AI citation |

---

# PART II — PRODUCT & PRICING

---

## 6. Service Catalog & Pricing

### 6.1 — Core Product: Website Build (One-Time) *[Customer-Facing]*

**Price: $2,000 one-time**

Everything included in the standard engagement. Customer owns all deliverables. No surprise invoices. No "Phase 2" upsell. No "oh, hosting is extra." Two thousand dollars, and then the only thing you pay is ~$12/year to keep your domain registered. That's not a pricing strategy — it's just being honest about what things actually cost.

#### What's Delivered

| Deliverable | Details |
|---|---|
| **Multi-page website** | 30-50+ static pages: homepage, about, service hubs, service sub-pages, blog, gallery, FAQ, financing, appointment form, location pages, services directory |
| **Custom design** | No templates — unique color palette, typography (serif headings + sans-serif body), component library (buttons, cards, CTAs, accordions), responsive mobile-first layout |
| **SEO optimization** | Keyword-optimized titles/descriptions, heading hierarchy, internal linking, canonical URLs, XML sitemap, robots.txt, Open Graph/Twitter cards |
| **Schema markup** | JSON-LD on every page: LocalBusiness, BreadcrumbList, FAQPage, MedicalProcedure, Physician, AggregateRating, BlogPosting |
| **AI/LLM SEO** | Entity optimization, structured content for AI citation, unambiguous specialty signals |
| **Google Business Profile** | Complete profile audit, category corrections, services/photos/Q&A configuration |
| **Yelp + directories** | NAP consistency across Google, Yelp, Apple Maps, Bing Places |
| **Google Analytics 4** | Property created, tracking code installed, conversion events configured |
| **Google Search Console** | Property verified, sitemap submitted |
| **Appointment form** | Multi-field intake form with CAPTCHA protection, email notifications to practice |
| **Review collection setup** | Google review link, Yelp review link, QR code, review display on website |
| **Blog system** | Markdown-based content collection with frontmatter schema, dynamic routing, SEO tagging |
| **Before/after gallery** | Filterable grid with lightbox, lazy loading, procedure labels |
| **Automation scripts** | CLI tools for GBP reviews, GBP posts, GA4 reports, GSC reports, site audits — included in the codebase |
| **Photo brief** | Exact shot list provided — take yourself (iPhone is fine) or send to photographer |
| **Infrastructure accounts** | GitHub (code), Cloudflare Pages (hosting), domain — all in customer's name |
| **Documentation** | Complete handoff doc with all credentials, editing instructions, and developer transfer guide |

#### Page Architecture (Standard Build)

```
Homepage
About (doctor bio, credentials, practice story)
Schedule (appointment request form)
Gallery (before/after + procedure photos)
FAQ (comprehensive, accordion-style)
Financing (insurance, payment options)
Why a Specialist (education page)
Services Directory (all services linked)
Blog Index + Dynamic Post Pages

Dental Implants/
  ├── Hub page
  ├── Single Tooth Implant
  ├── Bone Grafting
  ├── Implant Placement
  └── Free Consultation

All-on-X/
  ├── Hub page
  ├── All-on-4
  ├── All-on-6
  ├── Full Arch Restoration
  └── Full Mouth Reconstruction

Implant Restorations/
  ├── Hub page
  ├── Implant Crowns
  ├── Implant Bridges
  ├── Implant Dentures
  └── Snap-On Dentures

Veneers/
  ├── Hub page
  ├── Porcelain Veneers
  └── Smile Makeover

Cosmetic Dentistry/
  ├── Hub page
  ├── Teeth Whitening
  └── Dental Bonding

Restorative Dentistry/
  ├── Hub page
  ├── Dental Crowns
  └── Dental Bridges

Dentures/
  ├── Hub page
  ├── Full Dentures
  └── Partial Dentures

General Dentistry/
  ├── Hub page
  └── Cleanings & Exams

Clear Aligners/
  └── Hub page

Locations/ (geo-targeted landing pages)
  ├── Primary City
  └── 6-8 surrounding cities/neighborhoods

Blog/
  ├── Index (auto-sorted by date)
  └── [slug] (dynamic markdown posts)
```

**Total: ~48 pages** for a full prosthodontic practice. Scale down for simpler practices; scale up for multi-doctor or multi-location.

### 6.2 — Optional: Managed Hosting *[Customer-Facing]*

**$100/month** — for dentists who'd rather not think about it at all.

Your website hosting is already free (Cloudflare Pages — we're not charging you for that). This $100/month is for us to babysit the whole thing so you never have to open a terminal, check if something broke, or wonder what "DNS propagation" means.

Includes:
- Hosting (which is free — you're paying for the management, not the server)
- Uptime monitoring
- Security updates
- Infrastructure maintenance
- Minor content edits by request (new hours, new doctor, updated services — just email us)

Cancel anytime. No contracts. No "30-day notice period." If you leave, you keep everything. The site keeps running. We just stop watching it for you.

### 6.3 — Optional: Content Growth Plan *[Customer-Facing]*

**Monthly content generation** (price TBD, likely $300-$500/month)

Each month the dentist receives:

- **Authority article suggestions:** Email suggesting new topics based on patient search demand. Dentist approves which to publish.
- **Published articles:** Up to 3 new SEO-structured authority articles per month. Dentist owns every article.
- **TikTok video prompts (optional):** Simple prompts for 1-3 minute educational videos. Examples: "Dentist explains why implants are expensive," "How long does Invisalign actually take?" Videos build organic outreach and become reusable content.
- **Content recycling:** Videos → blog articles, short clips, SEO pages. One video powers multiple content pieces.

### 6.4 — Optional Add-Ons (One-Time)

| Add-On | What's Included | Notes |
|---|---|---|
| **Logo design** | Clean professional logo in SVG, PNG, reversed/white versions + basic brand guide | Only if no logo exists |
| **Favicon package** | Auto-generated from logo in all required sizes | Included free with logo |
| **Photography coordination** | Shot list, photographer recommendations, on-site direction | We don't shoot; we coordinate |
| **Extended location pages** | Additional geo-targeted pages beyond standard 6-8 | Per-page pricing |
| **Case study pages** | Detailed treatment narratives with timeline, photos, patient quotes | High-converting; recommend post-launch |

### 6.5 — Growth Services (Monthly Retainers)

See [Section 24](#24-growth-services--detailed-operations) for full operational details.

| Service | Deliverables | Cadence |
|---|---|---|
| **Video-to-Everything Pipeline** | Customer records 60-90 sec video → we produce: short-form video, blog post, GBP post, social caption | 1-4 videos/month |
| **Blog Content** | Keyword-researched, SEO-optimized posts (800-1500 words) with schema, internal links | 1-4 posts/month |
| **GBP Management** | Weekly posts, review monitoring/responses, Q&A management, photo updates | Weekly |
| **Site Maintenance** | Monthly health check, dependency updates, content updates, annual SEO audit | Monthly |
| **Backlink Building** | Directory submissions, guest articles, HARO pitching, competitor gap analysis | Monthly |
| **Email Newsletter** | Mailchimp/Klaviyo setup, welcome sequence, monthly template | Monthly after setup |

### 6.6 — What This Service Does NOT Include

We're very clear about this because the dental marketing world is full of people who aren't:

- Paid advertising management (we build the house; we don't rent billboards)
- CRM systems or marketing automation (if you need HubSpot, you need a different vendor and a bigger budget)
- Aggressive SEO campaigns or lead generation guarantees (anyone "guaranteeing" leads is guaranteeing you'll keep paying them)
- Complex enterprise integrations (if you're a 50-location DSO, we're probably too small and too honest for your procurement process)
- Guaranteed patient growth — no service can guarantee this honestly. We'll say it plainly: **we don't know if this will get you more patients.** What we know is that every practice with a strong online foundation does better than one without. We build the foundation. The rest depends on your reputation, your location, your reviews, and frankly, how good you are at dentistry.

---

## 7. Payment Infrastructure

### 7.1 — Platform: Stripe

Stripe handles all payments. No Shopify (you're not selling sneakers — you don't need a cart). No complex e-commerce. Just clean payment links and subscriptions.

**Why Stripe:**
- No monthly fee (just 2.9% + $0.30 per transaction)
- Payment Links = zero code, just share a URL
- Subscriptions built in
- Professional invoices sent automatically
- Dentists see a clean, trusted checkout
- Dashboard showing all clients, payments, subscriptions
- Can offer card or ACH (bank transfer, lower fees)

### 7.2 — Products to Create in Stripe

| Product | Price | Type |
|---|---|---|
| Professional Dental Website | $2,000 | One-time |
| Managed Hosting | $100/month | Recurring subscription |
| Content Growth Plan | $X/month | Recurring subscription |

### 7.3 — Payment Flow

- **One-time build:** Stripe Payment Link or Invoice. Dentist clicks, enters card, done. Can embed as a button on groundworkdental.com.
- **Monthly services:** Stripe Billing subscription. Dentist enters card once, charged monthly. Receives proper invoice each month.
- **Setup time:** ~30 minutes to create Stripe account and configure all products.

---

# PART III — SALES & ONBOARDING

---

## 8. Sales Process

### 8.1 — Lead Qualification

Before investing time in a proposal, confirm:

- [ ] Practice type: prosthodontist, implant specialist, or high-value cosmetic? General dentist emphasizing implants? (acceptable)
- [ ] Current website situation: Has one and unhappy? Expensive but mediocre? No site at all?
- [ ] Budget alignment: Can they invest $2,000?
- [ ] Decision maker: Is the person we're talking to the owner?
- [ ] Timeline: Reasonable timeline (can deliver in 1-2 weeks, but plan for 6-8 weeks with their review cycles)
- [ ] Geographic fit: Doesn't affect delivery, but affects local SEO strategy

### 8.2 — Discovery Call Flow

**Duration:** 30-45 minutes

**Flow:**

1. **Their practice** (5 min) — How long practicing? Specialty? Solo or multi-doctor?
2. **Current digital presence** (10 min) — Current website? Platform? Monthly cost? What frustrates them? Own their domain? Google Maps presence?
3. **Goals** (10 min) — What procedures to attract? Ideal patient? Geographic area? Competitors?
4. **Our approach** (10 min) — Walk through what we build and how it's different (own everything, no lock-in, static performance, comprehensive SEO). Show a live example.
5. **Next steps** (5 min) — Send intake document, quote based on scope, schedule follow-up

### 8.3 — Proposal & Closing

1. Send the **intake document** (see Section 9)
2. Send **custom quote** — one-time build price, what's included, optional growth services, timeline, total cost of ownership after handoff ($12-15/year)
3. **Follow up** within 48 hours if no response
4. On agreement: collect payment via Stripe → kick off onboarding

---

## 9. Customer Onboarding

### 9.1 — Design Principle: Workspace, Not Form

Nobody wants to fill out a 47-field intake form. (Especially not a dentist who's already filling out insurance forms all day.) So we don't do that.

Instead: a setup dashboard with progressive completion, autosave, and no pressure to finish in one sitting. Each section is a card they can open anytime, complete in any order, and save independently. If they abandon it for two weeks, that's fine — their progress is saved.

**Tools:** Fillout, Tally + Airtable, or Notion client portal.

**"Done For You" mode:** Add a checkbox: *"I'd rather just have you handle most of this."* (Most dentists pick this.) If selected, only require practice name, address, phone, services. We research the rest from their existing site, Google, and Yelp. They're dentists — they have patients to see. We can figure out their office hours from Google.

### 9.2 — What We Need From the Customer *[Customer-Facing]*

Everything is flexible — the only truly required info is practice basics (9.2.1).

#### 9.2.1 — Practice Basics (REQUIRED)

| Item | Notes |
|---|---|
| Practice name | Legal name + display name if different |
| Address | Street, suite, city, state, ZIP |
| Phone | Main patient-facing line |
| Email | Patient-facing + form submissions inbox |
| Hours | Each day including "Closed" days |
| Domain | Current domain, or flag for new one |
| Languages spoken | For website and local SEO |

#### 9.2.2 — Doctor & Team (Optional)

For each doctor: full name + credentials, dental school + year, specialty residency, board certifications, memberships, awards, personal details.

> **Operator note:** Bullet points and rough notes are fine. We write the bios. If not ready, we build placeholder bios and fill in after launch.

#### 9.2.3 — Services & Treatments (Optional)

For each service: name as displayed, specifics worth calling out, FAQs patients ask, before/after photos.

> **Operator note:** A list of service names is enough to start. We draft all copy. Default page architecture covers major prosthodontic categories — customize based on what they offer.

#### 9.2.4 — Photos & Visual Assets (Optional)

Office (exterior, reception, treatment rooms), team (headshots, candid shots), before/after (labeled by procedure), logo & brand materials.

> **Operator note:** Phone photos are acceptable for launch. Swap in professional shots later. Images converted to WebP (~150KB each).

#### 9.2.5 — Look & Feel (Optional)

Sites they like (URLs + notes), color preferences, tone (formal/conversational/clinical/friendly), things to avoid.

> **Operator note:** Informs Tailwind color token customization. Default palette: navy headings, teal CTAs, gold accents, warm neutrals, serif headlines + sans body.

#### 9.2.6 — Existing Online Accounts (Optional)

| Account | Why We Need It |
|---|---|
| Google account login | GBP, Analytics, Search Console |
| Domain account login | DNS cutover only |
| Current website login | Content export before switching |
| Social & directory logins | Yelp, Facebook, Healthgrades — NAP consistency |

#### 9.2.7 — Additional Info (Optional)

Insurance plans, patient forms, promotions, awards/press, booking software (Zocdoc, Dentrix, Open Dental), multi-language needs, testimonials.

### 9.3 — Onboarding Process (Backend)

**Step 1: Receive Intake (Day 1)** — Review for completeness, flag gaps.

**Step 2: Kickoff Call (Day 2-3)** — Walk through intake, clarify ambiguities, confirm scope and page architecture, collect credentials.

**Step 3: Account Setup (Day 3-5)** — Create GitHub repo, Cloudflare Pages project, GA4, GSC, audit GBP, register domain if needed, set up Formspree + Turnstile CAPTCHA.

**Step 4: Content Gathering (Day 3-10)** — Process photos (WebP), draft bios, draft service page copy, research FAQs, identify keywords, send drafts for review.

---

# PART IV — PRODUCTION

---

## 10. Production Pipeline — Website Build

### 10.1 — Project Setup

```bash
# Initialize from template (or clone base repo)
# Customize for new customer:

# 1. Update site config
src/config/site.ts
  → Practice name, phone, email, address, hours
  → Doctor name, credentials
  → Google review link, GBP profile link
  → LocalBusiness schema fields

# 2. Update navigation
src/config/navigation.ts
  → Service categories and sub-pages based on what this practice offers

# 3. Customize design tokens
tailwind.config.mjs
  → Brand colors (navy, teal, gold or custom palette)
  → Typography

# 4. Process and place images
public/images/branding/  → logo, favicon source, OG image
public/images/team/      → doctor/staff headshots (WebP)
public/images/heroes/    → hero section backgrounds (WebP)
public/images/gallery/   → before/after + procedure photos (WebP)
```

### 10.2 — Design System Configuration

**`tailwind.config.mjs`** — Color tokens, fonts, spacing:
```
brand-navy    → hero backgrounds, headings
brand-teal    → CTA buttons, accents
brand-gold    → heading highlights, accent details
charcoal      → primary body text (#111111)
mid-gray      → secondary text (#666666)
surface-2     → card backgrounds (#F7F6F3)
border-light  → dividers (#E5E4E0)

Fonts:
  serif: Playfair Display (h1, h2 headings)
  sans: DM Sans (body, UI, nav)
```

**`src/styles/global.css`** — Component utilities:
```
.btn-primary, .btn-secondary, .btn-accent
.section-heading, .section-subheading
.prose-dental, .card, .nav-link
```

### 10.3 — Page Development

Each page follows a consistent pattern:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import CTABlock from '../../components/CTABlock.astro';
import FAQBlock from '../../components/FAQBlock.astro';
import { localBusinessSchema } from '../../config/site';

const procedureSchema = { '@context': 'https://schema.org', '@type': 'MedicalProcedure', ... };
const faqs = [{ question: '...', answer: '...' }];
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(...) };
---

<BaseLayout title="..." description="..." schema={[localBusinessSchema, procedureSchema, faqSchema]}>
  <!-- Hero → Content → FAQ accordion → CTA block -->
  <FAQBlock faqs={faqs} />
  <CTABlock variant="dark" />
</BaseLayout>
```

**Operator checklist per page:**
- [ ] Title tag: 30-60 characters, includes target keyword
- [ ] Meta description: 120-160 characters, includes keyword + CTA
- [ ] Single H1, not duplicate of title
- [ ] Heading hierarchy: H1 → H2 → H3 (no skipped levels)
- [ ] Target keyword in H1, first paragraph, at least one H2
- [ ] Internal links to related service pages
- [ ] CTA block at bottom
- [ ] FAQ section with 4-8 questions
- [ ] JSON-LD schema: LocalBusiness + page-specific
- [ ] Images have descriptive alt text
- [ ] Mobile responsive (check at 375px width)

### 10.4 — Component Library

| Component | Purpose |
|---|---|
| **Header** | Desktop horizontal nav with dropdowns, mobile hamburger, sticky, phone + book CTA |
| **Footer** | 4-column layout, NAP block, Google review CTA, auto copyright year |
| **CTABlock** | Three variants (dark/light/white), phone + appointment button |
| **FAQBlock** | Accordion with auto FAQPage schema, keyboard accessible |
| **GalleryGrid** | Filterable by procedure, lightbox, lazy loading |
| **BeforeAfter** | Side-by-side cards with procedure labels |

### 10.5 — Homepage Special Features

**Google Reviews Integration:**
- Fetches live reviews from Google Places API at build time
- Filters: rating >= 4 stars, comment length > 40 characters
- AggregateRating schema with live data
- Fallback: hardcoded testimonials if API fails

### 10.6 — Location Pages

Geo-targeted landing pages for surrounding cities. Each targets "[service] in [city]" keywords, includes city-specific content, links to main service pages, has LocalBusiness schema.

Standard set: primary city + 6-8 surrounding cities/neighborhoods.

---

## 11. Website Architecture Standards

### 11.1 — The Authority Page Architecture

Most dentists have Home, Services, Contact — maybe 5-10 pages. Dominant practices build 100+ pages. The architecture captures every stage of patient intent:

| Stage | Example Search | Page Type |
|---|---|---|
| Research (top) | "veneers cost" | Authority article |
| Evaluation (mid) | "best veneers dentist" | Service page |
| Decision (bottom) | "cosmetic dentist near me" | Homepage / location page |

### 11.2 — Authority Article Selection Logic

The system selects which authority pages to build based on services offered. Not random blogs — rules-based:

| If Service Offered | Must Consider These Articles |
|---|---|
| Invisalign | Cost, vs Braces, Timeline, Is It Worth It, For Teens |
| Implants | Cost, Recovery, vs Dentures, Pain Timeline, How They Work |
| Cosmetic | Veneers Cost, vs Bonding, Whitening Options, Smile Makeover |
| Emergency | Emergency Dentist vs Urgent Care, What Counts as Emergency |
| Prosthodontics | What Is a Prosthodontist, Specialist vs General Dentist |

Rank by: service importance, local business value, search demand, gaps in current site.

### 11.3 — Content Hub Structure

Instead of random blog posts, build content hubs:

**Example Implant Cluster:**
- Hub page: Dental Implants
- Dental Implant Cost
- Dental Implant Recovery
- Dental Implants vs Dentures
- How Long Do Implants Last
- Implant Procedure Timeline

Google rewards comprehensive topical coverage because it signals expertise.

---

## 12. SEO & Schema Implementation

### 12.1 — On-Page SEO (Every Page)

| Element | Standard |
|---|---|
| Title tag | 30-60 chars, keyword + practice name |
| Meta description | 120-160 chars, keyword + CTA |
| H1 | Single per page, contains keyword, not duplicate of title |
| Canonical URL | Auto-generated from path |
| Open Graph + Twitter Card | For social sharing |

### 12.2 — Schema Markup (JSON-LD)

Every page gets LocalBusiness + BreadcrumbList. Additional schemas per page type:

| Page Type | Schema Types |
|---|---|
| All pages | `LocalBusiness` (Dentist subtype), `BreadcrumbList` |
| Homepage | + `AggregateRating` (live from Google Reviews API) |
| About | + `Physician` (with alumni, affiliations, specialties) |
| Service pages | + `MedicalProcedure` (with specialty, body location) |
| FAQ pages | + `FAQPage` (auto-generated from FAQ arrays) |
| Blog posts | + `BlogPosting` (with author, date, keywords) |
| Appointment | + `ContactPoint` (availability hours) |

### 12.3 — Technical SEO

| Element | Implementation |
|---|---|
| XML Sitemap | Auto-generated by `@astrojs/sitemap`, submitted to GSC |
| Robots.txt | Standard allow-all with sitemap reference |
| 301 Redirects | For migration (old URL → new URL mapping) |
| Image optimization | WebP (~150KB), lazy loaded |
| Page speed | Target 90+ (desktop), 85+ (mobile) |
| Core Web Vitals | All green (LCP, FID, CLS) |
| HTTPS | Automatic via Cloudflare |

### 12.4 — AI/LLM SEO

Optimizations for AI-generated answers (ChatGPT, Google AI Overviews, Perplexity, Claude):

- Authoritative, factually rich content written to be cited
- Structured FAQs in the format AI models excerpt and surface
- Entity optimization — practice clearly defined as a local specialty entity
- Schema `sameAs` links connecting to Google, Yelp, Healthgrades, Zocdoc profiles
- Unambiguous specialty signals: "prosthodontist" not just "dentist"
- Clear, definitive answer formatting (definition → explanation → evidence)

### 12.5 — Sitemap Configuration

| Page Category | Priority | Change Frequency |
|---|---|---|
| Homepage | 1.0 | weekly |
| High-value pages (implant hubs, schedule, about) | 0.9 | weekly |
| Service sub-pages | 0.8 | monthly |
| Blog index | 0.7 | weekly |
| Blog posts | 0.6 | monthly |

Excluded: `/thank-you`, `/referral`

---

## 13. Google Business Profile Setup & Optimization

### 13.1 — Initial Setup

- [ ] Verify GBP listing is claimed and verified
- [ ] Set primary category: match specialty (e.g., "Prosthodontist" not "Dentist")
- [ ] Set secondary categories: "Dentist," "Cosmetic Dentist," "Dental Implants Provider"
- [ ] Verify NAP matches website exactly
- [ ] Add complete business description with keywords
- [ ] Set hours to match `site.ts`
- [ ] Add all service categories with descriptions
- [ ] Upload 10-20 photos: exterior, interior, team, procedures
- [ ] Set up Q&A with pre-populated common questions
- [ ] Add website URL, appointment URL
- [ ] Verify service area

### 13.2 — GBP Automation Scripts

All scripts require OAuth credentials in `.env`. See [Section 30](#30-automation-scripts--operator-reference) for full reference.

- **Fetch reviews:** `node scripts/gbp-reviews.js --limit 10 --stars 4 --unanswered`
- **Reply to review:** `node scripts/gbp-respond.js --review-id <id> --reply "Thank you..."`
- **Create post:** `node scripts/gbp-post.js --text "..." --cta-type BOOK --cta-url https://site.com/schedule`

---

## 14. Forms, CAPTCHA & Lead Capture

### 14.1 — Appointment Request Form

**Backend:** Formspree (static form handler — no server needed)

| Field | Type | Required |
|---|---|---|
| First Name | text | Yes |
| Last Name | text | Yes |
| Phone | tel | Yes |
| Email | email | Yes |
| Procedure of Interest | select | No |
| Preferred Day | select | No |
| Preferred Time | select | No |
| How Did You Hear | select | No |
| Additional Notes | textarea | No |
| CAPTCHA | Turnstile | Yes (invisible) |

**Flow:** User fills form → CAPTCHA validates → POST to Formspree → email to practice → redirect to `/thank-you`

### 14.2 — Formspree Setup

1. Create account (free tier: 50 submissions/month)
2. Create form → get endpoint URL
3. Set `FORMSPREE_ENDPOINT` in `.env` and GitHub Secrets
4. Configure email notification to practice inbox

### 14.3 — CAPTCHA (Cloudflare Turnstile)

Invisible to most users. Script loaded async. Sitekey via `PUBLIC_TURNSTILE_SITE_KEY`.

---

## 15. Content System — Blog & Content Collections

### 15.1 — Blog Schema

```typescript
schema: {
  title: string
  description: string (max 160)
  publishDate: date
  updatedDate?: date
  targetKeyword: string
  category: enum ['dental-implants', 'all-on-x', 'dentures', 'cosmetic', 'prosthodontics']
  author: string
  draft: boolean
  featuredImage?: string
  featuredImageAlt?: string
  faqs?: [{question, answer}]
}
```

### 15.2 — Creating a Blog Post

1. Create `src/content/blog/your-slug.md`
2. Add frontmatter with title, description, keyword, category, FAQs
3. Write markdown content
4. Set `draft: false` when ready
5. Commit and deploy — auto-pulls and sorts

### 15.3 — Content Quality Standards

Every post must:
- [ ] Target a specific keyword (confirmed via research)
- [ ] Have meta description with keyword + CTA (120-160 chars)
- [ ] Include keyword in H1 and first 100 words
- [ ] Be 800-1,500 words
- [ ] Include 4-8 embedded FAQs (auto-generates schema)
- [ ] Link to 2-3 related service pages
- [ ] Include CTA at bottom
- [ ] Be factually accurate
- [ ] Use natural language (not keyword-stuffed)

### 15.4 — Blog Content Types by Priority

1. Cost guides (highest commercial intent)
2. Treatment comparisons (decision-stage)
3. Procedure walkthroughs (trust-building)
4. Local intent posts (geo-targeting)
5. Patient education (authority-building)

---

## 16. Photo Workflow

### 16.1 — Photo Brief (Provided to Every Client)

**Required shots:**
- Dentist headshot
- Team photo (group)
- Office exterior
- Reception / waiting area
- Treatment room
- Dentist working with patient (staged)
- Equipment close-up
- 3-5 individual team member photos

**Style:** Natural lighting, clean backgrounds, friendly expressions

**Orientation:** Landscape (horizontal) for headers, portrait for team pages. Important: tell photographers to shoot horizontal — most default to vertical (Instagram style), which breaks layouts.

### 16.2 — Photo Options *[Customer-Facing]*

**Option 1 — Take them yourself.** iPhone is completely fine. Seriously. That $1,200 phone in your pocket takes better photos than the $3,000 DSLR your marketing agency brought to a photoshoot in 2019. Just make sure the office is clean and the lighting is decent. We'll handle the rest.

**Option 2 — Hire a photographer.** Use Snappr or a local photographer. Send them the pre-generated brief (we provide this — exact shots, orientations, lighting notes). Typical shoot: ~60 minutes, 25-40 usable photos. Worth it if you can swing $200-400. But Option 1 works perfectly fine for launch.

### 16.3 — Image Processing (Backend)

All images converted to WebP (~150KB each). Organized into `/public/images/{heroes,team,branding,gallery}/`. Phone photos acceptable for launch — swap in professional shots later.

---

# PART V — INFRASTRUCTURE & DEPLOYMENT

---

## 17. Technology Stack & Infrastructure Decisions

### 17.1 — Why This Stack (Not WordPress, Wix, Squarespace)

Every dentist asks "why not just use WordPress?" and the answer is: you can. You'll just pay $30-50/month for hosting, install 17 plugins to do what HTML does natively, wait 4 seconds for your homepage to load, and get hacked twice a year because you forgot to update a plugin called "WP Super Cache Pro." But sure — WordPress is "industry standard."

| Platform | Verdict |
|---|---|
| **Astro + Cloudflare** (chosen) | Extremely fast (90+ PageSpeed), free hosting, global CDN, no JavaScript by default, developer-transferable, no lock-in. Your site is literally just HTML files on a CDN. There's nothing to hack, nothing to update, nothing to pay for. |
| **Wix/Squarespace** | Platform lock-in, slower performance, limited SEO control, poor developer workflow, impossible to scale programmatically. You're paying $16-49/month for a visual editor you'll use once and then never touch again. |
| **WordPress** | Plugin bloat, maintenance overhead, security vulnerabilities, hosting costs, mediocre performance. The industry default for people who haven't looked at what else exists since 2015. |
| **GoDaddy** | Expensive, poor developer tooling, confusing DNS. The company that makes buying a domain feel like navigating an airport duty-free shop. |

### 17.2 — Why Cloudflare Specifically

Always standardize on Cloudflare. Cover migration cost yourself ($10-15/year per domain). The operational simplicity is worth far more than the $15. And here's the part that blows dentists' minds: **Cloudflare Pages hosting is free.** Not "free trial." Not "free for 30 days." Free. Forever. Unlimited bandwidth. Global CDN. Automatic HTTPS. The dentist's only ongoing cost is the domain registration — typically $12-15/year. That's it. Just keeping the lights on.

When you tell a dentist who's been paying $300/month for hosting that their new hosting costs $0, you can literally hear the silence on the phone while they process it.

- Extremely fast CDN globally
- Free SSL (automatic, no configuration)
- Cheap domain registrar (no markup — unlike GoDaddy, which treats every checkout like an upsell gauntlet)
- DNS + hosting in one place (one login, one dashboard)
- Works with GitHub deployments (push code → site updates automatically)
- Easy developer transfer (add someone, remove someone — no vendor calls)
- No platform lock-in (it's just HTML files on a CDN — move them anywhere)

### 17.3 — Full Stack

| Layer | Tool |
|---|---|
| Site Generator | Astro v5 (static site generation) |
| Styling | Tailwind CSS |
| Hosting | Cloudflare Pages (free, global CDN, auto-HTTPS) |
| DNS/CDN | Cloudflare |
| Repository | GitHub |
| Forms | Formspree |
| CAPTCHA | Cloudflare Turnstile |
| Analytics | Google Analytics 4 |
| SEO Monitoring | Google Search Console |
| Image Pipeline | WebP conversion, lazy loading |

### 17.4 — Important: No Visual Editor

No drag-and-drop visual editor. This is intentional, and it's the one thing that sounds scary but is actually a feature. Visual builders (WordPress Elementor, Wix Editor, Squarespace) produce slow websites, break SEO, create lock-in, and — here's the kicker — the dentist uses them exactly once to change their phone number and then never opens them again. You're paying $30/month for a tool you used for 45 seconds.

For dentists who want to edit their own site: offer Claude Code desktop setup (GitHub + Cloudflare connection). Vibe-edit with AI, push updates live. Tell them it's like texting an assistant: "Change the office hours to close at 5 on Fridays" and it just... does it. Most won't use it, but the ones who do will feel like wizards. And it reinforces the ownership philosophy — *it's your site, you can change it whenever you want.*

---

## 18. Infrastructure Ownership Model

### 18.1 — Core Principle: Client Owns, Agency Administers

This is the part that makes other agencies uncomfortable. Every single account is in the dentist's name. We have admin/collaborator access — the kind you can revoke with one click. If the dentist removes our access, nothing breaks. The site keeps running. The analytics keep tracking. The forms keep submitting. We just can't see it anymore. That's how it should work.

| System | Owner | Agency Access |
|---|---|---|
| Domain Registrar | Dentist | Admin |
| Cloudflare Account | Dentist | Admin (multi-user) |
| GitHub Repository | Dentist | Collaborator |
| Google Business Profile | Dentist | Manager (never Owner) |
| Google Analytics | Dentist | Editor |
| Google Search Console | Dentist | Full Access |
| Yelp | Dentist | Manager |
| Formspree | Dentist (or shared) | Admin |

If the dentist removes agency access, nothing breaks.

### 18.2 — Ownership Stages

**Before purchase (preview/sales phase):** Owned by agency — GitHub repo, Cloudflare preview deployment, preview subdomain. Do not attach their custom domain or move Pages into their Cloudflare unpaid.

**After $2,000 (production — default path):** Owned by dentist — domain, Cloudflare account, GitHub repo, analytics, search console. Use Option B: keep original codebase, redeploy fresh into dentist-owned infrastructure. 30-day revision window starts on first feedback after payment.

**$500 side offer (exception only):** If they want the real domain live before full payment, take $500 first (credited to $2,000), then move Pages + domain into their Cloudflare as-is. No revision rounds until the balance. Hold GBP / GSC / GitHub invite until full payment. Not advertised on the website — offer it in conversation to keep momentum. Full policy: `References/GO_LIVE_AND_PAYMENT.md`.

### 18.3 — How to Add Admin Access (Include in Client Docs)

**Google Business Profile:** Business Profile Settings → People & Access → Add → Agency Gmail → Manager

**Google Analytics:** Admin → Property Access Management → Add Users → Agency email → Editor

**Google Search Console:** Settings → Users & Permissions → Add User → Full Access

### 18.4 — Credential Management

Use 1Password or Bitwarden. Store account URLs, access roles, recovery info. Never rely on memory.

---

## 19. Deployment & CI/CD Pipeline

### 19.1 — Architecture

```
Customer's GitHub Repo (source code)
         │
         ▼
GitHub Actions (CI/CD on push to main)
         │
         ├── npm ci
         ├── npm run build (Astro SSG → /dist)
         └── Deploy to Cloudflare Pages
                  │
                  ▼
        Cloudflare CDN (global edge)
                  │
                  ▼
         live site
```

### 19.2 — GitHub Actions Workflow

**Trigger:** Push to `main` branch (or manual dispatch)

**Steps:**
1. Checkout code
2. Setup Node.js v20 with npm caching
3. `npm ci`
4. `npm run build` with environment variables
5. Deploy to Cloudflare Pages via `cloudflare/wrangler-action@v3`

**Deployment time:** ~2-3 minutes from push to live.

### 19.3 — Required Secrets

**GitHub Secrets:** `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `PUBLIC_GA4_MEASUREMENT_ID`, `PUBLIC_TURNSTILE_SITE_KEY`, `PUBLIC_TURNSTILE_SECRET_KEY`, `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`

### 19.4 — Git Workflow

```bash
git checkout -b claude/<feature-name>-<id>
git add <specific files>
git commit -m "feat: description of change"
git push origin claude/<feature-name>-<id>
# Create PR → merge → auto-deploys
```

### 19.5 — Cloudflare Pages Setup

1. Create Cloudflare account (in customer's name)
2. Create Pages project
3. Connect to GitHub repository
4. Build settings: Framework = Astro, Build command = `npm run build`, Output = `dist`
5. Add environment variables
6. Configure custom domain
7. SSL/HTTPS: automatic

---

## 20. Migration From Existing Website

### 20.1 — What We Handle

Migration is where most agencies either scare dentists into staying ("it's too risky to switch!") or botch the transition and tank their rankings. We do it methodically:

- Full content export and review (we save everything — even the stuff we'll rewrite)
- URL mapping — every old URL gets a 301 redirect (this preserves the SEO value they've built, even if they don't know they've built any)
- Domain / DNS cutover — zero downtime (the old site goes down, the new one comes up, nobody notices)
- GA4 migration — historical data preserved (their analytics don't start from zero)
- GSC re-verification and sitemap submission
- NAP consistency check across all directories (the boring stuff that actually matters)

### 20.2 — Migration Process

**Phase 1: Content Audit (Days 1-3)** — Export all pages/posts/images, identify worth keeping vs rewriting, document all URLs.

**Phase 2: URL Mapping (Days 3-5)** — Map old URLs to new equivalents, create redirect rules. Old keyword-stuffed URLs (e.g., `dentist-in-long-beach-ca.html`) map to clean modern pages (`/cosmetic-dentistry`).

**Phase 3: DNS Preparation (Day 5)** — Document current DNS, prepare new records, verify MX records won't disrupt email.

**Phase 4: Cutover (Launch Day)** — Deploy, update DNS, verify SSL, test redirects, submit sitemap, update GBP URL, monitor for 404s.

### 20.3 — Common Migration Sources

| Platform | Typical Issues |
|---|---|
| PatientPop | Proprietary CMS, limited access, vendor may actively resist migration (they don't want to lose the revenue — expect pushback) |
| WordPress | Plugin bloat, messy HTML, 47 plugins doing the job of 3 lines of code |
| Wix | No native export, no URL-level redirects — they made leaving hard on purpose |
| Squarespace | Limited redirect control, better than Wix but still annoying |
| Dex Knows | Vendor-locked, poor content quality, the dentist is paying $400/month and doesn't know why |

---

# PART VI — QUALITY & LAUNCH

---

## 21. Quality Assurance & Launch Checklist

### 21.1 — Pre-Launch QA

**Technical:**
- [ ] `npm run build` zero errors
- [ ] PageSpeed 90+ desktop, 85+ mobile
- [ ] Core Web Vitals all green
- [ ] HTTPS working
- [ ] Sitemap at `/sitemap.xml`
- [ ] `robots.txt` correct
- [ ] All forms submit successfully
- [ ] CAPTCHA functioning
- [ ] GA4 tracking verified
- [ ] Search Console verified + sitemap submitted
- [ ] No console errors

**Content:**
- [ ] Every page: unique title (30-60 chars), unique description (120-160 chars), single H1
- [ ] No placeholder text (`{{`, `lorem`, `TBD`, `TODO`)
- [ ] Phone/address/email/hours correct and match GBP
- [ ] Doctor bio reviewed and approved
- [ ] All images have alt text
- [ ] No broken internal links

**Schema:**
- [ ] LocalBusiness on every page (validate with Rich Results Test)
- [ ] BreadcrumbList on every page
- [ ] FAQPage on pages with FAQs
- [ ] MedicalProcedure on treatment pages
- [ ] Physician on about page
- [ ] AggregateRating on homepage

**Mobile:**
- [ ] Navigation works (hamburger, dropdowns)
- [ ] Forms usable (fields not cut off)
- [ ] CTAs tappable (44px minimum)
- [ ] Phone click-to-call working

### 21.2 — Site Audit Script

```bash
node scripts/site-audit.js --url https://preview-url.pages.dev --limit 50
```

### 21.3 — Customer Review Process

1. Deploy to preview URL (automatic on PR)
2. Send preview link with review instructions
3. Customer reviews: content accuracy, photos, contact info, look/feel
4. Collect feedback in one round
5. Implement changes
6. Second review if significant changes; otherwise launch

---

## 22. Post-Launch Handoff

### 22.1 — What the Customer Receives

This is the part where dentists don't believe us. Show them the table. Let it sink in.

| Asset | Location | Cost |
|---|---|---|
| Website source code | GitHub (their account) | Free |
| Hosting | Cloudflare Pages (their account) | Free |
| Domain | Their registrar / Cloudflare | ~$12-15/year |
| Google Analytics 4 | Their Google account | Free |
| Google Search Console | Their Google account | Free |
| Google Business Profile | Their Google account | Free |
| Formspree | Their account | Free (50/mo) |
| Automation scripts | In the GitHub repo (`/scripts/`) | Free |

**Total minimum ongoing cost: ~$12-15/year.** That's the domain renewal. Just keeping the lights on. No WordPress hosting fee. No Wix subscription. No agency "maintenance" charge for a server they're renting from AWS for $5/month and marking up to $200. Twelve dollars a year. The cost of two coffees.

Compare that to what they're currently paying: $200-500/month to an agency for hosting that costs $5/month wholesale. That's $2,400-6,000/year in pure markup — for a website they don't even own. Let that number do the selling for you.

### 22.2 — Handoff Documentation

Every client gets a plain-English handoff document. No jargon. No "refer to your CLI documentation." Just:

1. Account credentials summary (what you own, where to log in)
2. How to make simple changes (editing content, updating hours — or just email us)
3. How to add a blog post (create a file, write in plain text, save — it publishes automatically)
4. How to run automation scripts (reviews, GBP posts, analytics — for the adventurous)
5. Support options (growth services available if you want them, not required)
6. Cost of ownership summary (spoiler: it's $12/year)
7. **The "hand it to someone else" guide** — step-by-step instructions for giving the entire project to another developer, your niece, or literally anyone with a GitHub account. We include this because we mean it when we say no lock-in.

### 22.3 — Upsell at Handoff

Soft touch only. The handoff itself is the best upsell — dentists who see how much you gave them for $2k are naturally open to continuing:

- "Now that your site is live, the most impactful next step is consistent content. Our video-to-everything pipeline turns a 60-second phone recording into a month of content. You talk for a minute; we handle the rest."
- "We can write 2-4 blog posts per month targeting keywords where you're close to page 1. You won't even know they're being published until your traffic goes up."
- "A managed hosting plan ($100/month) means you never think about the website again. We monitor it, update it, and fix things before you notice. Cancel whenever."

---

# PART VII — ONGOING OPERATIONS

---

## 23. Ongoing Operations & Maintenance

### 23.1 — If Customer Self-Manages

Most won't. But the ones who do are usually the tech-curious dentist or their office manager who "knows computers." Give them everything they need to succeed:

Provide: how to update `site.ts`, how to add blog posts, how to use automation scripts. Recommend Claude Pro ($20/month) for AI-assisted code changes — tell them it's like having a developer on call for $20/month. "Open the app, tell it what you want changed, it changes it." That's the whole pitch for self-management.

### 23.2 — If on Managed Hosting ($100/month)

**Weekly:**
- [ ] Monitor form submissions
- [ ] Check for unanswered reviews: `node scripts/gbp-reviews.js --unanswered`
- [ ] Reply to reviews
- [ ] Create GBP post if content available

**Monthly:**
- [ ] Site audit: `node scripts/site-audit.js`
- [ ] GA4 report: `node scripts/ga4-report.js --days 30`
- [ ] GSC report: `node scripts/gsc-report.js --days 30`
- [ ] Check broken links, 404s
- [ ] Apply dependency updates
- [ ] Check PageSpeed for regressions

**Quarterly:**
- [ ] Full content audit
- [ ] FAQ review
- [ ] Competitor check
- [ ] Keyword ranking review

**Annually:**
- [ ] Full SEO audit
- [ ] Refresh homepage copy
- [ ] Update doctor bio
- [ ] Review hours, insurance, services
- [ ] Renew domain

---

## 24. Growth Services — Detailed Operations

### 24.1 — Video-to-Everything Content Pipeline

This is the highest-leverage growth service. The dentist does 60 seconds of work. We turn it into a month of content. They don't even need to be good on camera — authenticity beats production value every time. A dentist in scrubs talking to their phone camera is more trustworthy than a polished studio video with stock music.

**What the customer does:** Record 60-90 second video from phone prompts we send. That's it. They can do it between patients. Standing in the hallway. We don't care about production quality — we care about the words.

**Example prompts:**
- "What's the difference between a prosthodontist and a general dentist?" (this one always gets views)
- "Walk me through what happens the day someone gets an implant placed."
- "What are the 3 biggest myths about All-on-4?"

**What we produce from each video:**

| Deliverable | Details |
|---|---|
| Short-form video | Edited with captions for TikTok/Reels/Shorts (15-60 sec) |
| Blog post | 800-1,200 words, keyword-optimized, FAQs, internal links |
| GBP post | 100-300 words with CTA |
| Social caption | Platform-appropriate for Instagram/Facebook |

### 24.2 — Blog Content (Without Video)

Customer does nothing. We research, write, and publish.

**Workflow:**
1. Monthly keyword research (GSC data, competitor gaps, seasonal trends)
2. Write 800-1,500 word post with proper structure
3. Create markdown file, commit, deploy
4. Share live URL with customer

### 24.3 — Backlink Building

**Tier 1 — Directories:** Healthgrades, Zocdoc, WebMD, RealSelf, Chamber of Commerce, BBB, ACP/ADA/CDA profiles

**Tier 2 — Content-Based:** Guest articles, HARO pitching, unlinked mention outreach

**Tier 3 — Competitive Analysis:** Competitor backlink gap analysis, monitor new competitor links monthly

### 24.4 — Email Newsletter

**Setup:** Mailchimp/Klaviyo account (customer-owned), branded template, 3-email welcome sequence, email capture on website.

**Monthly:** Draft content → customer approval → schedule/send → report (open rate, clicks, unsubscribes).

---

# PART VIII — MARKETING YOUR AGENCY

---

## 25. Marketing Strategy for Groundwork Dental

### 25.1 — Content Marketing (Primary Channel)

The entire marketing strategy is: give away all the information for free. Every secret, every framework, every thing a dental marketing agency charges $5k to explain in a sales call — publish it. Blog it. YouTube it. LinkedIn it.

Why? Because dentists will read it, appreciate the honesty, realize the implementation requires actual engineering, and hire you anyway. The information is free. The implementation is $2k. That's the business model. It's not even a trick — it's just how professional services work. Lawyers publish legal advice for free. Accountants explain tax strategy for free. The people who need it done still hire professionals.

**Article topics that attract dentists (and the self-aware angle for each):**

1. **The Real Dental SEO Funnel: Why "Dentist Near Me" Isn't Where Your Best Patients Come From** — The $30k implant patient doesn't search "dentist near me." They search "dental implant cost." Your agency isn't targeting that. We explain why.
2. **Dental SEO 101: The Baseline Every Practice Needs Just to Show Up on Google** — Here's literally everything you need to do. Yes, we're giving this away. No, you probably won't do it yourself. That's okay.
3. **Why Most Dental Marketing Agencies Plateau Your Growth** — We name names (tactfully). We explain the playbook every agency runs. Dentists forward this to each other.
4. **The $30K Keyword: How Treatment Searches Drive High-Value Cases** — One implant case pays for years of SEO work. Your agency is optimizing for "teeth cleaning near me." Let's talk about that.
5. **From Local Listing to Local Authority: What Real Dental SEO Looks Like** — Topical authority vs. having a Google listing and calling it a day.
6. **The 3 Engines of Dental Search Growth** — Maps, authority, and research traffic. Everything else is noise. (We say that a lot because it's true.)
7. **How to Evaluate a Dental SEO Agency (Without Getting Sold a Template)** — Practical framework and red flags. This article alone will save dentists thousands. And they'll remember who wrote it.
8. **How Much Should a Dental Website Actually Cost?** — $1k DIY vs $5k agency vs $15k firms vs our $2k. We break down exactly what you get at each price point. Spoiler: the $15k firm is using the same AI tools we are. They just have nicer office furniture.

### 25.2 — YouTube

Huge opportunity. Dentists watch YouTube at night after work like everyone else. The dental marketing space on YouTube is either (a) agencies selling their own services or (b) generic "5 tips for dental SEO" fluff. There's almost nobody doing honest, self-aware breakdowns. Be that person.

Video ideas:
- **"Why dentists get scammed by marketing agencies"** — this will get shared in every dental Facebook group. Lean into it.
- **"I'll show you exactly how dental SEO works (then you can decide if you want to do it yourself)"** — the self-aware play
- **"What your dental website should actually cost in 2026"** — the comparison video
- **"I'm going to roast your dental website (affectionately)"** — teardowns with personality. Dentists will submit their own sites.

### 25.3 — LinkedIn

Dentists are surprisingly active on LinkedIn. Post marketing breakdowns, SEO tips, website critiques, honest commentary. The tone should be the same as everything else — the guy who knows how this works and isn't trying to sell you on a $5k/month retainer.

### 25.4 — Cold Outreach

Record 5-minute Loom audits of their current website. Show what's wrong, what could be better. Then — here's the move — include a link to a live preview rebuild of their site. You already built it before you emailed them. It took you 2 hours. The dentist opens a link and sees their practice, reimagined, already working. Most agencies can't even get the mockup right. You shipped the whole thing.

### 25.5 — The Conversion Killer

Most powerful sales tool in the business: *"Give me your website URL. I'll rebuild it into a modern version you can preview live. If you like it, it's $2k. If you don't, you owe me nothing and I'll delete it."*

The risk is on us. The demo is the product. This is how you close dentists who've been burned before — you don't ask them to trust you. You just show them the finished work and let them decide.

---

## 26. Agency Website Structure

### 26.1 — The 7 Pages groundworkdental.com Needs

Every page should feel like talking to a real person. Not a marketing page. Not a landing page with stock photos of smiling people pointing at laptops. A person who knows dental marketing is broken and built something better.

**Page 1 — Homepage:** Headline: *"Dental Websites Without Agency Lock-In."* Founder story, why dentists get trapped, what you offer, ownership guarantee, pricing, and the $12/year cost-of-ownership number. Lead with that number. It stops people mid-scroll.

**Page 2 — Dental Website Design:** SEO target: "dental website design." Why most dental websites fail (spoiler: WordPress templates from 2018), what modern sites require, your approach. Show a before/after. Show the PageSpeed scores.

**Page 3 — Dental SEO Foundation:** SEO target: "dental SEO basics." This is the "give everything away for free" page. Educational: local SEO, Google Business, authority pages, reviews. Long, comprehensive, actually useful. Dentists will bookmark it. Some will share it. A few will try to do it themselves, get frustrated at Step 4, and call you.

**Page 4 — Pricing:** Radically transparent. $2k build, $100 managed, growth plan. Exact deliverables in a table. No "contact us for a quote." No "starting at." The actual price, right there, no asterisks. This page should feel like a breath of fresh air after every other agency's "custom pricing" page that's just a contact form.

**Page 5 — Why Most Dental Marketing Agencies Lock You In:** Domain ownership traps, hosting traps, CMS lock-in, contract traps. Name the patterns without naming names (usually — sometimes naming names is fine). This page builds trust faster than anything else on the site. Dentists will send this to other dentists.

**Page 6 — Example Website:** Live demo, mobile view, speed test, SEO structure. Let them click around a real site you built. Show the PageSpeed score. Show the schema markup. Show what 48 pages of authority content actually looks like. Dentists are visual — they need to see the product.

**Page 7 — About:** Why this exists — dentists are systematically underserved by the agency model. No personal biography. Focus on the problem (agencies lock practices in, charge for hosting that costs nothing, deliver templates) and the mission (build the best possible foundation, hand everything over, walk away clean). Mention the niece who could vibe-code the site after handoff. The tone here should feel like a conversation over coffee, not a LinkedIn bio.

---

# PART IX — BACKEND OPERATIONS

---

## 27. AI Generation Pipeline

### 27.1 — Overview

This is the core operational advantage of the business. Enter a dental practice's website URL. Walk away. Come back to a live preview of a rebuilt modern site — complete with custom design, generated content, schema markup, and a Cloudflare deployment — ready for the dentist to review before committing to buy.

**Inputs:**
- Existing website URL (required)
- Google Business Profile URL (optional but strongly recommended)
- Yelp URL (optional)

**Outputs:**
- Structured practice data (extracted + inferred)
- Practice classification + positioning signals
- Recommended site architecture (page map)
- Generated design system (colors, fonts, layout)
- Full Astro website codebase
- GitHub repository (under agency org)
- Live Cloudflare Pages preview URL
- Review dashboard with flagged items needing verification

**Design goal:** 80% automated, 20% human taste. The pipeline does the research, structure, design, and first-draft content. The operator reviews, adjusts, and publishes. A dentist who books a sales call should already have a preview URL in the email they receive confirming the meeting.

**What this is NOT:** A finished website. Every generated site needs a human review pass before being shown to the dentist. The AI will get things wrong — services hallucinated, credentials invented, stock photos mistaken for real photos. The pipeline knows this and flags uncertainties explicitly. (See Stage 15 — Review Dashboard.)

---

### 27.2 — Pipeline Stages at a Glance

```
Stage 1  — Input Collection         Store prospect data
Stage 2  — Website Crawl            Collect all meaningful pages
Stage 3  — Text Extraction          Clean readable content from HTML
Stage 4  — Image Extraction         Pull and filter real practice photos
Stage 5  — Google/Yelp Scrape       Augment with listing data
Stage 6  — Practice Classification  Determine specialty and positioning
Stage 7  — Service Detection        Identify specific treatments offered
Stage 8  — Authority Content Selection  Choose informational article topics
Stage 9  — Brand Design Generation  Create unique design system
Stage 10 — Website Structure        Generate sitemap and page map
Stage 11 — Content Generation       Draft all copy
Stage 12 — Code Generation          Populate Astro starter template
Stage 13 — Repository Creation      Push to GitHub (agency org)
Stage 14 — Preview Deployment       Deploy to Cloudflare Pages
Stage 15 — Review Dashboard         Operator review UI before dentist sees it
```

Each stage feeds structured output to the next. Failures at any stage should be logged and surfaced in the dashboard, not silently skipped.

---

### 27.3 — Database Schema

Use Postgres (or Supabase for easy setup). Everything persists so you can rerun stages, audit outputs, and track what changed between runs.

```sql
-- One row per prospect/lead
CREATE TABLE prospects (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  website_url     TEXT NOT NULL,
  google_url      TEXT,
  yelp_url        TEXT,
  crawl_status    TEXT DEFAULT 'pending',     -- pending, running, complete, failed
  pipeline_status TEXT DEFAULT 'pending',     -- pending, running, review, approved, deployed
  preview_url     TEXT,
  repo_url        TEXT,
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- One row per crawled page
CREATE TABLE crawled_pages (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES prospects(id),
  url         TEXT,
  html        TEXT,
  title       TEXT,
  meta_desc   TEXT,
  crawled_at  TIMESTAMPTZ DEFAULT now()
);

-- Detected services
CREATE TABLE services_detected (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES prospects(id),
  service     TEXT,
  source      TEXT,    -- 'website', 'google', 'yelp'
  confidence  FLOAT
);

-- Generated design fingerprint (for uniqueness checking)
CREATE TABLE design_fingerprints (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id     UUID REFERENCES prospects(id),
  primary_color   TEXT,
  secondary_color TEXT,
  accent_color    TEXT,
  font_heading    TEXT,
  font_body       TEXT,
  hero_layout     TEXT,
  section_density TEXT,
  similarity_hash TEXT    -- for fast comparison
);

-- Stage-by-stage output log
CREATE TABLE pipeline_outputs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES prospects(id),
  stage       TEXT,
  status      TEXT,    -- complete, failed, skipped
  output_json JSONB,
  error_msg   TEXT,
  created_at  TIMESTAMPTZ DEFAULT now()
);
```

---

### 27.4 — Stage 1: Input Collection

Accept a form with three fields. Validate URLs are reachable. Store in `prospects`. Return a `prospect_id` that tracks the run. Trigger the full pipeline asynchronously — it takes 8-15 minutes total and should run in the background while the operator does other things.

```json
{
  "website_url": "https://hbimplants.com",
  "google_url": "https://maps.google.com/?cid=...",
  "yelp_url": "https://yelp.com/biz/..."
}
```

Use a job queue (BullMQ for Node, Celery for Python) so the pipeline survives restarts and can be monitored. Never make the operator wait on a synchronous call.

---

### 27.5 — Stage 2: Website Crawl

**Goal:** Collect all meaningful pages from the existing site.

**Primary tool:** [Firecrawl](https://firecrawl.dev) — handles JS-rendered sites (Wix, Squarespace, PatientPop), discovers pages automatically, returns clean markdown. Worth the API cost.

**Fallback:** Playwright (for sites Firecrawl can't reach) or simple `requests` + BeautifulSoup for plain HTML sites.

```python
from firecrawl import FirecrawlApp

app = FirecrawlApp(api_key=FIRECRAWL_KEY)
result = app.crawl_url(
    website_url,
    params={
        'maxDepth': 3,
        'limit': 30,
        'includePaths': ['/', '/about', '/services', '/team', '/blog', '/contact'],
        'excludePaths': ['/privacy', '/terms', '/sitemap', '/wp-admin', '/patient-portal']
    }
)
```

**Pages to prioritize:** home, about, team, all service/treatment pages, contact.

**Pages to skip:** privacy policy, terms, appointment portals (PatientPop iframes, Zocdoc embeds), admin URLs.

Store raw HTML and extracted markdown per page in `crawled_pages`.

**If crawl fails:** Practice is behind a login or fully JS-gated. Flag in dashboard as "needs manual content entry" and continue pipeline with empty content (design + structure can still be generated).

---

### 27.6 — Stage 3: Text Extraction

**Goal:** Get clean, readable text from raw HTML for AI processing.

```python
from bs4 import BeautifulSoup
from readability import Document

def extract_text(html):
    doc = Document(html)
    soup = BeautifulSoup(doc.summary(), 'html.parser')
    return {
        'title': doc.title(),
        'headings': [h.get_text(strip=True) for h in soup.find_all(['h1','h2','h3'])],
        'paragraphs': [p.get_text(strip=True) for p in soup.find_all('p') if len(p.get_text()) > 40],
        'lists': [li.get_text(strip=True) for li in soup.find_all('li')]
    }
```

Concatenate all extracted text into a single `practice_corpus` string. Keep it under ~20k tokens — trim lowest-priority pages (privacy policy, thank-you pages) if needed. This corpus is the primary input to every subsequent AI call.

---

### 27.7 — Stage 4: Image Extraction

**Goal:** Pull real practice photos. Skip stock imagery.

```python
SKIP_KEYWORDS = ['stock', 'istock', 'shutterstock', 'getty', 'icon', 'badge', 'seal', 'placeholder', 'logo-partner']

def should_keep_image(url, width, height):
    if any(kw in url.lower() for kw in SKIP_KEYWORDS):
        return False
    if width < 600 or height < 300:
        return False
    return True
```

**Keep:** dentist portraits, team photos, office exterior/interior, treatment rooms, before/after photos, logo.

**Ignore:** stock photos (URL patterns like `/wp-content/uploads/stock-`, iStock domains), decorative icons, partner logos, social media badges.

**Post-processing (Sharp/Pillow):**
- Convert to WebP
- Resize: max 1600px wide for heroes, 800px for thumbnails
- Target ~150KB per image

**Optional upgrade:** Run low-res photos through [Replicate's Real-ESRGAN](https://replicate.com/nightmareai/real-esrgan) for AI upscaling. Transforms a blurry 400px headshot into something usable. Worth running on any practice photo under 600px wide.

Flag all kept images in the dashboard for human confirmation — the pipeline cannot reliably distinguish a real staff photo from a stock photo of a smiling person in scrubs.

---

### 27.8 — Stage 5: Google Business / Yelp Scrape

**Goal:** Validate and augment website data with listing information. GBP-verified data is more trustworthy than website copy for basic facts.

**Tool options:**
- [SerpAPI](https://serpapi.com) — clean, reliable Google integration
- [Outscraper](https://outscraper.com) — GBP-specific, good structured output
- [BrightData](https://brightdata.com) — higher volume, more expensive

**Extract:**
```json
{
  "rating": 4.7,
  "review_count": 182,
  "categories": ["Prosthodontist", "Dentist"],
  "services": ["Dental Implants", "Invisalign", "Veneers"],
  "address": "...",
  "phone": "...",
  "hours": { "Monday": "9am-5pm", "Tuesday": "9am-5pm" }
}
```

GBP-verified data (rating, hours, address, phone) gets a `verified: true` flag and skips the VERIFY QA system. Everything sourced only from website copy stays flagged for operator confirmation.

---

### 27.9 — Stage 6: Practice Classification

**Goal:** Determine practice type and positioning signals. This decision cascades through every downstream stage — it affects page templates, content tone, authority article selection, and design style.

```
CLASSIFICATION_PROMPT:

Analyze the following dental practice content and classify the practice type.

Practice corpus: {practice_corpus}
GBP categories: {gbp_categories}

Classify as ONE of:
general | family | cosmetic | implant-focused | prosthodontist |
oral-surgeon | pediatric | orthodontic | multi-specialty

Return JSON:
{
  "practice_type": "...",
  "confidence": 0.0-1.0,
  "signals": ["text signals supporting this classification"],
  "revenue_focus": ["highest-value services this practice emphasizes"],
  "positioning": "1-2 sentence description of how this practice positions itself"
}

Be conservative. Mixed signals → pick primary focus.
Do not invent signals not present in the source data.
A general dentist with one implant page is still a general dentist.
```

**Guardrail:** Only classify as a high-value specialty (prosthodontist, implant-focused) if multiple strong signals exist — specialty page + credentials mentioned + dedicated service section + GBP category match. One blog post about implants doesn't count.

---

### 27.10 — Stage 7: Service Detection

**Goal:** Build a clean, normalized list of services the practice actually offers. Used to generate the page map, content, and authority articles.

Combine three sources, weighted by reliability:

```
GBP services listing         → most reliable (manually entered by practice)
Dedicated service page URLs  → reliable
Text mentions in corpus      → least reliable (may be aspirational, not offered)
```

Normalize service names to a standard taxonomy:
```
dental-implants, all-on-4, all-on-6, bone-grafting, sinus-lift,
invisalign, clear-aligners, veneers, smile-makeover, teeth-whitening,
dental-bonding, crowns, bridges, dentures, partial-dentures,
snap-on-dentures, root-canal, extractions, emergency-dentistry,
cleanings, pediatric, orthodontics
```

Store in `services_detected` with source and confidence score. The Review Dashboard lets the operator add/remove services before content generation runs.

---

### 27.11 — Stage 8: Authority Content Selection

**Goal:** Select 6-12 informational article topics tailored to what the practice offers. These are research-intent content pieces targeting high-value patients in the decision phase — NOT geographic keyword pages.

Use a rules engine, not pure AI (more consistent):

```python
AUTHORITY_RULES = {
    'dental-implants': [
        'How Much Do Dental Implants Cost?',
        'What Is the Dental Implant Process? (Step-by-Step)',
        'Dental Implants vs. Dentures: Which Is Right for You?',
        'How Long Do Dental Implants Last?',
        'What Is a Bone Graft and Do You Need One?',
    ],
    'all-on-4': [
        'All-on-4 vs All-on-6: What\'s the Difference?',
        'How Much Does All-on-4 Cost?',
        'What Is the Recovery Like After Full-Arch Restoration?',
    ],
    'invisalign': [
        'How Much Does Invisalign Cost?',
        'Invisalign vs Braces: Which Is Better?',
        'How Long Does Invisalign Take?',
    ],
    'veneers': [
        'How Much Do Veneers Cost?',
        'Porcelain vs Composite Veneers: What\'s the Difference?',
        'How Long Do Veneers Last?',
    ],
    'cosmetic': [
        'What Is a Smile Makeover?',
        'Is Teeth Whitening Safe?',
    ],
    'prosthodontist': [
        'What Is a Prosthodontist (and Do You Need One)?',
        'Prosthodontist vs. General Dentist: What\'s the Difference?',
    ],
    # ... expand as needed
}
```

Deduplicate, rank by detected service confidence, cap at 12 articles. These get written in Stage 11 and populate the blog/content collection at launch.

---

### 27.12 — Stage 9: Brand Design Generation

**Goal:** Generate a unique visual identity for this practice. No two builds should look like siblings.

```
DESIGN_PROMPT:

Generate a design system for a dental practice website.

Practice type: {practice_type}
Positioning: {positioning}
Existing brand signals from website: {colors_and_fonts_detected}

Return JSON:
{
  "brand_style": "3 adjectives describing the visual feel",
  "palette": {
    "primary": "#hex",      // main brand color (headings, hero bg)
    "secondary": "#hex",    // supporting
    "accent": "#hex",       // CTA buttons, highlights
    "surface": "#hex",      // card backgrounds
    "text": "#hex"          // body text
  },
  "fonts": {
    "heading": "Google Font name",
    "body": "Google Font name"
  },
  "hero_layout": "doctor-portrait-left | full-bleed-overlay | split-panel | minimal-text-center",
  "section_density": "spacious | moderate | compact",
  "border_radius": "sharp | slight | rounded",
  "card_style": "flat | shadow | bordered | elevated"
}

Rules:
- Avoid clichéd dental blue unless the existing brand uses it heavily
- Cosmetic practices lean warmer (gold, champagne, soft neutrals)
- Implant/surgical practices lean more clinical (navy, steel, white)
- Skip trendy colors that will look dated in 2 years
```

**Uniqueness check:** Hash `(primary_color, font_heading, hero_layout)`. Query `design_fingerprints`. If cosine similarity > 0.85 with any existing build, regenerate palette. Retry up to 3 times before surfacing to operator for manual override.

---

### 27.13 — Stage 10: Website Structure Generation

**Goal:** Generate the full sitemap — which pages exist, how they're organized, what template each uses.

```
STRUCTURE_PROMPT:

Given these detected services and practice type, generate an optimal dental website sitemap.

Practice type: {practice_type}
Detected services: {services}
Authority articles: {authority_articles}

Return nested JSON with: slug, title, template, priority, children[].

Standard pages (always include): home, about, services-directory, schedule, gallery, FAQ, financing.
Location pages: primary city + up to 6 surrounding neighborhoods.
Only include service pages for confirmed detected services.
```

This output drives code generation (what files to create) and content generation (what to write per page).

---

### 27.14 — Stage 11: Content Generation

**Goal:** Write first-draft copy for every page in the sitemap.

**Critical rule:** Generate page by page, not all at once. Each call gets the practice context + specific page brief. This produces better results and makes failures recoverable — rerun one page without re-running everything.

```
PAGE_CONTENT_PROMPT:

Write copy for the following dental website page.

Practice: {practice_name}
Type: {practice_type}
Positioning: {positioning}
Doctor: {doctor_name}, {credentials}
Location: {city}, {state}
Services offered: {services}

Page: {page_title}
Target keyword: {primary_keyword}
Template type: {template}

Tone: professional, trustworthy, patient-friendly.
Do NOT use marketing fluff ("world-class," "cutting-edge," "state-of-the-art").
Do NOT invent credentials, awards, or affiliations not present in source data.
DO write in plain English a nervous patient can understand.
DO include 4-6 FAQs at the end.

Output: Markdown with frontmatter.
---
title: "..."
description: "..." (120-160 chars, includes keyword)
targetKeyword: "..."
faqs:
  - question: "..."
    answer: "..."
---
[page content]
```

**Quality bar:** If the content could apply to any dental practice in the country without changing a word, it's too generic. Add specifics pulled from the practice data (city, specialty, doctor name, key services).

---

### 27.15 — Stage 12: Code Generation

**Critical rule: Do NOT generate raw HTML from scratch.** Clone the hardened Astro starter template and populate it with practice-specific data. The LLM's job here is narrow — translate structured data into config files and frontmatter. It does not write component code.

```
Pipeline action:
1. Clone agency Astro starter repo (private, maintained separately)
2. Run config population script:
   → src/config/site.ts     (practice NAP, doctor info, schema fields)
   → src/config/navigation.ts  (page structure from Stage 10)
   → tailwind.config.mjs    (design tokens from Stage 9)
3. For each page in the sitemap:
   → Create src/pages/{slug}.astro from appropriate page template
   → Inject generated content from Stage 11
4. Place processed images into public/images/{heroes,team,gallery,branding}/
5. Update .env.example with all required variable names
```

The Astro starter template already contains all components (Header, Footer, CTABlock, FAQBlock, GalleryGrid, BeforeAfter). The pipeline fills the blanks — it does not redesign the architecture.

---

### 27.16 — Stage 13: Repository Creation

```bash
# Via GitHub CLI
gh repo create groundwork-dental-agency/{practice-slug}-preview \
  --private \
  --description "Preview build for {Doctor Name} — {website_url}" \
  --push \
  --source ./generated-site
```

Naming convention: `{practice-slug}-preview` during the sales phase. Transfers to the dentist's own GitHub account on purchase.

Store repo URL in `pipeline_outputs`.

---

### 27.17 — Stage 14: Preview Deployment

```bash
# Wrangler CLI (Cloudflare Pages)
wrangler pages deploy ./dist \
  --project-name {practice-slug}-preview \
  --branch main
```

Preview URL: `{practice-slug}-preview.pages.dev`

Or with a custom agency subdomain: `preview.groundworkdental.com/{practice-slug}`

Store preview URL in `prospects.preview_url`. This URL goes into cold outreach emails, sales call confirmations, and the Review Dashboard.

---

### 27.18 — Stage 15: Review Dashboard

Every generated site goes through operator review before the dentist sees it. The dashboard is the human checkpoint.

**Recommended stack:** Simple Next.js admin UI + Postgres/Prisma, or even a plain HTML dashboard — it's internal tooling, not a public product.

**Dashboard layout:**

```
[ Practice ]
hbimplants.com | Dr. Jane Smith | Prosthodontist | Huntington Beach, CA

[ Pipeline Status ]
✓ Crawl complete (28 pages)     ✓ Classification: prosthodontist (0.91)
✓ Services detected (12)        ✓ Design generated
✓ Content generated (48 pages)  ✓ Repo created  ✓ Preview deployed

[ Preview ]
[Open preview ↗]   preview.groundworkdental.com/hbimplants

[ Verification Flags — Clear before sending to dentist ]
⚠ VERIFY: Insurance accepted (not found in source data — check their site)
⚠ VERIFY: Emergency hours (inconsistent: website says "by appointment," GBP says "open")
⚠ CONFIRM: These team photos are real staff (not stock)
✓ CONFIRMED: Phone (714) 555-0192 (matches website + GBP)
✓ CONFIRMED: Address (matches website + GBP)
✓ CONFIRMED: Rating 4.7 / 182 reviews (from GBP)

[ Services — Edit before content is locked ]
✓ Dental Implants   ✓ Veneers   ✓ All-on-4   ? Orthodontics (low confidence — remove?)
[+ Add service]  [Remove]

[ Design ]
Primary #1E6FA3  |  Heading: Playfair Display  |  Body: Inter
Hero: doctor-portrait-left  |  Density: spacious
[Regenerate design]

[ Pages — 48 total ]
Homepage .............. ✓ Approved
About / Dr. Smith ..... ⚠ Needs review (credentials unverified)
Dental Implants Hub ... ✓ Approved
Dental Implant Cost ... ✓ Approved
...

[ Actions ]
[Regenerate page]  [Edit content]  [Mark all reviewed]  [Send preview to dentist ↗]
```

**VERIFY flag logic:** Any data point sourced only from website copy (not confirmed by GBP or Yelp) gets flagged. Any field the AI explicitly marked as uncertain in generation gets flagged. Operator clears flags before releasing.

**Target before sending:** Homepage, About, and key service pages reviewed. 100% cleared is ideal; 80% (the high-traffic pages) is acceptable for a first preview.

---

### 27.19 — Runtime & Failure Handling

**Expected total runtime:** 8-15 minutes from URL input to preview URL (mostly API latency — crawl + image processing + multiple LLM calls).

Run everything asynchronously. Use a job queue (BullMQ for Node, Celery for Python). The operator triggers the pipeline and checks the dashboard when it's done — they don't sit and watch it run.

**Stage failure behavior:**
- **Stage 2 (Crawl) fails** → site is un-crawlable (fully gated JS app, login required). Flag for manual content entry. Continue with structure + design generation.
- **Stage 5 (GBP scrape) fails** → proceed without verified data. Everything gets a VERIFY flag.
- **Stage 9 (Design) fails similarity check 3x** → surface to operator for manual palette selection. Don't block the pipeline.
- **Any content stage fails** → log error, mark that page "needs manual write," continue with remaining pages.
- **Stage 13/14 (repo/deploy) fails** → retry once automatically, then alert operator.

The pipeline never fully fails silently. Every stage logs its status to `pipeline_outputs`. The dashboard shows completion status per stage and surfaces what needs human intervention.

---

## 28. Agency Master Systems

### 28.1 — Two Layers of Infrastructure

**Layer 1 — Client Infrastructure:** Owned by each dentist (domain, Cloudflare, GitHub, Google accounts). Agency has access.

**Layer 2 — Agency Infrastructure:** Owned by Groundwork Dental. Clients never see this.

### 28.2 — Agency Systems

- Agency GitHub organization (templates, starters, automation)
- AI content generation pipelines
- Website starter templates and component library
- Design fingerprint database
- SEO topic database
- Client onboarding portal
- Credential management (1Password/Bitwarden)
- Internal dashboard (enter URL, see extracted data, approve design, launch preview)

### 28.3 — Database

Store per client: prospect info, scraped content, inferred services, brand guidelines, design fingerprints, content topics, deployment metadata, content history. Postgres or Supabase.

---

## 29. Tools, Accounts & Cost of Ownership

### 29.1 — Customer-Owned Accounts

| Account | Purpose | Cost |
|---|---|---|
| GitHub | Source code | Free |
| Cloudflare | Hosting + DNS + SSL | Free |
| Domain | Domain registration | ~$12-15/year |
| Google Analytics 4 | Traffic tracking | Free |
| Google Search Console | Search performance | Free |
| Formspree | Contact forms | Free (50/mo) or $10/mo |
| Google Business Profile | Local search | Free |

**Total minimum ongoing: ~$12-15/year (domain only).**

### 29.2 — Operator-Owned Tools

| Tool | Purpose | Cost |
|---|---|---|
| Claude Pro / Claude Code | AI development + content | ~$20/month |
| GitHub (agency org) | Development workflow | Free |
| Google Cloud Console | Service account for APIs | Free tier |
| Stripe | Payment processing | 2.9% + $0.30/txn |
| 1Password | Credential management | ~$3/month |
| Video editing software | Short-form production | Varies |

### 29.3 — Technology Stack (All Free/Open Source)

Astro v5, Tailwind CSS, Node.js, Cloudflare Pages, Cloudflare Turnstile, Formspree, Google APIs.

---

## 30. Automation Scripts — Operator Reference

All scripts in `/scripts/`. Require `.env` configuration.

| Script | Command | Purpose |
|---|---|---|
| GA4 Report | `node scripts/ga4-report.js --days 28` | Traffic, users, top pages, channels |
| GSC Report | `node scripts/gsc-report.js --days 28` | Top queries, pages, CTR, position |
| GBP Reviews | `node scripts/gbp-reviews.js --unanswered` | Fetch reviews, filter by stars |
| GBP Respond | `node scripts/gbp-respond.js --review-id <id> --reply "..."` | Reply to reviews |
| GBP Post | `node scripts/gbp-post.js --text "..." --cta-type BOOK` | Create GBP posts |
| GBP Locations | `node scripts/gbp-list-locations.js` | Find location ID (setup) |
| Site Audit | `node scripts/site-audit.js --url <url>` | SEO audit crawler |

### Environment Variables

**Build-time:** `PUBLIC_GA4_MEASUREMENT_ID`, `PUBLIC_TURNSTILE_SITE_KEY`, `PUBLIC_TURNSTILE_SECRET_KEY`, `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `FORMSPREE_ENDPOINT`, `SITE_URL`

**Script-time:** `GOOGLE_SERVICE_ACCOUNT_PATH`, `GA4_PROPERTY_ID`, `GSC_SITE_URL`, `GBP_CLIENT_ID`, `GBP_CLIENT_SECRET`, `GBP_REFRESH_TOKEN`, `GBP_ACCOUNT_ID`, `GBP_LOCATION_ID`

---

## 31. Customer Communication Templates

### 31.1 — Kickoff Email

The voice in emails should match the voice everywhere else — friendly, plain-English, no corporate fluff. These people get enough formal emails from insurance companies.

> Subject: Let's build your new website
>
> Hi [Name],
>
> Excited to get started. Here's the intake document — it covers everything we'll need, but don't overthink it. The only real must-haves right now are the basics: practice name, address, phone, hours.
>
> For everything else — bullet points, rough notes, even a voice memo — totally fine. We'll turn whatever you send into polished copy for your review. (If you check the "just handle it for me" box, we'll research most of it ourselves. No judgment — you have patients to see.)
>
> **Next steps:**
> 1. Fill out what you can and send it back
> 2. Share any photos you have (iPhone photos are completely fine — we'll optimize them)
> 3. We'll schedule a brief kickoff call once we have your materials
>
> Timeline: 6-8 weeks from intake to live site. Your only ongoing cost after that is ~$12/year for the domain. Seriously.

### 31.2 — Content Review Request

> Subject: Your website is ready to look at
>
> Hi [Name],
>
> Your site is built and ready for review: [Preview URL]
>
> Open it on your phone too — that's how most of your patients will see it.
>
> Please check: contact info (phone, address, hours), doctor bio (we wrote this from what you gave us — make sure we didn't accidentally give you an extra degree), service descriptions, photos, and general look/feel. Just flag anything that feels off.
>
> One round of consolidated feedback is ideal — email everything in one go rather than trickling it in. We'll turn it around fast.

### 31.3 — Launch Notification

> Subject: Your new website is live 🎉
>
> Hi [Name],
>
> Your new website is live at [URL]. Go look at it on your phone right now. I'll wait.
>
> **What's set up:** Website deployed globally (it loads fast from anywhere in the world), GA4 tracking active, Search Console verified, Google Business Profile updated with the new URL, contact form active and emailing your inbox.
>
> **What you own — all of it:** GitHub repo (the code), Cloudflare account (the hosting), your domain, all Google accounts. If you never hear from me again, everything keeps working.
>
> **Ongoing cost: ~$12-15/year.** That's the domain renewal. Just keeping the lights on. No hosting fees, no platform subscriptions, no monthly charges. If you want us to manage things ($100/month), we're here. If not, you're set.
>
> Congratulations on the new site. It's yours — in every sense of the word.

### 31.4 — Monthly Report (If on Retainer)

> Subject: Monthly Website Report — [Month Year]
>
> Traffic: Sessions [X], New users [X], Top pages [list]
> Search: Impressions [X], Clicks [X], Top queries [list]
> Reviews: New [X], Current rating [X] ([X] total)
> Work Completed: [list items]
> Recommendations: [action items]

---

## 32. Timeline — Week-by-Week Delivery

### Standard: 6-8 Weeks

| Week | Phase | Customer | Operator |
|---|---|---|---|
| 1 | Intake & Kickoff | Submit intake, share credentials | Review, kickoff call, clarify gaps |
| 2 | Account Setup | Provide additional info | GitHub, Cloudflare, GA4, GSC, GBP, image processing |
| 3 | Content & Architecture | Review content drafts | Write all copy, define architecture, design system |
| 4 | Development | — | Build all pages, components, forms, blog |
| 5 | Internal QA | — | Complete pages, audit, PageSpeed, schema validation |
| 6 | Customer Review | Review preview, provide feedback | Deploy preview, send review request |
| 7 | Revisions | Review revisions, final approval | Implement feedback, final QA, migration prep |
| 8 | Launch | Confirm go-live | DNS cutover, sitemap, GBP update, monitoring, handoff |

**Accelerated (4-5 weeks):** Complete intake Day 1, content ready, no migration, minimal revisions.

**Extended (8-10 weeks):** Complex migration, slow customer responses, multiple revision rounds, logo design needed.

---

## 33. Scaling & Capacity Planning

### 33.1 — What Breaks at Scale

| Clients | Bottleneck | Solution |
|---|---|---|
| 1-3 | Nothing | Single operator handles everything |
| 4-7 | Content writing | Template library, AI-assisted drafting |
| 8-12 | Project management | Standardized pipeline, project tracking |
| 12-20 | Development | Starter kit clone + customize, subcontract dev |
| 20+ | Everything | Dedicated roles: developer, writer, account manager |

### 33.2 — Revenue Projections

Don't get excited about the math until you've actually delivered 3-5 sites and know the real time-per-build. But the math is good:

| Metric | Value |
|---|---|
| Website price | $2,000 |
| Average build time | ~6 hours (once the pipeline is dialed in) |
| Builds per month (target) | 10 |
| Monthly build revenue | $20,000 |
| Annual build revenue | $240,000 |
| Plus managed hosting subscribers | Variable — but compounds nicely. 20 clients × $100/month = $24k/year in recurring. |
| Plus content growth plan subscribers | Variable — this is the real long-term revenue engine |

The beautiful thing: the $100/month managed hosting is almost pure margin. Hosting costs $0 (Cloudflare Pages). You're selling peace of mind and 30 minutes of monitoring per week per client. At 20+ managed clients, that's a $24k/year revenue stream for ~10 hours of work per week. Not bad.

### 33.3 — The Long-Term Opportunity

After 50-100+ clients: you have SEO performance data, conversion data, and marketing benchmarks across dozens of dental practices. That's not just data — that's a moat. No other dental marketing agency can tell you "the average prosthodontist website gets X impressions for implant keywords in month 3" because they don't track it honestly. You can.

Eventually build: the first transparent dental SEO benchmarking platform. Show dentists exactly what "good" looks like with real numbers. Then you're not just an agency — you're a platform. And the agency was always the trojan horse to get there.

(But that's the 2-3 year vision. For now: build great websites, charge fair prices, be honest about everything. The rest follows.)

---

## 34. Failure Modes & Risk Mitigation

A section about all the ways this can go wrong. Because if we're going to be honest about everything else, we should be honest about this too.

### 34.1 — Hallucinated Facts
AI will confidently invent services the dentist doesn't offer, credentials they don't hold, and insurance they don't accept. It will do this with the conviction of a dental marketing agency promising "guaranteed new patients." **Mitigation:** Mark uncertain fields for review. Google/Yelp-verified data (rating, hours) can be trusted. Everything else needs the dentist to confirm. Never deploy without confirmation.

### 34.2 — Duplicate Designs
Without a fingerprint system, you'll build the same site 40 times with slightly different colors and wonder why they all look familiar. **Mitigation:** Store design fingerprints, compute similarity, regenerate if too close. No two clients should look like siblings.

### 34.3 — Junk Content
The moment you start publishing "5 Tips for Healthy Teeth" and "The Importance of Regular Dental Checkups," you've become DocSites with better tooling. Congratulations, you played yourself. **Mitigation:** Every article must answer a real question a real patient would search for. It must be unique. It must be reviewed. If it reads like it was written by a bot, it was — rewrite it.

### 34.4 — Image Rights
Don't blindly reuse scraped assets from their old site. Those stock photos? Probably licensed to the old agency, not the dentist. Verify ownership/licensing. When in doubt, use the dentist's own photos (iPhone is fine) or flag it.

### 34.5 — Dentist Expectations
Some dentists will expect instant patient growth. They'll want to see new appointments within a week of launch. This is not how any of this works, but years of marketing agencies promising "results in 30 days" have set that expectation. **Mitigation:** Be brutally honest upfront. In the sales call. In the onboarding email. In the handoff document. Baseline = presence, not guaranteed growth. The dentists who understand this become long-term clients. The ones who don't were never going to be happy anyway.

### 34.6 — Legal / HIPAA
Dental websites must not collect PHI (Protected Health Information) through insecure forms. Our contact forms collect name, phone, email, and appointment preferences — not medical records. Use HIPAA-safe providers if the dentist wants to collect health history online, or disclaim clearly. Dentist is data controller for any patient info collected. Don't be the reason someone gets a HIPAA violation. That's a bad look for everyone.

---

# APPENDICES

---

## Appendix A — File Structure Reference

```
practice-site/
├── .github/workflows/deploy.yml     # CI/CD pipeline
├── .env.example                     # Environment variables reference
├── astro.config.mjs                 # Astro config (sitemap, tailwind)
├── tailwind.config.mjs              # Design tokens (colors, fonts)
├── package.json                     # Dependencies and scripts
│
├── src/
│   ├── config/
│   │   ├── site.ts                  # Practice info, NAP, schema (single source of truth)
│   │   └── navigation.ts           # Nav menu structure
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro        # Master template (SEO, GA4, schema, header/footer)
│   │
│   ├── components/
│   │   ├── Header.astro            # Desktop + mobile navigation
│   │   ├── Footer.astro            # NAP, links, review CTA
│   │   ├── CTABlock.astro          # Reusable CTA (dark/light/white)
│   │   ├── FAQBlock.astro          # Accordion FAQ with auto-schema
│   │   ├── GalleryGrid.astro       # Filterable gallery with lightbox
│   │   └── BeforeAfter.astro       # Before/after photo cards
│   │
│   ├── styles/
│   │   └── global.css              # Tailwind utilities
│   │
│   ├── content/
│   │   ├── config.ts               # Blog collection schema
│   │   └── blog/                   # Markdown blog posts
│   │
│   └── pages/                      # All pages
│       ├── index.astro
│       ├── about.astro
│       ├── schedule.astro
│       ├── dental-implants/
│       ├── all-on-x/
│       ├── veneers/
│       ├── cosmetic-dentistry/
│       ├── restorative-dentistry/
│       ├── dentures/
│       ├── implant-restorations/
│       ├── general-dentistry/
│       ├── clear-aligners/
│       ├── locations/
│       └── blog/
│
├── public/
│   └── images/
│       ├── branding/               # Logo, favicon, OG images
│       ├── team/                   # Doctor/staff photos (WebP)
│       ├── heroes/                 # Hero backgrounds (WebP)
│       └── gallery/                # Before/after + procedure photos (WebP)
│
├── scripts/
│   ├── lib/gbp-auth.js            # Shared GBP OAuth utilities
│   ├── ga4-report.js              # GA4 analytics report
│   ├── gsc-report.js              # Search Console report
│   ├── gbp-reviews.js             # Fetch GBP reviews
│   ├── gbp-respond.js             # Reply to GBP reviews
│   ├── gbp-post.js                # Create GBP posts
│   ├── gbp-list-locations.js      # List GBP locations
│   └── site-audit.js              # SEO audit crawler
│
└── marketing/
    └── playbook.md                 # This document
```

---

## Appendix B — Glossary

| Term | Definition |
|---|---|
| **Astro** | Static site generator — pure HTML, zero JavaScript by default |
| **Cloudflare Pages** | Free static hosting with global CDN and auto HTTPS |
| **Content Collection** | Astro's typed content system for blog posts with frontmatter schemas |
| **Core Web Vitals** | Google's page experience metrics: LCP, FID, CLS |
| **E-E-A-T** | Experience, Expertise, Authoritativeness, Trustworthiness — Google's quality signals |
| **Formspree** | Third-party form backend for email notifications |
| **GBP** | Google Business Profile — Maps and local search listing |
| **JSON-LD** | Structured data format for search engines |
| **NAP** | Name, Address, Phone — must be consistent everywhere |
| **PageSpeed** | Google's page load performance score (0-100) |
| **Schema** | Structured data markup (LocalBusiness, FAQPage, MedicalProcedure, etc.) |
| **SSG** | Static Site Generation — pages built at compile time, served as HTML |
| **Tailwind** | Utility-first CSS framework |
| **Turnstile** | Cloudflare's invisible CAPTCHA alternative |
| **WebP** | Modern image format with superior compression |
| **Vibe-coding** | Using AI coding tools to make changes conversationally — tell it what you want in plain English, it writes the code. Yes, your niece probably already does this. |
| **Agency Lock-in** | The business model where an agency controls your hosting/domain/CMS so you can't leave without losing your website. Also known as "the reason this company exists." |
