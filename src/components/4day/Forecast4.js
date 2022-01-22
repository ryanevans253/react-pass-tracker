import React from "react";
import icon from "./snow.png";

export default function Forecast4() {
  return (
    <div>
      <div>
        <p>Date</p>
        <img src={icon} className="icon" />
        <p>Low / High</p>
      </div>
    </div>
  );
}
