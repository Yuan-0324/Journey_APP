import React, { useRef, useEffect } from "react";
import { Power3 } from "gsap/gsap-core";
import { gsap } from "gsap";


// import { ReactComponent as Camera } from "../../images/mainSvg/camera.svg";
// import { ReactComponent as Compass } from "../../images/mainSvg/compass.svg";
// import { ReactComponent as Plane1 } from "../../images/mainSvg/plane1.svg";
// import { ReactComponent as Plane2 } from "../../images/mainSvg/plane2.svg";
// import { ReactComponent as Splash1 } from "../../images/mainSvg/splash1.svg";
// import { ReactComponent as Splash2 } from "../../images/mainSvg/splash2.svg";
// import { ReactComponent as Star1 } from "../../images/mainSvg/star1.svg";
// import { ReactComponent as Star2 } from "../../images/mainSvg/star2.svg";
// import { ReactComponent as Track1 } from "../../images/mainSvg/track1.svg";
// import { ReactComponent as Track2 } from "../../images/mainSvg/track2.svg";
// import Women from "../../images/happywomen.png";


// ---- 更新 ----

import { ReactComponent as Camera } from "../../../images/mainSvg/camera.svg";
import { ReactComponent as Compass } from "../../../images/mainSvg/compass.svg";
import { ReactComponent as Plane1 } from "../../../images/mainSvg/plane1.svg";
import { ReactComponent as Plane2 } from "../../../images/mainSvg/plane2.svg";
import { ReactComponent as Splash1 } from "../../../images/mainSvg/splash1.svg";
import { ReactComponent as Splash2 } from "../../../images/mainSvg/splash2.svg";
import { ReactComponent as Star1 } from "../../../images/mainSvg/star1.svg";
import { ReactComponent as Star2 } from "../../../images/mainSvg/star2.svg";
import { ReactComponent as Track1 } from "../../../images/mainSvg/track1.svg";
import { ReactComponent as Track2 } from "../../../images/mainSvg/track2.svg";
import Women from "../../../images/happywomen.png";


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

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.75 } });
    tl.to(star1Ref.current, { rotate: 360 });
  });

  return (
    <section id="mainSection">
      {/* <Camera ref={cameraRef} /> */}
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
