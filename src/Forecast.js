import React, { useState } from "react";
import axios from "axios";
import { SpinnerDiamond } from "spinners-react";
import ForecastInfo from "./ForecastInfo";
import FullWeekForecast from "./FullWeekForecast";
import "./Forecast.css";

export default function Forecast(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [forecastData, setForecastData] = useState({ loaded: false });
  function handleSubmit(response) {
    setForecastData({
      loaded: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      description: response.data.weather[0].description,
      defaultCity: response.data.name,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "57f652d59f6bbf0d76afefad23d740f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }

  function handleCitySubmit(event) {
    event.preventDefault();
    search();
  }
  function handleUpdate(event) {
    setCity(event.target.value);
  }

  if (forecastData.loaded) {
    return (
      <div className="container-fluid ">
        <div className="Forecast">
          <h1>TheWeatherHub</h1>
          <div className="form-box">
            <form onSubmit={handleCitySubmit}>
              <div className="row aligh-items-center g-3">
                <div className="col-sm-9 ">
                  <input
                    type="search"
                    placeholder="Search for a city..."
                    autoFocus="on"
                    autoComplete="off"
                    className="form-control form-search  "
                    onChange={handleUpdate}
                  />
                </div>
                <div className="col-sm-3 ">
                  <input
                    type="submit"
                    value="Search"
                    className=" form-control btn btn-light "
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <ForecastInfo data={forecastData} />
        <FullWeekForecast coordinates={forecastData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <SpinnerDiamond size={50} color="#516d96" speed={100} still={false} />
    );
  }
}
