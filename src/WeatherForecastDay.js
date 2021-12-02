import React from "react";
export default function WeatherForecastDay(props) {
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="card text-center daily-stats-card">
      <div className="card-header">
        <h6 className="card-subtitle mb-2 text-muted">{day()}</h6>
        <img
          src={icon}
          className="card-img-top today-icon"
          id="current-day-icon"
          alt="weather-icon"
        />
        <br />
        <h3> {maxTemperature()}</h3>
        <small> {props.data.weather[0].description}</small>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item"> {minTemperature()}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
          <li className="list-group-item">{props.data.humidity}%</li>
        </ul>
        <ul className="list-group list-group-horizontal-md">
          <li className="list-group-item">
            {Math.round(props.data.wind_speed)} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
