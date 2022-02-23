import React from "react";
import Weather_API from "./Weather_API";
import Responsive from "./Card_Chip_Weather";

const Weather_Section = () => {
  const currentHour = new Date().getHours();
  // const currentHour = 16;
  const [greeting] =
    currentHour < 12
      ? ["🔆 早安"]
      : currentHour > 12 && currentHour < 18
      ? ["🍵 午安"]
      : ["🌙 晚安"];

  return (
    <section id="weather">
      <div className="weatherAPI">
        <h3 className="CardHeader">{greeting}！揪友</h3>
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
