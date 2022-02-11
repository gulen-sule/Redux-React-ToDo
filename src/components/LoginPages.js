import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import LoginPage from "./login/loginPage";
import SignUpPage from "./signUp/signUpPage";
import ProfilePage from "./Profile/profilePage";
import ListPage from "./ListComponents/ListPage/ListPage";

function LoginPages(props) {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route path="/" element={<SignUpPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/mainPage" element={<ListPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default LoginPages;
