import React from "react";
import { Html } from "react-konva-utils";

//* function used to set up the textarea through an html import element
export function ContainerContent() {
  const ContentInput = {
    width: 160,
    height: 140,
    position: "absolute",
    top: 55,
    margin: 10,
    border: "none",
    borderBottom: "2px solid white",
    padding: "10px",
    background: "none",
    resize: "none",
    color: "white",
    fontSize: "16px",
    fontFamily: "Helvetica",
    // outline: "1px solid red",
  };

  return (
    <Html>
      <textarea style={ContentInput} placeholder="Enter content" />
    </Html>
  );
}
