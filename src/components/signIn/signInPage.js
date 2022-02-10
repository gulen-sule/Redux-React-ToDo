import React from 'react';
import {Formik} from "formik";
import {Link} from "react-router-dom";
import './signInPage.css'
import firebase from "firebase/app";
import SignInValidation from "./signInValidation";
import {db} from "../../utils/firebase";

class SignInPage extends React.Component {
    render() {

        const formik = {
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                userName: "",
                password: "",
            }, onSubmit: values => {
                firebase.auth().createUserWithEmailAndPassword(values.email, values.password).then((response) => {
                    console.log(response.user.uid, " response")
                    try {
                        let user = {
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            userName: values.userName,
                            password: values.password
                        }
                        console.log(values.firstName, " here")
                        db.collection("accounts").doc(response.user.uid).set(user)
                            .then(r => {
                                console.log(r)
                                window.location.href = '/logIn'
                            })

                    } catch (e) {
                        window.alert(e.toString())
                    }
                })
            }, validationSchema: SignInValidation
        }

        return (
            <div>
                <div className="card signIn">
                    <h3 id="title_login">TO DO LIST</h3>
                    <Formik {...formik} >
                        {formik =>
                            (<form onSubmit={formik.handleSubmit} className="container">
                                <input className="row"
                                       name="firstName"
                                       type="text"
                                       type="text"
                                       value={formik.values.firstName}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       placeholder="firstName"/>
                                {formik.errors.firstName && formik.touched.firstName&&
                                    (<div className={"error"}>{formik.errors.firstName}</div>)}
                                <input className="row"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.lastName}
                                       name="lastName"
                                       placeholder="lastName"
                                       type="text"/>
                                {formik.errors.lastName &&formik.touched.lastName&&
                                    (<div className={"error"}>{formik.errors.lastName}</div>)}
                                <input className="row"
                                       name="userName"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.userName}
                                       placeholder="userName"
                                       type="text"/>
                                {formik.errors.userName &&formik.touched.userName&&
                                    (<div className={"error"}>{formik.errors.userName}</div>)}
                                <input className="row"
                                       name="email"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.email}
                                       placeholder="email"
                                       type="email"/>
                                {formik.errors.email &&formik.touched.email&&
                                    (<div className={"error"}>{formik.errors.email}</div>)}
                                <input className="row"
                                       name="password"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.password}
                                       placeholder="password"
                                       type="password"/>
                                {formik.errors.password &&formik.touched.password&&
                                    (<div className={"error"}>{formik.errors.password}</div>)}
                                <button className={"btn_submit"} type="submit"
                                        onSubmit={() => formik.handleSubmit()}>Submit
                                </button>
                            </form>)}
                    </Formik>
                    <div id="link_login">
                        You have account?<Link to="/logIn"> Press to Login</Link>
                    </div>
                </div>

            </div>
        );
    }


}

export default SignInPage;