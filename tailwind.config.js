/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
