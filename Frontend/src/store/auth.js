import { createSlice } from "@reduxjs/toolkit";


let authSlice = createSlice({
    name:'auth',
    initialState: {isLoggedin: false, user: null, role: null, token: null},

    reducers:{
        login(state, action){
            state.isLoggedin = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.role;
        },
        logout(state){
            state.isLoggedin = false;
            state.user = null;
            state.role = null;
            state.token = null;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice