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
  //58ae3febf0fb7a6f793320ef668ae2e1

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
          {forecast.map((dailyForecast, index) => {
            if (index < 6) {
              // Only render the first 6 forecasts
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay dataInfo={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}

          {/* {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay dataInfo={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })} */}

          {/* <div className="Forecast-day">Mon{forecast[0].dt} </div>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#000"
              size={30}
              animate={true}
            /> {forecast[0].weather[0].icon}
            <div className="Forecast-temp">
              <span className="forecast-temp-max">
                19{Math.round(forecast[0].temp.max)}
              </span>
              <span className="forecast-temp-min">
                20{Math.round(forecast[0].temp.min)}
              </span>
            </div> */}
        </div>
      </div>
    );
  } else {
    load();
    return null;
 
  }

  // <div className="weather-container mt-4 mb-4">
  //   <div className="weather-elements d-flex justify-content-center">
  //     <div className="img-cont">
  //       <p style={{ color: "#B1AFBA" }}>Mon</p>
  //       <p className="weather-img d-flex justify-content-center">
  //         <ReactAnimatedWeather
  //           icon="CLEAR_DAY"
  //           color="#000"
  //           size={48}
  //           animate={true}
  //         />
  //       </p>
  //       <div className="temperatures">
  //         <p>
  //           <span className="one">{Math.round(props.maxTemp)}&#176;</span>{" "}
  //           <span className="two">{Math.round(props.minTemp)}&#176;</span>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="weather-elements d-flex justify-content-center">
  //     <div className="img-cont">
  //       <p style={{ color: "#B1AFBA" }}>Tue</p>
  //       <p className="weather-img d-flex justify-content-center">
  //         {" "}
  //         <ReactAnimatedWeather
  //           icon="CLEAR_DAY"
  //           color="#000"
  //           size={48}
  //           animate={true}
  //         />
  //       </p>
  //       <div className="temperatures">
  //         <p>
  //           <span className="one">21&#176;</span>{" "}
  //           <span className="two">5&#176;</span>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="weather-elements d-flex justify-content-center">
  //     <div className="img-cont">
  //       <p style={{ color: "#B1AFBA" }}>Wed</p>
  //       <p className="weather-img d-flex justify-content-center">
  //         {" "}
  //         <ReactAnimatedWeather
  //           icon="CLEAR_DAY"
  //           color="#000"
  //           size={48}
  //           animate={true}
  //         />
  //       </p>
  //       <div className="temperatures">
  //         <p>
  //           <span className="one">21&#176;</span>{" "}
  //           <span className="two">5&#176;</span>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="weather-elements d-flex justify-content-center">
  //     <div className="img-cont">
  //       <p style={{ color: "#B1AFBA" }}>Thurs</p>
  //       <p className="weather-img d-flex justify-content-center">
  //         {" "}
  //         <ReactAnimatedWeather
  //           icon="CLEAR_DAY"
  //           color="#000"
  //           size={48}
  //           animate={true}
  //         />
  //       </p>
  //       <div className="temperatures">
  //         <p>
  //           <span className="one">21&#176;</span>{" "}
  //           <span className="two">5&#176;</span>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="weather-elements d-flex justify-content-center">
  //     <div className="img-cont">
  //       <p style={{ color: "#B1AFBA" }}>Fri</p>
  //       <p className="weather-img d-flex justify-content-center">
  //         {" "}
  //         <ReactAnimatedWeather
  //           icon="CLEAR_DAY"
  //           color="#000"
  //           size={48}
  //           animate={true}
  //         />
  //       </p>
  //       <div className="temperatures">
  //         <p>
  //           <span className="one">21&#176;</span>{" "}
  //           <span className="two">5&#176;</span>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="weather-elements d-flex justify-content-center">
  //     <div className="img-cont">
  //       <p style={{ color: "#B1AFBA" }}>Sat</p>
  //       <p className="weather-img d-flex justify-content-center">
  //         {" "}
  //         <ReactAnimatedWeather
  //           icon="CLEAR_DAY"
  //           color="#000"
  //           size={48}
  //           animate={true}
  //         />
  //       </p>
  //       <div className="temperatures">
  //         <p>
  //           <span className="one">21&#176;</span>{" "}
  //           <span className="two">5&#176;</span>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="weather-elements d-flex justify-content-center">
  //     <div className="img-cont">
  //       <p style={{ color: "#B1AFBA" }}>Sun</p>
  //       <p className="weather-img d-flex justify-content-center">
  //         {" "}
  //         <ReactAnimatedWeather
  //           icon="CLEAR_DAY"
  //           color="#000"
  //           size={48}
  //           animate={true}
  //         />
  //       </p>
  //       <div className="temperatures">
  //         <p>
  //           <span className="one">21&#176;</span>{" "}
  //           <span className="two">5&#176;</span>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}
