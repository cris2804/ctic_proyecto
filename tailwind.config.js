/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
      },
      spacing: {
        px: '1px',
      },
      width: {
        px: '1px',
      },
      height: {
        px: '1px',
      },
      fontSize: {
        px: '1px',
      },
      borderWidth: {
        px: '1px',
      },
      borderRadius: {
        px: '1px',
      },
    },
  },
  plugins: [],
}