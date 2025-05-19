import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SocialShare from '../others/SocialShare';
import { toast } from 'react-toastify';

const FooterV1 = () => {

    const handleSearch = (event) => {
        event.preventDefault();
        event.target.reset();
        toast.success("Thanks for subscribing to TechSpark!");
    }

    return (
        <>
            <footer className="text-light" style={{ backgroundColor: "#662D91", backgroundImage: "url(/img/shape/5.png)"}}>
                <div className="container">
                    <div className="f-items default-padding-bottom pt-70 pt-xs-0" >
                        <div className="row">
                            <div className="col-lg-5 col-md-6 footer-item mt-50">
                                {/* <div className="footer-animated-shape">
                                    <img src="/img/shape/6.png" alt="Shape" />
                                </div> */}
                                <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                                    <img className="logo" src="/img/logo/logo-light.png" alt="TechSpark Logo" />
                                    <p>
                                        TechSpark is your trusted partner in digital transformation, from strategy to execution, we spark success through innovation.
                                    </p>
                                    <div className="footer-social mt-30">
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                                <div className="f-item link">
                                    <h4 className="widget-title">Company</h4>
                                    <ul>
                                        <li><Link to="/about-us#">Who We Are</Link></li>
                                        <li><Link to="/services#">Our Services</Link></li>
                                        <li><Link to="/faq#">FAQs</Link></li>
                                        {/* <li><Link to="/careers#">Careers</Link></li>
                                        <li><Link to="/pricing#">Pricing Plans</Link></li> */}
                                        <li><Link to="/contact-us#">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item contact">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <strong>Address:</strong>
                                                Lennar Hillside Estate,Kubwa, Abuja, Nigeria.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:hello@techspark.ng">hello@techsparkinnovations.tech</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:+2348001234567">+234 8032516865</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item newsletter">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <p>
                                        Stay ahead of the curve. Subscribe to get updates on tech trends, innovations, and exclusive offers.
                                    </p>
                                    <form onSubmit={handleSearch}>
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete='off' required />
                                        <button type="submit"><i className="fas fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom text-light text-center" style={{ backgroundColor: "#662D91" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>
                                    &copy; {new Date().getFullYear()} TechSpark Innovations. Your partner in progress...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
