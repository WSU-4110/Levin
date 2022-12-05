import React from "react";
import { Group, Rect, Circle } from "react-konva";
import ContainerColor from "./containerColor";
import { Html } from "react-konva-utils";

function ContainerBuild() {
  const { colorFill, clickColor } = ContainerColor();

  const TitleInput = {
    width: 160,
    height: 25,
    margin: 10,
    border: "none",
    borderBottom: "2px solid white",
    padding: "10px",
    background: "none",
    resize: "none",
    color: "white",
    fontSize: "20px",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    // outline: "1px solid red",
  };

  const ContentInput = {
    width: 160,
    height: 140,
    position: "absolute",
    top: 55,
    margin: 10,
    border: "none",
    borderBottom: "2px solid white",
    padding: "10px",
    background: "none",
    resize: "none",
    color: "white",
    fontSize: "16px",
    fontFamily: "Helvetica",
    // outline: "1px solid red",
  };

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
      <Html>
        <textarea style={TitleInput} placeholder="Enter Title" />
      </Html>

      {/* //* container content text area */}
      <Html>
        <textarea style={ContentInput} placeholder="Enter content" />
      </Html>

      {/* //* container content text area */}
      <Group
        onMouseEnter={(e) => {
          const container = e.target.getStage().container();
          container.style.cursor = "pointer";
        }}
        onMouseLeave={(e) => {
          const container = e.target.getStage().container();
          container.style.cursor = "default";
        }}
      >
        {/* //* drag */}
        <Rect x={85} y={235} width={28} height={17} />
        {/* //* top row */}
        <Circle x={89} y={239} radius={2.5} fill="white" />
        <Circle x={99} y={239} radius={2.5} fill="white" />
        <Circle x={109} y={239} radius={2.5} fill="white" />

        {/* //* bottom row */}
        <Circle x={89} y={249} radius={2.5} fill="white" />
        <Circle x={99} y={249} radius={2.5} fill="white" />
        <Circle x={109} y={249} radius={2.5} fill="white" />
      </Group>
    </Group>
  );
}

export default ContainerBuild;
