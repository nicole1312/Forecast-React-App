import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FullWeekForecast.css";

export default function FullWeekForecast() {
  return (
    <div className="FullWeekForecast">
      <div className="row">
        <div className="col">
          <p className="week-days mb-1">Thu</p>
          <div className="temp">
            <span>
              <strong>⇧26°</strong>
            </span>
            <span>
              <strong>⇩12°</strong>
            </span>
          </div>
          <p className="icon mt-3">
            <WeatherIcon code="01d" size={40} />
          </p>
        </div>
      </div>
    </div>
  );
}
