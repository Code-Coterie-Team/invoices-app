import { configureStore } from "@reduxjs/toolkit";
import selectRowSlice from "../features/selectRowSlice";
// import itemSlice from "../features/itemSlice"

const store = configureStore({
    reducer:{
        selectRow : selectRowSlice,
        // itemList : itemSlice,
    }
})
export default store;