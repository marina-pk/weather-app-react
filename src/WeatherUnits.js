import React, { useState } from "react";
export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <h3 className="today-temperature">{Math.round(props.celsius)}</h3>
        <span className="temperature-unit">
          <p>
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F{" "}
            </a>
          </p>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <h3 className="today-temperature">{Math.round(fahrenheit())}</h3>
        <span className="temperature-unit">
          <p>
            <a href="/" onClick={convertToCelsius}>
              {" "}
              °C{" "}
            </a>
            | °F
          </p>
        </span>
      </div>
    );
  }
}
