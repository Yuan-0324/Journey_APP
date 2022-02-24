import React, { useRef, useEffect, useState } from "react";
import { Power3 } from "gsap/gsap-core";
import { gsap } from "gsap";

// ---- 更新 ----

import { ReactComponent as Camera } from "../../../images/Home/mainSvg/camera.svg";
import { ReactComponent as Compass } from "../../../images/Home/mainSvg/compass.svg";
import { ReactComponent as Plane1 } from "../../../images/Home/mainSvg/plane1.svg";
import { ReactComponent as Plane2 } from "../../../images/Home/mainSvg/plane2.svg";
import { ReactComponent as Splash1 } from "../../../images/Home/mainSvg/splash1.svg";
import { ReactComponent as Splash2 } from "../../../images/Home/mainSvg/splash2.svg";
import { ReactComponent as Star1 } from "../../../images/Home/mainSvg/star1.svg";
import { ReactComponent as Star2 } from "../../../images/Home/mainSvg/star2.svg";
import { ReactComponent as Track1 } from "../../../images/Home/mainSvg/track1.svg";
import { ReactComponent as Track2 } from "../../../images/Home/mainSvg/track2.svg";
import Women from "../../../images/Home/happywomen.png";

const Main_Section = () => {
  const cameraRef = useRef();
  const compassRef = useRef();
  const plane1Ref = useRef();
  const plane2Ref = useRef();
  const splash1Ref = useRef();
  const splash2Ref = useRef();
  const star1Ref = useRef();
  const star2Ref = useRef();
  const track1Ref = useRef();
  const track2Ref = useRef();

  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  //   console.log(position);
  //   if (position >= 3700) {
  //     // alert("hello");
  //   } else if (position < 500) {
  //     // console.log("again");
  //   }
  // };

  var tl = gsap.timeline({ duration: 1 });
  useEffect(() => {
    tl.from(".mainSection", { y: 40, opacity: 0, delay: 1 })
      .to(".mainSection", {
        opacity: 1,
        ease: Power3.easeOut,
      })
      .to(splash2Ref.current, {
        autoAlpha: 0,
        repeat: 3,
        yoyo: true,
        ease: "linear".easeNone,
        duration: 0.2,
      })
      .to(splash1Ref.current, {
        autoAlpha: 0,
        repeat: 3,
        yoyo: true,
        ease: "linear".easeNone,
        duration: 0.2,
      });
  }, []);

  return (
    <section id="mainSection">
      <div className="women">
        <Camera ref={cameraRef} />
        <Compass ref={compassRef} />
        <Plane1 ref={plane1Ref} />
        <Plane2 ref={plane2Ref} />
        <Track1 ref={track1Ref} />
        <Track2 ref={track2Ref} />
        <Star1 ref={star1Ref} />
        <Star2 ref={star2Ref} />
        <Star2 ref={star2Ref} />
        <img className="women" src={Women} alt="" />
      </div>
      <div className="mainSection">
        <Splash1 ref={splash1Ref} />
        <Splash2 ref={splash2Ref} />
        <h1 className="explore">探索城市</h1>
        <h1 className="meet">認識新朋友</h1>
        <button>開始你的揪你</button>
      </div>
    </section>
  );
};

export default Main_Section;
