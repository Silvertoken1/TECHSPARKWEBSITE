import React from 'react';
import ServiceV3Data from '../../jsonData/ServiceV3Data.json';
import SingleServiceV3 from './SingleServiceV3';

const ServicesV3Grid = () => {
    return (
        <>
            <div
                className="services-style-three-area bg-cover default-padding bottom-less"
                style={{
                    backgroundColor: '#662D91',
                    backgroundImage: "url(/img/shape/banner-6.jpg)",
                    backgroundBlendMode: 'overlay', // optional for image blend
                }}
            >
                <div className="container">
                    <div className="row">
                        {ServiceV3Data.map(service => (
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={service.id}>
                                <SingleServiceV3 service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV3Grid;
