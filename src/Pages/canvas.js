import React from "react";
import Sidebar from "../Components/sidebar.js";
import CanvasStage from "../Components/canvasStage.js";
import "./Styling/canvas.css";

function Canvas() {
  return (
    <div className="canvasContainer">
      <Sidebar />
      <CanvasStage />
    </div>
  );
}

export default Canvas;
