/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#121212",
          secondary: "#2a303c",
          accent: "#FCBB6D",
          neutral: "#3d4451",
          "text-primary": "#e3e3d6",
          "text-secondary": "#81817e",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#FFFFFF",
          secondary: "#BFBFBF",
          accent: "#FCBB6D",
          neutral: "#3d4451",
          "text-primary": "#121212",
          "text-secondary": "#434343",
        },
      },
    ],
  },
};
