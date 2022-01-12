import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  // function updateAll() {
  //   setPassname(data[0].MountainPassName);
  //   setElevation(data[0].ElevationInFeet);
  // }

  const getFetch = () =>
    fetch(
      //fetch call here
      {}
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
        setIsLoading(false);
      })

      .catch((err) => {
        console.error(err);
      });

  useEffect(() => setData(getFetch()), []); // to only update the data once.

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <div className="CardHolder">
        <Card passID={2} object={data} />
        <Card passID={5} object={data} />
        <Card passID={7} object={data} />
        <Card passID={8} object={data} />
      </div>
    </div>
  );
}

export default App;

//need to get everything out of this level. send the data and an ID number to the card and parse from there.
