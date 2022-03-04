import React, { useState } from "react";
import Weather_API from "./Weather_API";
import Responsive from "./Card_Chip_Weather";

const Weather_Section = () => {
  const [indoorornot, setIndoorornot] = useState([]);
  // const [time, setTime] = useState(0);

  const currentHour = new Date().getHours();

  const [greeting] =
    currentHour < 12
      ? ["🔆 早安"]
      : currentHour >= 12 && currentHour < 18
      ? ["🍵 午安"]
      : ["🌙 晚安"];

  const [ifIndoor] = indoorornot <= 531 ? ["🌧️ 雨天備案"] : ["🌻 晴天出遊"];

  return (
    <section id="weather">
      <div className="weatherAPI">
        <h3 className="CardHeader">{greeting}！揪友</h3>
        <Weather_API setIndoorornot={setIndoorornot} />
      </div>
      <div className="weatherCard">
        <h3 className="CardHeader">{ifIndoor}</h3>
        <Responsive indoorornot={indoorornot} />
      </div>
    </section>
  );
};

export default Weather_Section;
