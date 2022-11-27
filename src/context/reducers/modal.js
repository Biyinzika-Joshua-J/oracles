import { createSlice } from "@reduxjs/toolkit";


const Modal = createSlice({
    name:'modal',
    initialState:{value:0},
    reducers:{
        updateModal:(state, action)=>{
            state.value = action.payload;
            console.log(state.value)
        }
    }
})


export const {updateModal} = Modal.actions;

export default Modal.reducer;