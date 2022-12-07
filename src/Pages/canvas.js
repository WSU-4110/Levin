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
      
       <button value={"black"} onClick={(e)=>setColor(e.target.value)} className='btn btn-dark btn-sm m-1'>Black</button>
       <button value={"white"} onClick={(e)=>setColor(e.target.value)} className='btn btn-dark btn-sm m-1'> White</button>
       <button value={"gray"} onClick={(e)=>setColor(e.target.value)} className='btn btn-dark btn-sm m-1'> Gray</button>
       <button value={"red"} onClick={(e)=>setColor(e.target.value)} className='btn btn-dark btn-sm m-1'> Red</button>
       <button value={"orange"} onClick={(e)=>setColor(e.target.value)} className='btn btn-dark btn-sm m-1'> Orange</button>
       <button value={"yellow"} onClick={(e)=>setColor(e.target.value)} className='btn btn-dark btn-sm m-1'> Yellow</button>
       <button value={"green"} onClick={(e)=>setColor(e.target.value)} className='btn btn-dark btn-sm m-1'> Green</button>
       <button value={"cyan"} onClick={(e)=>setColor(e.target.value)} className='btn btn-dark btn-sm m-1'> Blue</button>
     
      {/* <MUIcont /> */}
      <Sidebar />
      <CanvasStage />
    </div>
  );
}

export default Canvas;
