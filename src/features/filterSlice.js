import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filterValue",
    initialState:{value:""},
    reducers:{
        setFilterValue:(state,action)=>{
            state.value = action.payload
        }
    }


})

export const {setFilterValue} = filterSlice.actions;
export default filterSlice.reducer;