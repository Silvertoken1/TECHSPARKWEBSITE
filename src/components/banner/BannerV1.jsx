import { HashLink as Link } from 'react-router-hash-link';
import Animate from '../animation/Animate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import BannerV1Data from '../../jsonData/BannerV1Data.json';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const BannerV1 = () => {
    // const slides = [
    //     {
    //         id: 1,
    //         type: 'video',
    //         url: '/videos/second_videos.mp4',
    //         title: 'Welcome to TechSpark Innovations',
    //         poster: '/videos/second_video_poster.jpg',
    //         description: 'We bridge the gap between innovative ideas and the skilled tech experts needed to execute them. From mobile and web app development to design, cybersecurity, and beyond, our solutions address the real challenges you face every day.'
    //     },
    //     {
    //         id: 2,
    //         type: 'video',
    //         url: '/videos/first_video.mp4',
    //         title: 'Welcome to TechSpark Innovations',
    //         poster: '/videos/first_video_poster.jpg',
    //         description: 'We bridge the gap between innovative ideas and the skilled tech experts needed to execute them. From mobile and web app development to design, cybersecurity, and beyond, our solutions address the real challenges you face every day.'
    //     },
    //     {
    //         id: 3,
    //         type: 'image',
    //         url: '/img/banner/4.jpg',
    //         title: 'Welcome to TechSpark Innovations',
    //         description: 'We bridge the gap between innovative ideas and the skilled tech experts needed to execute them. From mobile and web app development to design, cybersecurity, and beyond, our solutions address the real challenges you face every day.'
    //     },
    // ];

    const renderMedia = (slide) => {
        if (slide.type === 'video') {
            return (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={slide.poster}
                    preload="metadata"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                >
                    <source src={slide.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        } else {
            return (
                <img
                    src={slide.url}
                    alt={slide.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                />
            );
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="hero-section" style={{ height: '100vh', position: 'relative', color: '#fff', }}>
                <Swiper
                    modules={[EffectFade, Autoplay, Navigation]}
                    effect={'fade'}
                    slidesPerView={1}
                    loop={true}
                    speed={1500}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    navigation={true}
                    fadeEffect={{
                        crossFade: true
                    }}
                    className="hero-swiper"
                >
                    {BannerV1Data.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="video-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
                                {renderMedia(slide)}
                                
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

                                {/* Content for each slide */}
                                <div className="container" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2, height: '100%' }}>
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
                                                    <div>
                                                        <p className="lead mb-2" style={{ fontSize: '1.25rem', maxWidth: '600px', color: '#fff' }}>
                                                            {slide.title}
                                                        </p>
                                                        <p className="lead mb-4" style={{ fontSize: '1.25rem', maxWidth: '600px', color: '#fff' }}>
                                                            {slide.description}
                                                        </p>
                                                    </div>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Brand Partnerships Section */}
            <div className="brand-section py-5 bg-light text-center">
                <h3 className="mb-4 fw-bold text-muted">Our Promise</h3>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-4 col-12 mb-3">
                            <h5 className="fw-bold">Quality & Reliability</h5>
                            <p style={{ fontSize: '1rem', maxWidth: '600px', color: '#000' }}>Get high-quality, reliable digital solutions that drive real business results.</p>
                        </div>
                        <div className="col-md-4 col-12 mb-3">
                            <h5 className="fw-bold">Expert Team</h5>
                            <p style={{ fontSize: '1rem', maxWidth: '600px', color: '#000' }}>Members of our team have proven experience working with industry leaders like Payoneer, Flutterwave, Monie Point, Turing,Paystack, etc ensuring you're in capable hands.</p>
                        </div>
                        <div className="col-md-4 col-12 mb-3">
                            <h5 className="fw-bold">Holistic Support</h5>
                            <p style={{ fontSize: '1rem', maxWidth: '600px', color: '#000' }}>We don't just build your app; we help you launch and scale it with our expert business development services.</p>
                        </div>
                        {/* <div className="col-md-3 col-6 mb-3">
                            <img src="/img/brands/brand1.png" alt="Brand 1" className="img-fluid grayscale" />
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <img src="/img/brands/brand2.png" alt="Brand 2" className="img-fluid grayscale" />
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                            <img src="/img/brands/brand3.png" alt="Brand 3" className="img-fluid grayscale" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;
