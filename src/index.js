import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import FullPage from "./Pages/FullPage";
import Card from "./components/card/Card";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<FullPage />} />
        <Route
          path="/stevens-pass"
          element={
            <FullPage lat="47.7459" lon="-121.0891" passName="Stevens Pass" />
          }
        />
        <Route
          path="/snoqualmie"
          element={
            <FullPage
              lat="47.3923"
              lon="-121.4001"
              passName="Snoqualmie Pass"
            />
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
