const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      foreground: "#FFF",
      darkBackground: "#050E1C",
      accent: "#95ff00",
    },
    fontSize: {
      ...defaultTheme.fontSize,
      "4xl": ["2rem", "120%"],
    },
    container: {
      center: true,

      // or have default horizontal padding
      padding: "2rem",

      screens: {
        sm: "900px",
        DEFAULT: "900px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
