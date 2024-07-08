/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        gillsansmt: ["gillsansmt", "sans-serif"],
      },
      // gridTemplateColumns: {
      //   "70/30": "70% 28%",
      // },
      maxWidth: {
        1440: "1440px",
        1224: "1224px",
      },
      colors: {
        primary: "#5A6D57",
        "primary-dark": "#404E3E",
        "primary-light": "#D1D9CF",
        accent: "#404040",
      },
    },
  },
  plugins: [],
};
