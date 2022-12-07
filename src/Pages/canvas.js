import React, { Component, useState } from "react";
import { createRoot } from 'react-dom/client';
import Sidebar from "../Components/sidebar.js";
import CanvasStage from "../Components/canvasStage.js";
import MUIcont from "./MUIcont.js";
import "./Styling/canvas.css";
import { Dropdown } from "rsuite";
import "bootstrap/dist/css/bootstrap.css";

function useGenerateRandomColor() {
  const [colorFill, pickerColor] = useState("");

  const clickColor = (e) => {
    if (e.evt.button === 0) {
      pickerColor(Math.random().toString(16).substr(-6));
    }
  };

  return { colorFill, clickColor };
}



function Canvas() {
  const [color, setColor] = React.useState();
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div align="center" style={{backgroundColor:color,height:"1000vh"}} className="buttonclass">
      
       <button >Black</button>
       <button > White</button>
       <button > Gray</button>
       <button > Red</button>
       <button > Orange</button>
       <button > Yellow</button>
       <button > Green</button>
       <button > Blue</button>
     
      {/* <MUIcont /> */}
      <Sidebar />
      <CanvasStage />
    </div>
  );
}

export default Canvas;
