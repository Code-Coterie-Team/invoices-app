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
        invoices : "#F2F2F2",
        button : "#7c5dfa",
        information : "rgb(136, 142, 176)",
        pending : "#FFF8F0",
        paid : "#F3FDF9",
        paid_text : "#33D69F",
        pending_text : "#FF8F00",
        Billform : "rgb(124, 93, 250)",
        bill_button : "rgb(126, 136, 195)",
        savedraft_button:"rgb(55, 59, 83)",
        save_button:"#E5DFFE",
        delete_button :"rgb(236, 87, 87)",
        mark_button:"rgb(146, 119, 255)"
      },
      width:{
        inputs: "570px",
      }
    },
  },
  plugins: [],
}

