import React, { useState, useEffect, useRef } from "react";
import daylight from "../../../../images/Home/main/pexels-scott-webb-1029618.jpg";
import sunset from "../../../../images/Home/main/beautiful-dusk-light-colorful-beauty.jpg";
import nightsky from "../../../../images/Home/main/amazing-shot-beautiful-seascape-orange-sunset.jpg";

function Weather_API({ setIndoorornot }) {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState([]);
  const [area, setArea] = useState([]);
  const currentLong = useRef(0);
  const currentLat = useRef(0);

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      currentLat.current = position.coords.latitude;
      currentLong.current = position.coords.longitude;
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,hourly,minutely,alerts&units=metric&appid=a9435e700abf9da33bc74e7c64dc6828`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data.daily);
        setIndoorornot(data.daily[0].weather[0].id);
      })
      .catch(function (erro) {
        console.log(erro);
      });

    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&language=zh-TW&key=AIzaSyCv_srcuqfOf2hAQoj588vHuco7WK9tN9U`
    )
      .then((res) => res.json())
      .then((result) => {
        setArea(result.plus_code.compound_code.slice(8));
      })
      .catch(function (erro) {
        console.log(erro);
      });
  };

  useEffect(() => {
    fetchData();
  }, [lat, long]);

  //更改經緯度到其他城市
  let btnClick = (evt) => {
    let lat = evt.target.dataset.lat;
    let long = evt.target.dataset.long;
    setLat(lat);
    setLong(long);
  };

  //把經緯度改回現在位置
  let btnClickNow = () => {
    setLat(currentLat.current);
    setLong(currentLong.current);
    // console.log(currentLat.current);
    // console.log(currentLong.current);
  };

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

  const currentWeatherHour = new Date().getHours();
  const [WeatherImage] =
    currentWeatherHour <= 15
      ? [daylight]
      : currentWeatherHour > 15 && currentWeatherHour < 18
      ? [sunset]
      : [nightsky];

  const SectionStyle = {
    backgroundImage: "url(" + WeatherImage + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="APIweather">
      <div className="weatherDetails" style={SectionStyle}>
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
        <div className="weatherCity">
          <button className="chip" onClick={btnClickNow}>
            現在位置
          </button>
          <button
            className="chip"
            onClick={btnClick}
            data-lat="25.0330"
            data-long="121.5654"
          >
            台北
          </button>
          <button
            className="chip"
            onClick={btnClick}
            data-lat="24.1632"
            data-long="120.6747"
          >
            台中
          </button>
          <button
            className="chip"
            onClick={btnClick}
            data-lat="22.9999"
            data-long="120.2269"
          >
            台南
          </button>
          <button
            className="chip"
            onClick={btnClick}
            data-lat="22.6351"
            data-long="120.3355"
          >
            高雄
          </button>
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
