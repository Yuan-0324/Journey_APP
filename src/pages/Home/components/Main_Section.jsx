import React, { useRef, useEffect, useState } from "react";
import { Power3 } from "gsap/gsap-core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import $ from "jquery";

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

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const Main_Section = () => {
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });

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

  var tl = gsap.timeline({ duration: 1 });
  useEffect(() => {
    tl.fromTo(
      ".mainSection",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
      }
    )
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
      })
      .fromTo(
        star1Ref.current,
        { opacity: 0, rotation: 0 },
        {
          opacity: 1,
          rotation: 180,
        }
      )
      .fromTo(
        star2Ref.current,
        { opacity: 0, rotation: 0 },
        {
          opacity: 1,
          rotation: 360,
        }
      );

    gsap.fromTo(cameraRef.current, 1, { scale: 0 }, { scale: 1 });
    gsap.to(compassRef.current, { rotation: 360, duration: 10 });

    gsap.to(plane2Ref.current, {
      duration: 5,
      motionPath: {
        path: "M1 0.5C35.5 12.8333 88.5 52.4 24.5 112C-55.5 186.5 166 287 123 122",
        autoRotate: true,
      },
    });

    gsap.to(plane1Ref.current, {
      duration: 5,
      motionPath: {
        path: "M77.4997 201.5C43.1663 201 -15.2003 184 25.9997 120C30.4997 110 32.5754 100.572 11.5 75.5C-17.5 41 19.4997 13 44.4997 0.5",
        autoRotate: true,
      },
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
        <img className="women" src={Women} alt="" />
      </div>
      <div className="mainSection">
        <Splash1 ref={splash1Ref} />
        <Splash2 ref={splash2Ref} />
        <h1 className="explore">探索城市</h1>
        <h1 className="meet">認識新朋友</h1>
        <button>
          <a data-scroll href="#weather">
            {" "}
            開始你的揪你
          </a>
        </button>
      </div>
    </section>
  );
};

export default Main_Section;
