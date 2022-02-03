import './App.css';
import Footer from "./components/footer/footer";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Profile from "./components/Profile/profile";
import ListPage from "./components/ListComponents/ListPage/ListPage";
import LoginPage from "./components/login/loginPage";
import SignInPage from "./components/signIn/signInPage";

function App() {
    return (
        <div id="whole_page">
            <div >
                <Router>

                    <Link to="/mainPage"><img className="placeholder-item"
                                      src="https://as1.ftcdn.net/v2/jpg/03/66/63/52/1000_F_366635299_S1MlOWCcUVFPwgtxznb89r56tvyBBBVU.jpg"
                                      alt="image-profile-placeholder" width={"38px;"}/></Link>
                    <Link to="/profile">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiItcLdyEroY3V8TFUW3tNjVCX5aNXBwKgAA&usqp=CAU"
                            alt="image-profile-placeholder" width={"38px;"}/>
                    </Link>
                    <Link to="/" ></Link>

                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/mainPage" element={<ListPage/>}/>
                        <Route path="/logIn" element={<LoginPage/>}/>
                        <Route path="/" element={<SignInPage/>}/>
                    </Routes>
                </Router>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
