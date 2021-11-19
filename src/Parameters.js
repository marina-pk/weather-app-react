import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import "./Parameters.css";
export default function Parameters() {
  return (
    <div id="today-parameters" className="col-7">
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <FontAwesomeIcon icon={faTemperatureLow} />
          Low
        </li>
        <li className="list-group-item current-low-temperature">15°</li>
      </ul>
      <ul className="list-group list-group-horizontal-sm">
        <li className="list-group-item">
          <FontAwesomeIcon icon={faTint} /> Humidity
        </li>
        <li className="list-group-item current-humidity">55%</li>
      </ul>
      <ul className="list-group list-group-horizontal-md">
        <li className="list-group-item">
          <FontAwesomeIcon icon={faWind} />
          Wind
        </li>
        <li className="list-group-item current-wind-speed">14 km/h</li>
      </ul>
    </div>
  );
}
