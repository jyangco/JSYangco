/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001C35',
        lightblue: '#47B5FF'
      },
      container: {
        center: true,
        padding: '100px',
      },
    },
  },
  plugins: [],
}
