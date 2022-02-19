import React, { useState, useEffect } from "react";

function Weather_API() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  // const [temp, setTemp] = useState();
  // const [desc, setDesc] = useState();
  // const [location, setLocation] = useState([]);
  const [area, setArea] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,hourly,minutely,alerts&units=metric&appid=438653e1e5de54b035f71c6915e87dd2`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.daily);
          // setTemp(data.main.temp);
          // setDesc(data.weather[0].description);
          console.log(data.daily);
          // console.log(temp);
          // console.log(desc);
        })
        .catch(function (erro) {
          console.log(erro);
        });

      await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&language=zh-TW&key=AIzaSyCv_srcuqfOf2hAQoj588vHuco7WK9tN9U`
      )
        .then((res) => res.json())
        .then((result) => {
          // setLocation(result);
          // setArea(result);
          setArea(result.plus_code.compound_code.slice(8));
          // console.log(result);
          console.log(area);
        })
        .catch(function (erro) {
          console.log(erro);
        });
    };

    fetchData();
  }, [lat, long]);

  const dateBuilder = (d) => {
    let months = [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ];
    let days = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${year}年 ${month} ${date}日 ${day}`;
  };

  return (
    <div className="APIweather">
      {/* <div className="weatherCity">
        <button className="chip">現在位置</button>
        <button className="chip">台北</button>
        <button className="chip">台中</button>
        <button className="chip">台南</button>
        <button className="chip">高雄</button>
      </div> */}
      <div className="weatherDetails">
        <div className="location-box">
          {Array.isArray(data) &&
            data.slice(0, 1).map((elm, idx) => (
              <div className="currentWeather" key={idx}>
                <img
                  src={`http://openweathermap.org/img/wn/${elm.weather[0].icon}@4x.png`}
                  alt=""
                />
                <div className="currentDegree">
                  <div className="currentDegreeBox">
                    <p className="max">今日最高溫</p>
                    <p>{Math.round(elm.temp.max)}&deg;C </p>
                  </div>
                  <br />
                  <div className="currentDegreeBox">
                    <p className="min">今日最低溫</p>
                    <p>{Math.round(elm.temp.min)}&deg;C</p>
                  </div>
                </div>
              </div>
            ))}
          <div className="DateNLocation">
            <div className="date">{dateBuilder(new Date())}</div>
            <div className="location">{area}</div>
          </div>
        </div>
        <div className="weather-box">
          {Array.isArray(data) &&
            data.slice(1).map((elm, idx) => (
              <div className="sevenDaysData" key={idx}>
                <div className="sevenDaysDate">
                  {new Date(elm.dt * 1000).toLocaleDateString("zh-TW").slice(5)}
                  {/* <br />
                  {new Date(elm.dt * 1000).toDateString().slice(0, 3)} */}
                </div>
                <img
                  src={`http://openweathermap.org/img/wn/${elm.weather[0].icon}@2x.png`}
                  alt=""
                />
                <div className="sevenDaysDegree">
                  {Math.round(elm.temp.max)}&deg;C / {Math.round(elm.temp.min)}
                  &deg;C
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Weather_API;
