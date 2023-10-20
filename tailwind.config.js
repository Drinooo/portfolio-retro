const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "#ffffff",
      gray: "#989898",
      black: "#000",
      green: "#005f73",
      // beige: '#F9f6f3',
      beige: "#FAFAFA",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    //TYPOGRAPHY
    fontFamily: {
      sans: ["Sofia Pro", "sans-serif"],
      serif: ["Sofia Pro", "serif"],
    },
    fontSize: {
      navbar: "30px",
      navbarMobile: "24px",

      h1: "96px",
      h1Mobile: "56px",

      h3: "66px",
      h3Mobile: "46px",

      h5: "46px",
      h5Mobile: "26px",

      h6: "36px",
      h6Mobile: "22px",

      subtitle: "42px",
      subtitleMobile: "32px",

      body1: "18px",

      client: '20px',
      
      about: '26px',
      aboutMobile: '18px',

      services: "30px",
      servicesMobile: "24px",

      chip: '18px',

    },
    lineHeight: {
      1: ".75rem",
      2: "1rem",
      3: "1.25rem",
      4: "1.5rem",
      5: "1.75rem",
      6: "2rem",
      7: "2.25rem",
      8: "2.5rem",
      9: "2.75rem",
      10: "3rem",
      11: "3.25rem",
      12: "3.5rem",
      13: "3.75rem",
      14: "4rem",
      15: "4.25rem",
      16: "4.5rem",
      17: "4.75rem",
      18: "5rem",
      19: "5.25rem",
      20: "5.5rem",
    },
    extend: {
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
      boxShadow: {
        retro: "5px 5px",
        retro1: "5px 5px #0C0908",
      },
    },
  },
  plugins: [],
});
