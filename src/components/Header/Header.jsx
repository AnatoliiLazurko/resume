import React, { useEffect, useState } from 'react';
import styles from './HeaderStyles.module.css';
import { addScrollListener } from './HeaderScript';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
                <div className={styles["right-content"]}>
                    <div className={styles["menu-button"]} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <ul className={`${styles['nav-list']} ${isMenuOpen ? styles['nav-list-open'] : ''}`}>
                        <li className={styles["nav-item"]}>
                            <Link to="home" spy={true} smooth={true} duration={500} offset={-80}>Home</Link>
                        </li>
                        <li className={styles["nav-item"]}>
                            <Link to="about" spy={true} smooth={true} duration={500} offset={-80}>About</Link>
                        </li>
                        <li className={styles["nav-item"]}>
                            <Link to="skills" spy={true} smooth={true} duration={500} offset={-80}>Skills</Link>
                        </li>
                        <li className={styles["nav-item"]}>
                            <Link to="portfolio" spy={true} smooth={true} duration={500} offset={-80}>Portfolio</Link>
                        </li>
                        <li className={styles["nav-item"]}>
                            <Link to="contact" spy={true} smooth={true} duration={500} offset={-80}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
