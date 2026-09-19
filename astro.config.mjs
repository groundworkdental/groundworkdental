import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://groundworkdental.com',
  redirects: {
    '/blog/dental-practice-online-presence-checklist': '/checklist',
  },
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  adapter: cloudflare(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/intake') && !page.includes('/admin') && !page.includes('/motion'),
      serialize(item) {
        if (item.url === 'https://groundworkdental.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        const highPriority = ['/pricing', '/dental-website-design', '/example', '/about', '/checklist', '/dental-seo-foundation'];
        if (highPriority.some(p => item.url.endsWith(p) || item.url.endsWith(p + '/'))) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        if (item.url.includes('/blog/') && !item.url.replace('https://groundworkdental.com/blog/', '').includes('/')) {
          return { ...item, priority: 0.7, changefreq: 'weekly' };
        }
        if (item.url.includes('/blog/')) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }
        return { ...item, priority: 0.8, changefreq: 'monthly' };
      },
    }),
    tailwind(),
    react(),
  ],
});
