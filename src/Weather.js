import React, { useState } from "react";
import "./weather.css";
import WeatherDate from "./weatherDate";
import WeatherTemp from "./WeatherTemp.js";
import WeatherForecast from "./weatherForecast.js";

import logo from "./images/logo.png";
// import ReactAnimatedWeather from "react-animated-weather";
// import { Audio } from "react-loader-spinner";
import axios from "axios";

export default function Weather(props) {
  //   let apiKey = "5201594abea9f3e38b70e65b11a80c24";
  //   let [ready, setReady] = useState(false);
  // let [temperature, setTemperature] = useState(null);
  let [weatherData, setweatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  //   let temp = weatherData.temperature;

  //   let [unit, setUnit] = useState("Celsius");

  function showTemperature(response) {
    console.log(response.data);
    // setReady(true);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      tempIcon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    // setTemperature(response.data.main.temp);
  }
  //api.shecodes.io/weather/v1/current?query=London&key=5201594abea9f3e38b70e65b11a80c24

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7746bdeabca928cfedcad71e52fd9d66&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  //   function toFahrenheit(event) {
  //     event.preventDefault();
  //     let temp = props.temperature * (9 / 5) + 32;
  //     setUnit("Imperial");
  //     weatherData.temperature(temp);
  //   }
  //   function toCelsius(event) {
  //     event.preventDefault();
  //     setUnit("Celsius");
  //     weatherData.temperature(temp);
  //   }

  if (weatherData.ready) {
    return (
      <div className="container-body">
        <div className="container mt-5">
          <img src={logo} alt="brand-logo" id="logo-img" /> <br />
          <form onSubmit={handleSubmit} className="mt-4 mb-5">
            <input
              type="text"
              placeholder="Enter a city..."
              id="search-field"
              onChange={handleCity}
            />
            <input type="submit" value="Search" id="submit-btn" />
          </form>
          <hr />
          <h1 mt-3>{weatherData.city}</h1>
          <div className="details-section d-flex justify-content-between">
            <div className="details  mt-3">
              {/* <p className="d-inline-block" style={{ color: "#B1AFBA" }}>
            
                <WeatherDate date={weatherData.date} />,{weatherData.description}{" "}
              </p> */}
              <div style={{ color: "#B1AFBA" }}>
                <span className="d-inline-block">
                  <WeatherDate date={weatherData.date} />
                </span>{" "}
                ,{" "}
                <span className="d-inline-block">
                  {weatherData.description}
                </span>
              </div>

              <p style={{ color: "#B1AFBA" }}>
                Humidity:<span className="two"> {weatherData.humidity}%</span> ,
                Wind: <span className="two">{weatherData.wind}km/h</span>
              </p>
              <img src={weatherData.tempIcon} alt="Weather Icon" />
            </div>
            <div className="details-one d-flex justify-content-end">
              <WeatherTemp celsius={weatherData.temperature} />
              {/* <h3 className="temp">
                {Math.round(weatherData.temperature)}
                <span style={{fontSize :"20px"}}> {unit}</span>
                <span className="degreesSymbol">
                  {" "}
                  <a href="/" onClick={toCelsius}>
                    °C
                  </a>{" "}
                  |{" "}
                </span>
                <span className="degreesSymbol">
                  <a href="/" onClick={toFahrenheit}>
                    &#176;F{" "}
                  </a>
                </span>
              </h3> */}
            </div>
          </div>
          <WeatherForecast
            maxTemp={weatherData.MaxTemperature}
            minTemp={weatherData.MinTemperature}
            coordinates={weatherData.coordinates}
          />
          {/* <div className="weather-container mt-4 mb-4">
            <div className="weather-elements d-flex justify-content-center">
              <div className="img-cont">
                <p style={{ color: "#B1AFBA" }}>Mon</p>
                <p className="weather-img d-flex justify-content-center">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#000"
                    size={48}
                    animate={true}
                  />
                </p>
                <div className="temperatures">
                  <p>
                    <span className="one">
                      {Math.round(weatherData.maxTemperature)}&#176;
                    </span>{" "}
                    <span className="two">
                      {Math.round(weatherData.minTemperature)}&#176;
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="weather-elements d-flex justify-content-center">
              <div className="img-cont">
                <p style={{ color: "#B1AFBA" }}>Tue</p>
                <p className="weather-img d-flex justify-content-center">
                  {" "}
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#000"
                    size={48}
                    animate={true}
                  />
                </p>
                <div className="temperatures">
                  <p>
                    <span className="one">21&#176;</span>{" "}
                    <span className="two">5&#176;</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="weather-elements d-flex justify-content-center">
              <div className="img-cont">
                <p style={{ color: "#B1AFBA" }}>Wed</p>
                <p className="weather-img d-flex justify-content-center">
                  {" "}
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#000"
                    size={48}
                    animate={true}
                  />
                </p>
                <div className="temperatures">
                  <p>
                    <span className="one">21&#176;</span>{" "}
                    <span className="two">5&#176;</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="weather-elements d-flex justify-content-center">
              <div className="img-cont">
                <p style={{ color: "#B1AFBA" }}>Thurs</p>
                <p className="weather-img d-flex justify-content-center">
                  {" "}
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#000"
                    size={48}
                    animate={true}
                  />
                </p>
                <div className="temperatures">
                  <p>
                    <span className="one">21&#176;</span>{" "}
                    <span className="two">5&#176;</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="weather-elements d-flex justify-content-center">
              <div className="img-cont">
                <p style={{ color: "#B1AFBA" }}>Fri</p>
                <p className="weather-img d-flex justify-content-center">
                  {" "}
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#000"
                    size={48}
                    animate={true}
                  />
                </p>
                <div className="temperatures">
                  <p>
                    <span className="one">21&#176;</span>{" "}
                    <span className="two">5&#176;</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="weather-elements d-flex justify-content-center">
              <div className="img-cont">
                <p style={{ color: "#B1AFBA" }}>Sat</p>
                <p className="weather-img d-flex justify-content-center">
                  {" "}
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#000"
                    size={48}
                    animate={true}
                  />
                </p>
                <div className="temperatures">
                  <p>
                    <span className="one">21&#176;</span>{" "}
                    <span className="two">5&#176;</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="weather-elements d-flex justify-content-center">
              <div className="img-cont">
                <p style={{ color: "#B1AFBA" }}>Sun</p>
                <p className="weather-img d-flex justify-content-center">
                  {" "}
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="#000"
                    size={48}
                    animate={true}
                  />
                </p>
                <div className="temperatures">
                  <p>
                    <span className="one">21&#176;</span>{" "}
                    <span className="two">5&#176;</span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <hr />
          <p style={{ color: "#B1AFBA" }} mt-3>
            This project was coded by <a href="shecodes.io">SheCodes</a> and is
            open-sourced on{" "}
            <a href="https://github.com/KagisoMothibedi"> GitHub</a> and hosted
            on{" "}
            <a href="https://react-weather-app-project-kagiso.netlify.app/">
              {" "}
              Netlify
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    search();
    return (
      //   <ThreeDots
      //     visible={true}
      //     height="80"
      //     width="80"
      //     color="#4fa94d"
      //     radius="9"
      //     ariaLabel="three-dots-loading"
      //     wrapperStyle={{}}
      //     wrapperClass=""
      //   />
      "loading...."
    );
  }
}
