import React from "react";
import img from "./camphoto.png";
import "./webcam.css";

export default function Webcam() {
  return (
    <div>
      <img
        className="webcam"
        src={"https://images.wsdot.wa.gov//nc//097vc16375.jpg"}
      />
    </div>
  );
}
