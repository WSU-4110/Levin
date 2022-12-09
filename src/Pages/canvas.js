import { React, useState } from "react";
import Sidebar from "../Components/sidebar.js";
import CanvasStage from "../Components/canvasStage.js";
import "./Styling/canvas.css";

function Canvas(props) {
  // const [containerList, setContainerList] = useState([<MUIcont key= "0" />]);

  // const addContainer = () => {
  //   console.log("adding");
  //   setContainerList(
  //     containerList.concat(<MUIcont key={containerList.length}  />)
  //   );
  //   console.log(containerList);
  //   console.log(containerList[0]);
  // };

  // const save = () => {
  //   localStorage.setItem("containers", JSON.stringify(containerList))
  //   JSON.parse(localStorage.getItem("containers"));
  // };

  const [successState, setSuccessState] = useState("false");
  return (
    <div className="canvasContainer">
      <Sidebar />
      <CanvasStage />
    </div>
  );
}

export default Canvas;
