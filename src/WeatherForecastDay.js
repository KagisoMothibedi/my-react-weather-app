import React from "react";
import "./weather.css";
import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.temperature.maximum);
            return `${temperature}°`;  
    }
        function minTemperature() {
          let temperature = Math.round(props.temperature.minimum);
          return `${temperature}°`;
        }

        function day(props){
            let date = new Date(props * 1000);
            let day = date.getDay();
            let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

            return days[day];
        }
        console.log(maxTemperature());
    return (
        
      <div className="element-container">


        <div className="element">
          
          <div className="Forecast-day">Mon{day()} </div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={30}
            animate={true}
          />
          {/* // {props.data.weather[0].icon} */}

          <div className="Forecast-temp">
            <span className="forecast-temp-max">{maxTemperature()}</span>
            <span className="forecast-temp-min">{minTemperature()}</span>
          </div>
        </div>



      </div>
    );
}