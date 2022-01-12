import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [data, setData] = useState(0);
  console.log(data);
  const sendDataToChild = () => setData(getFetch());

  const getFetch = () =>
    fetch(
      //fetch call here
      {}
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response[0]);
        return response.length;

        // let passName = response[12].MountainPassName;
        // let westbound = response[12].RestrictionTwo.RestrictionText;
        //
        // console.log(`Pass: ${passName} :  ${westbound}`);
        // console.log(response[12]);
        // setData(response);
        // return response;
        //
      })
      .catch((err) => {
        console.error(err);
      });

  return (
    <div className="App">
      <div className="CardHolder">
        <Card passname="Stevens Pass" />
        <Card passname="Snoqualmie" />
        <Card passname="Blewitt" />
        <button onClick={() => sendDataToChild()}>send data</button>
        <button onClick={() => setData(getFetch)}>display data</button>
      </div>
    </div>
  );
}

export default App;
