import React from "react";
import logo from "./../../assets/logo.png";
import "./common.css";

export default function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <img
        src={logo}
        className="loadingLogo slow-animated rubberBand infinite"
      />
    </div>
  );
}
