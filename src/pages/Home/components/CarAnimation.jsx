import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as PalmTree } from "../../../images/Home/footerSVG/emojione_palm-tree.svg";
import { ReactComponent as Moon } from "../../../images/Home/footerSVG/moon.svg";
import { ReactComponent as Car } from "../../../images/Home/footerSVG/fxemoji_automobile.svg";
import { ReactComponent as Wheel1 } from "../../../images/Home/footerSVG/wheel.svg";
import { ReactComponent as Wheel2 } from "../../../images/Home/footerSVG/wheel.svg";

gsap.registerPlugin(ScrollTrigger);

const CarAnimation = () => {
  const palmTreeRef = useRef();
  const moonRef = useRef();
  const carRef = useRef();
  const wheel1Ref = useRef();
  const wheel2Ref = useRef();

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".anime",
      // markers: true,
      start: "700% bottom",
      toggleActions: "restart none none none",
    },
  });
  useEffect(() => {
    tl.add("start")
      .to(
        carRef.current,
        {
          x: 300,
          duration: 3,
        },
        "start"
      )
      .to(
        wheel1Ref.current,
        {
          x: 300,
          rotate: 1000,
          duration: 3,
        },
        "start"
      )
      .to(
        wheel2Ref.current,
        {
          x: 300,
          rotate: 1000,
          duration: 3,
        },
        "start"
      );
  }, []);

  return (
    <div id="carAnime">
      <div className="animeDesc">
        <h3>為什麼選擇Journey ?</h3>
        <h6>在Journey您能安心的規劃出遊以及結交新朋友</h6>
        <button>網站安心宣言</button>
      </div>
      <div className="anime">
        <dir className="CarWheel">
          <Car ref={carRef} />
          <Wheel1 className="wheel1" ref={wheel1Ref} />
          <Wheel2 className="wheel2" ref={wheel2Ref} />
        </dir>
        <Moon ref={moonRef} />
        <PalmTree ref={palmTreeRef} />
      </div>
    </div>
  );
};

export default CarAnimation;
