import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "itemList",
    initialState: {
        items:[],
    },
    reducers: {
        setItemList: (state, action) => {
            state.items =  action.payload; 
        }
    }
});

export const { setItemList } = itemSlice.actions;
export default itemSlice.reducer;
