import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Mini from "./components/mini/Mini";

//react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FullPage from "./Pages/FullPage";
import SecondPage from "./Pages/SecondPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  // for second page

  const [fullPageOpen, setFullPageOpen] = useState(false);

  //pass data section
  const getPassData = () =>
    fetch(
      //fetch call here

      {}
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(response);
      })

      .catch((err) => {
        console.error(err);
      });

  useEffect(() => setData(getPassData()), []); // to only update the data once.

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="background">
      <div className="App">
        <div className="docTitle">Washington State Pass Report</div>
        <div className="CardHolder">
          <Card passID={12} object={data} />
          <Card passID={11} object={data} />
          <Card passID={0} object={data} />
          <Mini passID={1} object={data} />
          <Mini passID={2} object={data} />
          <Mini passID={3} object={data} />
          <Mini passID={4} object={data} />
          <Mini passID={5} object={data} />
          <Mini passID={6} object={data} />
          <Mini passID={7} object={data} />
          <Mini passID={8} object={data} />
          <Mini passID={9} object={data} />
          <Mini passID={10} object={data} />
          <Mini passID={13} object={data} />
          <Mini passID={14} object={data} />
        </div>
        {/* router */}
      </div>
    </div>
  );
}

export default App;

//need to get everything out of this level. send the data and an ID number to the card and parse from there.

//list of conditions to set pictures to [Raining lightly, raining, overcast skies ]
