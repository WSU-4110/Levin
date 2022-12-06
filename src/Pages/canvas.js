import React from "react";
import Sidebar from "../Components/sidebar.js";
import CanvasStage from "../Components/canvasStage.js";
//import MUIcont from "./MUIcont.js";
import "./Styling/canvas.css";
import TestApp from "../Components/testApp.js";

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
