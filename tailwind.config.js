/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
        primary2: "#ee0181",
        rit: "#01ee91",
      },
      fontFamily: {
        display: ["Poppins", "Sans-serif"],
        body: ["Inter", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
