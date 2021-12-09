module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Proza Libre", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        wedding: { light: "#D8E9E4", DEFAULT: "#acd1c6", dark: "#50917D" },
        error: "#A61C3C",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
