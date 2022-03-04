import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdLocationPin } from "react-icons/md";
import Axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
  const [data, setData] = useState([
    {
      img: "https://source.unsplash.com/258x160/?taiwan,weather",
      time: "明天 下午3:00 02/30 星期五",
      title: "發現台灣之美",
      para: "台灣尋奇之身體黏磁鐵",
      area: "台中市",
    },
    {
      img: "https://source.unsplash.com/258x160/?taiwan,weather",
      time: "明天 下午3:00 02/30 星期五",
      title: "發現台灣之美",
      para: "台灣尋奇之身體黏磁鐵",
      area: "台南市",
    },
    {
      img: "https://source.unsplash.com/258x160/?taiwan,weather",
      time: "明天 下午3:00 02/30 星期五",
      title: "發現台灣之美",
      para: "台灣尋奇之身體黏磁鐵",
      area: "高雄市",
    },
    {
      img: "https://source.unsplash.com/258x160/?taiwan,weather",
      time: "明天 下午3:00 02/30 星期五",
      title: "發現台灣之美",
      para: "台灣尋奇之身體黏磁鐵",
      area: "新北市",
    },
    {
      img: "https://source.unsplash.com/258x160/?taiwan,weather",
      time: "明天 下午3:00 02/30 星期五",
      title: "發現台灣之美",
      para: "台灣尋奇之身體黏磁鐵",
      area: "台東市",
    },
    {
      img: "https://source.unsplash.com/258x160/?taiwan,weather",
      time: "明天 下午3:00 02/30 星期五",
      title: "發現台灣之美",
      para: "台灣尋奇之身體黏磁鐵",
      area: "新竹市",
    },
    {
      img: "https://source.unsplash.com/258x160/?taiwan",
      time: "明天 下午3:00 02/30 星期五",
      title: "發現台灣之美",
      para: "台灣尋奇之身體黏磁鐵",
      area: "桃園市",
    },
    {
      img: "https://source.unsplash.com/258x160/?taiwan",
      time: "明天 下午3:00 02/30 星期五",
      title: "發現台灣之美",
      para: "台灣尋奇之身體黏磁鐵",
      area: "宜蘭縣",
    },
  ]);

  // const [Res, setRes] = useState();

  // useEffect(() => {
  //   async function getRecommandation() {
  //     await Axios.get("http://localhost:8000/home/guide")
  //       .then((res) => {
  //         setRes(res.data);
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   getRecommandation();
  // }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        {data.map((elm, idx) => (
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
      </Slider>
    </div>
  );
}

export default Responsive;
