import React from "react";
import Konva from "konva";
import { Group, Rect } from "react-konva";
import { TitleBuild } from "./titleBuild";
import { ContentBuild } from "./contentBuild";
import { ContainerFooter } from "./conFooter";

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
        globalCompositeOperation="xor"
      />

      {/* //* title Text Area */}
      <TitleBuild x={10} y={10} text={text} width={160} height={25} />

      {/* //* content Text Area */}
      <ContentBuild x={10} y={65} text={text} width={160} height={140} />

      <ContainerFooter x={10} y={220} text={text} width={160} height={10} />
    </Group>
  );
}
