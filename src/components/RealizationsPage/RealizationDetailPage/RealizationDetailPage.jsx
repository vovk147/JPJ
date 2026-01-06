import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { realizationsData } from '../realizationsData'; // проверь путь к файлу данных
import ContLink from '../../Common/ContLink/ContLink';
import './RealizationDetailPage.scss';

const RealizationDetailPage = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const project = realizationsData.find(item => item.id === parseInt(id));

    // Логика слайдера
    const [activeImg, setActiveImg] = useState(0);

    if (!project) {
        return (
            <div className="project-not-found">
                <div className="container">
                    <h2>{t('realizations.not_found')}</h2>
                    <Link to="/Realizacje" className="back-link">← {t('realizations.back')}</Link>
                </div>
            </div>
        );
    }

    const nextImg = () => setActiveImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    const prevImg = () => setActiveImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

    return (
        <div className="project-detail-page">
            <section className="detail-hero">
                <div className="container">
                    <div className="top-nav-row">
                        <Link to="/Realizacje" className="back-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                            {t('realizations.back')}
                        </Link>
                    </div>
                    <h1>{t(project.title)}</h1>
                    <div className="accent-bar"></div>
                </div>
            </section>

            <section className="main-content-section">
                <div className="container">
                    <div className="detail-layout">
                        
                        {/* ЛЕВАЯ КОЛОНКА: Слайдер и Текст */}
                        <div className="left-column">
                            <div className="slider-container">
                                <div className="main-slide">
                                    <img src={project.images[activeImg]} alt="Project view" />
                                    <span className="badge">{t(project.category)}</span>
                                    <div className="nav-arrows">
                                        <span onClick={prevImg} className="arrow">❮</span>
                                        <span onClick={nextImg} className="arrow">❯</span>
                                    </div>
                                </div>
                                <div className="thumbs">
                                    {project.images.map((img, index) => (
                                        <div 
                                            key={index} 
                                            className={`thumb ${index === activeImg ? 'active' : ''}`}
                                            onClick={() => setActiveImg(index)}
                                        >
                                            <img src={img} alt="thumbnail" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-content">
                                <h2>{t('realizations.desc_title')}</h2>
                                <p className="full-description">{t(project.description)}</p>
                            </div>
                        </div>

                        {/* ПРАВАЯ КОЛОНКА: Техническая инфо-карта */}
                        <aside className="right-column">
                            <div className="info-card">
                                <h3>{t('realizations.specs_title')}</h3>
                                <div className="info-item">
                                    <span className="label">{t('realizations.location')}:</span>
                                    <span className="value">{t(project.location)}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">{t('realizations.category')}:</span>
                                    <span className="value">{t(project.category)}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">{t('realizations.date')}:</span>
                                    <span className="value">{t(project.date)}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">{t('realizations.status')}:</span>
                                    <span className="value status">{t('realizations.status_val')}</span>
                                </div>
                                
                                <Link to="/Kontakt" className="contact-btn">
                                    {t('realizations.cta')}
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Облегченный блок обратной связи внизу */}
            <section className="realizations-footer-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>{t('realizations.help_title')}</h2>
                        <p>{t('realizations.help_desc')}</p>
                        <div className="cta-button-wrapper">
                            <ContLink />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RealizationDetailPage;