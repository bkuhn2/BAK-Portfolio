/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-texture1': "url('../src/assets/annie-spratt-6a3nqQ1YwBw-unsplash.jpg')",
        'desktop-2': "url('../src/assets/desktopB.jpg')",
        'desktop-3': "url('../src/assets/desktopC.jpg')",
        'main6': "url('../src/assets/main6.jpg')",
        'main7': "url('../src/assets/main7.jpg')"
      }
    },
  },
  plugins: [],
}
