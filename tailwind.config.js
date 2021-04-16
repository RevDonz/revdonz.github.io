const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        violet: colors.violet,
        'dark-main': '#232638',
        'dark-second': '#292d42',
        'dark-third': '#333852',
        'dark-txt': '#B8BBBF'
      },
    },
  },
  variants: {},
  plugins: [],
}
