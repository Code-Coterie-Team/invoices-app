
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: localStorage.getItem("theme") ?? "light",
  },
  reducers: {
    setTheme: (state, action) => {
      localStorage.setItem("theme", action.payload)
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
