import React from 'react';
import styles from './AboutStyles.module.css';
import { Element, Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const About = () => {

    const { ref: aboutMeRef, inView: aboutMeVisible } = useInView({ triggerOnce: true, delay: 200 });
    const { ref: rightSideRef, inView: rightSideVisible } = useInView({ triggerOnce: true, delay: 200 });

    return (
        <Element name="about">
            <div className={styles["about-section"]}>
                <div className={styles["about-container"]}>

                    <p className={styles["title"]}>About me</p>

                    <div className={styles["about-wrap"]}>
                        <div ref={aboutMeRef} className={`${styles["about-me"]} ${aboutMeVisible ? styles.visible : ''}`}>
                            <p>
                                I studied at IT STEP Computer Academy for three years in the software development
                                course, where we learned many different programming languages and technologies.
                                However, I became most interested in web application development using React, which
                                I discovered in the summer of 2023. Right now, I am open to any position to start
                                my career as a developer because my main goal is to enter the IT field and
                                gradually achieve my objectives.
                            </p>
                            <p>
                                I am always excited to take on new challenges to improve my skills and understand
                                how different technologies work. My aim is to progressively grow in the field of
                                software development and learn to create visually appealing and user-friendly websites.
                            </p>
                            <p>
                                In my free time, I like to do sports, go out with friends, read a book or watch a movie.
                            </p>

                            <div className={styles["btn-container"]}>
                                <div className={styles["btn-diploma"]}><FontAwesomeIcon icon={faFileImage} /> Diploma</div>
                                
                                <Link to="contact" spy={true} smooth={true} duration={500} offset={-80}>
                                    <div className={styles["btn-contact"]}><FontAwesomeIcon icon={faHandshake} /> Contact me</div>
                                </Link>
                            </div>
                        </div>
                        <div ref={rightSideRef} className={`${styles["right-side"]} ${rightSideVisible ? styles.visible : ''}`}>
                            <div class={styles["card"]}>
                                <p className={styles["javascript"]}>JavaScript</p>

                                <div className={styles["code-space"]}>
                                    <p>
                                        <span className={styles["const"]}>const</span>
                                        <span className={styles["variable"]}> age</span>
                                        <span className={styles["mark-equal"]}> =</span>
                                        <span className={styles["number"]}> 18</span>
                                        <span className={styles["semicolon"]}>;</span>
                                    </p>
                                    <p>
                                        <span className={styles["const"]}>const</span>
                                        <span className={styles["variable"]}> nationality</span>
                                        <span className={styles["mark-equal"]}> =</span>
                                        <span className={styles["code-text"]}> 'Ukrainian'</span>
                                        <span className={styles["semicolon"]}>;</span>
                                    </p>
                                    <p>
                                        <span className={styles["const"]}>const</span>
                                        <span className={styles["variable"]}> located</span>
                                        <span className={styles["mark-equal"]}> =</span>
                                        <span className={styles["code-text"]}> 'London'</span>
                                        <span className={styles["semicolon"]}>;</span>
                                    </p>
                                    <p>
                                        <span className={styles["const"]}>const</span>
                                        <span className={styles["variable"]}> qualification</span>
                                        <span className={styles["mark-equal"]}> =</span>
                                        <span className={styles["code-text"]}> 'software developer'</span>
                                        <span className={styles["semicolon"]}>;</span>
                                    </p>

                                    <div className={styles["console-log"]}>
                                        <span className={styles["variable"]}>console</span>
                                        <span className={styles["semicolon"]}>.</span>
                                        <span className={styles["log-color"]}>log</span>
                                        <span className={styles["number"]}>(</span>
                                        <span className={styles["code-text"]}>`Hello, I am </span>
                                        <span className={styles["const"]}>$&#123;</span>
                                        <span className={styles["test"]}>age</span>
                                        <span className={styles["const"]}>&#125; </span>
                                        <span className={styles["code-text"]}>years old and I am</span>
                                        <span className={styles["const"]}> $&#123;</span>
                                        <span className={styles["test"]}>nationality</span>
                                        <span className={styles["const"]}>&#125;</span>
                                        <span className={styles["code-text"]}>, but I live in</span>
                                        <span className={styles["const"]}> $&#123;</span>
                                        <span className={styles["test"]}>located</span>
                                        <span className={styles["const"]}>&#125;</span>
                                        <span className={styles["code-text"]}>. I completed my studies at IT STEP and received a</span>
                                        <span className={styles["const"]}> $&#123;</span>
                                        <span className={styles["test"]}>qualification</span>
                                        <span className={styles["const"]}>&#125; </span>
                                        <span className={styles["code-text"]}>diploma.`</span>
                                        <span className={styles["number"]}>)</span>
                                        <span className={styles["semicolon"]}>;</span>
                                    </div>
                                </div>
                            </div>

                            <div class={styles["console"]}>
                                <p className={styles["javascript"]}>Console</p>

                                <div className={styles["code-space"]}>
                                    <p className={styles["semicolon"]}>
                                        Hello, I am 18 years old and I am Ukrainian, but I live in London.
                                        I completed my studies at IT STEP and received a software developer diploma.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Element>
    );
}

export default About;
