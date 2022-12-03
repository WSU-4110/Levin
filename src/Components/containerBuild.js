import React from "react";
import { Group, Rect } from "react-konva";
import { TitleBuild } from "./titleBuild";
import { ContentBuild } from "./contentBuild";

export function ContainerBuild({ color, text, x, y, width, height, onClick }) {
  return (
    <Group x={x} y={y}>
      {/* //* container style */}
      <Rect
        width={width}
        height={height}
        fill={color}
        onClick={onClick}
        onTap={onClick}
        shadowColor="black"
        shadowBlur={25}
        shadowOpacity={0.25}
        cornerRadius={10}
      />

      {/* //* title Text Area */}
      <TitleBuild x={10} y={10} text={text} width={160} height={25} />

      {/* //* content Text Area */}
      <ContentBuild x={10} y={65} text={text} width={160} height={165} />
    </Group>
  );
}
