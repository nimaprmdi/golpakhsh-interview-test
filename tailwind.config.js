const plugin = require("tailwindcss/plugin");

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
      animation: {
        "fade-in": "fade-in 0.3s linear forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      maxWidth: {
        1440: "1440px",
        1224: "1224px",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        primary: "#5A6D57",
        "primary-dark": "#404E3E",
        "primary-light": "#D1D9CF",
        "primary-soft": "#F0F2EF",
        accent: "#404040",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
