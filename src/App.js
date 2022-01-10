import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [data, setData] = useState({});

  const sendDataToChild = () => setData(getFetch());
  console.log(data);

  return (
    <div className="App">
      <div className="CardHolder">
        <Card passname="Stevens Pass" />
        <Card passname="Snoqualmie" />
        <Card passname="Blewitt" />
        <button onClick={() => sendDataToChild()}>send data</button>
        <button onClick={() => console.log("poop")}>display data</button>
      </div>
    </div>
  );
  function getFetch() {
    fetch(
      `,
      {}
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

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
  }
}

export default App;
