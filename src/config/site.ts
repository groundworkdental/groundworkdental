// Central source of truth for Groundwork Dental agency information.
// Import from here instead of hardcoding values in components or pages.

export const site = {
  name: 'Groundwork Dental',
  url: 'https://groundworkdental.com',
  tagline: 'Dental Websites Without Agency Lock-In.',
  description: 'Custom SEO-ready dental websites built in days. You own the code, the hosting, and every account. No lock-in. $2,000 flat.',
  email: 'hello@groundworkdental.com',

  /**
   * GA4 measurement ID. Committed deliberately — it ships in the page source
   * of every rendered page, so it is not a secret, and keeping it here means
   * one place rather than three.
   *
   * It cannot live only in wrangler.toml [vars]: that reaches Cloudflare's
   * own build system, and this site is deployed with a LOCAL `npm run
   * deploy`, whose build never sees it. It cannot live only in .env either —
   * .env is gitignored, so any other machine builds the site with analytics
   * silently missing. That is exactly how this site ran untracked.
   *
   * PUBLIC_GA4_MEASUREMENT_ID still overrides it when set, for previews that
   * should not report into production.
   */
  ga4MeasurementId: 'G-K4JCTTW3YE',
  /** Cloudflare Members invite — same as contact once hello@ can sign into Cloudflare */
  cloudflareInviteEmail: 'hello@groundworkdental.com',

  // Stripe Payment Links — replace with actual URLs after creating Stripe products
  stripe: {
    websiteBuild: '', // One-time $2,000 payment link
    managedHosting: '', // Recurring $100/month payment link
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': site.name,
  'url': site.url,
  'description': site.description,
  'areaServed': {
    '@type': 'Country',
    'name': 'US',
  },
  'serviceType': ['Web Design', 'Search Engine Optimization', 'Dental Marketing'],
  'knowsAbout': ['Dental Website Design', 'Dental SEO', 'Local SEO for Dentists'],
};
