import React, { useState } from "react";
export default function WeatherUnits(props) {
  return (
    <div className="WeatherUnits">
      <h2 className="today-temperature">{Math.round(props.celsius)}</h2>
      <span className="temperature-unit">
        <p>°C</p>
      </span>
    </div>
  );
}
