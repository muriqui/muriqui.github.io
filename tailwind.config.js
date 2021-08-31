module.exports = {
  purge: [
    './docs/_includes/**/*.html',
    './docs/_layouts/**/*.html',
    './docs/_posts/*.md',
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
