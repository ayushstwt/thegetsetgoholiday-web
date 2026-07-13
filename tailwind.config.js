/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#68b828",
          50: "#f1faea",
          100: "#def4cd",
          200: "#c3eba3",
          300: "#a8e279",
          400: "#8cd94f",
          500: "#76d12e",
          600: "#68b828",
          700: "#518e1f",
          800: "#407119",
          900: "#2f5412",
          950: "#1f360c",
        },
        accent: {
          400: "#ffb020",
          500: "#ff9500",
          600: "#f57c00",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
