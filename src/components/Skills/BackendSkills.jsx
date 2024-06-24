import React from 'react';
import styles from './SkillsStyles.module.css';
import nodejsLogo from '../../images/technologies/nodejs-logo.png';
import expressLogo from '../../images/technologies/express-logo2.png';
import mongodbLogo from '../../images/technologies/mongodb-logo.webp';
import mongooseLogo from '../../images/technologies/mongoose-logo.png';

const BackendSkills = () => {
    return (
        <div className={styles["skills-block"]}>
            
            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>NodeJS</p>
                <p className={styles["description"]}>
                    I have experience in the development of the server part of applications
                    using Node.js, with integration with databases and third-party APIs
                </p>
                <img className={styles["skill-image"]} src={nodejsLogo} alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>ExpressJS</p>
                <p className={styles["description"]}>
                    I have experience using Express.js to create server applications
                    with simplified processing of routes, requests and responses
                </p>
                <img className={styles["skill-image"]} src={expressLogo} alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>MongoDB</p>
                <p className={styles["description"]}>
                    I have experience working with MongoDB for storing and managing data in a NoSQL
                    database, with integration into Node.js applications through Mongoose ORM
                </p>
                <img className={styles["skill-image"]} src={mongodbLogo} alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Mongoose</p>
                <p className={styles["description"]}>
                    I have experience using Mongoose for convenient interaction with MongoDB in Node.js
                    applications, including creating models, schemas and executing queries
                </p>
                <img className={styles["skill-image"]} src={mongooseLogo} alt="" />
            </div>

        </div>
    );
}

export default BackendSkills;
