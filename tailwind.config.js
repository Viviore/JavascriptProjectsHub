/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Add this to scan all HTML files in current directory
    "./src/**/*.html",
    "./src/assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#232a2f",
        secondary: "#1a2023",
        highlight: "#37373d",
        border: "#444",
      },
    },
  },
  plugins: [],
  safelist: ["hidden", "md:flex"],
};
