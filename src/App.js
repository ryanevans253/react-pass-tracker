import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [data, setData] = useState();
  const sendDataToChild = () => setData(getFetch());

  // function parser(index) {
  //   let passName = data[index].MountainPassName;
  // }

  const customelevation = () => data[3].ElevationInFeet;
  const [elevation, setElevation] = useState();

  const getFetch = () =>
    fetch(
      //fetch call here

      {}
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setData(response);
      })
      .catch((err) => {
        console.error(err);
      });

  return (
    <div className="App">
      <div className="CardHolder">
        <Card PassName="poop" ele={elevation} />

        <button onClick={() => sendDataToChild()}>send data</button>
        <button onClick={() => console.log(data)}>display data</button>
        <button onClick={() => setElevation(customelevation)}>
          update new data
        </button>
      </div>
    </div>
  );
}

export default App;
