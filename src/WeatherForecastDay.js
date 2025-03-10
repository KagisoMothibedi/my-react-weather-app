import React from "react";
import "./weather.css";
import WeatherIcon from "./WeatherIcon.js";
// import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temp = Math.round(props.data.temperature.maximum);
        return `${temp}`
    }

        function minTemperature() {
          let temp = Math.round(props.data.temperature.minimum);
          return `${temp}`;
        }

        function day() {
          let date = new Date(props.data.time * 1000);
          let day = date.getDay();
          let days = ["Sun","Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

          return days[day];
        }


    return (
      <div className="hello">
        <div className="forecast-day"> {day()}</div>
        <WeatherIcon code={props.data.condition.icon} size={36} />
        <div className="Forecast-temperatures">
          <span className="forecast-temp-max">{maxTemperature()}°</span>
          <span className="forecast-temp-min">{minTemperature()}°</span>
        </div>
      </div>
    );

}