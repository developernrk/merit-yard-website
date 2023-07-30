import React, {useEffect, useState} from "react";
import "../css/navbar.scss"
const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderOnScroll, setIsHeaderOnScroll] = useState(false);
    // Open/Close Navbar Menu on Click Burger
    const handleBurgerClick = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };
    const handleMenuLinkClick = () => {
        setIsMenuOpen(false);
    };
    // Fixed Navbar Menu on Window Resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        // Add resize event listener on component mount
        window.addEventListener('resize', handleResize);
        return () => {
            // Remove resize event listener on component unmount
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);
    return (
        <>
            <header className={isHeaderOnScroll ? 'header on-scroll' : 'header'} id="header">
                <nav className="navbar container">
                    <a href="#" className="brand">
                        Merit Yard
                    </a>
                    <div className={`burger-menu ${isMenuOpen ? 'burger is-active' : 'burger'}`} onClick={handleBurgerClick} id="burger">
                        <span className="burger-line" />
                        <span className="burger-line" />
                        <span className="burger-line" />
                    </div>
                    <div className={`menu ${isMenuOpen ? 'is-active' : ''}`} id="menu">
                        <ul className="menu-inner">
                            <li className="menu-item">
                                <a href="#" className="menu-link" onClick={handleMenuLinkClick}>
                                    Home
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link" onClick={handleMenuLinkClick}>
                                    Courses
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link" onClick={handleMenuLinkClick}>
                                    Upcoming Classes
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link" onClick={handleMenuLinkClick}>
                                    Blogs
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link" onClick={handleMenuLinkClick}>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button className="menu-join-us btn btn-outline-primary">Login</button>
                    <button className="menu-join-us btn btn-outline-secondary">Join Us</button>
                </nav>
            </header>
        </>
    )
}
export default Navbar;