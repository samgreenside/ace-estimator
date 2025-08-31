
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ace: {
          bg: "#071717",
          panel: "#0e2424",
          border: "#163333",
          text: "#E8F0EF",
          muted: "#ABC4C3",
          gold: "#D5B23D",
        },
      },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
}
