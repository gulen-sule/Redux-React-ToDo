import {createSlice} from "@reduxjs/toolkit";

export const shoplistSlice=createSlice({
    name:"shoplist",
    initialState:{
        listNum:0
    },
    reducers:{
        increment:(state)=>{// slice içindeki her valueya erişiyor initialState içinde geliyor
           state.listNum+=1
        },
        decrement:(state)=>{
            state.listNum-=1
        },
        decrementAmount:(state,action)=>{
            state.listNum+=Number(action.payload);
        },
    }
})
let shoplistReducer=shoplistSlice.reducer;
export default  shoplistReducer;
export const { increment, decrement, decrementAmount}=shoplistSlice.actions;