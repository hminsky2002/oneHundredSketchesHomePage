/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sketch-pink": "#d8199d",
        "sketch-green": "#2ba40c",
      },
    },
  },
  plugins: [],
};
