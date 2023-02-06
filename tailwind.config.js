/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          200: '#878e99',
          300: '#2E3337',
          900: '#212428',
        },
        white: {
          300:'#bcc7d5',
          400:'#c4cfde',
          900:'#fff',
       }
      },
       fontFamily: {
         'sans': ['Montserrat', ...defaultTheme.fontFamily.sans], 
         'serif': ['Poppins', ...defaultTheme.fontFamily.serif],
      },
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1396px',
    },
  },
  plugins: [],
}