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
        'dark-second': '#242526',
        'dark-third': '#3A3B3C',
        'dark-txt': '#B8BBBF'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
