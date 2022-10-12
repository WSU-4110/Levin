import "./Styling/canvas.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const card = (
  <React.Fragment sx={{ maxWidth: 200, borderRadius: 3, background: "none" }}>
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
        }}
      />
    </CardContent>
    <CardContent
      style={{
        display: "flex",
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
          background: "rgba(128, 125, 219)",
          resize: "none",
          border: "none",
        }}
      />
    </CardContent>
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
            maxWidth: 200,
            border: 2,
            color: "rgb(128, 125, 219)",
            borderRadius: 4,
          }}
        >
          <Card sx={{ maxWidth: 200, borderRadius: 3, background: "none" }}>
            {card}
          </Card>
        </Box>
      </div>
    </div>
  );
}

export default Canvas;
