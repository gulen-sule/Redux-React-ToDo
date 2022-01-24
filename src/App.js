import './App.css';
import Footer from "./components/footer/footer";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Profile from "./components/Profile/profile";
import ListPage from "./components/List/ListPage/ListPage";
import Deneme from "./components/deneme";

function App() {
    return (
        <>
            <div>
                <Router>

                    <Link to="/"><img className="placeholder-item"
                                      src="https://as1.ftcdn.net/v2/jpg/03/66/63/52/1000_F_366635299_S1MlOWCcUVFPwgtxznb89r56tvyBBBVU.jpg"
                                      alt="image-profile-placeholder" width={"38px;"}/></Link>
                    <Link to="/profile">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiItcLdyEroY3V8TFUW3tNjVCX5aNXBwKgAA&usqp=CAU"
                            alt="image-profile-placeholder" width={"38px;"}/>
                    </Link>

                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/" element={<ListPage/>}/>
                    </Routes>
                </Router>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </>
    );
}

export default App;
