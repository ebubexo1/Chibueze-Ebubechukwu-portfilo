/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // This is critical!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: { 600: '#7C3AED' }
      },
    },
  },
  plugins: [],
}