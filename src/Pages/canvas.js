import "./Styling/canvas.css";
import Sidebar from "../Components/sidebar.js";
import React from "react";

function Canvas() {
  return (
    <div className="canvasContainer">
      <Sidebar />
      <div className="titleContainer">
        <p className="title">Canvas</p>
        <div className="containerExample1">
          <div className="container1"></div>
          <div className="container2"></div>
          <div className="container3"></div>
          <div className="container4"></div>
          <div className="container5"></div>
        </div>
        <div className="containerExample2">
          <div className="container6"></div>
          <div className="container7"></div>
          <div className="container8"></div>
          <div className="container9"></div>
          <div className="container10"></div>
        </div>
        <div className="containerExample3">
          <div className="container11"></div>
          <div className="connection"></div>
          <div className="container12"></div>
          <div className="add1">
            <p>+</p>
          </div>
          <div className="border"></div>
          <div className="container13"></div>
          <div className="add2">
            <p>+</p>
          </div>
          <div className="add3">
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
