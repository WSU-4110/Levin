import {React , useState} from "react";
import { Stage, Layer, Rect } from "react-konva";
import Sidebar from "../Components/sidebar.js";
import CanvasStage from "../Components/canvasStage.js";
import "./Styling/canvas.css";

function Canvas(props) {

  const [successState, setSuccessState] = useState(props.sucessStateProp);

  return (
    <div className="canvasContainer">
      <Sidebar />
      <CanvasStage />
    </div>
  );
}

export default Canvas;
