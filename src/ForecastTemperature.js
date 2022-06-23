import React from "react";
import "./ForecastTemperature.css";

export default function ForecastTemperature(props) {
  return (
    <div className="ForecastTemperature">
      <span>
        <strong>{Math.round(props.celsius)}</strong>
      </span>
    </div>
  );
}
