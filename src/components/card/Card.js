import "./card.css";

function Card(props) {
  return (
    <div className="box">
      <h1 className="title">{props.passn}</h1>
      <p>More info: {props.ele}</p>
    </div>
  );
}

export default Card;
