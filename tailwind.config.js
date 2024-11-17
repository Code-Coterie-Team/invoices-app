import Invoices from './src/components/Invoices';

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
        invoices_text : "#888eb0",
        invoices : "#F2F2F2"
      },
      backgroundImage: {  
        'custom-image': "url('/src/assets/icon-arrow-down.a6ed7bfffecda935c666.svg')",  
      }, 
    },
  },
  plugins: [],
}

