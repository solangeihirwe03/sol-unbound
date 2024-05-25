/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montSerrat: ["Montserrat", "sans - serif"],
      },
      backgroundImage: {
        "myBackground": `url('./background.jpg')`, // Replace with your image name
      },
    },
  },
  plugins: [],
};

