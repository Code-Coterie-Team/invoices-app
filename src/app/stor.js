import { configureStore } from "@reduxjs/toolkit";
import selectRowSlice from "../features/selectRowSlice";
// import itemSlice from "../features/itemSlice"
import modalSlice from "../features/modalSlice"
import themeSlice from "../features/themeSlice";
import invoicesSlice from "../features/invoicesSlice";

const store = configureStore({
    reducer:{
        selectRow : selectRowSlice,
        // itemList : itemSlice,
        showModal : modalSlice,
        theme: themeSlice,
        invoices : invoicesSlice,
        

    }
})
export default store;