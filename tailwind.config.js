/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica Neue', 'sans-serif'],
        carmorat : ['Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
}