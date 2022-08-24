const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{ts,tsx,html}'
  ],
  theme: {
    screens: {
      xs: '475px',
      ...screens
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}