import React, { useEffect, useState } from 'react';
import styles from './HeaderStyles.module.css';
import { addScrollListener } from './HeaderScript';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    useEffect(() => {
        const removeScrollListener = addScrollListener();
        return () => removeScrollListener();
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles["header"]} id="header">
            <div className={styles["header-content"]}>
                <div className={styles["left-content"]}>
                    &lt;<span>Anatolii</span> /&gt;
                </div>
                <nav className={`${styles["nav-list"]} ${isMenuOpen ? styles["nav-list-open"] : ''}`}>
                    <Link to="home" spy={true} smooth={true} duration={500} offset={-80} className={styles["nav-item"]}>Home</Link>
                    <Link to="about" spy={true} smooth={true} duration={500} offset={-80} className={styles["nav-item"]}>About</Link>
                    <Link to="skills" spy={true} smooth={true} duration={500} offset={-80} className={styles["nav-item"]}>Skills</Link>
                    <Link to="portfolio" spy={true} smooth={true} duration={500} offset={-80} className={styles["nav-item"]}>Portfolio</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} offset={-80} className={styles["nav-item"]}>Contact</Link>
                </nav>
                <button className={styles["menu-button"]} onClick={toggleMenu}>
                    {!isMenuOpen && <FontAwesomeIcon icon={faBars} className={styles["menu-mark"]} />}
                    {isMenuOpen && <FontAwesomeIcon icon={faXmark} className={styles["close-mark"]} />}
                </button>
            </div>
        </header>
    );
}

export default Header;
