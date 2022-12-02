import React from "react";
import { Rect } from "react-konva";

function KONcont() {
  return (
    <div>
      <Rect
        x={window.innerWidth / 2.25}
        y={window.innerHeight / 3}
        width={200}
        height={260}
        fill="rgb(128, 125, 219)"
        cornerRadius={10}
        shadowBlur={3}
        draggable
      />
    </div>
  );
}

export default KONcont;
