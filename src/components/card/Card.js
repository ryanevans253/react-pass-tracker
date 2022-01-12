import "./card.css";

function Card(props) {
  return (
    <div className="box">
      <h1 className="title">{props.ele}</h1>
      <p>More info here</p>
      {/* <p>{props.sendDataToChild}</p> */}
    </div>
  );
}

export default Card;
