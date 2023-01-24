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
      padding: {
        DEFAULT: "1.5rem",
        lg: "5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
