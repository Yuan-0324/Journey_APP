import React, { Component } from "react";
import Slider from "react-slick";
import { MdLocationPin } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class Responsive extends Component {
  state = {
    cardChip: [
      {
        img: "https://source.unsplash.com/258x160/?taiwan,event",
        time: "明天 下午3:00 02/30 星期五",
        title: "發現台灣之美",
        para: "台灣尋奇之身體黏磁鐵",
        area: "台中市",
      },
      {
        img: "https://source.unsplash.com/258x160/?taiwan,event",
        time: "明天 下午3:00 02/30 星期五",
        title: "發現台灣之美",
        para: "台灣尋奇之身體黏磁鐵",
        area: "台南市",
      },
      {
        img: "https://source.unsplash.com/258x160/?taiwan,event",
        time: "明天 下午3:00 02/30 星期五",
        title: "發現台灣之美",
        para: "台灣尋奇之身體黏磁鐵",
        area: "高雄市",
      },
      {
        img: "https://source.unsplash.com/258x160/?taiwan,event",
        time: "明天 下午3:00 02/30 星期五",
        title: "發現台灣之美",
        para: "台灣尋奇之身體黏磁鐵",
        area: "新北市",
      },
      {
        img: "https://source.unsplash.com/258x160/?taiwan,event",
        time: "明天 下午3:00 02/30 星期五",
        title: "發現台灣之美",
        para: "台灣尋奇之身體黏磁鐵",
        area: "台東市",
      },
      {
        img: "https://source.unsplash.com/258x160/?taiwan,event",
        time: "明天 下午3:00 02/30 星期五",
        title: "發現台灣之美",
        para: "台灣尋奇之身體黏磁鐵",
        area: "新竹市",
      },
      {
        img: "https://source.unsplash.com/258x160/?taiwan,event",
        time: "明天 下午3:00 02/30 星期五",
        title: "發現台灣之美",
        para: "台灣尋奇之身體黏磁鐵",
        area: "桃園市",
      },
      {
        img: "https://source.unsplash.com/258x160/?taiwan,event",
        time: "明天 下午3:00 02/30 星期五",
        title: "發現台灣之美",
        para: "台灣尋奇之身體黏磁鐵",
        area: "宜蘭縣",
      },
    ],
  };

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="test">
        <Slider {...settings}>
          {this.state.cardChip.map((elm, idx) => (
            <div className="eventCard" key={idx}>
              <div className="eventCard__header">
                <img className="eventCard__icon" src={elm.img} alt="chess" />
              </div>
              <section className="eventCard__body">
                <p className="eventTime">{elm.time}</p>
                <h2 className="eventCard__title">{elm.title}</h2>
                <p>{elm.para}</p>
                <span className="eventCard__duration">
                  <MdLocationPin />
                  &nbsp;{elm.area}
                </span>
              </section>
            </div>
          ))}

          {/* <Event_Card_Chip />  */}
        </Slider>
      </div>
    );
  }
}
