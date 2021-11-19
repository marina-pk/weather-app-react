import React from "react";
import Weather from "./Weather";
import Parameters from "./Parameters";
export default function Current() {
  return (
    <div className="row top-row">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <Weather />
              <Parameters />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
