import React from "react";
import icon from "./snow.png";
import "./forecast4.css";

export default function Forecast4(props) {
  console.log(props.data);

  return (
    <div>
      <div className="grid centered">
        <p>Jan 23</p>
        <img src={icon} className="icon" />
        <p>
          {props.min.toFixed(0)}°F / {props.max.toFixed(0)}°F
        </p>
      </div>
    </div>
  );
}
