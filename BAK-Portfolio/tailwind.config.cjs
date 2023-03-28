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
        'black-texture2': "url('../src/assets/andrej-lisakov-g3z-CgUiPtg-unsplash (1).jpeg')",
        'black-texture3': "url('../src/assets/3AD0D639-0F74-4C13-8824-D5AD4B150A9A.jpeg')",
        'desktop-1': "url('../src/assets/desktopA.jpg')",
        'desktop-2': "url('../src/assets/desktopB.jpg')",
        'desktop-3': "url('../src/assets/desktopC.jpg')",
        'main6': "url('../src/assets/main6.jpg')",
        'main7': "url('../src/assets/main7.jpg')"
      }
    },
  },
  plugins: [],
}
