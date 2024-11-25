import { configureStore } from "@reduxjs/toolkit";
import selectRowSlice from "../features/selectRowSlice";

const store = configureStore({
    reducer:{
        selectRow : selectRowSlice,
    }
})
export default store;