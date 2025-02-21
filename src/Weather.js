import React from "react";
import "./weather.css";
import logo from "./images/logo.png";
import ReactAnimatedWeather from "react-animated-weather";


/* <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
></link>; */

export default function Weather() {
  return (
    <div className="container mt-5">
      <img src={logo} alt="brand-logo" id="logo-img" /> <br />
      <form className="mt-4 mb-5">
        <input type="text" placeholder="Enter a city..." id="search-field" />
        <input type="submit" value="Search" id="submit-btn" />
      </form>
      <hr />
      <h1 mt-3>San Francisco</h1>
      <div className="details-section d-flex justify-content-between">
        <div className="details mt-3">
          <p style={{ color: "#B1AFBA" }}>Tuesday 08:34, few clouds </p>
          <p style={{ color: "#B1AFBA" }}>
            Humidity:<span className="two"> 85%</span> , Wind:{" "}
            <span className="two">4.63km/h</span>
          </p>
        </div>
        <div className="details-one ">
          <h3 className="temp">
            10
            <span className="degreesSymbol">&#176;C</span>
          </h3>
        </div>
      </div>
      <div className="weather-container mt-4 mb-4">
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
                <span className="one">21&#176;</span>{" "}
                <span className="two">5&#176;</span>
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
      </div>
      <hr />
      <p style={{ color: "#B1AFBA" }} mt-3>
        This project was coded by <a href="shecodes.io">SheCodes</a> and is
        open-sourced on <a href="https://github.com/KagisoMothibedi"> GitHub</a>{" "}
        and hosted on{" "}
        <a href="https://react-weather-app-project-kagiso.netlify.app/">
          {" "}
          Netlify
        </a>
      </p>
    </div>
  );
}
