import React from "react";
import icon from "./snow.png";

export default function Forecast4() {
  return (
    <div>
      <div className="grid">
        <p>Jan 23</p>
        <img src={icon} className="icon" />
        <p>62 / 74</p>
      </div>
    </div>
  );
}
