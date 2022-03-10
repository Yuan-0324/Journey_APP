
import React, { Component } from "react";
import Slider from "react-slick";
// import BannerFirstImage from '../../../images/activity/banner/BannerFirstImage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImageFirst from '../../../images/activity/banner/BannerImageFirst.png';
import BannerImageSecond from '../../../images/activity/banner/BannerImageSecond.jpg';
import BannerImageThird from '../../../images/activity/banner/BannerImageThird.jpg';
import BannerImageFourth from '../../../images/activity/banner/BannerImageFourth.jpg';


// 載入css
// import '../StyleSheet/importStyle/banner.css'

export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: true
        };
        return (
            <div  className="event-banner">
                <Slider   className="event-banner" {...settings}>
                    <div className="event-banner">
                        <img className="event-banner" src={BannerImageThird} alt="" />
                    </div>
                    <div>
                        <img  className="event-banner"  src={BannerImageSecond} alt="" />
                    </div>
                    <div>
                        <img src={BannerImageFourth} alt="" />
                    </div>
                    <div>
                        <img src={BannerImageFirst}  alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}