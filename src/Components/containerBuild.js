import React from "react";
import { Group, Rect } from "react-konva";
import ContainerColor from "./containerColor";
import { ContainerTitle } from "./containerTitle";
import { ContainerContent } from "./containerContent";
import { ContainerFooter } from "./containerFooter";

function ContainerBuild() {
  const { colorFill, clickColor } = ContainerColor();

  return (
    <Group>
      {/* //* container style and build */}
      <Rect
        width={200}
        height={260}
        onClick={clickColor}
        fill={"#" + colorFill}
        shadowColor="black"
        shadowBlur={25}
        shadowOpacity={0.25}
        cornerRadius={10}
        globalCompositeOperation="xor"
      />

      {/* //* container title text area */}
      <ContainerTitle />

      {/* //* container content text area */}
      <ContainerContent />

      <ContainerFooter />
    </Group>
  );
}

export default ContainerBuild;
