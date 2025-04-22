import React, { useState, useRef } from 'react';
import ProjectV1Data from '../../jsonData/ProjectV1Data.json';
import SingleProjectV1 from './SingleProjectV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';

const ProjectV1 = () => {
    const SlideRef = useRef();

    const handleNext = () => {
        SlideRef.current.swiper.slideNext();
    };

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
    };

    const [activeSlide, setActiveSlide] = useState(1);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <>
            
        </>
    );
};

export default ProjectV1;
