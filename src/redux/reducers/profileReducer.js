import *  as types from '../../constants/actionTypes'
import {db} from "../../utils/firebase";

const initialState = {
    user:{
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        uid: ""
    },
    isLoggedIn:false
};

export default function profileReducer(state=initialState, action) {
    switch (action.type) {
        case types.SET_PROFILE_INFO: {
            console.log(action.payload.uid," uid")
            const user = db.collection("accounts").doc(action.payload.uid).get()
            return {user:{
                    firstName: user.firstName, lastName: user.lastName, email: user.email,
                    userName: user.userName, uid: action.payload.uid
                }, isLoggedIn: true
            }
        }
        default :
            return state;
    }
}