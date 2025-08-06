/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "700px" },
      md: { min: "701px", max: "970px" },
      lg: { min: "971px", max: "1270px" },
      xl: { min: "1271px" },
    },
  },
  plugins: [],
};
