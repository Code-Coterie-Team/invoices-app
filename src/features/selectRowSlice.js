import { createSlice } from "@reduxjs/toolkit";

const selectRowSlice = createSlice({
    name : "selectRow",
    initialState : {},
    reducers:{
        setSelectRow :(state,action) =>{
                state.selectRow = action.payload;
            }
        
    }
})

export const {setSelectRow} = selectRowSlice.actions;
export default selectRowSlice.reducer;