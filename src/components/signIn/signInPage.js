import React from 'react';
import {Formik, Form} from "formik";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './signInPage.css'

function LoginPage(props) {

    return (
        <div>
            <div className="card signIn">
                <h3 id="title_login">TO DO LIST</h3>
                <Formik initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    userName: "",
                    password: "",
                    createdOn:"",
                }} onSubmit={values => {
                    console.log(JSON.stringify(values, null, 2))
                }}>
                    {({handleSubmit, handleChange}) => (
                        <Form onSubmit={handleSubmit} onChange={handleChange} className="container">
                            <input className="row"
                                   name="firstName"
                                   type="text"
                                   placeholder="firstName"/>
                            <input className="row"
                                   name="lastName"
                                   placeholder="lastName"
                                   type="text"/>
                            <input className="row"
                                   name="userName"
                                   placeholder="userName"
                                   type="text"/>
                            <input className="row"
                                   name="email"
                                   placeholder="email"
                                   type="email"/>
                            <input className="row"
                                   name="password"
                                   placeholder="password"
                                   type="password"/>
                            <button className={"btn_submit"} type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
                <div  id="link_login">
                    You have account?<Link to="/logIn" > Press to Login</Link>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;