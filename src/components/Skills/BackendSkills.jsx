import React from 'react';
import styles from './SkillsStyles.module.css';

const BackendSkills = () => {
    return (
        <div className={styles["skills-container"]}>
            
            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>NodeJS</p>
                <p className={styles["description"]}>
                    I have experience in the development of the server part of applications
                    using Node.js, with integration with databases and third-party APIs
                </p>
                <img className={styles["skill-image"]} src="https://cdn.iconscout.com/icon/free/png-256/free-nodejs-486862-2364931.png" alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>ExpressJS</p>
                <p className={styles["description"]}>
                    I have experience using Express.js to create server applications
                    with simplified processing of routes, requests and responses
                </p>
                <img className={styles["skill-image"]} src="https://spng.pngfind.com/pngs/s/136-1363736_express-js-icon-png-transparent-png.png" alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>MongoDB</p>
                <p className={styles["description"]}>
                    I have experience working with MongoDB for storing and managing data in a NoSQL
                    database, with integration into Node.js applications through Mongoose ORM
                </p>
                <img className={styles["skill-image"]} src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3628347-3032182.png" alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Mongoose</p>
                <p className={styles["description"]}>
                    I have experience using Mongoose for convenient interaction with MongoDB in Node.js
                    applications, including creating models, schemas and executing queries
                </p>
                <img className={styles["skill-image"]} src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4" alt="" />
            </div>

        </div>
    );
}

export default BackendSkills;
