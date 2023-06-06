/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      colors:{
        red: colors.red,
        grey: colors.grey,
        indigio: colors.indigio,
        blueGrey: colors.blueGrey,
        rose: colors.rose,
        lightBlue: colors.lightBlue,
        orange: colors.orange
      }
    },
  },
  variants:{
extend:{},
  },
  plugins: [],
}
