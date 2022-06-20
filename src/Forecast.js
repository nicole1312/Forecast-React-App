import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h1>TheWeatherHub</h1>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Search for a city..."
                className="form-control"
              />
            </div>
            <div className="col-sm-2">
              <input type="submit" value="Search" className="btn btn-info" />
            </div>
          </div>
        </form>
      </div>
      <div className="weather">
        <div className="row">
          <div className="col-sm-6 ">
            <p className="date">Monday 14:49</p>
            <h3 className="city text-capitalize">london</h3>
            <ul>
              <li className="description ">clear sky</li>
              <li>19°C</li>
              <span>⇧20°C</span>
              <span>⇩10°C</span>
              <li>
                <img
                  src=" http://openweathermap.org/img/wn/01d@2x.png"
                  alt="weather-icon"
                />
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="weather-analysis">
              <li>Humidity: 45%</li>
              <li>Wind: 9mph</li>
              <li>Pressure: 1019mb</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
