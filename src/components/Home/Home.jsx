import React from 'react';
import styles from './HomeStyles.module.css';
import myPhoto from '../../images/image2.jpg';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faCode } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <Element name="home">
            <div className={styles["home-section"]}>
                <div className={styles["container"]}>
                    <div>
                        <p className={styles["text-border"]}>Hi, my name is</p>
                        <p className={styles["my-name"]}>Anatolii Lazurco</p>
                        <p className={styles["status"]}>
                            A young entry-level frontend developer. I am gradually developing <br />
                            in this field and enjoy the realization of ideas in real projects
                        </p>
                    </div>
                    <div>
                        <div className={styles["photo-circle"]}>
                            <img src={myPhoto} alt="Avatar" className={styles["photo"]} />
                        </div>
                    </div>
                </div>

                <div className={styles["circle-animation"]}>
                    <div className={styles["circle"]}></div>
                </div>

                <div className={styles["black-circle1"]}></div>
                <div className={styles["black-circle2"]}></div>

                <img src="https://ouch-cdn2.icons8.com/aa-wDxZIZMZXPRM9yfA3__fncUXSlsBJ0L1vPAtmuW0/rs:fit:608:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDc3/L2UyMTMwZGI2LWM1/NjEtNDMzMC04MDYw/LWFmNzQ3NDVmNzkw/Yi5zdmc.png" alt="" className={styles["user-img"]} />
                
                <FontAwesomeIcon icon={faReact} className={styles["react-icon"]} />
                <FontAwesomeIcon icon={faCodeBranch} className={styles["git-branch-icon"]} />
                <FontAwesomeIcon icon={faCode} className={styles["code-icon"]} />

            </div>
        </Element> 
    );
}

export default Home;
