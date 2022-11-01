import "./Styling/canvas.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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

function Test() {
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
    </div>
  );
}

export default Test;
