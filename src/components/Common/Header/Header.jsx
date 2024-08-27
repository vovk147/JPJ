import "./Header.scss";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logojpj } from "../../img/image";
import HomePage from "../../HomePage/HomePage";
import KontaktPage from "../../KontaktPage/KontaktPage"
import MachinePage from "../../MachinePage/MachinePage";


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="container">
                <div className="logo flex">
                    <img src={ Logojpj } alt="Logo" />
                </div>
                <nav id="top-menu" className={` flex ${isActive ? 'active' : ''} ${isDropdownOpen ? 'dropdown-open' : ''}`}>
                    <ul >
                        <li className={`menu-item ${isDropdownOpen ? 'open' : ''}`}>
                            <Link className="link" href="#offer" data-i18n="offer" onClick={toggleDropdown}>
                                Oferta <span className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}></span>
                            </Link>
                            <ul className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                                <li><Link className="link flex" href="drilling.html" >Wiercenie</Link></li>
                                <li><Link className="link flex" href="wells.html">Studnie wiercone</Link></li>
                                <li><Link className="link flex" href="Drilling for heat pumps.html">Odwierty pod pompy ciepła</Link></li>
                                <li><Link className="link flex" href="Exploration and reconnaissance holes.html">Otwory poszukiwawcze, rozpoznawcze</Link></li>
                                <li><Link className="link flex" href="Observation holes, piezometers.html">Otwory obserwacyjne, piezometry</Link></li>
                                <li><Link className="link flex" href="geological drilling.html">Wiercenia geologiczne</Link></li>
                                <li><Link className="link flex" href="#wspolpraca">Oferty współpracy</Link></li>
                                <li><Link className="link flex" href="#praca">Oferty pracy</Link></li>
                            </ul>
                        </li>
                        <li><Link className="link flex" to={"/Park"}  data-i18n="park">Park Maszynowy</Link></li>
                        <li><Link className="link flex"  to={""} data-i18n="realizations">Realizacje</Link></li>
                        <li><Link className="link flex" to={"/"} data-i18n="about">O Nas</Link></li>
                        <li><Link className="link flex" to={"/Kontakt"} data-i18n="contact">Kontakt</Link></li>
                    </ul>
                </nav>
                <div className={`menu-toggle flex ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="language-switcher flex">
                    <select id="languageSelector" onChange={(e) => console.log(e.target.value)} className="flex">
                        <option value="pl">Polish</option>
                        <option value="en">English</option>
                        <option value="de">Deutsch</option>
                    </select>
                    <button className="lang-btn active" data-lang="pl">PL</button>
                    <button className="lang-btn" data-lang="en">EN</button>
                    <button className="lang-btn" data-lang="de">DE</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

