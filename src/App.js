import './App.css';
import Footer from "./components/footer/footer";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SignUpPage from "./components/signUp/signUpPage";
import * as actions from './actions/index'
import React, {useEffect, useState} from "react";
import LoginPage from "./components/login/loginPage";
import ProfilePage from "./components/Profile/profilePage";
import ListPage from "./components/ListComponents/ListPage/ListPage";
import {db} from "./utils/firebase";
import {useSelector} from "react-redux";

function App() {
    const isLoggedIn=useSelector((state => state.profileReducer.isLoggedIn))
    const [uid, setUid] = useState("");
    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    /* const GuardedRoute = ({loggedIn, ...props}) => {
         if (loggedIn) {
             return <Route {...props} />;
         }
         return <Route to="/login"/>
     }*/
console.log(isLoggedIn,"is")
    useEffect(() => {
        // storing input name
        setUid(localStorage.getItem("uid"))
        console.log(uid, ": here")
        if (uid === ""||uid == null) {
            //setIsLoggedIn(false)
        } else {
            db.collection("accounts").doc(uid).get().then((data) => {
                if (data.exists) {
                    localStorage.setItem("uid", uid)
                    actions.setProfileInfo(uid)
                }
            })
        }
    }, [isLoggedIn]);
    return (

        <div id="whole_page">
            <div>
                <Router>
                    <Link to="/"><img className="placeholder-item"
                                              src="https://as1.ftcdn.net/v2/jpg/03/66/63/52/1000_F_366635299_S1MlOWCcUVFPwgtxznb89r56tvyBBBVU.jpg"
                                              alt="image-profile-placeholder" width={"38px;"}/></Link>
                    <Link to={ isLoggedIn ?("/profile"):("/login")}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiItcLdyEroY3V8TFUW3tNjVCX5aNXBwKgAA&usqp=CAU"
                            alt="image-profile-placeholder" width={"38px;"}/>
                    </Link>

                    <Routes>
                        <Route  path="/login" element={<LoginPage/>}/>
                        <Route path="/signUp" element={<SignUpPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route exact path="/" element={<ListPage/>}/>
                    </Routes>
                </Router>

            </div>
            <Footer/>
        </div>
    );
}

export default App;
