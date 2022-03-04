import React, { useEffect, useState } from "react";
import { Power3 } from "gsap/gsap-core";
import { gsap } from "gsap";
import CTAevent from "../../../images/Home/CTA/challenge.png";
import CTAguide from "../../../images/Home/CTA/mental-health.png";

const CTA = () => {
  // const [toggle, setToggle] = useState(false);

  // const expand = () => {
  //   gsap.to(".dotblue", 0.8, {
  //     width: 200,
  //     height: 200,
  //     borderRadius: 100,
  //     ease: Power3.easeOut,
  //   });
  //   setToggle(true);
  // };

  // const expandBack = () => {
  //   gsap.to(".dotblue", 0.8, { width: 100, height: 100, ease: Power3.easeOut });
  //   setToggle(false);
  // };

  return (
    <section id="CTA">
      {/* <div className="brDot">
        <div
          className="dot dotblue"
          onClick={toggle !== true ? expand : expandBack}
        ></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> */}
      <div className="CTA">
        <h2>想成為其中之一？</h2>
        <div className="CTAgroup">
          <div className="CTAevent">
            <img src={CTAevent} alt="" />
            <h4>建立活動</h4>
            <p>成為活動建立人，創建你喜愛的活動並邀請加入</p>
            <p>
              <a href="/ActivityConduct">建立活動 → </a>
            </p>
          </div>
          <div className="CTAguide">
            <img src={CTAguide} alt="" />
            <h4>成為嚮導</h4>
            <p>成為嚮導，介紹你愛的城市並邀請加入</p>
            <p>
              <a href="/GuideJoin">成為嚮導 → </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
