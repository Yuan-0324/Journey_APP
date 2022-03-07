import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdLocationPin } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "axios";

function Responsive({ indoorornot }) {
  const [Res, setRes] = useState();
  const [data, setData] = useState([
    {
      img: "https://source.unsplash.com/258x160/?taiwan,weather",
      time: "明天 下午3:00 02/30 星期五",
      title: "發現台灣之美",
      para: "台灣尋奇之身體黏磁鐵",
      area: "台中市",
    },
  ]);

  const clickEvent = async (e) => {
    // console.log(e.target.dataset.id);
    const event_id = e.target.dataset.id;
    window.location = "/activityIntroduce/" + event_id;
    // await Axios.put(`http://localhost:8000/guideSearch/guideClick/${guide_id}`);
  };

  let checkindoor = parseInt(indoorornot);
  async function getIndoor() {
    await Axios.get("http://localhost:8000/home/event/indoor", indoorornot)
      .then((res) => {
        setRes(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getOutdoor() {
    await Axios.get("http://localhost:8000/home/event/outdoor", indoorornot)
      .then((result) => {
        setRes(result.data);
        // console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (checkindoor < 531) {
      getIndoor();
    } else {
      getOutdoor();
    }
  }, [checkindoor]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
        {Array.isArray(Res) &&
          Res.map((elm, idx) => (
            <div
              className="eventCard"
              key={idx}
              data-id={elm.eventID}
              onClick={clickEvent}
            >
              <div className="eventCard__header">
                <img
                  className="eventCard__icon"
                  src={elm.api_pic}
                  alt="weather"
                  data-id={elm.eventID}
                  onClick={clickEvent}
                />
              </div>
              <section
                className="eventCard__body"
                data-id={elm.eventID}
                onClick={clickEvent}
              >
                <p
                  className="eventTime"
                  data-id={elm.eventID}
                  onClick={clickEvent}
                >
                  {elm.date.slice(0, 10)}
                </p>
                <h2
                  className="eventCard__title"
                  data-id={elm.eventID}
                  onClick={clickEvent}
                >
                  {elm.title}
                </h2>
                <p data-id={elm.eventID} onClick={clickEvent}>
                  {elm.introduction}
                </p>
                <span
                  className="eventCard__duration"
                  data-id={elm.eventID}
                  onClick={clickEvent}
                >
                  <MdLocationPin />
                  &nbsp;{elm.address.slice(0, 2)}
                </span>
              </section>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Responsive;

// export default class Responsive extends Component {
//   state = {
//     cardChip: [
//       {
//         img: "https://source.unsplash.com/258x160/?taiwan,weather",
//         time: "明天 下午3:00 02/30 星期五",
//         title: "發現台灣之美",
//         para: "台灣尋奇之身體黏磁鐵",
//         area: "台中市",
//       },
//       {
//         img: "https://source.unsplash.com/258x160/?taiwan,weather",
//         time: "明天 下午3:00 02/30 星期五",
//         title: "發現台灣之美",
//         para: "台灣尋奇之身體黏磁鐵",
//         area: "台南市",
//       },
//       {
//         img: "https://source.unsplash.com/258x160/?taiwan,weather",
//         time: "明天 下午3:00 02/30 星期五",
//         title: "發現台灣之美",
//         para: "台灣尋奇之身體黏磁鐵",
//         area: "高雄市",
//       },
//       {
//         img: "https://source.unsplash.com/258x160/?taiwan,weather",
//         time: "明天 下午3:00 02/30 星期五",
//         title: "發現台灣之美",
//         para: "台灣尋奇之身體黏磁鐵",
//         area: "新北市",
//       },
//       {
//         img: "https://source.unsplash.com/258x160/?taiwan,weather",
//         time: "明天 下午3:00 02/30 星期五",
//         title: "發現台灣之美",
//         para: "台灣尋奇之身體黏磁鐵",
//         area: "台東市",
//       },
//       {
//         img: "https://source.unsplash.com/258x160/?taiwan,weather",
//         time: "明天 下午3:00 02/30 星期五",
//         title: "發現台灣之美",
//         para: "台灣尋奇之身體黏磁鐵",
//         area: "新竹市",
//       },
//       {
//         img: "https://source.unsplash.com/258x160/?taiwan",
//         time: "明天 下午3:00 02/30 星期五",
//         title: "發現台灣之美",
//         para: "台灣尋奇之身體黏磁鐵",
//         area: "桃園市",
//       },
//       {
//         img: "https://source.unsplash.com/258x160/?taiwan",
//         time: "明天 下午3:00 02/30 星期五",
//         title: "發現台灣之美",
//         para: "台灣尋奇之身體黏磁鐵",
//         area: "宜蘭縣",
//       },
//     ],
//   };

//   render() {
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       // nextArrow: <SampleNextArrow />,
//       // prevArrow: <SamplePrevArrow />,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };

//     return (
//       <div className="test">
//         <Slider {...settings}>
//           {this.state.cardChip.map((elm, idx) => (
//             <div className="eventCard" key={idx}>
//               <div className="eventCard__header">
//                 <img className="eventCard__icon" src={elm.img} alt="chess" />
//               </div>
//               <section className="eventCard__body">
//                 <p className="eventTime">{elm.time}</p>
//                 <h2 className="eventCard__title">{elm.title}</h2>
//                 <p>{elm.para}</p>
//                 <span className="eventCard__duration">
//                   <MdLocationPin />
//                   &nbsp;{elm.area}
//                 </span>
//               </section>
//             </div>
//           ))}

//           {/* <Event_Card_Chip />  */}
//         </Slider>
//       </div>
//     );
//   }
// }
