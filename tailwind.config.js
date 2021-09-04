module.exports = {
  purge: [
    './docs/_includes/*.html',
    './docs/_layouts/*.html',
    './docs/*.html',
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
