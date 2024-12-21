/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Primary: "Poppins",
      Title: "Open Sans"
    },
    textShadow: {
      default: "0 0 2px rgba(255,255,255,0.5)",
      relief: "2.5px 2.5px 0 #0005",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
