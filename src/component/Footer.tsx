import React from "react";

const Footer: React.FC = () => {
    return (
        <>
            <footer>
                <div className="footer ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form className="news">
                                    <input className="newsletter" placeholder="Email" type="email" name="Email"/>
                                    <button className="submit">Subscribe</button>
                                </form>
                            </div>
                            <div className="col-md-12">
                                <h2>Feel free To Contact</h2>
                                <span>If you have any questions or queries feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.</span>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ">
                                        <div className="address">
                                            <h3>Contact us </h3>
                                            <ul className="loca">
                                                <li>
                                                    <a href="#"><img src="icon/loc.png" alt="#"/></a> Palamau, Jharkhand
                                                    (IND)
                                                </li>
                                                <li>
                                                    <a href="#"><img src="icon/email.png" alt="#"/></a>hellomerityard@gmail.com
                                                </li>
                                                <li>
                                                    <a href="#"><img src="icon/call.png" alt="#"/></a>+91-70040-80803
                                                </li>
                                            </ul>
                                            <ul className="social_link">
                                                <li><a href="#"><img src="icon/fb.png"/></a></li>
                                                <li><a href="#"><img src="icon/tw.png"/></a></li>
                                                <li><a href="#"><img src="icon/lin(2).png"/></a></li>
                                                <li><a href="#"><img src="icon/instagram.png"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="address">
                                            <h3>Courses</h3>
                                            <ul className="Menu_footer">
                                                <li className="active"><a href="#">Masters Degree</a></li>
                                                <li><a href="#">Post GraduateU</a></li>
                                                <li><a href="#">Ndergraduate</a></li>
                                                <li><a href="#">Engineering</a></li>
                                                <li><a href="#">Ph.D Degree</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="address">
                                            <h3>Information</h3>
                                            <ul className="Links_footer">
                                                <li className="active"><a href="#">Campus Tour</a></li>
                                                <li><a href="#">Student Lifes</a></li>
                                                <li><a href="#">Cholarship</a></li>
                                                <li><a href="#"> Admission</a></li>
                                                <li><a href="#">Leadership</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                                        <div className="address">
                                            <a href="#"> <img src="images/merit_yard_logo_white.png" alt="logo"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <p>Copyright © 2023 <a href="https://html.design/">Merit Yard</a></p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;