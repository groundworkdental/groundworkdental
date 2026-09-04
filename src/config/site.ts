// Central source of truth for Groundwork Dental agency information.
// Import from here instead of hardcoding values in components or pages.

export const site = {
  name: 'Groundwork Dental',
  url: 'https://groundworkdental.com',
  tagline: 'Dental Websites Without Agency Lock-In.',
  description: 'Custom SEO-ready dental websites built in days. You own the code, the hosting, and every account. No lock-in. $2,000 flat.',
  email: 'hello@groundworkdental.com',
  /** Cloudflare Members invite — must be an address that can sign into Cloudflare */
  cloudflareInviteEmail: 'garrett@groundworkdental.com',

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
