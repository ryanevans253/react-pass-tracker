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
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

function About() {
  return (
    <div>
      <h1>ryan</h1>
      <p>about page</p>
      <Link to="/">go home</Link>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
