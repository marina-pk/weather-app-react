import React from "react";
import "./Weather.css";
import image from "./images/m-c-rain.png";
export default function Weather() {
  return (
    <div className="col-5">
      <h5 className="card-title" id="currentCity">
        Toronto, ON
      </h5>
      <h6 className="card-subtitle mb-2 text-muted" id="currentDayCard">
        Thursday 3:30 pm
      </h6>
      <div className="row">
        <div className="col-7 weather-temperature">
          <img
            src={image}
            className="card-img-top today-icon"
            id="current-day-icon"
            alt="weather-icon"
          />

          <h3 className="today-temperature">19</h3>
          <span className="temperature-unit">
            <p className="celsius">°C</p>
          </span>
          <div className="current-comment-container">
            <small className="today-comment">A few showers</small>
          </div>
        </div>
      </div>
    </div>
  );
}
