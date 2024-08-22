import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      sm: '360px',
      md: '768px',
      nm: '992px',
      lg: '1200px',
      xl: '1440px',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        text: 'hsl(var(--text))',
        'base-tint': 'hsl(var(--basetint))',
        stroke: 'hsl(var(--stroke-element))',
        bright: 'hsl(var(--t-bright))',
        medium: 'hsl(var(--t-medium))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-up': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-100%)' },
          '51%': { opacity: '0' },
          '52%': { transform: 'translateY(100%)', opacity: '0' },
          '53%': { opacity: '1' },
        },
        'slide-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
          '51%': { opacity: '0' },
          '52%': { transform: 'translateY(-100%)', opacity: '0' },
          '53%': { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 0.4s ease-out 0.1s',
        'slide-down': 'slide-down 0.4s ease-out 0.1s',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '2full': '200%',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
