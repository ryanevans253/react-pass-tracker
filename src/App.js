import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [data, setData] = useState();
  const [passName, setPassname] = useState("Name");
  const [elevation, setElevation] = useState(50);

  function updateAll() {
    setPassname(data[0].MountainPassName);
    setElevation(data[0].ElevationInFeet);
  }

  const getFetch = () =>
    fetch(
      //fetch call here

      {}
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })

      .catch((err) => {
        console.error(err);
      });

  useEffect(() => setData(getFetch()), []); // to only update the data once.

  return (
    <div className="App">
      <div className="CardHolder">
        <Card
          idNum={2}
          passName={passName}
          elevation={elevation}
          temperature="50"
          object={data}
        />

        <button onClick={() => updateAll()}>update data</button>
      </div>
    </div>
  );
}

export default App;
