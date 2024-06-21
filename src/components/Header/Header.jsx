import React, { useEffect } from 'react';
import styles from './HeaderStyles.module.css';
import { addScrollListener } from './HeaderScript';
import { Link } from 'react-scroll';

const Header = () => {

    useEffect(() => {
        const removeScrollListener = addScrollListener();
        return () => removeScrollListener();
    }, []);

    return (
        <header className={styles["header"]} id="header">
            <div className={styles["header-content"]}>
                <div className={styles["left-content"]}>
                    &lt;<span>Anatolii</span> /&gt;
                </div>
                <div className={styles["right-content"]}>
                    <ul className={styles["nav-list"]}>
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
                            <Link to="projects" spy={true} smooth={true} duration={500} offset={-80}>Projects</Link>
                        </li>
                        <li className={styles["nav-item"]}>
                            <Link to="contact" spy={true} smooth={true} duration={500} offset={-80}>Contact me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
