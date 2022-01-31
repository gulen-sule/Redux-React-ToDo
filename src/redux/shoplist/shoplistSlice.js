import {createSlice} from "@reduxjs/toolkit";
import List from "../../components/List/List";

export const shoplistSlice = createSlice({
    name: "shoplist",
    initialState: {
        listNum: 0,
        lists: [],
        listNames: [],
    },
    reducers: {
        increment: (state) => {// slice içindeki her valueya erişiyor initialState içinde geliyor
            state.listNum += 1
        },
        decrement: (state) => {
            state.listNum -= 1
        },
        decrementAmount: (state, action) => {
            state.listNum += Number(action.payload);
        },
        addList: (state, action) => {
            state.listNames = [...state.listNames, action.payload]
            state.lists = [...state.lists, <List/>]

        },
        deleteList: (state, action) => {
            const index = Number(action.payload);
            state.listNames.splice(index, 1)
            state.lists.splice(index, 1)
        }
    }
})
let shoplistReducer = shoplistSlice.reducer;
export default shoplistReducer;
export const {increment, decrement, addList, deleteList} = shoplistSlice.actions;