/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.4s ease-out forwards 0.1s',
        // 0.1s delay added at the end
      },
    screens: {
      sm: { max: "700px" },
      md: { min: "701px", max: "970px" },
      lg: { min: "971px", max: "1270px" },
      xl: { min: "1271px" },
    },
  },
  plugins: [],
};
