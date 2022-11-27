import { createSlice } from "@reduxjs/toolkit";


export const Chapters = createSlice({
    name:'chapters',
    initialState:{value:{chapters:[], next:0}},
    reducers:{
        upDateChapters:(state, action)=>{
            state.value.chapters = action.payload;
        },
        updateNext:(state, action) =>{
            state.value.next = state.value.next === 1?0:state.value.next+1;
            console.log(state.value.next)
        }
    }
})

export const {upDateChapters, updateNext} = Chapters.actions;

export default Chapters.reducer;