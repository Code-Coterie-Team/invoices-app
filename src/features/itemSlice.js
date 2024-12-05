import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "itemList",
  initialState: {
    items: [],
  },
  reducers: {
    setItemList: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
        state.items.push(action.payload);
      },
  },
});

export const { setItemList,addItem } = itemSlice.actions;
export default itemSlice.reducer;
