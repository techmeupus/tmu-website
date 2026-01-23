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
        // Indigo primary colors
        primary: {
          DEFAULT: '#6366F1',   // Indigo-500
          dark: '#4338CA',      // Indigo-700
          soft: '#EEF2FF',      // Indigo-50 (soft indigo background)
        },

        // Gray as secondary
        secondary: {
          DEFAULT: '#6B7280',   // Gray-500
          dark: '#374151',      // Gray-700
        },

        // Accent color (indigo variant)
        accent: {
          DEFAULT: '#4F46E5',   // Indigo-600
          hover: '#4338CA',     // Indigo-700
        },

        dark: {
          DEFAULT: '#1F2937',   // Main dark (footer / headings)
          light: '#374151',
        },

        // Enhanced gray scale
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
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
