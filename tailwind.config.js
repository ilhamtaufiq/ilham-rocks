const { resolve } = require("path")

module.exports = {
  darkMode: "class",
  purge: {
    content: [resolve("./src/content/**/*")],
  },
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
        "-2": "-2",
        "-3": "-3",
        "-4": "-4",
        "-5": "-5",
      },
      colors: {
        social: {
          twitter: "#1DA1F2",
          telegram: "#2EAADE",
          whatsapp: "#25D366",
          patreon: "#FF424D",
        },
        brand: {
          discord: { light: "#7289DA", dark: "#6c82cf" },
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    variants: {
      extend: {
        backgroundOpacity: ["dark"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
}
