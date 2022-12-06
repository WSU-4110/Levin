import React from "react";
import CardContent from "@mui/material/CardContent";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Draggable from "react-draggable";

const content = (
  <React.Fragment>
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Content"
      maxRows={4}
      minRows={4}
      style={{
        fontFamily: "Helvetica",
        fontSize: 16,
        background: "transparent",
        resize: "none",
        border: "none",
        padding: 10,
        borderBottom: "1px black solid",
      }}
    />
  </React.Fragment>
);

const card = (
  <React.Fragment>
    <Draggable>
      <CardContent
        style={{
          borderRadius: 10,
          background: "rgb(128, 125, 219)",
          display: "grid",
          justifyContent: "center",
          maxWidth: 180,
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
        }}
      >
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Title"
          style={{
            fontFamily: "Helvetica",
            fontWeight: "bold",
            fontSize: 20,
            background: "none",
            resize: "none",
            border: "none",
            padding: 5,
            borderBottom: "2px black solid",
            marginBottom: 10,
          }}
        />
        {content}
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
            marginTop: 20,
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <AddIcon />
        </Fab>
      </CardContent>
    </Draggable>
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
        top: "40rem",
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
        right: "45rem",
        zIndex: "100",
      }}
    >
      <KeyboardArrowRightIcon />
    </Fab>
  </React.Fragment>
);

function MUIcont() {
  return (
    <div className="titleContainer">
      {card}
      {Add1}
      {Add2}
    </div>
  );
}

export default MUIcont;