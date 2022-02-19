import React from "react";

// import CTAevent from "../../images/challenge.png";
// import CTAguide from "../../images/mental-health.png";

// ---- 更新 ----

import CTAevent from '../../../images/challenge.png';
import CTAguide from '../../../images/mental-health.png';

const CTA = () => {
  return (
    <section id="CTA">
      <div className="CTA">
        <h1>想成為其中之一？</h1>
        <div className="CTAgroup">
          <div className="CTAevent">
            <img src={CTAevent} alt="" />
            <h3>建立活動</h3>
            <p>成為活動建立人，創建你喜愛的活動並邀請加入</p>
            <p>
              <a href="#">建立活動 → </a>
            </p>
          </div>
          <div className="CTAguide">
            <img src={CTAguide} alt="" />
            <h3>成為嚮導</h3>
            <p>成為嚮導，介紹你愛的城市並邀請加入</p>
            <p>
              <a href="#">成為嚮導 → </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
