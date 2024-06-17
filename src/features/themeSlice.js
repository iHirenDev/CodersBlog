import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //ligth theme is default theme...
    darkMode:localStorage.getItem('darkMode') != undefined 
                ? JSON.parse(localStorage.getItem('darkMode'))
                : false
}

export const themeSlice = createSlice({
    name:'themeMode',
    initialState: initialState,
    reducers:{
        toggleMode:(state) => {
            state.darkMode = !state.darkMode
            localStorage.setItem('darkMode', state.darkMode)
        }
    }
})

export const {toggleMode} = themeSlice.actions
export default themeSlice.reducer