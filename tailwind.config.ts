import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Indigo / Navy primary
        primary: {
          DEFAULT: '#3730A3',   // Indigo-800
          dark: '#1E1B4B',      // Indigo-950
          soft: '#C7D2FE',      // Indigo-200 (contrast-safe)
        },

        // Gray as secondary
        secondary: {
          DEFAULT: '#6B7280',   // Gray-500
          dark: '#374151',      // Gray-700
        },

        // Accent color (very dark indigo)
        accent: {
          DEFAULT: '#312E81',   // Indigo-900
          hover: '#1E1B4B',     // Indigo-950
        },

        dark: {
          DEFAULT: '#0F172A',   // Slate-900 (near black, premium)
          light: '#1E293B',
        },

        // Enhanced gray scale
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          text: '#64748B',
          muted: '#94A3B8',
          border: '#E2E8F0',
          bg: '#F8FAFC',
        },

        white: '#FFFFFF',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
