import React from 'react';
import './profile.css'
import {useDispatch, useSelector} from "react-redux";
import * as actions from '../../actions/index'
function ProfilePage(props) {
    //let  user=useSelector((state=>state.profileReducer.user))
    const dispatch = useDispatch();

     function LogOut() {
         dispatch(actions.delProfileInfo())
       localStorage.removeItem("uid")
        // console.log(user, " user")
        //user.then(res=>console.log(res, " iss"))
//console.log(isLoggedIn)
          window.location.href = '/login'

    }

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                    <div className="card p-3 py-4">
                        <div className="text-center">
                            <div className="text-center mt-3"><span
                                className="bg-secondary p-1 px-4 rounded text-white">Profile</span>
                                <h5 className="mt-2 mb-0"></h5> <span>UI/UX Designer</span>
                                <div className="px-4 mt-1">
                                    <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                                <ul className="social-list">
                                    <li><i className="fa fa-facebook"/></li>
                                    <li><i className="fa fa-dribbble"/></li>
                                    <li><i className="fa fa-instagram"/></li>
                                    <li><i className="fa fa-linkedin"/></li>
                                    <li><i className="fa fa-google"/></li>
                                </ul>
                                <div className="buttons">
                                    <button className="btn btn-outline-primary px-4">Message</button>
                                    <button className="btn btn-primary px-4 ms-3">Contact</button>
                                    <button onClick={()=>LogOut()} className="btn btn-primary px-4 ms-3">Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;