import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "showModal",
    initialState: false,
    reducers: {
        setShowModal: (state, action) => {
            return action.payload; 
        }
    }
});

export const { setShowModal } = modalSlice.actions;
export default modalSlice.reducer;
