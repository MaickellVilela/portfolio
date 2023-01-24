const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      white: "#FFF",
      dark: "#0C0E13",
      green: "#52FF00",
      // TODO: Tailwind Config Colors
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
