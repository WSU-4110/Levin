import React, { useState } from "react";
import { render } from "react-dom";
import { Stage, Layer } from "react-konva";
import { StickyNote } from "./StickyNote";

function CanvasTEST() {
  const [text, setText] = useState("Click to resize. Double click to edit.");
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [selected, setSelected] = useState(false);

  return (
    <div>
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={(e) => {
        if (e.currentTarget._id === e.target._id) {
          setSelected(false);
        }
      }}
    >
      <Layer>
        <StickyNote
          x={50}
          y={50}
          text={text}
          colour="#FFDAE1"
          onTextChange={(value) => setText(value)}
          width={width}
          height={height}
          selected={selected}
          onTextResize={(newWidth, newHeight) => {
            setWidth(newWidth);
            setHeight(newHeight);
          }}
          onClick={() => {
            setSelected(!selected);
          }}
          onTextClick={(newSelected) => {
            setSelected(newSelected);
          }}
        />
      </Layer>

      
    </Stage>
    </div>
  );
};

export default CanvasTEST;
