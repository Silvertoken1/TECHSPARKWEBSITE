import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ProjectDeal = () => {
    return (
        <>
            <div className="project-deal-area text-center default-padding bg-white">
                <div className="deal-illustration">
                    <img src="/img/illustration/8.png" alt="Image Not Found" />
                </div>
                <div className="arrow-illustration">
                    <img src="/img/illustration/9.png" alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div
                                className="project-deal"
                                style={{ backgroundColor: '#AE52FF', padding: '50px', borderRadius: '12px' }} // 🔧 Color updated here
                            >
                                <h2 className="title text-white">
                                    Have any <strong>project?</strong> <br /> Let’s talk & grow your business
                                </h2>
                                <Link className="btn mt-30 btn-md circle btn-light animation" to="/contact-us#">
                                    Send Message
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDeal;
