import "./Styling/canvas.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";

function Canvas() {
  return (
    <div className="canvasContainer">
      <Sidebar />
      <p className="title">Canvas</p>
    </div>
  );
}

export default Canvas;
