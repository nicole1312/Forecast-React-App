import React, { useState } from "react";
import "./ForecastTemperature.css";

export default function ForecastTemperature(props) {
  const [units, setUnits] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (units === `celsius`) {
    return (
      <div className="ForecastTemperature">
        <span>
          <strong>{Math.round(props.celsius)}</strong>
        </span>
        <span className="units">
          °C|
          <a
            href="/"
            onClick={showFahrenheit}
            className="tempUnits"
            rel="noopener noreferrer"
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="ForecastTemperature">
        <span>
          <strong>{Math.round(fahrenheit())}</strong>
        </span>
        <span className="units">
          <a
            href="/"
            onClick={showCelsius}
            className="tempUnits"
            rel="noopener noreferrer"
          >
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
