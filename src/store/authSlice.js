import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userStatus: false,
        userDetails: {
            name: '',
            email: '',
            phone: '',
            address: '',
            pin:'',
            city: '',
            state: '',
        },
    },
    reducers:{
        loginUser: (state, action) =>{
            state.userStatus = true
            state.userDetails = action.payload
        },
        logoutUser: (state, action) =>{
            state.userStatus = false
            state.userDetails = {
                name: '',
                email: '',
                phone: '',
                address: '',
                pin:'',
                city: '',
                state: '',
            }
        },
        updateUserDetails: (state, action)=>{
            state.userDetails = action.payload
        }
    }
})

export const {loginUser, logoutUser, updateUserDetails} = authSlice.actions;
export default authSlice.reducer;