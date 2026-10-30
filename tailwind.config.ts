import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nexo: {
          navy: '#0B2545',
          dark: '#0F172A',
          blue: '#2563EB',
          'blue-muted': '#3B82F6',
          gray: '#F3F4F6',
          'gray-card': '#F3F4F6',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        snug: '-0.01em',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.15em',
        kicker: '0.22em',
      },
      lineHeight: {
        tight: '1.18',
        snug: '1.28',
        relaxed: '1.65',
      },
    },
  },
  plugins: [],
} satisfies Config;
