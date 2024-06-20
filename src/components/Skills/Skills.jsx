import React, { useState } from 'react';
import styles from './SkillsStyles.module.css';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGears, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';

const Skills = () => {

    const [skillType, setTypeSkill] = useState('frontend');

    const handleFrontend = () => {
        setTypeSkill('frontend');
    }

    const handleBackend = () => {
        setTypeSkill('backend');
    }

    const handleSoft = () => {
        setTypeSkill('other');
    }

    return (
        <Element name="skills">
            <div className={styles["skills-section"]}>

                <p className={styles["title"]}>My Skills</p>
                
                <div className={styles["btn-container"]}>
                    <div className={styles[skillType === 'frontend' ? 'active' : '']} onClick={handleFrontend} >Front end <FontAwesomeIcon icon={faCode} /></div>
                    <div className={styles[skillType === 'backend' ? 'active' : '']} onClick={handleBackend}>Back end <FontAwesomeIcon icon={faGears} /></div>
                    <div className={styles[skillType === 'other' ? 'active' : '']} onClick={handleSoft}>Other skills <FontAwesomeIcon icon={faScrewdriverWrench} /></div>
                </div>

                {skillType === 'frontend' && <FrontendSkills />}
                
                {skillType === 'backend' && <BackendSkills />}
                
                {skillType === 'other' && <OtherSkills /> }
                

            </div>
        </Element>   
    );
}

export default Skills;