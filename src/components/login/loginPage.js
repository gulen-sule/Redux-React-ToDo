import React from 'react';
import '../signIn/signInPage.css'
import {Link} from "react-router-dom";
import {auth, provider} from "../../utils/firebase";
import firebase from "firebase/app";
import {Formik} from "formik";
import {db} from "../../utils/firebase";
class LoginPage extends React.Component {
    constructor() {
        super();
        this.uid=""
    }

    componentWillMount() {
        this.uid=(localStorage.getItem("uid"))
        console.log(this.uid, ": here")
        if (this.uid !== null) {
            db.collection("accounts").doc(this.uid).get().then((data) => {
                if (data.exists) {
                    localStorage.setItem("uid", this.uid)
                    window.location.href = '/mainPage'
                }
            })
        }
    }

    handleLogin = () => {
        auth.signInWithPopup(provider).catch(alert).then(res => {
            //console.log(res)
        })
    }

    render() {
        const formik = {
            initialValues: {
                email: "",
                password: ""
            }, onSubmit: values => {
                firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        console.log(user.uid)
                        localStorage.setItem("uid", user.uid)
                        window.location.href = '/mainPage'
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        window.alert( errorMessage)
                        console.log(errorCode, ": ", errorMessage)
                    });
                console.log(JSON.stringify(values, null, 2))
            }
        }


        return (
            <div className="card signIn">
                <div>
                    <center>
                        <button style={{"marginTop": "2px"}}
                                onClick={this.handleLogin}>Sign In with Google
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
                            <button className={"btn_submit"} type="submit">Submit</button>
                        </form>)}
                </Formik>
                <div id="link_login">
                    You have account?<Link to="/"> Press to Sign In</Link>
                </div>
            </div>
        );
    }


}

export default LoginPage;