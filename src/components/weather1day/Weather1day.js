import React from "react";
import "./weather1day.css";
import icon from "./snow.png";

export default function Weather1day(props) {
  const date = new Date(props.date * 1000).toDateString();

  return (
    <div>
      <div className="basic-grid-sm">
        <div className="two-columns-sm">
          <div className="grid-sm">
            <p className="header no-margin">{props.passName}</p>
            <p className="no-margin">{date}</p>

            <img className="icon" src={icon} />
          </div>
          <div className="grid-sm center">
            <p className="number no-margin"> {props.temp.toFixed(0)}°F </p>
            <p className="no-margin number-sm">
              {props.min.toFixed(0)}°/{props.max.toFixed(0)}°
            </p>
          </div>
        </div>

        <div className="info no-margin">
          <p className="no-margin">Elev. 4058</p>
          <p className="no-margin">Travel Advisory: YES</p>
          {/* <p className="no-margin">Road Condition</p> */}
          <p className="no-margin">Travel advisory active? Y</p>
        </div>
      </div>
    </div>
  );
}
