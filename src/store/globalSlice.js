import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        menuOpen: false,
        orderAmount: 0
    },
    reducers:{
        toggleMenu: (state, action)=>{
            state.menuOpen = !state.menuOpen
        },
        updateOrderAmount: (state, action) => {
            state.orderAmount = action.payload
        }
    }

})

export const {toggleMenu,updateOrderAmount} = globalSlice.actions;
export default globalSlice.reducer;