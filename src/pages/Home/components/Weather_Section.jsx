import React from "react";
import Weather_API from "./Weather_API";
import Responsive from "./Slider_Box";

const Weather_Section = () => {
  return (
    <section id="weather">
      <div className="weatherAPI">
        <h3 className="CardHeader">早安！我的朋</h3>
        <Weather_API />
      </div>
      <div className="weatherCard">
        <h3 className="CardHeader">雨天備案</h3>
        <Responsive />
      </div>
    </section>
  );
};

export default Weather_Section;
