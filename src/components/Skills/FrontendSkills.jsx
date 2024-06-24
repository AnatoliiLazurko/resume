import React from 'react';
import styles from './SkillsStyles.module.css';
import htmlLogo from '../../images/technologies/html-logo.png'
import cssLogo from '../../images/technologies/CSS-logo.png'
import javascriptLogo from '../../images/technologies/javascript-logo.png';
import reactLogo from '../../images/technologies/react-logo.png';
import reduxLogo from '../../images/technologies/redux-logo.png';
import reactRouterLogo from '../../images/technologies/react-router-logo.png';
import axiosLogo from '../../images/technologies/axios-logo.png';

const FrontendSkills = () => {
    return (
        <div className={styles["skills-block"]}>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>HTML</p>
                <p className={styles["description"]}>
                    I have experience using HTML to create structured,
                    semantic and accessible web pages
                </p>
                <img className={styles["skill-image"]} src={htmlLogo} alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>CSS</p>
                <p className={styles["description"]}>
                    I use modern styling methods, such as Flexbox, Grid
                    and CSS animations, to ensure high quality design
                </p>
                <img className={styles["skill-image"]} src={cssLogo} alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>JavaScript</p>
                <p className={styles["description"]}>
                    I have experience in developing interactive web applications using
                    JavaScript, including working with the DOM and event handling
                </p>
                <img className={styles["skill-image"]} src={javascriptLogo} alt="" />
            </div>
            
            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>React</p>
                <p className={styles["description"]}>
                    I have experience in developing web applications using React,
                    the ability to create components and manage states
                </p>
                <img className={styles["skill-image"]} src={reactLogo} alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Redux</p>
                <p className={styles["description"]}>
                    I have experience in Redux integration for centralized state management
                    and ensuring data consistency in complex React projects
                </p>
                <img className={styles["skill-image"]} src={reduxLogo} alt="" />
            </div>
            
            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>React Router DOM</p>
                <p className={styles["description"]}>
                    I have experience using React Router DOM to implement dynamic
                    routing and state management using URL parameters
                </p>
                <img className={styles["skill-image"]} src={reactRouterLogo} alt="" />
            </div>
            
            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Axios</p>
                <p className={styles["description"]}>
                    I have the skills to use Axios to make HTTP requests and
                    exchange data with the server in React projects
                </p>
                <img className={styles["skill-image"]} src={axiosLogo} alt="" />
            </div>

            {/* <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Bootstrap</p>
                <p className={styles["description"]}>
                    I have experience using Bootstrap to quickly develop
                    stylish and responsive web interfaces
                </p>
                <img className={styles["skill-image"]} src="https://www.svgrepo.com/show/330083/bootstrap.svg" alt="" />
            </div> */}

        </div>
    );
}

export default FrontendSkills;
