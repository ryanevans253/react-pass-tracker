import { useState } from "react";
import "./card.css";

function Card(props) {
  const id = props.passID;
  console.log(props.object[1].WeatherCondition);
  // console.log(props.passID);

  return (
    <div className="box">
      <h4>Name: {props.object[id].MountainPassName}</h4>
      <p>Elevation: {props.object[id].ElevationInFeet}</p>
      {/* <p>Temperature: {props.object[id].WeatherCondition}</p>
      <p>Travel Advisory Active: {props.object[id].TravelAdvisoryActive}</p> */}
      {/* <p>other data: {roadCondition}</p> */}
    </div>
  );
}

export default Card;
