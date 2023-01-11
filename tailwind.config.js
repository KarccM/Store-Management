/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          secondry: "#000000", //16171a", //222831",
          primary: "#1e1e1e", //1F2124", //393E46",
          third: "#F8CD45", //FFD369",
          fourth: "#EEEEEE",
          fifth: "#737271",
        },
      },
    },
  },
  plugins: [],
};
