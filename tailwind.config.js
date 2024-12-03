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
        'feastTable': "url('/png/rustic-table.jpg')",
      },
      keyframes: {
        next: {
          'from': { transform: "translateX(0)" },
          'to': { transform: "translateX(-100%)" }
        },
        prev: {
          'from': { transform: "translateX(0)" },
          'to': { transform: "translateX(100%)" }
        }
      },
      animation: {
        next: 'next .5s ease-in-out forwards',
        prev: 'prev .5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}