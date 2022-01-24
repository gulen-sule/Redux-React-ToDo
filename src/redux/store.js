import {configureStore} from "@reduxjs/toolkit";
import shoplistReducer from "./shoplist/shoplistSlice";
export const store=configureStore({
    reducer:{
        shoplist:shoplistReducer
    }
})