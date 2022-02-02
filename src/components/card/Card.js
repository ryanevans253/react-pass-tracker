import "./card.css";
import { Link } from "react-router-dom";

function Card(props) {
  const id = props.passID;

  const passName = props.object[id].MountainPassName;
  const elevation = props.object[id].ElevationInFeet;
  let weather = props.object[id].WeatherCondition;
  let travelAdvisory = props.object[id].TravelAdvisoryActive;
  let temperature = props.object[id].TemperatureInFahrenheit + "°F";

  //validations
  if (!weather || weather === "") {
    weather = "unavailable";
  }

  travelAdvisory = travelAdvisory ? "Yes" : "No";

  return (
    <div className="box-grey-bck">
      <h4>{passName}</h4>
      <p className="title spacing">{temperature}</p>
      {/* //changed this from text tag and broke css */}
      <Link to="/stevens-pass">Details</Link>
      <p>Elevation: {elevation}</p>
      <p>Weather: {weather}</p>
      <p>Travel advisory: {travelAdvisory}</p>
    </div>
  );
}

export default Card;
