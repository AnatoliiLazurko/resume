import React from 'react';
import styles from './HomeStyles.module.css';
import myPhoto from '../../images/image1.jpg';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const Home = () => {

    const { ref: meHomeRef, inView: meHomeVisible } = useInView({ triggerOnce: true, delay: 200 });
    const { ref: myPhotoRef, inView: myPhotoVisible } = useInView({ triggerOnce: true, delay: 200 });

    return (
        <Element name="home">
            <div className={styles["home-section"]}>
                <div className={styles["container"]}>
                    <div className={`${styles["me-unvisible"]} ${meHomeVisible ? styles.visible : ''}`} ref={meHomeRef}>
                        <p className={styles["text-border"]}>Hi, my name is</p>
                        <p className={styles["my-name"]}>Anatolii Lazurco</p>
                        <p className={styles["status"]}>
                            A young entry-level frontend developer. I am gradually developing <br />
                            in this field and enjoy the realization of ideas in real projects
                        </p>
                    </div>
                    <div className={`${styles["photo-unvisible"]} ${myPhotoVisible ? styles.visible : ''}`} ref={myPhotoRef}>
                        <div className={styles["photo-circle"]}>
                            <img src={myPhoto} alt="Avatar" className={styles["photo"]} />
                        </div>
                    </div>
                </div>

                <div className={styles["circle-animation"]}>
                    <div className={styles["circle"]}></div>
                </div>

                {/* <div className={styles["black-circle1"]}></div>
                <div className={styles["black-circle2"]}></div> */}

                <img src="https://ouch-cdn2.icons8.com/aa-wDxZIZMZXPRM9yfA3__fncUXSlsBJ0L1vPAtmuW0/rs:fit:608:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDc3/L2UyMTMwZGI2LWM1/NjEtNDMzMC04MDYw/LWFmNzQ3NDVmNzkw/Yi5zdmc.png" alt="" className={styles["user-img"]} />

            </div>
        </Element> 
    );
}

export default Home;
