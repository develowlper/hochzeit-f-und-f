module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        rotate: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "50%": {
            transform: "rotateY(180deg)",
          },
          "100%": {
            transform: "rotateY(360deg)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        rotate: "rotate 3s linear infinite",
      },
    },
  },
  plugins: [],
};
