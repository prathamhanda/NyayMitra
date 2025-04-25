/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#baddff',
          300: '#84c5ff',
          400: '#48a7ff',
          500: '#1a8aff',
          600: '#0066ff',
          700: '#0052cc',
          800: '#0042a6',
          900: '#003380',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 