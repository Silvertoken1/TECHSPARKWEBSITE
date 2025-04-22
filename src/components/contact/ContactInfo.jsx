import SocialShare2 from '../others/SocialShare2';
import Animate from '../animation/Animate';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <div className="mb-40">
                    <h2>Contact TechSpark Innovations</h2>
                    <p>
                        Have a project in mind or need expert digital solutions? <br />
                        Get in touch — we’re here to spark your next big idea!
                    </p>
                </div>
                <ul className="contact-address">

                    <Animate className="animate__animated animate__fadeInUp">
                        <li>
                            <div className="content">
                                <h4 className="title">Phone</h4>
                                <a href="tel:+2348134567890">+234 813 456 7890</a>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="300ms">
                        <li>
                            <div className="info">
                                <h4 className="title">Location</h4>
                                <p>
                                    TechSpark Hub, Aminu Kano Crescent, Abuja, Nigeria
                                </p>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="500ms">
                        <li>
                            <div className="info">
                                <h4 className="title">Official Email</h4>
                                <a href="mailto:hello@techspark.com.ng">hello@techspark.com.ng</a>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="700ms">
                        <li>
                            <div className="info">
                                <h4 className="title">Follow Us</h4>
                                <ul className="social-link">
                                    <SocialShare2 />
                                </ul>
                            </div>
                        </li>
                    </Animate>

                </ul>
            </div>
        </>
    );
};

export default ContactInfo;
