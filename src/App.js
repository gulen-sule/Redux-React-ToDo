import './App.css';
import Footer from "./components/footer/footer";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import Profile from "./components/Profile/profile";
import ListPage from "./components/ListComponents/ListPage/ListPage";
import LoginPage from "./components/login/loginPage";
import SignInPage from "./components/signIn/signInPage";
import { db} from './utils/firebase';
import {useEffect, useState} from "react";

function App() {
    const [uid, setUid] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const GuardedRoute = ({loggedIn, ...props}) => {
        if (loggedIn) {
            return <Route {...props} />;
        }
        return <Route to="/login" />
    }

    useEffect(() => {
        // storing input name
        setUid(localStorage.getItem("uid"))
        console.log(uid, ": here")
        if (uid === "") {
            setIsLoggedIn(false)
        } else {
            db.collection("accounts").doc(uid).get().then((data) => {
                if (data.exists) {
                    localStorage.setItem("uid", uid)
                    setIsLoggedIn(true)
                }
            })
        }
    },[isLoggedIn]);

    return (
        <div id="whole_page">
            <div>
                <Router>
{/*
                    <Link to="/mainPage"><img className="placeholder-item"
                                              src="https://as1.ftcdn.net/v2/jpg/03/66/63/52/1000_F_366635299_S1MlOWCcUVFPwgtxznb89r56tvyBBBVU.jpg"
                                              alt="image-profile-placeholder" width={"38px;"}/></Link>
                    <Link to="/profile">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiItcLdyEroY3V8TFUW3tNjVCX5aNXBwKgAA&usqp=CAU"
                            alt="image-profile-placeholder" width={"38px;"}/>
                    </Link>*/}
                    <Link to="/"></Link>

                    <Routes>
                        {isLoggedIn
                            ? <Route path="/mainPage" element={<ListPage/>} />
                            : <Route path="/logIn" element={<LoginPage/>}/>}
                        <Route path="/logIn" element={<LoginPage/>}/>
                        <Route path="/mainPage" element={<ListPage/>} />

                        <Route path="/" element={<SignInPage/>}/>
                    </Routes>
                </Router>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
