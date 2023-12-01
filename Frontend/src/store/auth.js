import { createSlice } from "@reduxjs/toolkit";


let authSlice = createSlice({
    name:'auth',
    initialState: {isLoggedin: false, user: null},

    reducers:{
        login(state){
            state.isLoggedin = true;
        },
        logout(state){
            state.isLoggedin = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice