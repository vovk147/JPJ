
import "./MachinePage.scss";
import ContLink from "../Common/ContLink/ContLink";

const MachinePage = () => {
    return (
        <main>
            <section className="Park_Machine">
                <div className="container">
                    <div className="machine_columns">
                        <div className="machine_column">
                            <div className="Image">
                                <img src="link-to-man-image.jpg" alt="MAN TGS 35.500 8×4 BB" />
                            </div>
                            <div className="Text">
                                <p><strong>MAN TGS 35.500 8×4 BB</strong><br />Ciężarówka przystosowana do transportu ciężkiego sprzętu w trudnych warunkach.</p>
                            </div>
                        </div>
                        <div className="machine_column">
                            <div className="Image">
                                <img src="link-to-iveco-image.jpg" alt="IVECO Trakker AD340T41B" />
                            </div>
                            <div className="Text">
                                <p><strong>IVECO Trakker AD340T41B</strong><br />Terenowy samochód ciężarowy do przewozu sprzętu wiertniczego i budowlanego.</p>
                            </div>
                        </div>
                        <div className="machine_column">
                            <div className="Image">
                                <img src="link-to-zil-image.jpg" alt="ZiŁ-131" />
                            </div>
                            <div className="Text">
                                <p><strong>ZiŁ-131</strong><br />Klasyczna ciężarówka o dużych możliwościach terenowych, używana w trudnych warunkach.</p>
                            </div>
                        </div>
                        <div className="machine_column">
                            <div className="Image">
                                <img src="link-to-jcb-image.jpg" alt="JCB 4CX ECO" />
                            </div>
                            <div className="Text">
                                <p><strong>JCB 4CX ECO</strong><br />Wszechstronna koparko-ładowarka stosowana w pracach budowlanych i wykopaliskowych.</p>
                            </div>
                        </div>
                        <div className="machine_column">
                            <div className="Image">
                                <img src="link-to-caterpillar-image.jpg" alt="Caterpillar 336D" />
                            </div>
                            <div className="Text">
                                <p><strong>Caterpillar 336D</strong><br />Potężna koparka przeznaczona do dużych zadań wykopowych i załadunkowych.</p>
                            </div>
                        </div>
                    </div>
                    <ContLink to="/contact" className="Clink"/>
                </div>
            </section>
        </main>
    );
};

export default MachinePage;
