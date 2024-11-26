
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "dark",
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

//Local State
// const [theme,setTheme] = useState("dark")

//get
// theme

//set
// setTheme("dark")

//----------------------------------

//Global State

//Get
//const {theme} = useSelector((state)=>state.theme)

//Set
//dispatch(setTheme("light"))
//dispatch(setTheme("dark"))
