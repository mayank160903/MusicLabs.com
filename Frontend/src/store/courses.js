import { createSlice } from "@reduxjs/toolkit";


let courseSlice = createSlice({
    name:'auth',
    initialState: [{  title: "Learn How To Play Guitar in 10 Days",
    teacher: "Arijit Singh",
    price: "500",
    imageUrl: "https://masterofmusic.onrender.com/images/fam-solos.jpg",
    _id: '1'},

    {
        title: "Tabla",
        teacher: "John Doe",
        price: "150",
        _id: '3',
        imageUrl: "https://masterofmusic.onrender.com/images/fam-solos.jpg",
        completed: true
    }],

    reducers:{
        addCourse(state,action){
            return([...state,{...action.payload}])
        },
        // setAsCompleted(state, action){
        //     // return (state.forEach((id)))
        // }
    }
})

export const courseActions = courseSlice.actions;

export default courseSlice;