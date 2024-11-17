/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sidebar:"#373a53",
        demo : "rgb(240, 240, 240)",
        demo_text : "#7e88c3",

      }
    },
  },
  plugins: [],
}

