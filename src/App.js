import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import image from "./images/m-c-rain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <div className="row top-row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <h5 className="card-title" id="currentCity">
                      Toronto, ON
                    </h5>
                    <h6
                      className="card-subtitle mb-2 text-muted"
                      id="currentDayCard"
                    >
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
                        15°
                      </li>
                    </ul>
                    <ul className="list-group list-group-horizontal-sm">
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          icon={faTint}
                          className="param-icons"
                        />{" "}
                        Humidity
                      </li>
                      <li className="list-group-item current-humidity">55%</li>
                    </ul>
                    <ul className="list-group list-group-horizontal-md">
                      <li className="list-group-item">
                        <FontAwesomeIcon
                          icon={faWind}
                          className="param-icons"
                        />
                        Wind
                      </li>
                      <li className="list-group-item current-wind-speed">
                        14 km/h
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
