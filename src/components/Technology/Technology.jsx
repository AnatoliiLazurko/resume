import React from 'react';
import Slider from "react-slick";
import styles from './TechnologyStyles.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reactLogo from '../../images/slider/react-logo.png';
import githubLogo from '../../images/slider/github-logo.png';
import htmlLogo from '../../images/slider/html-logo.png';
import cssLogo from '../../images/slider/CSS-logo.png';
import javascriptLogo from '../../images/slider/javascript-logo.png';
import reduxLogo from '../../images/slider/redux-logo.png';
import nodejsLogo from '../../images/slider/nodejs-logo.png';
import expressLogo from '../../images/slider/express-logo.png';
import mongodbLogo from '../../images/slider/mongodb-logo.webp';
import mongooseLogo from '../../images/slider/mongoose-logo.png';
import postmanLogo from '../../images/slider/postman-logo.png';

const Technology = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 10,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        centerMode: true,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    };

    return (
        <div className={styles["technology-section"]}>

            <div className={styles["slider-container"]}>
                <Slider {...settings}>
                    <div className={styles["slider"]}>
                        <img src={reactLogo} alt="" />
                        <p>React</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={githubLogo} alt="" />
                        <p>Git Hub</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={htmlLogo} alt="" />
                        <p>Html</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={cssLogo} alt="" />
                        <p>CSS</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={javascriptLogo} alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={reduxLogo} alt="" />
                        <p>Redux</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={nodejsLogo} alt="" />
                        <p>Node js</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={expressLogo} alt="" />
                        <p>Express js</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={mongodbLogo} alt="" />
                        <p>MongoDB</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={mongooseLogo} alt="" />
                        <p>Mongoose js</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src={postmanLogo} alt="" />
                        <p>Postman</p>
                    </div>
                </Slider>
                </div>
        </div>
    );
}

export default Technology;
