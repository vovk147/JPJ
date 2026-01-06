import "./Header.scss";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logojpj } from "../../img/image";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const toggleMenu = () => setIsActive(!isActive);

    const closeMenu = () => {
        setIsActive(false);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="container">
                {/* Логотип */}
                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src={Logojpj} alt="Logo JPJ" />
                    </Link>
                </div>

                {/* Правая часть: Языки + Бургер */}
                <div className="header-right">
                    <div className="language-switcher">
                        {/* Мобильный селект */}
                        <select 
                            className="mobile-select" 
                            value={i18n.language} 
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            <option value="pl">PL</option>
                            <option value="en">EN</option>
                            <option value="de">DE</option>
                        </select>
                        
                        {/* Кнопки для ПК (Умеренного размера) */}
                        <div className="desktop-buttons">
                            <button 
                                className={i18n.language === 'pl' ? 'active' : ''} 
                                onClick={() => changeLanguage('pl')}
                            >PL</button>
                            <button 
                                className={i18n.language === 'en' ? 'active' : ''} 
                                onClick={() => changeLanguage('en')}
                            >EN</button>
                            <button 
                                className={i18n.language === 'de' ? 'active' : ''} 
                                onClick={() => changeLanguage('de')}
                            >DE</button>
                        </div>
                    </div>

                    <div className={`menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>

                {/* Навигация */}
                <nav id="top-menu" className={isActive ? 'active' : ''}>
                    <ul>
                        <li className={`menu-item has-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                            <button className="link dropdown-trigger" onClick={toggleDropdown}>
                                {t('header.offer')} <span className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}></span>
                            </button>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <li><Link className="link" to="/oferta/wiercenie" onClick={closeMenu}>{t('header.services.drilling')}</Link></li>
                                <li><Link className="link" to="/oferta/studnie" onClick={closeMenu}>{t('header.services.wells')}</Link></li>
                                <li><Link className="link" to="/oferta/pompy-ciepla" onClick={closeMenu}>{t('header.services.pumps')}</Link></li>
                                <li><Link className="link" to="/oferta/otwory-poszukiwawcze" onClick={closeMenu}>{t('header.services.exploration')}</Link></li>
                                <li><Link className="link" to="/oferta/piezometry" onClick={closeMenu}>{t('header.services.observation')}</Link></li>
                                <li><Link className="link" to="/oferta/geologia" onClick={closeMenu}>{t('header.services.geology')}</Link></li>
                                <li><Link className="link" to="/oferta/wspolpraca" onClick={closeMenu}>{t('header.services.cooperation')}</Link></li>
                                <li><Link className="link" to="/oferta/praca" onClick={closeMenu}>{t('header.services.work')}</Link></li>
                            </ul>
                        </li>
                        <li><Link className="link" to="/Park" onClick={closeMenu}>{t('header.park')}</Link></li>
                        <li><Link className="link" to="/Realizacje" onClick={closeMenu}>{t('header.realizations')}</Link></li>
                        <li><Link className="link" to="/" onClick={closeMenu}>{t('header.about')}</Link></li>
                        <li><Link className="link" to="/Kontakt" onClick={closeMenu}>{t('header.contact')}</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;