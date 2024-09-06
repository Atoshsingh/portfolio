/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily:{
      "inter":["Amita", "serif"],
      "passsion":["Passion One", "sans-serif"],
      "viga":["Viga", "sans-serif"],
      "anton":["Anton", "sans-serif"],
      "nerko":["Nerko One", "cursive"],
      "blackHan":["Black Han Sans", " sans-serif"],
      "mochiy":["Mochiy Pop P One", " sans-serif"],

    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom-lg': '1000px',
    },
  },
  plugins: [],
}

