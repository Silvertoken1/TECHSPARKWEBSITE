import React from 'react';
import WhyChooseUsV2Data from '../../jsonData/WhyChooseUsV2Data.json';

const WhyChooseUsV2 = () => {
    return (
        <>
            <div
                className="choose-us-style-two-area default-padding text-light"
                style={{ backgroundColor: '#662D91' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="choose-us-style-two">
                                <h2 className="title mb-50">-Our Process-</h2>
                                {/* <h2 className="title mb-50">Grow business with creative ideas</h2> */}
                                <ul className="check-list-item">
                                    {WhyChooseUsV2Data.map(choose =>
                                        <li key={choose.id}>
                                            <h4>{choose.title}</h4>
                                            {/* <ol>
                                                <li>{choose.firstItem}</li>
                                            </ol> */}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 offset-xl-1 text-end">
                            <div className="choose-us-style-two-thumb">
                                <div className="curve-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                        <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                        <text><textPath href="#textPath">We are always your partner in progress</textPath></text>
                                        {/* <text><textPath href="#textPath">Award winning creative digital agency</textPath></text> */}
                                    </svg>
                                </div>
                                <h4> We bridge the gap between innovative ideas and the skilled tech experts needed to execute them.</h4>
                                {/* <h2 className="text-path">since 2015</h2> */}
                                <img src="/img/banner/4.jpg" alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUsV2;
