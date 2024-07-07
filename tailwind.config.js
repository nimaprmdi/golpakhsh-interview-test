/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      // gridTemplateColumns: {
      //   "70/30": "70% 28%",
      // },
      colors: {
        primary: "#5A6D57",
        "primary-dark": "#404E3E",
        "primary-light": "#D1D9CF",
      },
    },
  },
  plugins: [],
};
