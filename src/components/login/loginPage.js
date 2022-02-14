import React from 'react';
import '../signUp/signUpPage.css'
import {Link} from "react-router-dom";
import {auth, db, provider} from "../../utils/firebase";
import firebase from "firebase/app";
import {Formik} from "formik";
import './loginPage.css'
import loginSchema from "./LoginValidations";
import * as actions from "../../actions";
import {useDispatch} from "react-redux";

function LoginPage() {
    const uid = ""
    const dispatch = useDispatch();

    const handleLogin = () => {
        auth.signInWithPopup(provider).catch(alert).then(res => {
            //console.log(res)
        })
    }


    const formik = {
        initialValues: {
            email: "",
            password: ""
        }, onSubmit: values => {
            firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                .then(async (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user.uid)
                    localStorage.setItem("uid", user.uid)
                    dispatch(actions.setProfileInfo(user.uid))
                }).then( ()=>window.location.href = '/profile')
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    window.alert(errorMessage)
                    console.log(errorCode, ": ", errorMessage)
                });
            console.log(JSON.stringify(values, null, 2))
        }, validationSchema: loginSchema
    }


    return (
        <div className="card " id={"logIn"}>
            <div>
                <center>
                    <button style={{"marginTop": "2px"}}
                            onClick={() => handleLogin()}>Sign In with Google
                    </button>
                </center>
                {/* <GoogleLogin clientId={REACT_APP_GOOGLE_CLIENT_ID}
                             buttonText="Log in with Google"
                             onSuccess={response => handleLogin(response)}
                             onFailure={handleLogin}
                             cookiePolicy={'single_host_origin'}
                />*/}
            </div>
            <br/>
            <Formik {...formik} >
                {formik =>
                    (<form onSubmit={formik.handleSubmit}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            name="email"
                            placeholder="example@example.com"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}/>
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            placeholder="*********"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}/>
                        <button className={"btn_submit"} type="submit" onSubmit={() => formik.handleSubmit()}>Submit
                        </button>
                    </form>)}
            </Formik>
            <div id="link_login">
                You have account?<Link to="/signUp"> Press to Sign Up</Link>
            </div>
        </div>
    );


}

export default LoginPage;