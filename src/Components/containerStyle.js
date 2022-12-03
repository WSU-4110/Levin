import React from "react";
import { ContainerBuild } from "./containerBuild";

function ContainerStyle() {
  return (
    <div>
      {/* //* defining the size of the containers */}
      <ContainerBuild
        x={window.innerWidth / 2.25}
        y={window.innerHeight / 3}
        color="rgb(128, 125, 219)"
        width={200}
        height={260}
      />
    </div>
  );
}

export default ContainerStyle;
