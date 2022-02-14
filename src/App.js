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
import {useDispatch, useSelector} from "react-redux";

function App() {
    let isLoggedIn ;
    useSelector((state => state.profileReducer)).then(res=>isLoggedIn =res.isLoggedIn);
    const [uid, setUid] = useState("");
    const dispatch = useDispatch();
    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    /* const GuardedRoute = ({loggedIn, ...props}) => {
         if (loggedIn) {
             return <Route {...props} />;
         }
         return <Route to="/login"/>
     }*/
    useEffect(() => {
        // storing input name
        // eslint-disable-next-line no-restricted-globals
        setUid(localStorage.getItem("uid"))
        console.log(uid, ": here")
        if (uid === "" || uid == null) {
            //setIsLoggedIn(false)
        } else {
            db.collection("accounts").doc(uid).get().then((data) => {
                if (data.exists) {
                    localStorage.setItem("uid", uid)
                    dispatch(actions.setProfileInfo(uid))
                    console.log(isLoggedIn, "iss")
                    // setIsLoggedIn(true)
                }
            })
        }
    }, );
    /*useEffect(() => {
    store.subscribe((state)=>{
        console.log(state, ":state")
    })
    },[])*/
    return (
        <div id="whole_page">
            <div>
                <Router>
                    <Link to="/"><img className="placeholder-item"
                                      src="https://as1.ftcdn.net/v2/jpg/03/66/63/52/1000_F_366635299_S1MlOWCcUVFPwgtxznb89r56tvyBBBVU.jpg"
                                      alt="image-profile-placeholder" width={"38px;"}/></Link>
                    <Link to={isLoggedIn ? ("/profile") : ("/login")}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiItcLdyEroY3V8TFUW3tNjVCX5aNXBwKgAA&usqp=CAU"
                            alt="image-profile-placeholder" width={"38px;"}/>
                    </Link>

                    <Routes>
                        <Route path="/login" element={<LoginPage/>}/>
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
