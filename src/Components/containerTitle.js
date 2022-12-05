import React from "react";
import { Html } from "react-konva-utils";

//* function used to set up the textarea through an html import element
export function ContainerTitle() {
  const TitleInput = {
    width: 160,
    height: 25,
    margin: 10,
    border: "none",
    borderBottom: "2px solid white",
    padding: "10px",
    background: "none",
    resize: "none",
    color: "white",
    fontSize: "20px",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    // outline: "1px solid red",
  };

  
  return (
    <Html>
      <textarea style={TitleInput} id="containerText" placeholder="Enter Title" 
      // onChange={() => {console.log(document.getElementById("containterText"))}}
          />
    </Html>
  );
}
