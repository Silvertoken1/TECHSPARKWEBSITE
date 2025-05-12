import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
    return (
        <>
            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                <img src="/img/logo/logo.png" alt="TechSpark Innovations Logo" />
                <button type="button" className="navbar-toggle" onClick={closeMenu}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <ul className="nav navbar-nav navbar-center">
                    
                        
                    
                    <li className="dropdown">
                    {/* <li className="dropdown megamenu-fw"> */}
                        <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>About Us</Link>
                        <ul className="dropdown-menu">
                        {/* <ul className="dropdown-menu megamenu-content"> */}
                            <li>
                                <div className="row">
                                    {/* <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Solutions</h6>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/services#">Web & App Development</Link></li>
                                                <li><Link to="/services-2#">Branding & Design</Link></li>
                                                <li><Link to="/services-3#">Digital Marketing</Link></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Projects</h6>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/project-carousel#">Project Showcase</Link></li>
                                                
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div className="col-menu">
                                    {/* <div className="col-menu col-lg-3"> */}
                                        {/* <h6 className="title" onClick={toggleMegaMenu}>Team</h6> */}
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/about-us#">About TechSpark</Link></li>
                                                <li><Link to="/team-2#">Meet the Team</Link></li>
                                                {/* <li><Link to="/team-details/1#">Meet Our Founder</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Other Pages</h6>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/about-us#">About TechSpark</Link></li>
                                                <li><Link to="/pricing#">Pricing Plans</Link></li>
                                                <li><Link to="/contact-us#">Contact Us</Link></li>
                                               
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                    {/* <li className="dropdown"> */}
                        <Link to="/services-details#">Services</Link>
                        {/* <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Services</Link> */}
                        {/* <ul className="dropdown-menu">
                            <li><Link to="/services-details#">Consulting Services</Link></li>
                        </ul> */}
                    </li>
                    
                    <li><Link to="/contact-us#">Contact Us</Link></li>
                </ul>
            </div>
        </>
    );
};

export default MainMenu;
