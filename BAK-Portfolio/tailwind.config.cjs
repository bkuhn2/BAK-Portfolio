/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main7': "url('../src/assets/main7.jpg')"
      },
      spacing: {
        '110': '28rem',
        '120': '32rem'

      },
    },
  },
  plugins: [],
}
