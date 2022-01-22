import React from "react";
import "./weather1day.css";
import icon from "./snow.png";

export default function Weather1day(props) {
  return (
    <div>
      <div className="basic-grid-sm">
        <div className="two-columns-sm">
          <div className="grid-sm">
            <p className="header no-margin">San Francisco</p>
            <p className="no-margin">January 23rd, 2022</p>

            <img className="icon" src={icon} />
          </div>
          <div className="grid-sm center">
            <p className="number no-margin"> 75°F </p>
            <p className="no-margin number-sm">44°/81°</p>
          </div>
        </div>

        <div className="info no-margin">
          <p className="no-margin">Elev. 4058</p>
          <p className="no-margin">Travel Advisory: YES</p>
          <p className="no-margin">Road Condition</p>
          <p className="no-margin">Travel advisory active? Y/N</p>
        </div>
      </div>
    </div>
  );
}
