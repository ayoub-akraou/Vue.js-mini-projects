/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: { 
        primary: "#5b21b6",
        primaryLight: "#7c3aed",
        secondary: "#4c1d95",
        secondaryLight: "#6d28d9",
        tertiary: "#be185d" ,
        tertiaryLight: "#db2777" 
      },
    },
  },
  plugins: [],
};
