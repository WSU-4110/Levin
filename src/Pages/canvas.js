import Sidebar from "../Components/sidebar.js";
import { Stage, Layer, Rect } from "react-konva";
import Test from "./test.js";
import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Line = ({ color }) => (
  <hr
    style={{
      borderColor: color,
      width: "85%",
    }}
  />
);

const card = (
  <React.Fragment>
    <CardContent
      style={{
        background: "rgb(128, 125, 219)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Title"
        style={{
          fontFamily: "Helvetica",
          fontWeight: "bold",
          fontSize: 20,
          borderRadius: 5,
          background: "none",
          resize: "none",
          border: "none",
          padding: 5,
        }}
      />
    </CardContent>
    <CardContent
      style={{
        display: "grid",
        justifyContent: "center",
      }}
    >
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Content"
        maxRows={4}
        style={{
          fontFamily: "Helvetica",
          fontSize: 16,
          borderRadius: 5,
          background: "rgb(128, 125, 219)",
          resize: "none",
          border: "none",
          padding: 10,
        }}
      />
    </CardContent>
    <div>
      <Line color="rgb(128, 125, 219)" />
    </div>
    <CardContent
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Fab
        size="medium"
        aria-label="add"
        style={{
          width: "100%",
          height: 10,
          borderRadius: 5,
          background: "rgb(191, 191, 191)",
          border: "none",
          zIndex: "100",
        }}
      >
        <AddIcon />
      </Fab>
    </CardContent>
  </React.Fragment>
);

const Add = (
  <React.Fragment>
    <Fab
      size="medium"
      aria-label="add"
      style={{
        borderRadius: 10,
        background: "rgb(191, 191, 191)",
        border: "none",
        position: "absolute",
        top: "70vh",
        zIndex: "100",
      }}
    >
      <AddIcon />
    </Fab>
  </React.Fragment>
);

function Canvas(props) {

  const [successState, setSuccessState] = useState(props.sucessStateProp);

  return (
    <div className="canvasContainer1">
      <Sidebar />
      <Test />
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
