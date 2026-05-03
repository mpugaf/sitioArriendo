/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#B85C38',
          light: '#D4795A',
          dark: '#8F4428',
        },
        warm: {
          50:  '#FAFAF8',
          100: '#F5F4F0',
          200: '#EAE8E1',
          300: '#D5D2C8',
          400: '#BAB6A8',
          500: '#908D82',
          600: '#6E6B61',
          700: '#524F47',
          800: '#38362F',
          900: '#1E1D19',
        },
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans:  ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
