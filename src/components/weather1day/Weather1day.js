import React from "react";
import "./weather1day.css";

export default function Weather1day(props) {
  return (
    <div className="contain">
      <div className="box">
        <div className="column">
          <h1>San Francisco</h1>
          <p>January 23rd, 2022</p>
          <p> image goes here</p>
          <p>Partly Sunny</p>
        </div>
        <div className="column">
          <p> 75*F </p>
          <p>81 / 44</p>
        </div>
        <div className="row">Travel advisory active? Y/N</div>
      </div>
    </div>
  );
}
