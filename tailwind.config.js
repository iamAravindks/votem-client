/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'", "sans - serif"],
      },
    },
    keyframes: {
      slideLeft: {
        "0%": { transform: "translateX(200px)" },
        100: { transform: "translateX(0px)" },
      },
    },
    animation: {
      "slide-left": "slideLeft 1s ease-in-out 0s 1 normal none",
    },
  },
  plugins: [require("flowbite/plugin")],
};
