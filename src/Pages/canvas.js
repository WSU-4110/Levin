import React from "react";
import Sidebar from "../Components/sidebar.js";
import CanvasStage from "../Components/canvasStage.js";
import MUIcont from "./MUIcont.js";
import "./Styling/canvas.css";

function Canvas() {
  return (
    <div className="canvasContainer">
      {/* <MUIcont /> */}
      <Sidebar />
      <CanvasStage />
    </div>
  );
}

export default Canvas;
