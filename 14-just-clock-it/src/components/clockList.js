import React from "react";
import firebase from "../firebase";

function ClockList() {
  return (
    <div>
      <h3>Times List</h3>
      <div className="Select">
        Sort By:
        <select>
          <option>Fastest</option>
          <option>Slowest</option>
          <option disabled>---</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </div>
      <div className="TimeEntry">
        <code>Hello Darkness - 44seconds</code>
      </div>
    </div>
  );
}

export default ClockList;
