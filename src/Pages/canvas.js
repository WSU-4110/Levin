import Sidebar from "../Components/sidebar.js";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import { Stage, Layer, Rect } from "react-konva";

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
          background: "transparent",
          resize: "none",
          border: "black 1px solid",
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
          background: "rgba(255, 255, 255, 0.1)",
          border: "none",
          zIndex: "100",
        }}
      >
        <AddIcon />
      </Fab>
    </CardContent>
  </React.Fragment>
);

const Add1 = (
  <React.Fragment>
    <Fab
      size="medium"
      aria-label="add"
      style={{
        borderRadius: 10,
        background: "rgba(255, 255, 255, 0.1)",
        border: "none",
        position: "absolute",
        top: "70vh",
        zIndex: "100",
      }}
    >
      <KeyboardArrowDownIcon />
    </Fab>
  </React.Fragment>
);

const Add2 = (
  <React.Fragment>
    <Fab
      size="medium"
      aria-label="add"
      style={{
        borderRadius: 10,
        background: "rgba(255, 255, 255, 0.1)",
        border: "none",
        position: "absolute",
        top: "48vh",
        right: "79vh",
        zIndex: "100",
      }}
    >
      <KeyboardArrowRightIcon />
    </Fab>
  </React.Fragment>
);

function Canvas() {
  return (
    <div className="canvasContainer1">
      <Sidebar />

      <div className="titleContainer">
        <Card
          sx={{
            maxWidth: 200,
            borderRadius: 3,
            background: "rgb(128, 125, 219)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          {card}
        </Card>
        {Add1}
        {Add2}
      </div>
      
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
