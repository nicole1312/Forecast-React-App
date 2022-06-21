import React from "react";
import DateStructure from "./DateStructure";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInfo(props) {
  return (
    <div className="ForecastInfo">
      <div className="weather">
        <div className="row">
          <div className="col-sm-6 ">
            <p className="date">
              <DateStructure date={props.data.date} />
            </p>
            <h3 className="city text-capitalize">{props.data.defaultCity}</h3>
            <h4 className="description ">{props.data.description}</h4>

            <p>
              <strong>{Math.round(props.data.temperature)}</strong>°C
            </p>
            <div className="degrees">
              <span>
                <strong>⇧{Math.round(props.data.maxTemperature)}</strong>
                °C
              </span>
              <span>
                <strong>⇩{Math.round(props.data.minTemperature)}</strong>°C
              </span>
            </div>
            <div className="clearfix">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <ul className="weather-analysis">
              <li>
                <strong>Humidity:</strong> {props.data.humidity} %
              </li>
              <li>
                <strong>Wind:</strong> {Math.round(props.data.wind)} mph
              </li>
              <li>
                <strong>Pressure:</strong> {props.data.pressure} mb
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
