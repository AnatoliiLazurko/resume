import React from 'react';
import Slider from "react-slick";
import styles from './FeedbacksStyles.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reactLogo from '../../images/technologies/react-logo.png';
import javascriptLogo from '../../images/technologies/javascript-logo.png';
import javaLogo from '../../images/technologies/java-logo.webp';
import phpLogo from '../../images/technologies/php-logo.png';
import csharpLogo from '../../images/technologies/csharp-logo.png';

const Feedbacks = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        speed: 9000,
        autoplaySpeed: 10,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: true,
        pauseOnFocus: false,
        swipe: false,
        centerMode: true,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className={styles["feedbacks-section"]}>
            <div className={styles["slider-block"]}>

                <div className={styles["slider-container"]}>
                    <Slider {...settings}>
                        <div className={styles["slide"]}>
                            <img src={reactLogo} alt="" />
                            <p className={styles["teacher"]}>React Teacher</p>
                            <p className={styles["feedback"]}>
                                Anatolii, each of your work is done with care, it is immediately clear that you
                                know what you need and are working towards your goal diligently and persistently
                            </p>
                        </div>

                        <div className={styles["slide"]}>
                            <img src={javascriptLogo} alt="" />
                            <p className={styles["teacher"]}>JavaScript Teacher</p>
                            <p className={styles["feedback"]}>
                                Student Anatolii impresses with his great work ethic and determination in achieving
                                his goals. He is always ready to take responsibility and make significant efforts to succeed
                            </p>
                        </div>

                        <div className={styles["slide"]}>
                            <img src={javaLogo} alt="" />
                            <p className={styles["teacher"]}>Java Teacher</p>
                            <p className={styles["feedback"]}>
                                I am satisfied with how the course went. You made an effort to understand the subject.
                                The homework assignments were completed at a high level
                            </p>
                        </div>

                        <div className={styles["slide"]}>
                            <img src={phpLogo} alt="" />
                            <p className={styles["teacher"]}>PHP Teacher</p>
                            <p className={styles["feedback"]}>
                                Good job! All tasks were completed thoroughly and with high quality! Keep it up!
                            </p>
                        </div>

                        <div className={styles["slide"]}>
                            <img src={csharpLogo} alt="" />
                            <p className={styles["teacher"]}>C# Teacher</p>
                            <p className={styles["feedback"]}>
                                The student has good potential. He approaches homework assignments with
                                quality and responsibility
                            </p>
                        </div>

                    </Slider>
                </div>

            </div>
        </div>
    );
}

export default Feedbacks;
