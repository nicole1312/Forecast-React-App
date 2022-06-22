import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyWeatherForecast(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function dailyIcon() {
    let icon = props.data.weather[0].icon;
    return `${icon}`;
  }
  return (
    <div className="DailyWeatherForecast">
      <p className="week-days mb-1">{day()}</p>
      <div className="temp">
        <span>
          <strong>⇧{maxTemp()}°</strong>
        </span>
        <span>
          <strong>⇩{minTemp()}°</strong>
        </span>
      </div>
      <div className="icon mt-3">
        <WeatherIcon code={dailyIcon()} size={40} />
      </div>
    </div>
  );
}
