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
                autoFocus="on"
                className="form-control form-search"
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
            <h4 className="description ">clear sky</h4>

            <p>
              <strong>19</strong>°C
            </p>
            <div className="degrees">
              <span>
                <strong>⇧20</strong>°C
              </span>
              <span>
                <strong>⇩10</strong>°C
              </span>
            </div>
            <p>
              <img
                src=" http://openweathermap.org/img/wn/01d@2x.png"
                alt="weather-icon"
              />
            </p>
          </div>
          <div className="col-sm-6">
            <ul className="weather-analysis">
              <li>
                <strong>Humidity:</strong> 45%
              </li>
              <li>
                <strong>Wind:</strong> 9mph
              </li>
              <li>
                <strong>Pressure:</strong> 1019mb
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
