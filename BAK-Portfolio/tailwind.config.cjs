/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blackTexture': 'url(src/assets/malik-skydsgaard-jY9rX-E7ztU-unsplash (1).jpg)'
      }
    },
  },
  plugins: [],
}
