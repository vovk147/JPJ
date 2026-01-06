import "./Footer.scss";
import { WhatsApp } from "../../img/image";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Блок 1: Офис */}
                    <div className="footer-col">
                        <h4>{t('footer.office_title')}</h4>
                        <p>P.W. JPJ</p>
                        <p>{t('footer.address_office')}</p>
                        <p>{t('footer.city_office')}</p>
                    </div>

                    {/* Блок 2: Юридические данные */}
                    <div className="footer-col">
                        <h4>{t('footer.company_title')}</h4>
                        <p>P.W. JPJ Jan Paweł Jarosiński</p>
                        <p>{t('footer.address_company')}</p>
                        <p>{t('footer.city_company')}</p>
                        <p>NIP: 657-216-76-26</p>
                    </div>

                    {/* Блок 3: Только для страницы Контакты */}
                    {location.pathname === '/Kontakt' && (
                        <div className="footer-col">
                            <h4>{t('footer.shipping_title')}</h4>
                            <p>P.W. JPJ Jan Paweł Jarosiński</p>
                            <p>{t('footer.po_box')}</p>
                            <p>25-432 Kielce 23</p>
                        </div>
                    )}

                    {/* Блок 4: Контакты */}
                    <div className="footer-col">
                        <h4>{t('footer.contact_title')}</h4>
                        <p>tel: <a href="tel:+48791121323">+48 791 121 323</a></p>
                        <p>e-mail: <a href="mailto:biuro@jpj.pl">biuro@jpj.pl</a></p>
                        <a href="https://wa.me/+48791121323" target="_blank" rel="noopener noreferrer" className="wa-link">
                            <img src={WhatsApp} alt="WA" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{t('footer.copy')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;