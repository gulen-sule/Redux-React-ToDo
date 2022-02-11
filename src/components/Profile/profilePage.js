import React from 'react';
import './profile.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import profileReducer from "../../redux/reducers/profileReducer";
function ProfilePage(props) {
    const user=useSelector((state => state.profileReducer))
    console.log(JSON.stringify(user), " user")

    function LogOut() {
        localStorage.removeItem("uid")
        window.location.href = '/login'
    }

    return (
        <div className="container mt-5">
            {/*{console.log(JSON.stringify(user), " user")}*/}
            <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                    <div className="card p-3 py-4">
                        <div className="text-center">
                            <img
                                src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-vector-id1273297997?k=20&m=1273297997&s=612x612&w=0&h=EkhPspb58IrPQnchFVjZFrz5R1hnCZJTTH_l34J2EtU="
                                width="100"
                                className="rounded-circle"/>
                            <div className="text-center mt-3"><span
                                className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                <h5 className="mt-2 mb-0">Alexender Schidmt</h5> <span>UI/UX Designer</span>
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
                                    <button  onClick={LogOut} className="btn btn-primary px-4 ms-3">Log Out</button>
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