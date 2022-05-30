module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "gray": {
          "1000": "#0f0f0f"
        }
      },
      "fontFamily": {
        "barlow": "Barlow",
        "work-sans": "Work Sans"
      },
    },

  },
  plugins: [],
}
