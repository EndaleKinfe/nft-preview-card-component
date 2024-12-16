/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        "cyan-pro": "hsl(178, 100%, 50%)",
        "dark-blue-1": "hsl(217, 54%, 11%)",
        "dark-blue-2": "hsl(216, 50%, 16%)",
        "dark-blue-3": "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        nft: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      content:{
        'img': 'url("/images/icon-view.svg")'
      }
    },
  },
  plugins: [],
};

