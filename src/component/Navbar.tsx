import React from "react";

const Navbar: React.FC = () => {
    return (
        <>
            <div className="header-top">
                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="images/merit_yard_logo_black.png" alt="#"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-8 col-md-8 col-sm-9">
                                <div className="header_information">
                                    <div className="menu-area">
                                        <div className="limit-box">
                                            <nav className="main-menu ">
                                                <ul className="menu-area-main">
                                                    <li className="active">
                                                        {" "}
                                                        <a href="index.html">Home</a>{" "}
                                                    </li>
                                                    <li>
                                                        {" "}
                                                        <a href="#courses">My Courses </a>{" "}
                                                    </li>
                                                    <li>
                                                        {" "}
                                                        <a href="#about">About</a>{" "}
                                                    </li>
                                                    <li>
                                                        {" "}
                                                        <a href="#learn">My Profile</a>{" "}
                                                    </li>
                                                    <li>
                                                        {" "}
                                                        <a href="#important">Become an Instructor</a>{" "}
                                                    </li>
                                                    <li>
                                                        {" "}
                                                        <a href="#contact">Contact</a>{" "}
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;