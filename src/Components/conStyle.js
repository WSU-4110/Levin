import React from "react";
import { ContainerBuild } from "./conBuild";
import RandomColor from "./randomColor";

function ContainerStyle() {
  const { color, generateColor } = RandomColor();

  return (
    <div>
      {/* //* defining the size of the containers */}
      <ContainerBuild
        onClick={generateColor}
        width={200}
        height={260}
        x={window.innerWidth / 2.23}
        y={window.innerHeight / 3.27}
        color={"#" + color}
      />
    </div>
  );
}

export default ContainerStyle;
