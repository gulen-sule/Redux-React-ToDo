import React from 'react';
import {useFormik} from "formik";
import '../signIn/signInPage.css'
import {Link} from "react-router-dom";
function LoginPage(props) {
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },onSubmit:values=>{
            console.log(JSON.stringify(values, null, 2))
        }
    })
    return (
        <div className="card signIn" >
            <form onSubmit={formik.handleSubmit} >
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
                </form>
            <div  id="link_login">
                You have account?<Link to="/" > Press to Sign In</Link>
            </div>
        </div>
    );
}

export default LoginPage;