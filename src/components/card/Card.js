import { useState } from "react";
import "./card.css";

function Card(props) {
  // console.log(props.object);

  // const [id, setId] = useState(null);

  // let newdata = props.object;

  // console.log(newdata[id]);

  // const [roadCondition, setRoadCondition] = useState(
  //   props.object[3].RoadCondition
  // );

  return (
    <div className="box">
      <h4>Name: {props.passName}</h4>
      <p>Elevation: {props.elevation}</p>
      <p>Temperature: {props.temperature}</p>
      {/* <p>other data: {roadCondition}</p> */}
    </div>
  );
}

export default Card;
