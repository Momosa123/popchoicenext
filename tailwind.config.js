/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    minHeight: {
      inputHeight: "4rem",
    },
    extend: {
      colors: {
        blueDark: "#000C36",
        blueBlack: "#3B4877",
        greenButton: "#51E08A",
      },
      width: {
        small: "30rem",
      },
    },
  },
  plugins: [],
};
