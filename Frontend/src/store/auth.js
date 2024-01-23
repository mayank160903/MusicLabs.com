import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";



export const  authSlice = createSlice({
    name:'auth',
    initialState: {isLoggedin: false, firstName: null, lastName : null , role: null, token: null},

    reducers:{
        login(state, action){
            state.isLoggedin = true;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.token = action.payload.token;
            state.role = action.payload.role;
            console.log(state.isLoggedin);
            console.log(state.firstName);
        },
        
        logout(state){
            state.isLoggedin = false;
            state.user = null;
            state.role = null;
            state.token = null;
        }
    }
})

export const {login , logout} = authSlice.actions;

export default authSlice.reducer;