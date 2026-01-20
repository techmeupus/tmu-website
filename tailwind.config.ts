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
        primary: {
          DEFAULT: '#6BCF3A',   // Fresh modern green (not neon)
          hover: '#58B82F',
          soft: '#EAF7E3',      // Soft green background
        },

        accent: {
          DEFAULT: '#22C55E',   // CTA accent (buttons, icons)
          hover: '#16A34A',
        },

        dark: {
          DEFAULT: '#1F2937',   // Main dark (footer / headings)
          light: '#374151',
        },

        gray: {
          text: '#6B7280',      // Body text
          muted: '#9CA3AF',
          border: '#E5E7EB',
          bg: '#F9FAFB',
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
