import React from "react";
import { TitleStyle } from "./titleStyle";

//* function used to construct the title input field
export function TitleBuild({ x, y, width, height, text }) {
  return <TitleStyle x={x} y={y} width={width} height={height} value={text} />;
}
