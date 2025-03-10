import React, { useState, useEffect } from "react";
import "./weather.css";
// import ReactAnimatedWeather from "react-animated-weather";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=0a938o4bbb37e6d9d556431etfe1aab0&units=metric`;
    // `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=7746bdeabca928cfedcad71e52fd9d66&units=metric`;
    // `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=7746bdeabca928cfedcad71e52fd9d66&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="weather-container mt-4 mb-4">
        <div className="row">
          {/* <div col className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div> */}
          {forecast.map((dailyForecast, index) => {
            if (index < 6) {
              // Only render the first 6 forecasts
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
