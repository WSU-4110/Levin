import React, { useRef, useState } from "react";
import { Text, Group, Rect, Arrow, Circle } from "react-konva";
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

  return (
    <Group x={x} y={y}>
      {/* //* left */}
      <Arrow
        x={-15}
        y={132}
        pointerLength={10}
        pointerWidth={30}
        fill="black"
        points={[0, 0, 0, 0]}
        stroke={"#" + colorFill}
        strokeWidth={1}
        rotation={180}
      />

      {/* //* right */}
      <Arrow
        x={215}
        y={132}
        pointerLength={10}
        pointerWidth={30}
        fill="black"
        points={[0, 0, 0, 0]}
        stroke={"#" + colorFill}
        strokeWidth={1}
      />

      {/* //* top */}
      <Arrow
        x={99}
        y={-15}
        pointerLength={10}
        pointerWidth={30}
        fill="black"
        points={[0, 0, 0, 0]}
        stroke={"#" + colorFill}
        strokeWidth={1}
        rotation={270}
      />

      {/* //* bottom */}
      <Arrow
        x={99}
        y={275}
        pointerLength={10}
        pointerWidth={30}
        fill="black"
        points={[0, 0, 0, 0]}
        stroke={"#" + colorFill}
        strokeWidth={1}
        rotation={90}
      />

      {/* //* container shape */}
      <Rect
        width={200}
        height={260}
        onClick={clickColor}
        onTap={clickColor}
        fill={"#" + colorFill}
        shadowColor="black"
        shadowBlur={25}
        shadowOpacity={0.25}
        cornerRadius={10}
        globalCompositeOperation="xor"
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
