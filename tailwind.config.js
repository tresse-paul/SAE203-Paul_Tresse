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
        },
      },

      backgroundImage: {
        'shadow-card': "linear-gradient(to bottom, rgba(0,0,0,0) 39.06%, rgba(15,15,15,0.8) 100%)",
      },

      "fontFamily": {
        "barlow": "Barlow",
        "work-sans": "Work Sans"
      },
    },

  },
  plugins: [],
}
