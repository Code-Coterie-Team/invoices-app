import { createSlice } from "@reduxjs/toolkit"

const invoicesSlice = createSlice( {
    name : "modal",
    initialState: {
      invoices:[
        {
          code : "RT3080",
          date : "2021-8-18",
          bill_to : "Jensen Huang",
          price : "£ 1800.9",
          status : "paid"
        },
        {
          code : "XM9141",
          date : "2021-8-21",
          bill_to : "Alex Grim",
          price : "£ 556",
          status : "pending"
        },
        {
          code : "RG0314",
          date : "2021-9-24",
          bill_to : "John Morrison",
          price : "£ 14002.33",
          status : "paid"
        },
          {
          code : "RT2080",
          date : "2021-10-11",
          bill_to : "Alysa Werner",
          price : "£ 102.04",
          status : "pending"
        },
        {
          code : "AA1449",
          date : "2021-10-7",
          bill_to : "Mellisa Clarke",
          price : "£ 4032.33",
          status : "pending"
        },
        {
          code : "TY9141",
          date : "2021-10-01",
          bill_to : "Thomas Wayne",
          price : "£ 6155.91",
          status : "pending"
        },
        {
          code : "FV2353",
          date : "2021-11-05",
          bill_to : "Anita Wainwright",
          price : "£ 3102.04",
          status : "pending"
        }
      ],
      },
      reducers:{
        setInvoices  : (state,action) =>{
            state.invoices = action.payload;
        }
      }
})


export const { setInvoices } = invoicesSlice.actions;
export default invoicesSlice.reducer;