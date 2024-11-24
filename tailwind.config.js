/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
      colors: {
        mustard: '#F79F1A',
      },
      backgroundImage: {
        'food': "url('/png/food.png')",
      }
    },
  },
  plugins: [],
}