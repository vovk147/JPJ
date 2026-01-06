import React from 'react';
import { useTranslation } from 'react-i18next';
import { machinesData } from './machinesData';
import ContLink from "../Common/ContLink/ContLink";
import "./MachinePage.scss";

const MachinePage = () => {
    const { t } = useTranslation();

    return (
        <div className="machine-page">
            <section className="machine-hero">
                <div className="container">
                    <span className="subtitle">{t('machine_page.subtitle')}</span>
                    <h1>{t('machine_page.title')}</h1>
                    <div className="accent-bar"></div>
                </div>
            </section>

            <section className="machine-grid-section">
                <div className="container">
                    <div className="machine-grid">
                        {machinesData.map((machine) => (
                            <div key={machine.id} className="machine-card">
                                <div className="machine-image">
                                    <img src={machine.image} alt={t(machine.name)} />
                                    <div className="type-tag">{t(machine.type)}</div>
                                </div>
                                <div className="machine-info">
                                    <h3>{t(machine.name)}</h3>
                                    <p className="desc">{t(machine.description)}</p>
                                    <div className="specs-list">
                                        <div className="spec-item">
                                            <span>{t('machine_page.power')}:</span>
                                            <strong>{t(machine.specs.power)}</strong>
                                        </div>
                                        <div className="spec-item">
                                            <span>{t('machine_page.depth')}:</span>
                                            <strong>{t(machine.specs.depth)}</strong>
                                        </div>
                                        <div className="spec-item">
                                            <span>{t('machine_page.weight')}:</span>
                                            <strong>{t(machine.specs.weight)}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="machine-footer-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>{t('machine_page.help_title')}</h2>
                        <p>{t('machine_page.help_desc')}</p>
                        <div className="cta-button-wrapper">
                            <ContLink />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MachinePage;