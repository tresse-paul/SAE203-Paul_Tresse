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

      screens: {
        'xl': '1440px',
        // => @media (min-width: 1440px)
        'md': '744px'
        // => @media (min-width: 744px)
      },

      backgroundImage: {
        'shadow-card': "linear-gradient(to bottom, rgba(0,0,0,0) 39.06%, rgba(15,15,15,0.8) 100%)",
        'hero-bg': "url('/src/assets/antoine-j-ZiMtckU0rug-unsplash.jpg')",
      },

      "fontFamily": {
        "barlow": "Barlow",
        "work-sans": "Work Sans"
      },
    },

  },
  plugins: [],
}
