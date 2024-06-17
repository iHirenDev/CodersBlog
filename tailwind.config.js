/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: '#242E34',
        dark2: '#303B43',
        light: '#ffffff'
      }
    },
  },
  plugins: [],
}

