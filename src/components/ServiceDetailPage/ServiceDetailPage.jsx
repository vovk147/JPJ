import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { servicesData } from './servicesData';
import ContLink from "../Common/ContLink/ContLink";
import './ServiceDetailPage.scss';

const ServiceDetailPage = () => {
    const { t } = useTranslation();
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    if (!service) return <div className="container" style={{ padding: '150px 0' }}>Service not found</div>;

    const benefits = t(`services.${service.id}.benefits`, { returnObjects: true });
    const steps = t(`services.${service.id}.steps`, { returnObjects: true });

    return (
        <div className="service-detail-page">
            <section className="service-hero">
                <div className="container">

                    <div className="top-nav-row">
                        <Link to="/" className="back-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            {t('realizations.back')}
                        </Link>
                    </div>
                    <h1>{t(service.titleKey)}</h1>
                    <div className="accent-bar"></div>
                </div>
            </section>

            <section className="service-main-content">
                <div className="container">
                    <div className="content-grid">
                        <div className="text-side">
                            <h2 className="section-title">{t('services.common.about_service')}</h2>
                            <p className="main-description">{t(`services.${service.id}.description`)}</p>

                            <div className="benefits-block">
                                <h3>{t('services.common.why_us')}</h3>
                                <ul className="modern-list">
                                    {Array.isArray(benefits) && benefits.map((item, i) => (
                                        <li key={i}><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="visual-side">
                            <div className="image-wrapper">
                                <img src={service.img} alt={t(service.titleKey)} />
                            </div>
                            <div className="info-box">
                                <h4>{t('services.common.quick_contact')}</h4>
                                <p>{t('services.common.contact_desc')}</p>
                                <a href="tel:+48791121323" className="phone-link">+48 791 121 323</a>
                            </div>
                        </div>
                    </div>

                    <div className="process-section">
                        <h2 className="section-title center">{t('services.common.process_title')}</h2>
                        <div className="steps-grid">
                            {Array.isArray(steps) && steps.map((step, i) => (
                                <div key={i} className="step-card">
                                    <div className="step-num">0{i + 1}</div>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-footer-cta">
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

export default ServiceDetailPage;