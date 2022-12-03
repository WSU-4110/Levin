import React from "react";
import Sidebar from "../Components/sidebar.js";
import { Stage, Layer } from "react-konva";
import MUIcont from "./MUIcont";
import ContainerStyle from "../Components/containerStyle";
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
        {/* <MUIcont /> */}
      </div>
    </div>
  );
}

export default Canvas;
