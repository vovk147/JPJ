import React, { useState, useEffect } from 'react';
import './Slider.scss';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { src: '/img/slide1.jpg', alt: 'Slide 1', caption: 'Nasza najnowsza oferta' },
        { src: '/img/slide2.jpg', alt: 'Slide 2', caption: 'Nowoczesne technologie' },
        { src: '/img/slide3.jpg', alt: 'Slide 3', caption: 'Zadowoleni klienci' }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); 

        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="slider">
            <div className="slider-container">
                <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div className="slide" key={index}>
                            <img src={slide.src} alt={slide.alt} />
                            <div className="caption">{slide.caption}</div>
                        </div>
                    ))}
                </div>
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </section>
    );
};

export default Slider;
