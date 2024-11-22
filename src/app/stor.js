import { configureStore } from "@reduxjs/toolkit";
import invoicesSlice from "../features/invoicesSlice";

const store = configureStore({
    reducer:{
        invoices : invoicesSlice,
    }
})
export default store;