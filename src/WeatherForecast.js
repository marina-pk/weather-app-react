import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <div className="card" id="daily-parameters">
              <div className="card-header"></div>
              <div className="card-body">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                    <FontAwesomeIcon
                      icon={faTemperatureLow}
                      className="param-icons"
                    />
                    Low
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-sm">
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faTint} className="param-icons" />{" "}
                    Humidity{" "}
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faWind} className="param-icons" />
                    Wind
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-2" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
