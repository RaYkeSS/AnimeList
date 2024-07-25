/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      primaryBg: "rgb(var(--color-primary-bg) / <alpha-value>)",
      scndBg: "rgb(var(--color-scnd-bg) / <alpha-value>)",
      thirdBg: "rgb(var(--color-third-bg) / <alpha-value>)",
      lightBg: "#F4F4F8",
      lightText: "#0E0E18",
      lightPrimary: "#666BA5",
      lightSecondary: "#CEABCE",
      lightAccent: "#B885A1",
    },
    extend: {
      boxShadow: {
        my: "0px 0px 5px 2px rgba(0, 0, 0, 0.4)",
      },
      flexBasis: {
        my: "19%",
      },
    },
  },
  plugins: [],
};
