import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import AboutListInfo from '../../jsonData/AboutListInfo.json';

const AboutV2 = () => {
    return (
        <>
            <div className="about-style-two-area default-padding" style={{ backgroundColor: '#AE52FF', color: 'white' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-two">
                            <div className="about-two-thumb">
                                <img src="/img/thumb/4.jpg" alt="Image Not Found" />
                                {/* <div className="experience">
                                    <h2 style={{ color: 'white' }}><strong>10</strong> Years Experience</h2>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
                            <div className="about-two-info">
                                <h4 className="sub-title text-white">About TechSpark</h4>
                                <h2 className="title text-white">
                                    Empowering innovation through <br /> technology and strategy
                                </h2>
                                <p className="text-white">
                                    <strong>Who We Are:</strong> <br />
                                    At TechSpark Innovations, we’re more than a digital service provider—we’re problem solvers for today’s tech challenges. We know that many organizations and startups struggle to access the right tech talent and comprehensive business support needed to turn great ideas into profitable ventures. That’s where we come in.
                                </p>

                                <p className="text-white">
                                    <strong>Our Background:</strong> <br />
                                    Our team is made up of seasoned professionals with deep roots in the tech industry, having worked across diverse sectors and with renowned companies such as Payoneer, Flutterwave, Moniepoint, Turing, Paystack, and more. This breadth of experience has equipped us with unique insights into what works and what doesn’t, enabling us to build solutions that are both innovative and practical. <br />
                                    In addition to our technical strength, we have experienced business development managers with proven track records of launching and scaling successful startups in Nigeria and beyond. This combination of deep technical expertise and strategic business acumen positions TechSpark Innovations as the ideal partner to bring your vision to life.
                                </p>

                                <p className="text-white">
                                    <strong>Our Mission:</strong> <br />
                                    To empower our clients by building world-class products with our exceptional tech talents and providing the business support they need to launch and grow successful digital solutions.
                                </p>

                                <p className="text-white">
                                    <strong>Our Vision:</strong> <br />
                                    To create a thriving digital ecosystem where innovation meets execution, and every idea has the chance to succeed.
                                </p>

                                <div className="about-grid-info mt-30">
                                    <Link className="btn-round-animation text-white" to="/services#">
                                        Discover More <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <ul className="list-info-item mt-20">
                                        {AboutListInfo.map(list => (
                                            <li key={list.id}>
                                                <h4><Link to="#">{list.title} <i className="fa-solid fa-angle-right"></i></Link></h4>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;
