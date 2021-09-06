const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './docs/_includes/*.html',
    './docs/_layouts/*.html',
    './docs/*.html',
  ],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      lime: colors.lime,
      emerald: colors.emerald,
    },
    extend: {
      width: {
        '9/10': '90%',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
