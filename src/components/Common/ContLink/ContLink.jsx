import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ContLink.scss";

const ContLink = () => {
    const { t } = useTranslation();

    return (
        <div className="cont-link-wrapper">
            <p className="cont-text">
                <span className="question-highlight">{t('contlink.question')}</span>
                <Link className="contact-action-link" to={"/Kontakt"}>
                    {t('contlink.link')}
                </Link> 
                <span className="support-text">{t('contlink.support')}</span>
            </p>
        </div>
    );
};

export default ContLink;