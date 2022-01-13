import React from "react";
import "./mini.css";

function Mini(props) {
  const id = props.passID;

  const passName = props.object[id].MountainPassName;

  let travelAdvisory = props.object[id].TravelAdvisoryActive;

  //validations
  travelAdvisory = travelAdvisory ? "Yes" : "No";

  return (
    <div className="smallbox">
      <h4>{passName}</h4>
      <p>Travel advisory: {travelAdvisory}</p>
    </div>
  );
}

export default Mini;
