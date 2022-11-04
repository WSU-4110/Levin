import React from "react";
import { Stage, Layer, Rect } from "react-konva";
import Sidebar from "../Components/sidebar.js";
import Test from "./test.js";
import "./Styling/canvas.css";

function Canvas() {
  return (
    <div className="canvasContainer1">
      <Sidebar />
      <Test />;
      <div className="canvasContainer2">
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          draggable={true}
        >
          <Layer>
            <Rect
              x={window.innerWidth / 4.5}
              y={window.innerHeight / 3}
              width={200}
              height={250}
              fill="rgb(249, 186, 76)"
              cornerRadius={10}
              shadowBlur={3}
              draggable
            />
          </Layer>
          <Layer>
            <Rect
              x={window.innerWidth / 2.25}
              y={window.innerHeight / 3}
              width={200}
              height={250}
              fill="rgb(228, 79, 92)"
              cornerRadius={10}
              shadowBlur={3}
              draggable
            />
          </Layer>
          <Layer>
            <Rect
              x={window.innerWidth / 1.5}
              y={window.innerHeight / 3}
              width={200}
              height={250}
              fill="rgb(0, 20, 64)"
              cornerRadius={10}
              shadowBlur={3}
              draggable
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default Canvas;
