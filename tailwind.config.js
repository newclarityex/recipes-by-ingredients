/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            darkText: "#000000aa",
            background: "#fff",
            primary: "#00000080",
            secondary: "#00000080",
        }
    },
  },
  plugins: [],
};
