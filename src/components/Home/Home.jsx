import React from 'react';
import styles from './HomeStyles.module.css';
import myPhoto from '../../images/image2.jpg';
import { Element, Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import devImage from '../../images/home-section-image.png';

const Home = () => {

    const { ref: meHomeRef, inView: meHomeVisible } = useInView({ triggerOnce: true, delay: 200 });
    const { ref: myPhotoRef, inView: myPhotoVisible } = useInView({ triggerOnce: true, delay: 200 });

    return (
        <Element name="home">
            <div className={styles["home-section"]}>
                <div className={styles["home-container"]}>
                    <div className={`${styles["me-unvisible"]} ${meHomeVisible ? styles.visible : ''}`} ref={meHomeRef}>
                        <p className={styles["hi-text"]}>Hi, my name is</p>
                        <p className={styles["my-name"]}>Anatolii Lazurco</p>
                        <p className={styles["developer"]}>
                            A young entry-level software developer with a penchant for frontend. <br /> I am gradually developing
                            in this field and enjoy the realization of ideas in real projects
                        </p>
                        <div className={styles["btn-container"]}>                       
                            <Link to="contact" spy={true} smooth={true} duration={500} offset={-80}>
                                <div className={styles["btn-contact"]}>Contact me</div>
                            </Link>

                            <p className={styles["view-portfolio-btn"]}>
                                <Link to="portfolio" spy={true} smooth={true} duration={500} offset={-80}>VIEW MY PORTFOLIO</Link>
                            </p>
                        </div>
                    </div>
                    <div className={`${styles["photo-unvisible"]} ${myPhotoVisible ? styles.visible : ''}`} ref={myPhotoRef}>
                        <div className={styles["photo-circle"]}>
                            <img src={myPhoto} alt="Avatar" className={styles["photo"]} />
                        </div>
                    </div>

                    <img src={devImage} alt="Developer" className={styles["developer-img"]} />
                </div>

                <div className={styles["circle-animation"]}>
                    <div className={styles["circle"]}></div>
                </div>

            </div>
        </Element> 
    );
}

export default Home;
