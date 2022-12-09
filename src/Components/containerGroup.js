import React, { useRef, useState } from "react";
import { Text, Group, Rect, Arrow, Circle, Line } from "react-konva";
import { Html } from "react-konva-utils";

function useGenerateRandomColor() {
  const [colorFill, pickerColor] = useState("");

  const clickColor = (e) => {
    if (e.evt.button !== 2) {
      pickerColor(Math.random().toString(16).substr(-6));
    }
  };

  return { colorFill, clickColor };
}

function TextArea({ x, y, value, onChange, onKeyDown }) {
  return (
    <Html groupProps={{ x, y }}>
      <textarea
        style={{
          width: 160,
          height: 200,
          margin: 10,
          border: "red",
          padding: "10px",
          background: "none",
          resize: "none",
          color: "black",
          fontSize: "16px",
          fontFamily: "Helvetica",
          fontWeight: "normal",
          borderRadius: 10,
        }}
        placeholder="Enter Content"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </Html>
  );
}

function KonvaText({ text, onClick }) {
  const textRef = useRef(null);

  return (
    <>
      <Text
        padding={20}
        width={200}
        height={230}
        fill="black"
        fontFamily="Helvetica"
        fontSize={16}
        fontStyle="normal"
        // textDecoration="underline"
        perfectDrawEnabled={false}
        onClick={onClick}
        onTap={onClick}
        ref={textRef}
        text={text}
      />
    </>
  );
}

export function EditTextArea({
  x,
  y,
  isEditing,
  onToggleEdit,
  onChange,
  text,
  width,
  height,
}) {
  function handleEscapeKeys(e) {
    const enter = 13;

    if (e.keyCode === enter && !e.shiftKey) {
      onToggleEdit(e);
    }
  }

  function handleTextChange(e) {
    onChange(e.currentTarget.value);
  }

  if (isEditing) {
    return (
      <TextArea
        width={width}
        height={height}
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleEscapeKeys}
      />
    );
  }

  return (
    <KonvaText x={x} y={y} onClick={onToggleEdit} text={text} width={width} />
  );
}

export function Container({ text, x, y, onTextChange, onTextClick }) {
  const { colorFill, clickColor } = useGenerateRandomColor();
  const [isEditing, setIsEditing] = useState(false);

  function toggleEdit() {
    setIsEditing(!isEditing);
    onTextClick(!isEditing);
  }

  const container = {
    x: 0,
    y: 0,
    width: 200,
    height: 260,
    shadowColor: "black",
    shadowBlur: 25,
    shadowOpacity: 0.25,
    cornerRadius: 10,
    stroke: "black",
    strokeWidth: 1,
    globalCompositeOperation: "xor",
  };

  const LineUp = ({ node1, node2 }) => {
    const dx = node1.x - node2.x;
    const dy = node1.y - node2.y;
    let angle = Math.atan2(-dy, dx);

    const radius = 0;

    const arrowStart = {
      x: node2.x + radius * Math.cos(angle + Math.PI),
      y: node2.y + (radius + 10) * Math.sin(angle + Math.PI),
    };

    const arrowEnd = {
      x: node1.x + radius * Math.cos(angle),
      y: node1.y + radius * Math.sin(angle) - 10,
    };

    return (
      <Line
        points={[arrowStart.x, arrowStart.y, arrowEnd.x + 99, arrowEnd.y]}
        stroke={"#" + colorFill}
        strokeWidth={5}
      />
    );
  };

  const arrowUp = {
    x: 99,
    y: -15,
    pointerLength: 10,
    pointerWidth: 30,
    points: [0, 0, 0, 0],
    stroke: "black",
    strokeWidth: 1,
    draggable: true,
    rotation: 270,
  };

  const LineDown = ({ node1, node2 }) => {
    const dx = node1.x - node2.x;
    const dy = node1.y - node2.y;
    let angle = Math.atan2(-dy, dx);

    const radius = 0;

    const arrowStart = {
      x: node2.x + radius * Math.cos(angle + Math.PI),
      y: node2.y + (radius + 10) * Math.sin(angle + Math.PI),
    };

    const arrowEnd = {
      x: node1.x + radius * Math.cos(angle),
      y: node1.y + radius * Math.sin(angle) + 10,
    };

    return (
      <Line
        points={[arrowStart.x, arrowStart.y, arrowEnd.x + 99, arrowEnd.y + 260]}
        stroke={"#" + colorFill}
        strokeWidth={5}
      />
    );
  };

  const arrowDown = {
    x: 99,
    y: 275,
    pointerLength: 10,
    pointerWidth: 30,
    points: [0, 0, 0, 0],
    stroke: "black",
    strokeWidth: 1,
    draggable: true,
    rotation: 90,
  };

  const LineLeft = ({ node1, node2 }) => {
    const dx = node1.x - node2.x;
    const dy = node1.y - node2.y;
    let angle = Math.atan2(-dy, dx);

    const radius = 0;

    const arrowStart = {
      x: node2.x + (radius - 10) * Math.cos(angle + Math.PI),
      y: node2.y + radius * Math.sin(angle + Math.PI),
    };

    const arrowEnd = {
      x: node1.x + radius * Math.cos(angle) - 10,
      y: node1.y + radius * Math.sin(angle),
    };

    return (
      <Line
        points={[arrowStart.x, arrowStart.y, arrowEnd.x, arrowEnd.y + 132]}
        stroke={"#" + colorFill}
        strokeWidth={5}
      />
    );
  };

  const arrowLeft = {
    x: -15,
    y: 132,
    pointerLength: 10,
    pointerWidth: 30,
    points: [0, 0, 0, 0],
    stroke: "black",
    strokeWidth: 1,
    draggable: true,
    rotation: 180,
  };

  const LineRight = ({ node1, node2 }) => {
    const dx = node1.x - node2.x;
    const dy = node1.y - node2.y;
    let angle = Math.atan2(-dy, dx);

    const radius = 0;

    const arrowStart = {
      x: node2.x + (radius - 10) * Math.cos(angle + Math.PI),
      y: node2.y + radius * Math.sin(angle + Math.PI),
    };

    const arrowEnd = {
      x: node1.x + radius * Math.cos(angle) + 10,
      y: node1.y + radius * Math.sin(angle),
    };

    return (
      <Line
        points={[
          arrowStart.x,
          arrowStart.y,
          arrowEnd.x + 200,
          arrowEnd.y + 132,
        ]}
        stroke={"#" + colorFill}
        strokeWidth={5}
      />
    );
  };

  const arrowRight = {
    x: 215,
    y: 132,
    pointerLength: 10,
    pointerWidth: 30,
    points: [0, 0, 0, 0],
    stroke: "black",
    strokeWidth: 1,
    draggable: true,
  };

  const [containerNode, updatecontainerNode] = React.useState(container);
  const [upNode, updateUpNode] = React.useState(arrowUp);
  const [downNode, updateDownNode] = React.useState(arrowDown);
  const [leftNode, updateLeftNode] = React.useState(arrowLeft);
  const [rightNode, updateRightNode] = React.useState(arrowRight);

  return (
    <Group x={x} y={y}>
      {/* //* container */}
      <Rect
        {...containerNode}
        onDragMove={(e) => {
          updatecontainerNode({ ...containerNode, ...e.target.position() });
        }}
        onClick={clickColor}
        onTap={clickColor}
        fill={"#" + colorFill}
      />

      {/* //* up arrow */}
      <LineUp node1={containerNode} node2={upNode} />
      <Arrow
        {...upNode}
        onDragMove={(e) => {
          updateUpNode({ ...upNode, ...e.target.position() });
        }}
        fill={"#" + colorFill}
      />

      {/* //* down arrow */}
      <LineDown node1={containerNode} node2={downNode} />
      <Arrow
        {...downNode}
        onDragMove={(e) => {
          updateDownNode({ ...downNode, ...e.target.position() });
        }}
        fill={"#" + colorFill}
      />

      {/* //* left arrow */}
      <LineLeft node1={containerNode} node2={leftNode} />
      <Arrow
        {...leftNode}
        onDragMove={(e) => {
          updateLeftNode({ ...leftNode, ...e.target.position() });
        }}
        fill={"#" + colorFill}
      />

      {/* //* right arrow */}
      <LineRight node1={containerNode} node2={rightNode} />
      <Arrow
        {...rightNode}
        onDragMove={(e) => {
          updateRightNode({ ...rightNode, ...e.target.position() });
        }}
        fill={"#" + colorFill}
      />

      {/* //* text area and shape to contain the text */}
      <Rect
        x={10}
        y={10}
        width={180}
        height={220}
        stroke="white"
        strokeWidth={1}
        cornerRadius={10}
      />

      <EditTextArea
        text={text}
        isEditing={isEditing}
        onToggleEdit={toggleEdit}
        onChange={onTextChange}
      />

      {/* //* six dots on container footer */}
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
