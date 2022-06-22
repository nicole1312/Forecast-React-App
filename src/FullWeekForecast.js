import React, { useState, useEffect } from "react";
import DailyWeatherForecast from "./DailyWeatherForecast";
import axios from "axios";
import "./FullWeekForecast.css";

export default function FullWeekForecast(props) {
  let [completed, setCompleted] = useState(false);
  let [dailyWeather, setDailyWeather] = useState(null);

  useEffect(() => {
    setCompleted(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setDailyWeather(response.data.daily);
    setCompleted(true);
  }

  if (completed) {
    return (
      <div className="FullWeekForecast">
        <div className="row">
          {dailyWeather.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col " key={index}>
                  <DailyWeatherForecast data={dailyForecast} />
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
    let apiKey = "57f652d59f6bbf0d76afefad23d740f6";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
