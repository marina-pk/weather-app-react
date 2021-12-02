import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      low: response.data.main.temp_min,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function fetchData() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
            autoFocus
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
  if (weather.ready) {
    return (
      <div>
        {form}
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    fetchData();
    return "Loading";
  }
}
