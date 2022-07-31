/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#DB0A5B',
        'primary-green': '#0C571B',
        'primary-orange': '#DA7F78',
        'primary-bg': '#fffaed'
      },
    },
  },
  plugins: [],
}