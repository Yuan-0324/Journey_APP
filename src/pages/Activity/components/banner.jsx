
import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                        <img className="event-banner" src='https://picsum.photos/id/395/1205/300' alt="" />
                    </div>
                    <div>
                        <img  className="event-banner"  src='https://picsum.photos/id/396/1205/300' alt="" />
                    </div>
                    <div>
                        <img src='https://picsum.photos/id/397/1205/300' alt="" />
                    </div>
                    <div>
                        <img src='https://picsum.photos/id/398/1205/300' alt="" />
                    </div>
                    <div>
                        <img src='https://picsum.photos/id/399/1205/300' alt="" />
                    </div>
                    <div>
                        <img src='https://picsum.photos/id/340/1205/300' alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}