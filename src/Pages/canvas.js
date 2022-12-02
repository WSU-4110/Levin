import React from "react";
import { Stage, Layer, Rect } from "react-konva";
import Sidebar from "../Components/sidebar.js";
import Test from "./test.js";
import "./Styling/canvas.css";
import TestApp from "../Components/testApp.js";

function Canvas() {
  return (
    <div className="canvasContainer1">
      <Sidebar />
      <TestApp />;
 
    </div>
  );
}

export default Canvas;
