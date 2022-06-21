import React, { useState } from "react";
import axios from "axios";
import { SpinnerDiamond } from "spinners-react";
import DateStructure from "./DateStructure";
import "./Forecast.css";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState({ loaded: false });
  function handleSubmit(response) {
    setForecastData({
      loaded: true,
      temperature: response.data.main.temp,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      description: response.data.weather[0].description,
      defaultCity: response.data.main.name,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (forecastData.loaded) {
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
              <p className="date">
                <DateStructure date={forecastData.date} />
              </p>
              <h3 className="city text-capitalize">{props.defaultCity}</h3>
              <h4 className="description ">{forecastData.description}</h4>

              <p>
                <strong>{Math.round(forecastData.temperature)}</strong>°C
              </p>
              <div className="degrees">
                <span>
                  <strong>⇧{Math.round(forecastData.maxTemperature)}</strong>
                  °C
                </span>
                <span>
                  <strong>⇩{Math.round(forecastData.minTemperature)}</strong>°C
                </span>
              </div>
              <p>
                <img src={forecastData.icon} alt="weather-icon" />
              </p>
            </div>
            <div className="col-sm-6">
              <ul className="weather-analysis">
                <li>
                  <strong>Humidity:</strong> {forecastData.humidity} %
                </li>
                <li>
                  <strong>Wind:</strong> {Math.round(forecastData.wind)} mph
                </li>
                <li>
                  <strong>Pressure:</strong> {forecastData.pressure} mb
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "57f652d59f6bbf0d76afefad23d740f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return (
      <SpinnerDiamond size={50} color="#43597f" speed={100} still={false} />
    );
  }
}
