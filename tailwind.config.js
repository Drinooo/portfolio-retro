const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{react,js,ts,jsx,tsx}",
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
      gray: "#c4c4c4",
      black: "#000",
      green: "#3FCECC",
      beige: "#FAFAFA",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      gray2: "#606060",
      color1: "#1D1D1D",
    },
    fontSize: {
      "navbar-lg": "30px",
      "navbar-sm": "26px",

      "h1-xl": "96px",
      "h1-lg": "80px",
      "h1-md": "60px",
      "h1-sm": "40px",

      "subhead-xl": "36px",
      "subhead-lg": "32px",
      "subhead-md": "28px",
      "subhead-sm": "24px",

      h2: "10px",
      h2Mobile: "66px",

      "h3-lg": "60px",
      "h3-md": "48px",
      "h3-sm": "36px",

      h4: "50px",
      h4Mobile: "30px",

      h5: "46px",
      h5Mobile: "26px",

      h6: "24px",
      h6Mobile: "18px",

      subtitle: "36px",
      subtitleMobile: "26px",

      body1: "18px",
      body2: "25px",

      caption: "20px",

      client: "20px",

      about: "24px",
      aboutMobile: "18px",

      services: "30px",
      servicesMobile: "24px",

      chip: "14px",
      "chip-lg": "22px",
      "chip-md": "20px",

      "category": "16px",
      price: "16px"
    },

    borderWidth: {
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
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
      21: "5.75rem",
      22: "6rem",
      23: "6.25rem",
      24: "6.5rem",
      25: "6.75rem",
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
        bigShadow: "10px 10px #3FCECC",
        aboutShadow: "10px 10px",
      },
      //TYPOGRAPHY
      fontFamily: {
        // sans: ["Sofia Pro", "sans-serif"],
        // serif: ["Sofia Pro", "serif"],
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
      },
    },
  },
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
});
