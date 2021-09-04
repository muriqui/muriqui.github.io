module.exports = {
  purge: [
    './docs/_includes/*.html',
    './docs/_layouts/*.html',
    './docs/*.html',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
