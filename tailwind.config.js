import { transform } from 'typescript';

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
        fill: {
          'from': { transform: "translateX(0)" },
          'to': { transform: "translateX(-100%)" },
        } 
      },
      animation: {
        fill: "fill 0.5ms ease-in-out",
      }
    },
  },
  plugins: [],
}