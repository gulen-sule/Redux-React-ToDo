import {initializeApp} from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut,
} from "firebase/auth";
import firebase from "firebase/app";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCQxMFFTwEGNX_ifISrC0ihDiNRsQP3Fis",
    authDomain: "e-cart-react.firebaseapp.com",
    projectId: "e-cart-react",
    storageBucket: "e-cart-react.appspot.com",
    messagingSenderId: "447344983112",
    appId: "1:447344983112:web:f107af34342f06027c2c7d"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth , provider};
