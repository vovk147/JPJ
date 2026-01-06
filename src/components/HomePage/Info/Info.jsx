import "./Info.scss";
import ContLink from "../../Common/ContLink/ContLink";
import { useTranslation } from "react-i18next";

const Info = () => {
    const { t } = useTranslation();

    // Безопасное получение массивов из JSON
    const values = t('info.values_list', { returnObjects: true });
    const services = t('info.services_list', { returnObjects: true });

    return (
        <div className="about-company-wrapper">
            <section className="about-card">
                <div className="about-header">
                    <h1>{t('info.title')}</h1>
                    <div className="line-accent"></div>
                </div>

                <div className="about-main-body">
                    <p className="intro-paragraph">{t('info.intro')}</p>

                    <div className="about-grid">
                        <div className="about-col">
                            <h2>{t('info.mission_h')}</h2>
                            <p>{t('info.mission_p')}</p>

                            <h2>{t('info.history_h')}</h2>
                            <p>{t('info.history_p')}</p>
                        </div>

                        <div className="about-col">
                            <h2>{t('info.values_h')}</h2>
                            <ul className="about-bullet-list">
                                {Array.isArray(values) && values.map((v, i) => <li key={i}>{v}</li>)}
                            </ul>

                            <h2>{t('info.services_h')}</h2>
                            <ul className="about-bullet-list">
                                {Array.isArray(services) && services.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="about-full-text">
                        <h2>{t('info.future_h')}</h2>
                        <p>{t('info.future_p')}</p>
                    </div>
                </div>

                <div className="about-footer">
                    <ContLink />
                </div>
            </section>
        </div>
    );
};

export default Info;