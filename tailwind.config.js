/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#141414",
        white: "#f8f8f8",
        darkBlue: "#005889",
        mediumBlue: "#007cb9",
        lightBlue: "#2994db",
        prettyBlue: "#cbddff",
        grey: "#898989",
        red: "#ff0000",
      },
    },
    screens: {
      xs: { max: "428px" },
      sm: { min: "429px", max: "799px" },
      md: { min: "800px", max: "1279px" },
      lg: { min: "1280px", max: "1919px" },
      xl: { min: "1920px", max: "2560px" },
      xxl: "2561px",
    },
  },
  plugins: [],
};
