const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        "brand-bg-primary": "#222831",
        "brand-bg-secondary": "#30475E",
        "brand-primary": "#F05454",
        "brand-secondary": "#DDDDDD",
        "brand-secondary-dark": "#B6B0B0",
        "brand-primary-dark": "#FF3026",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
