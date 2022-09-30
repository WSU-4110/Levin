import "./Styling/tutorial.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";

function Tutorial() {
  return (
    <div className="tutorialContainer">
      <Sidebar />
      <div className="titleContainer">
        <p className="title">Tutorial</p>
      </div>
    </div>
  );
}

export default Tutorial;
