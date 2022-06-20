import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h3>TheWeatherHub</h3>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Search for a city..."
                className="form-control"
              />
            </div>
            <div className="col-sm-2">
              <input type="submit" value="Search" className="btn btn-info" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
