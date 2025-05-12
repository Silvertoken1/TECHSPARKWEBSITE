import React from 'react';
import ServiceListWidget from '../widgets/ServiceListWidget';
import SupportWidget from '../widgets/SupportWidget';
import BoucherWidget from '../widgets/BoucherWidget';
import FeatureListData from '../../jsonData/FeatureListData.json';
import PopularServiceData from '../../jsonData/PopularServiceData.json';
import SinglePopularService from './SinglePopularService';
import ServiceFaqV1 from '../faq/ServiceFaqV1';

const ServicesDetailsContent = ({ serviceInfo }) => {
    const { thumb, text, title } = serviceInfo;

    return (
        <>
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 pr-45 pr-md-15 pr-xs-15 services-single-content">
                                <div className="service-single-thumb">
                                    <img src={`/img/services/${thumb}`} alt="Thumb" />
                                    Empowering Innovation
                                </div>
                                <h2>{title}</h2>
                                <p>{text}</p>

                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="content">
                                                <h3>Included Services</h3>
                                                <ul className="feature-list-item">
                                                    {FeatureListData.map(list => (
                                                        <li key={list.id}>
                                                            <i className={list.icon}></i> {list.featureList}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challenge</h3>
                                                <p>
                                                    In a rapidly evolving tech world, startups and digital creators face hurdles around funding, mentorship, and go-to-market strategies. At TechSpark, we bridge that gap—turning potential into real-world impact through agile support, structured programs, and access to industry leaders.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3>What We Do at TechSpark</h3>
                                <p>
                                    TechSpark Innovations offers a full spectrum of services designed to address your most pressing digital challenges. We understand your pain points—difficulty in finding reliable tech talent, lack of end-to-end support, and the risk of launching products that never gain traction.
                                </p>
                                <p>
                                    Each service is designed to not only solve a problem but also to propel your business forward. We’re here to make sure your digital solutions succeed in a competitive market.
                                </p>

                                <div className="faq-style-one service-faq mt-40">
                                    <h2 className="mb-30">Frequently Asked Questions</h2>
                                    <ServiceFaqV1 />
                                </div>

                                <div className="services-more mt-40">
                                    <h2>Popular Services</h2>
                                    <div className="row">
                                        {PopularServiceData.map(popular => (
                                            <SinglePopularService popular={popular} key={popular.id} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-50 mt-xs-50 pl-30 pl-md-15 pl-xs-15 services-sidebar">
                                <ServiceListWidget />
                                <SupportWidget />
                                <BoucherWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesDetailsContent;
