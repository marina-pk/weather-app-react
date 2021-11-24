import React from "react";
import CurrentDate from "./CurrentDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className="row top-row">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <h5 className="card-title" id="currentCity">
                  {props.data.city}
                </h5>
                <h6
                  className="card-subtitle mb-2 text-muted"
                  id="currentDayCard"
                >
                  <CurrentDate date={props.data.date} />
                </h6>
                <div className="row">
                  <div className="col-7 weather-temperature">
                    <img
                      src={props.data.icon}
                      className="card-img-top today-icon"
                      id="current-day-icon"
                      alt="weather-icon"
                    />

                    <h3 className="today-temperature">
                      {Math.round(props.data.temperature)}
                    </h3>
                    <span className="temperature-unit">
                      <p className="celsius">°C</p>
                    </span>
                    <div className="current-comment-container">
                      <small className="today-comment text-capitalize">
                        {props.data.description}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div id="today-parameters" className="col-7">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                    <FontAwesomeIcon
                      icon={faTemperatureLow}
                      className="param-icons"
                    />
                    Low
                  </li>
                  <li className="list-group-item current-low-temperature">
                    {Math.round(props.data.low)}°C
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-sm">
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faTint} className="param-icons" />{" "}
                    Humidity
                  </li>
                  <li className="list-group-item current-humidity">
                    {props.data.humidity}%
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                  <li className="list-group-item">
                    <FontAwesomeIcon icon={faWind} className="param-icons" />
                    Wind
                  </li>
                  <li className="list-group-item current-wind-speed">
                    {Math.round(props.data.wind)} km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
