import React, { useState, useEffect } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Weather1day from "../components/weather1day/Weather1day";
import Forecast4 from "../components/4day/Forecast4";
import "./fullpage.css";
import Webcam from "../components/webcam/Webcam";
import GetWeather from "./GetWeather";

export default function FullPage(props) {
  const [isLoading, setIsLoading] = useState(true);

  let [weatherData, setWeatherData] = useState();

  const key = "2563201543a0702459fa6bb75ca71c00"; ///key goes here

  const passName = props.passName;
  const lon = props.lon;
  const lat = props.lat;

  // const passName = "Stevens Pass";
  // const lat = "47.7459";
  // const lon = "-121.0891";
  const part = "hourly,alerts,minutely";
  const units = "imperial";

  const apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&units=${units}&appid=${key}`;

  function getWeather() {
    fetch(apiCall, {})
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setWeatherData(response);
        setIsLoading(false);
      })

      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => setWeatherData(getWeather()), []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const temp = weatherData.current.temp;
  const max = weatherData.daily[0].temp.max;
  const min = weatherData.daily[0].temp.min;
  const date = weatherData.current.dt;
  // console.log(date.getDate());

  return (
    <div>
      <div className="wrapper">
        <section className="basic-grid">
          <div className="two-columns">
            <div className="grid background txt-white">
              <Weather1day
                temp={temp}
                max={max}
                min={min}
                date={date}
                passName={passName}
              />
            </div>
            <div className="grid no-padding">
              {/* <h1>Webcam</h1>
              <p>Photo</p> */}
              <Webcam />
            </div>
          </div>
          <div className="grid alert">
            <h4>Alert information</h4>

            <p>Eastbound: Traction tires advised.</p>
            <p>Westbound: Traction tires advised.</p>
          </div>
          <div className="basic-grid grid weather5day no-shadow">
            <Forecast4
              max={weatherData.daily[1].temp.max}
              min={weatherData.daily[1].temp.min}
            />
            <Forecast4
              max={weatherData.daily[2].temp.max}
              min={weatherData.daily[2].temp.min}
            />
            <Forecast4
              max={weatherData.daily[3].temp.max}
              min={weatherData.daily[3].temp.min}
            />
            <Forecast4
              max={weatherData.daily[4].temp.max}
              min={weatherData.daily[4].temp.min}
            />
            {/* <GetWeather /> */}
          </div>
        </section>
      </div>
    </div>
  );
}
