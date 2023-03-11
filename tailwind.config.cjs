/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        primary: "var(--primary)",
        "dark-primary": "var(--dark-primary)",
        header: "var(--header)",
        "dark-header": "var(--dark-header)",
        "header-text": "var(--header-text)",
        "dark-header-text": "var(--dark-header-text)",
        background: "var(--background)",
        "dark-background": "var(--dark-background)",
        "focus-color": "var(--focus-color)",
        "--dark-focus-color": "var(--dark-focus-color)",
      },
      animation: {
        backgroundMove: "backgroundMove 380s linear infinite",
      },
      keyframes: {
        backgroundMove: {
          "0%": {"background-position": "0 0"},
          "100%": {"background-position": "-90vw 0"},
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
