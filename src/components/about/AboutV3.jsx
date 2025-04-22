import React from 'react';
import AboutV3ListData from '../../jsonData/AboutV3ListData.json';
import CountUp from 'react-countup';

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area default-padding overflow-hidden" style={{ backgroundColor: '#AE52FF', color: 'white' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-three">
                            <div className="about-three-thumb">
                                <img src="/img/thumb/6.jpg" alt="Image Not Found" />
                                <img src="/img/thumb/5.jpg" alt="Image Not Found" />
                                <div className="experience">
                                    <h2 style={{ color: 'white' }}>
                                        <strong><CountUp end={18} duration={3} enableScrollSpy /></strong> Years Experience
                                    </h2>
                                </div>
                                <div className="animated-shape">
                                    <img src="/img/shape/38.png" alt="Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-style-three">
                            <div className="about-three-info">
                                <h4 className="sub-title text-white">About TechSpark</h4>
                                <h2 className="title text-white">Working together <br /> to drive innovation</h2>

                                <p className="text-white">
                                    <strong>Who We Are:</strong> <br />
                                    At TechSpark Innovations, we’re more than a digital service provider—we’re problem solvers for today’s tech challenges.
                                    We know that many organizations and startups struggle to access the right tech talent and comprehensive business support
                                    needed to turn great ideas into profitable ventures. That’s where we come in.
                                </p>

                                <p className="text-white">
                                    <strong>Our Background:</strong> <br />
                                    Our team is made up of seasoned professionals with deep roots in the tech industry. We’ve had the privilege of working with
                                    diverse tech sectors and companies such as Payoneer, Flutterwave, Monie Point, Cleva, Turing, and Paga. This experience has
                                    equipped us with unique insights into what works and what doesn’t, allowing us to create solutions that truly meet your needs.
                                </p>

                                <p className="text-white">
                                    <strong>Our Mission:</strong> <br />
                                    To empower our clients by connecting them with exceptional tech talent and providing the business support they need to
                                    launch and grow successful digital solutions.
                                </p>

                                <p className="text-white">
                                    <strong>Our Vision:</strong> <br />
                                    To create a thriving digital ecosystem where innovation meets execution, and every idea has the chance to succeed.
                                </p>

                                <ul className="list-grid-four text-white">
                                    {AboutV3ListData.map(about =>
                                        <li key={about.id}>{about.item}</li>
                                    )}
                                </ul>

                                <div className="about-author">
                                    <div className="thumb">
                                        <img src="/img/team/anne.jpg" alt="Anne Ananwune" />
                                    </div>
                                    <div className="info">
                                        <h4 className="text-white">Anne Ananwune</h4>
                                        <span className="text-white">Founder & CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV3;
