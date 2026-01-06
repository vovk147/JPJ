import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { realizationsData } from './realizationsData';
import ContLink from "../Common/ContLink/ContLink";
import './RealizationsPage.scss';

const RealizationsPage = () => {
    const { t } = useTranslation();

    return (
        <div className="realizations-page">
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <span className="subtitle">{t('realizations.subtitle')}</span>
                        <h1>{t('realizations.title')}</h1>
                        <div className="accent-bar"></div>
                    </div>
                </div>
            </section>

            <section className="projects-section">
                <div className="container">
                    <div className="projects-grid">
                        {realizationsData.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="card-header">
                                    <div className="placeholder-img">
                                        <span className="tag">{t(project.category)}</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="meta"><span className="date">{t(project.date)}</span></div>
                                    <h3>{t(project.title)}</h3>
                                    <p className="location">📍 {t(project.location)}</p>
                                    <p className="description">{t(project.description)}</p>
                                    <Link to={`/realizacje/${project.id}`} className="details-link">
                                        {t('realizations.details_btn')} <span className="arrow">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ТОТ САМЫЙ БЛОК В КОНЦЕ */}
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

export default RealizationsPage;