import { HashLink as Link } from 'react-router-hash-link';
import Animate from '../animation/Animate';

const BannerV1 = () => {
    return (
        <>
            {/* Hero Section */}
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url('/img/thumb/3.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    position: 'relative',
                    color: '#fff',
                }}
            >
                {/* Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    }}
                ></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
                    <div className="row align-items-center" style={{ height: '100%' }}>
                        <div className="col-lg-7 col-md-10">
                            <div className="text-left">
                                <Animate className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                    <h1 className="display-4 fw-bold mb-4">
                                        <span style={{ color: '#fff' }}>TECH</span>
                                        <span style={{ color: '#662D91' }}>SPARK</span>
                                    </h1>
                                </Animate>
                                <Animate className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                    <p className="lead mb-4" style={{ fontSize: '1.25rem', maxWidth: '600px', color: '#fff' }}>
                                        SparkTech delivers innovative tech solutions that elevate businesses, spark creativity,
                                        and transform digital experiences for the future.
                                    </p>
                                </Animate>
                                <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                    <Link className="btn btn-md btn-gradient animation" to="/contact-us#">
                                        Get in Touch
                                    </Link>
                                </Animate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brand Partnerships Section */}
            <div className="brand-section py-5 bg-light text-center">
                <h5 className="mb-4 fw-bold text-muted">Trusted by forward-thinking brands</h5>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-3 col-6 mb-3">
                            <img src="/img/brands/brand1.png" alt="Brand 1" className="img-fluid grayscale" />
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <img src="/img/brands/brand2.png" alt="Brand 2" className="img-fluid grayscale" />
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <img src="/img/brands/brand3.png" alt="Brand 3" className="img-fluid grayscale" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;
