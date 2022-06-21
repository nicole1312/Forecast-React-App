import React, { useState } from "react";

export default function ForecastTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div className="ForecastTemperature">
        <span>
          <strong>{Math.round(props.celsius)}</strong>
        </span>
        <span className="units">
          °C|
          <a href="/" onClick={showFahrenheit} className="tempUnits">
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
          <a href="/" onClick={showCelsius} className="tempUnits">
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
