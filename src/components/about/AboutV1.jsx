import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

const AboutV1 = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        {/* Left Content Block */}
                        <div className="col-xl-4 col-lg-12">
                            <div
                                className="about-style-one text-white p-4 rounded"
                                style={{
                                    backgroundImage: "url(/img/shape/7.png)",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                }}
                            >
                                <ul className="check-list-item list-unstyled">
                                    <li className="mb-4">
                                        <h5 className="fw-bold text-white">Seamless Startup Launch</h5>
                                        <p className="text-white">
                                            At TechSpark, we blend innovative technology with strategic business development to help you launch your startup effortlessly. From idea to execution, we provide the tools, expertise, and support you need to build, grow, and succeed in today’s digital world.
                                        </p>
                                    </li>
                                    <li>
                                        <h5 className="fw-bold text-white">Reliable Digital Partner</h5>
                                        <p className="text-white">
                                            We offer scalable, secure, and user-centric digital solutions tailored to
                                            meet the evolving needs of startups and enterprises alike.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Visual Block */}
                        <div className="col-xl-8 col-lg-12">
                            <div className="about-style-one ps-xl-5 pt-xl-0 pt-5 text-white">
                                <h2 className="title mb-4" style={{ color: '#662D91' }}>
                                    Empowering brands to thrive <br />
                                    in the <strong style={{ color: '#662D91' }}>digital</strong> age
                                </h2>

                                <div
                                    className="thumb position-relative rounded overflow-hidden"
                                    style={{
                                        backgroundImage: "url(/img/illustration/2.jpeg)",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '400px',
                                    }}
                                >
                                    {/* Removed play icon and "OUR STORY" */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;
