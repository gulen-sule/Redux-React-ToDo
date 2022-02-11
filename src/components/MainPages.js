import React from 'react';
import ListPage from "./ListComponents/ListPage/ListPage";
import ProfilePage from "./Profile/profilePage";
import {Router, Link, Route, Routes} from "react-router-dom";

function MainPages(props) {
    return (
        <div>
            <Router>
                <Link to="/mainPage"><img className="placeholder-item"
                                          src="https://as1.ftcdn.net/v2/jpg/03/66/63/52/1000_F_366635299_S1MlOWCcUVFPwgtxznb89r56tvyBBBVU.jpg"
                                          alt="image-profile-placeholder" width={"38px;"}/></Link>
                <Link to="/profile">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiItcLdyEroY3V8TFUW3tNjVCX5aNXBwKgAA&usqp=CAU"
                        alt="image-profile-placeholder" width={"38px;"}/>
                </Link>
                <Routes>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/mainPage" element={<ListPage/>}/>


                </Routes>
            </Router>

        </div>
    );
}

export default MainPages;