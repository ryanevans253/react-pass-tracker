import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Weather1day from "../components/weather1day/Weather1day";
import "./fullpage.css";

export default function FullPage() {
  return (
    <div>
      <div className="wrapper">
        <h1>Full page</h1>
        <Link to="/"> 1day weather below here:</Link>
        <section className="basic-grid">
          <div className="two-columns">
            <div className="grid">
              <h1>City Name</h1>
              <p>description</p>
            </div>
            <div className="grid">
              <h1>Webcam</h1>
              <p>Photo</p>
            </div>
          </div>
          <div className="grid alert">
            <h4>Alert information</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="grid weather5day">
            <h3>Weather section</h3>
            <p>Five days of weather here</p>
          </div>
        </section>
      </div>
    </div>
  );
}
