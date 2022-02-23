import React from "react";

// import Taipei from "../../images/citypics/taipei.png";
// import Chiayi from "../../images/citypics/chiayi.jpg";
// import Tainan from "../../images/citypics/tainan.jpg";
// import Yilan from "../../images/citypics/yilan.jpg";
// import Pingtung from "../../images/citypics/pingtung.jpg";
// import Taitung from "../../images/citypics/taitung.jpg";

// ---- 更新 ----

import Taipei from "../../../images/Home/citypics/taipei.png";
import Chiayi from "../../../images/Home/citypics/chiayi.jpg";
import Tainan from "../../../images/Home/citypics/tainan.jpg";
import Yilan from "../../../images/Home/citypics/yilan.jpg";
import Pingtung from "../../../images/Home/citypics/pingtung.jpg";
import Taitung from "../../../images/Home/citypics/taitung.jpg";

const Trending_City = () => {
  return (
    <section id="trendingCity">
      <div className="cityShortcut">
        <h3 className="CardHeader">熱門目的地</h3>
        <div className="cityboxGroup">
          <div className="citybox">
            <img className="citypic" src={Taipei} alt="" />
            <p>台北</p>
          </div>
          <div className="citybox">
            <img className="citypic" src={Chiayi} alt="" />
            <p>嘉義</p>
          </div>
          <div className="citybox">
            <img className="citypic" src={Tainan} alt="" />
            <p>台南</p>
          </div>
          <div className="citybox">
            <img className="citypic" src={Yilan} alt="" />
            <p>宜蘭</p>
          </div>
          <div className="citybox">
            <img className="citypic" src={Pingtung} alt="" />
            <p>屏東</p>
          </div>
          <div className="citybox">
            <img className="citypic" src={Taitung} alt="" />
            <p>台東</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending_City;
