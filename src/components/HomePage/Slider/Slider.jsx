import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Slider.scss';

const Slider = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { id: 1, src: '/img/slide1.jpg', link: '/Oferta' },
        { id: 2, src: '/img/slide2.jpg', link: '/Park-maszynowy' },
        { id: 3, src: '/img/slide3.jpg', link: '/Kontakt' }
    ];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000); 
        return () => clearInterval(intervalId);
    }, [currentIndex, nextSlide]); 

    return (
        <section id="slider">
            <div className="slider-container">
                <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div className="slide" key={slide.id}>
                            <div className="overlay"></div>
                            <img src={slide.src} alt={t(`slider.slide${slide.id}.title`)} />
                            
                            <div className="slide-content">
                                {index === 0 ? (
                                    <h1>{t(`slider.slide${slide.id}.title`)}</h1>
                                ) : (
                                    <h2>{t(`slider.slide${slide.id}.title`)}</h2>
                                )}
                                <p>{t(`slider.slide${slide.id}.subtitle`)}</p>
                                <button 
                                    className="slider-cta" 
                                    onClick={() => navigate(slide.link)}
                                >
                                    {t(`slider.slide${slide.id}.cta`)}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="control-btn prev" onClick={prevSlide}>&#10094;</button>
                <button className="control-btn next" onClick={nextSlide}>&#10095;</button>

                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <span 
                            key={index} 
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slider;