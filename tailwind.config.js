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
        'shadow-card-bot': "linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 100%)",
        'shadow-card-top': "linear-gradient(to bottom, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 100%)",
        'hero-bg': "url('/src/assets/antoine-j-ZiMtckU0rug-unsplash.jpg')",
        'hero-bg-sec': "url('/src/assets/dave-netto-wWYwYiCoVwI-unsplash_2.jpg')",
      },

      "fontFamily": {
        "barlow": "Barlow",
        "work-sans": "Work Sans"
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
