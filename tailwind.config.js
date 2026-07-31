/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E91E63',
          pinkLight: '#FCE4EC',
          dark: '#1A1A1A',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Fredoka', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -25px rgba(233, 30, 99, 0.35)',
      },
    },
  },
  plugins: [],
};
