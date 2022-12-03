import React from "react";
import { Html } from "react-konva-utils";

//* function used to style user content input
function InputStyle(width, height) {
  const baseStyle = {
    width: `${width}px`,
    height: `${height}px`,
    left: 0,
    border: "none",
    borderBottom: "2px solid black",
    padding: "10px",
    background: "none",
    resize: "none",
    color: "black",
    fontSize: "16px",
    fontFamily: "Helvetica",
  };

  return {
    ...baseStyle,
  };
}

//* function used to call InputStyle and set up the textarea thtough an html import element
export function ContentStyle({
  x,
  y,
  width,
  height,
  value,
  onChange,
  onKeyDown,
}) {
  const style = InputStyle(width, height);

  return (
    <Html groupProps={{ x, y }} divProps={{ style: { opacity: 1 } }}>
      <textarea
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={style}
        placeholder="Enter content"
      />
    </Html>
  );
}
