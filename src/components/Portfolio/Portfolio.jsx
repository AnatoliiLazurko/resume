import React from 'react';
import styles from './PortfolioStyles.module.css';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import blahoFilm from '../../images/portfolio/blahofilm.png';

const Portfolio = () => {

    const { ref: projectsRef, inView: projectsVisible } = useInView({ triggerOnce: true, delay: 200 });

    const blahofilmGitHub = () => {
        window.open('https://github.com/AnatoliiLazurko/film-project', '_blank');
    };

    const blahofilmDemo = () => {
        window.open('https://www.youtube.com/watch?v=W5eOeMkd6pk', '_blank');
    };

    return (
        <Element name="portfolio">
            <div className={styles["portfolio-section"]}>
            
                <p className={styles["title"]}>My Portfolio</p>

                <div className={`${styles["projects-container"]} ${projectsVisible ? styles.visible : ''}`} ref={projectsRef}>

                    <div className={styles["project-card"]}>
                        <img className={styles["project-image"]} src={blahoFilm} alt="" />

                        <div className={styles["project-header"]}>
                            <p className={styles["project-name"]}>BlahoFilm</p>
                            <div>
                                <FontAwesomeIcon icon={faGithub} onClick={blahofilmGitHub} />
                                <FontAwesomeIcon icon={faGlobe} onClick={blahofilmDemo} />
                            </div>
                        </div>
                        <p className={styles["project-info"]}>
                            BlahoFilm is an innovative streaming service designed to provide
                            users with the best experience of watching movies, series, cartoons
                            and anime. This project was developed as part of my thesis and is
                            now an important part of my portfolio.
                        </p>
                        <p className={styles["project-info"]}>
                            In this project, I was fully involved in the development of the
                            client part, namely project architecture, page layout, development of
                            website functionality, integration of requests to the backend, and much more.
                        </p>
                        <p className={styles["project-tech"]}>Tech used: React, Redux, React Router DOM, Axios, PayPal API and Google API</p>
                    </div>  

                    <div className={styles["project-card"]}>
                        <img className={styles["project-image"]} src={blahoFilm} alt="" />

                        <div className={styles["project-header"]}>
                            <p className={styles["project-name"]}>BlahoFilm</p>
                            <div>
                                <FontAwesomeIcon icon={faGithub} onClick={blahofilmGitHub} />
                                <FontAwesomeIcon icon={faGlobe} onClick={blahofilmDemo} />
                            </div>
                        </div>
                        <p className={styles["project-info"]}>
                            BlahoFilm is an innovative streaming service designed to provide
                            users with the best experience of watching movies, series, cartoons
                            and anime. This project was developed as part of my thesis and is
                            now an important part of my portfolio.
                        </p>
                        <p className={styles["project-info"]}>
                            In this project, I was fully involved in the development of the
                            client part, namely project architecture, page layout, development of
                            website functionality, integration of requests to the backend, and much more.
                        </p>
                        <p className={styles["project-tech"]}>Tech used: React, Redux, React Router DOM, Axios, PayPal API and Google API</p>
                    </div>  

                    <div className={styles["project-card"]}>
                        <img className={styles["project-image"]} src={blahoFilm} alt="" />

                        <div className={styles["project-header"]}>
                            <p className={styles["project-name"]}>BlahoFilm</p>
                            <div>
                                <FontAwesomeIcon icon={faGithub} onClick={blahofilmGitHub} />
                                <FontAwesomeIcon icon={faGlobe} onClick={blahofilmDemo} />
                            </div>
                        </div>
                        <p className={styles["project-info"]}>
                            BlahoFilm is an innovative streaming service designed to provide
                            users with the best experience of watching movies, series, cartoons
                            and anime. This project was developed as part of my thesis and is
                            now an important part of my portfolio.
                        </p>
                        <p className={styles["project-info"]}>
                            In this project, I was fully involved in the development of the
                            client part, namely project architecture, page layout, development of
                            website functionality, integration of requests to the backend, and much more.
                        </p>
                        <p className={styles["project-tech"]}>Tech used: React, Redux, React Router DOM, Axios, PayPal API and Google API</p>
                    </div>  
                    
                </div>

            </div>
        </Element>
    );
}

export default Portfolio;
