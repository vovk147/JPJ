import "./Footer.scss";
import { WhatsApp } from "../../img/image";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    return (
        <footer>
            <div className="container">
                <div className="footer-columns">
                    <div className="footer-column biuro">
                        <h3>Dane Buira:</h3>
                        <p>
                            P.W.JPJ<br />
                            ul.Zagorska 59<br />
                            25-344 Kielce
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3>Dane firmy:</h3>
                        <p>
                            Przedsiębiorstwo Wielobranżowe JPJ<br />
                            Jan Paweł Jarosiński<br />
                            ul. J.Nowaka Jeziorańskiego 63/13<br />
                            25-432 Kielce<br />
                            NIP 657-216-76-26
                        </p>
                    </div>

                    {location.pathname === '/Kontakt' && (
                        <div className="footer-column">
                            <h3>Dane wysyłkowe:</h3>
                            <p>
                                Przedsiębiorstwo Wielobranżowe JPJ<br />
                                Jan Paweł Jarosiński<br />
                                skrytka pocztowa 846<br />
                                25-432 Kielce 23
                            </p>
                        </div>
                    )}

                    <div className="footer-column">
                        <h3>Kontakt:</h3>
                        <p>
                            tel: <a href="tel:+48-791-121-323">+48-791-121-323</a><br />
                            e-mail: <a href="mailto:biuro@jpj.pl">biuro@jpj.pl</a><br />
                            <div className="WhatsApp">
                                <img src={WhatsApp} alt="WhatsApp" />
                                <a href="https://wa.me/+48791121323" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </div>
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    © Przedsiębiorstwo Wielobranżowe JPJ Jan Paweł Jarosiński - 2024
                </div>
            </div>
        </footer>
    );
};

export default Footer;
