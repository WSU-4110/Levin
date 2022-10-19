import "./Styling/canvas.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";
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
      }}
    >
      <AddIcon />
    </Fab>
  </React.Fragment>
);

function Canvas() {
  return (
    <div className="canvasContainer">
      <Sidebar />
      <div className="titleContainer">
        <p className="title">Canvas</p>
        <Box
          sx={{
            border: 2,
            color: "rgb(128, 125, 219)",
            borderRadius: 4,
          }}
        >
          <Card
            sx={{
              maxWidth: 200,
              borderRadius: 3,
              background: "none",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
            }}
          >
            {card}
          </Card>
        </Box>
        {Add}
      </div>
    </div>
  );
}

export default Canvas;
