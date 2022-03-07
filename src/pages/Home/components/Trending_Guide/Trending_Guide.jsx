import React, { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import Axios from "axios";
import { AiOutlineLike } from "react-icons/ai";

const Trending_Guide = () => {
  const [GuideData, setGuideData] = useState([
    {
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
      profile:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg",
      name: "吉娃娃",
      area: "台中市",
      recommadation: "推薦台中大坑步道以及黑寶星巴克",
    },
    {
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
      profile:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg",
      name: "吉娃娃",
      area: "台中市",
      recommadation: "推薦台中大坑步道以及黑寶星巴克",
    },
    {
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
      profile:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg",
      name: "吉娃娃",
      area: "台中市",
      recommadation: "推薦台中大坑步道以及黑寶星巴克",
    },
  ]);

  const [Res, setRes] = useState();

  const clickGuide = async (e) => {
    const guide_id = e.target.dataset.id;
    window.location = "/GuidePersonal/" + guide_id;
    await Axios.put(`http://localhost:8000/guideSearch/guideClick/${guide_id}`);
  };

  useEffect(() => {
    async function getTrendingGuide() {
      await Axios.get("http://localhost:8000/home/guide")
        .then((res) => {
          setRes(res.data);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTrendingGuide();
  }, []);

  return (
    <section id="trendingGuide">
      <div className="GuideCardGroup">
        <h3 className="CardHeader">熱門嚮導</h3>
        <div className="GuideCard">
          {Array.isArray(Res) &&
            Res.slice(0, 3).map((elm, idx) => (
              <figure className="snip1336" key={idx}>
                <img className="imgBG" src={elm.Img1} alt="sample87" />
                <figcaption>
                  <img
                    src={elm.api_selfie}
                    alt="profile-sample4"
                    className="profile"
                  />
                  <h2>
                    {elm.guide_name}
                    <span>
                      <MdLocationPin />
                      &nbsp;{elm.location}
                    </span>
                  </h2>
                  <p>
                    <AiOutlineLike />
                    &nbsp;推薦: {elm.viewpoint}
                  </p>
                  <a
                    href="#"
                    className="follow"
                    data-id={elm.guide_id}
                    onClick={clickGuide}
                  >
                    現在預約
                  </a>
                </figcaption>
              </figure>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Trending_Guide;
