import React from 'react';
import styles from './ContactStyles.module.css';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import devImage from '../../images/contact-section-image.webp';

const Contact = () => {

    const myEmail = 'lazurko2005@gmail.com';
    const subject = 'Job Opportunity';
    const body = 'Leave your message here...';

    return (
        <Element name="contact">
            <div className={styles["contact-section"]}>
                <p className={styles["title"]}>Get In Touch</p>

                <div className={styles["contact-container"]}>
                    <p className={styles["text"]}>
                        If you have any questions or job proposals, please feel
                        free to use the link below to get in touch with me. I'm <br />
                        always open to discussing new opportunities and collaborations.
                    </p>

                    <p className={styles["text"]}>
                        Thank you for taking the time to review my resume.
                    </p>

                    <div className={styles["btn-container"]}>
                        <a href={`mailto:${myEmail}?subject=${subject}&body=${body}`} className={styles["contact-btn"]}><FontAwesomeIcon icon={faEnvelope}/> Send Email</a>
                    </div>
                </div>

                <img className={styles["image"]} src={devImage} alt="Developer" />
            </div>
        </Element>
    );
}

export default Contact;
