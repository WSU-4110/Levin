import React from "react";
import { ContentStyle } from "./contentStyle";

//* function used to construct the content input field
export function ContentBuild({ x, y, width, height, text }) {
  return (
    <ContentStyle x={x} y={y} width={width} height={height} value={text} />
  );
}
