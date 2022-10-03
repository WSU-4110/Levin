import "./Styling/canvas.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";

function Canvas() {
  return (
    <div className="canvasContainer">
      <Sidebar />
      <div className="titleContainer">
        <p className="title">Canvas</p>
      </div>
    </div>
  );
}

export default Canvas;
