/** @type {import('tailwindcss').Config} */
// Groundwork Dental — design tokens, v2. One value per name. See DESIGN.md.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand — flat keys so @apply bg-sage-dark isn't parsed as dark:bg-sage
        sage:        '#5F7F6B',
        'sage-dark': '#4A6B55',
        'sage-darker': '#3D5A48',
        'sage-tint': '#EBF0EC',
        // Neutrals
        charcoal:       '#334155',
        'mid-gray':     '#556070',
        'border-light': '#E0DDD5',
        // Surfaces (surface-warm dropped)
        surface: { 1: '#FFFFFF', 2: '#F8F8F3' },
        // Text on dark
        'on-dark':       '#E7EBF0',
        'on-dark-muted': '#AAB4C2',
        // Semantic (AA on their own bg)
        success:     '#4A6B55',
        'success-bg': '#EBF0EC',
        warning:     '#92400E',
        'warning-bg': '#FCF4E8',
        pending:     '#475569',
        'pending-bg': '#F1F0EB',
        danger:      '#B42318',
        'danger-bg':  '#FDF0EE',
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans:  ['Figtree', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono:  ['ui-monospace', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        eyebrow: ['11px', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        label:   ['11px', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      transitionDuration: { DEFAULT: '200ms' },
    },
  },
};
