/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5631",
        secondry: "#1e1e1e",
        darkColor: "#0d0d0d",
        borderColor: "#8c8271",
        checkColor: "#57cb4c",
        textColor: "#cebea4",
      },
      fontFamily: {
        lexend: ['"Lexend Deca"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
