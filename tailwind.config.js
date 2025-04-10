const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#de9f81",
        beige: "#FCFBF3",
        titleColor: "#383B35",
        green: "#52BE53",
        navy: "#164BA0",
        darkNavy: "#012463",
        lightGray: "#989898",
        gray100: "#f2f2f2",
        gray300: "#dedede",
        gray400: "#c9c9c9",
        gray500: "#898d8f",
        red: "#fd0000",
        offwhite: "#fcfcfc",
        accent100: "#eaf4ea",
        accent200: "#d0e6d0",
        accent400: "#87c087",
        accent500: "#0c9900",
        accent700: "#496a47",
        progress: "#53BE53",
        lightBlue: "#577ab3",
      },
      height: {
        "1/2-screen": "50vh",
      },
      maxHeight: {
        "1/2-screen": "50vh",
      },
      screens: {
        landscape: { raw: "(orientation: landscape)" },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#F2F2F2",
              DEFAULT: "#05CE78", // Some green color, definitely not blue
            },
          },
        },
      },
    }),
  ],
};
