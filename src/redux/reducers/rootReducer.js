import {combineReducers} from "@reduxjs/toolkit";
import listReducer from "./listReducer";
import profileReducer from "./profileReducer";
const rootReducer = combineReducers({
    listReducer:listReducer
})

export default rootReducer
