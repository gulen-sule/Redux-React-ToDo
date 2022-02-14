import *  as types from '../../constants/actionTypes'
import {db} from "../../utils/firebase";

const initialState = {
    isLoggedIn: false,
    user: {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        uid: ""
    },

};

export default async function profileReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_PROFILE_INFO: {
                const user = (await db.collection("accounts").doc(localStorage.getItem("uid"))
                    .get()).data()

            return {
                user: {
                    firstName: user.firstName, lastName: user.lastName, email: user.email,
                    userName: user.userName, uid: action.payload.uid
                }, isLoggedIn: true
            }
        }
        case types.DEL_PROFILE_INFO: {
            return {
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    userName: "",
                    uid: ""
                },
                isLoggedIn: false
            }
        }
        default :
            return state;
    }
}