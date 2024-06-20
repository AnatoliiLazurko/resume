import React from 'react';
import styles from './SkillsStyles.module.css';

const FrontendSkills = () => {
    return (
        <div className={styles["skills-container"]}>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>HTML</p>
                <p className={styles["description"]}>
                    I have experience using HTML to create structured,
                    semantic and accessible web pages
                </p>
                <img className={styles["skill-image"]} src="https://cdn.iconscout.com/icon/free/png-256/free-html-programming-language-css-editing-style-46278.png" alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>CSS</p>
                <p className={styles["description"]}>
                    I use modern styling methods, such as Flexbox, Grid
                    and CSS animations, to ensure high quality design
                </p>
                <img className={styles["skill-image"]} src="https://seeklogo.com/images/C/css3-logo-79B129E90E-seeklogo.com.png" alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>JavaScript</p>
                <p className={styles["description"]}>
                    I have experience in developing interactive web applications using
                    JavaScript, including working with the DOM and event handling
                </p>
                <img className={styles["skill-image"]} src="https://www.svgrepo.com/show/327372/logo-javascript.svg" alt="" />
            </div>
            
            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>React</p>
                <p className={styles["description"]}>
                    I have experience in developing web applications using React,
                    the ability to create components and manage states
                </p>
                <img className={styles["skill-image"]} src="https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png" alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Redux</p>
                <p className={styles["description"]}>
                    I have experience in Redux integration for centralized state management
                    and ensuring data consistency in complex React projects
                </p>
                <img className={styles["skill-image"]} src="https://static-00.iconduck.com/assets.00/brand-redux-icon-256x244-tty6ddof.png" alt="" />
            </div>
            
            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>React Router DOM</p>
                <p className={styles["description"]}>
                    I have experience using React Router DOM to implement dynamic
                    routing and state management using URL parameters
                </p>
                <img className={styles["skill-image"]} src="https://reactrouter.com/_brand/react-router-stacked-monotone.png" alt="" />
            </div>
            
            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Axios</p>
                <p className={styles["description"]}>
                    I have the skills to use Axios to make HTTP requests and
                    exchange data with the server in React projects
                </p>
                <img className={styles["skill-image"]} src="https://cdn.icon-icons.com/icons2/3911/PNG/512/axios_logo_icon_247516.png" alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Bootstrap</p>
                <p className={styles["description"]}>
                    I have experience using Bootstrap to quickly develop
                    stylish and responsive web interfaces
                </p>
                <img className={styles["skill-image"]} src="https://www.svgrepo.com/show/330083/bootstrap.svg" alt="" />
            </div>

        </div>
    );
}

export default FrontendSkills;
