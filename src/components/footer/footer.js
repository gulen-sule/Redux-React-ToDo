import React from 'react';
import './footer.css'

function Footer(props) {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-6">
                    <div className="about-footer">
                        <p className="title-footer">About</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <p className="title-footer">Links</p>
                                <li>Link</li>
                                <li>Link</li>
                                <li>Link</li>
                                <li>Link</li>
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul>
                                <p className="title-footer">Links</p>
                                <li>Link</li>
                                <li>Link</li>
                                <li>Link</li>
                                <li>Link</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row copyright">
                        <p>Copyright Company Name © 2021. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;