import "./card.css";

function Card(props) {
  console.log(props.object);

  return (
    <div className="box">
      <h4>Name: {props.passName}</h4>
      <p>Elevation: {props.elevation}</p>
      <p>Temperature: {props.temperature}</p>
      {/* <p>other data: {props.object[4].MountainPassId}</p> */}
    </div>
  );
}

export default Card;
