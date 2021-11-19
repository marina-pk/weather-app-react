import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <form>
      <div className="row">
        <div className="col-4 input-box-label">Change city</div>
        <div className="col-4">
          <input
            id="citySearchBox"
            className="search-box"
            type="text"
            placeholder="Enter a city"
            autofocus
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
}
