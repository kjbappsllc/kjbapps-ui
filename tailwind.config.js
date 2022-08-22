module.exports = {
  prefix: 'tw-',
  darkMode: 'media',
  content: [
    './src/**/*.{ts,tsx,html}'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}