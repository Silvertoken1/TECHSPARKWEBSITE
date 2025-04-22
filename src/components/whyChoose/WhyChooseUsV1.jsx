import React from 'react';
import AchievementV1Data from '../../jsonData/AchievementV1Data.json';
import SingleAchievementV1 from './SingleAchievement';

const WhyChooseUsV1 = ({ chooseClass }) => {
    return (
        <>
            <div
                className="choose-us-style-one-area default-padding overflow-hidden"
                style={{ backgroundColor: '#ffffff' }} // Background is now white
            >
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-5">
                            <div
                                className="achivement-counter"
                                style={{ backgroundImage: 'url(img/shape/banner-4.png)' }}
                            >
                                <div className="shape-animated-left-bottom">
                                    <img src="/img/shape/11.png" alt="shape" />
                                </div>
                                <ul>
                                    {AchievementV1Data.map((achievement) => (
                                        <SingleAchievementV1
                                            achievement={achievement}
                                            key={achievement.id}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 mt-md-50 mt-xs-40">
                            <div className="choose-us-card">
                                <h4 className="sub-title">Why Choose Us</h4>
                                <h2 className="title">
                                    Unlock value through <br /> strategic digital growth
                                </h2>
                                <p>
                                    At TechSpark, we focus on empowering businesses with smart digital
                                    strategies, result-driven technologies, and tailored solutions that
                                    ensure long-term success and market leadership.
                                </p>
                                <ul className="list-check">
                                    <li>Strategic Project Kickoffs</li>
                                    <li>Real-time, Scalable Data Solutions</li>
                                    <li>Growth-Oriented Market Planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUsV1;
