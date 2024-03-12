/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          primaryOne: "#323232",
        },
        secondary: {
          secondaryOne: "#F0F0F0",
          secondaryTwo: "#BDBDBD",
        },
        accent: {
          secondaryOne: "#1BCF92",
          secondaryTwo: "#E55249",
          secondaryThree: "#FFC839",
        },
        gray: {
          custGray: "#5d616fdc",
          custBorders: "#ececec80",
          custIcon: "#808080",
          cardMobileborder: "#f4f4f4",
        },
      },
    },
  },
  plugins: [],
};
