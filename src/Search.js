import React, { useState } from "react";
import axios from "axios";

import "./Search.css";
export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      low: response.data.main.temp_min,
      cityName: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-4 input-box-label">Change city</div>
        <div className="col-4">
          <input
            className="search-box"
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <div className="col-5">
          <h5 className="card-title" id="currentCity">
            {weather.cityName}
          </h5>
          <div className="row">
            <div className="col-3 weather-temperature">
              <img
                src={weather.icon}
                className="card-img-top today-icon"
                id="current-day-icon"
                alt={weather.description}
              />

              <h3 className="today-temperature">
                {Math.round(weather.temperature)}
              </h3>
              <span className="temperature-unit">
                <p className="celsius">°C</p>
              </span>
              <div className="current-comment-container">
                <small className="today-comment">{weather.description}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
