import React from "react";
import Sidebar from "../Components/sidebar.js";
import { Stage, Layer } from "react-konva";
import ContainerStyle from "./containerStyle";
import "./Styling/canvas.css";

function Canvas() {
  return (
    <div>
      <Sidebar />
      <div className="canvasContainer">
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          draggable={true}
        >
          <Layer>
            <ContainerStyle />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default Canvas;
