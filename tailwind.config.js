const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      foreground: "#FFF",
      background: "#070B10",
      accent: "#52FF00",
    },
    fontSize: {
      ...defaultTheme.fontSize,
      "4xl": ["2rem", "120%"],
    },
    container: {
      center: true,

      // or have default horizontal padding
      padding: "2rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "836px",
        DEFAULT: "836px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
