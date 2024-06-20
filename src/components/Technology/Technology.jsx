import React from 'react';
import Slider from "react-slick";
import styles from './TechnologyStyles.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Technology = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
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

            {/* <p className={styles["title"]}>Technologies</p> */}

            <div className={styles["slider-container"]}>
                <Slider {...settings}>
                    <div className={styles["slider"]}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                        <p>React</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                        <p>Git Hub</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png" alt="" />
                        <p>Html</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
                        <p>CSS</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="" />
                        <p>Redux</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" alt="" />
                        <p>Node js</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png" alt="" />
                        <p>Express js</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="" />
                        <p>MongoDB</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4" alt="" />
                        <p>Mongoose js</p>
                    </div>
                    <div className={styles["slider"]}>
                        <img src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png" alt="" />
                        <p>Postman</p>
                    </div>
                </Slider>
                </div>
        </div>
    );
}

export default Technology;
