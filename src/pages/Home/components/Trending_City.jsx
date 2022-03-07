import React, { useEffect } from "react";
import Axios from "axios";
import Taipei from "../../../images/Home/citypics/taipei.png";
import Chiayi from "../../../images/Home/citypics/chiayi.jpg";
import Tainan from "../../../images/Home/citypics/tainan.jpg";
import Yilan from "../../../images/Home/citypics/yilan.jpg";
import Pingtung from "../../../images/Home/citypics/pingtung.jpg";
import Taitung from "../../../images/Home/citypics/taitung.jpg";

const Trending_City = () => {
  const trendingOnClick = async (e) => {
    let city = e.target.name;
    await Axios.post("http://localhost:8000/home/TrendingCity/city", city)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="trendingCity">
      <div className="cityShortcut">
        <h3 className="CardHeader">熱門目的地</h3>
        <div className="cityboxGroup">
          <div className="citybox" onClick={trendingOnClick}>
            <img className="citypic" src={Taipei} name="台北" alt="" />
            <p>台北</p>
          </div>
          <div className="citybox" onClick={trendingOnClick}>
            <img className="citypic" src={Chiayi} name="嘉義" alt="" />
            <p>嘉義</p>
          </div>
          <div className="citybox" onClick={trendingOnClick}>
            <img className="citypic" src={Tainan} name="台南" alt="" />
            <p>台南</p>
          </div>
          <div className="citybox" onClick={trendingOnClick}>
            <img className="citypic" src={Yilan} name="宜蘭" alt="" />
            <p>宜蘭</p>
          </div>
          <div className="citybox" onClick={trendingOnClick}>
            <img className="citypic" src={Pingtung} name="屏東" alt="" />
            <p>屏東</p>
          </div>
          <div className="citybox" onClick={trendingOnClick}>
            <img className="citypic" src={Taitung} name="台東" alt="" />
            <p>台東</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending_City;
