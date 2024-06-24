import React from 'react';
import styles from './SkillsStyles.module.css';
import githubLogo from '../../images/technologies/github-logo.png';
import vscodeLogo from '../../images/technologies/vscode-logo.png';
import postmanLogo from '../../images/technologies/postman-logo.png';

const OtherSkills = () => {
    return (
        <div className={styles["skills-block"]}>
            
            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>GitHub</p>
                <p className={styles["description"]}>
                    I have skills in working with Git and GitHub to organize
                    code, create branches, perform commits and merge changes
                </p>
                <img className={styles["skill-image"]} src={githubLogo} alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>VS Code</p>
                <p className={styles["description"]}>
                    I have experience developing programs in VS Code, using it to
                    write, debug and implement code using extensions and tools
                </p>
                <img className={styles["skill-image"]} src={vscodeLogo} alt="" />
            </div>

            <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Postman</p>
                <p className={styles["description"]}>
                    Skilled in configuring and using Postman to create, manage,
                    and document API collections for development and testing
                </p>
                <img className={styles["skill-image"]} src={postmanLogo} alt="" />
            </div>

            {/* <div className={styles["skill-card"]}>
                <p className={styles["skill"]}>Docker</p>
                <p className={styles["description"]}>
                    I have very little experience with Docker, creating containers and rapid deployment
                </p>
                <img className={styles["skill-image"]} src="https://static-00.iconduck.com/assets.00/docker-icon-512x369-f1zpp1fb.png" alt="" />
            </div> */}
            
        </div>
    );
}

export default OtherSkills;
