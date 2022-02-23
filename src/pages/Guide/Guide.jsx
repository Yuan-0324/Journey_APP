import React from 'react';
import './stylesheet/tour_guide.css';
import bannerImg1 from '../../images/guideImgs/guideMainPage/guideBanner1.png';
import bannerImg2 from '../../images/guideImgs/guideMainPage/guideBanner2.png';
import bannerImg3 from '../../images/guideImgs/guideMainPage/guideBanner3.png';
import Search from './components/Guide_search';
import bgImg from '../../images/main/background.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Guide = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <div className='guideMainPage'>
            <img className="bgImg" src={bgImg} />
            <div className="guideBanner">
                <Slider {...settings}>
                    <div>
                        <img src={bannerImg1}/>
                    </div>
                    <div>
                        <img src={bannerImg2}/>
                    </div>
                    <div>
                        <img src={bannerImg3}/>
                    </div>
                </Slider>
            </div>
            <div className='guideContainer'>
                <Search />
            </div>
        </div>
    );

}


export default Guide;