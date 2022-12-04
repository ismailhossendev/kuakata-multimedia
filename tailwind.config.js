/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bn": ['SolaimanLipi', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
