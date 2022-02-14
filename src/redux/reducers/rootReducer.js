import {combineReducers} from "@reduxjs/toolkit";
import listReducer from "./listReducer";
import profileReducer from "./profileReducer";
const rootReducer = combineReducers({
    profileReducer:profileReducer,
    listReducer:listReducer,

})

export default rootReducer

