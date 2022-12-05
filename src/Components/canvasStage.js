import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Group, Circle } from "react-konva";
import { Html } from "react-konva-utils";
import ContainerColor from "./containerColor";

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

export default class canvasStage extends Component {
  // initializing state with a canvas JSON Array with a default rectangle
  state = {
    canvas: [{}],
  };

  // when clicking on a rectangle, it creates a new rectangle by spreading out previous canvas values and adding a new set of values
  handleClick = () => {
    this.setState((prevState) => ({
      canvas: [...prevState.canvas, <ContainerBuild />],
    }));
  };

  // handles rectangle dragging
  handleDragStart = (e) => {
    e.target.setAttrs({
      duration: 0.3,
      easing: Konva.Easings.BounceEaseIn,
      scaleX: 1.01,
      scaleY: 1.01,
      zIndex: 20,
    });
  };

  // handles rectangle dropping
  handleDragEnd = (e) => {
    e.target.to({
      duration: 0.3,
      easing: Konva.Easings.BounceEaseOut,
      scaleX: 1,
      scaleY: 1,
      zIndex: 20,
    });
  };

  render = () => (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight} draggable>
        {/* //* add container button  */}
        <Layer>
          <Group
            x={-979}
            y={375}
            draggable
            //* calling handleClick to generate container
            onClick={this.handleClick}
            //* cursor pointer on hover
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
            }}
          >
            <Rect x={1000} y={100} width={35} height={35} />

            {/* //* top left square */}
            <Rect
              cornerRadius={3}
              x={1000}
              y={100}
              width={15}
              height={15}
              fill="rgb(0,174,112)"
            />

            {/* //* bottom left square */}
            <Rect
              cornerRadius={3}
              x={1000}
              y={120}
              width={15}
              height={15}
              fill="rgb(0,151,158)"
            />

            {/* //* top right square */}
            <Rect
              cornerRadius={3}
              x={1020}
              y={100}
              width={15}
              height={15}
              fill="rgb(0,160,140)"
            />

            {/* //* vertical line */}
            <Rect
              cornerRadius={3}
              x={1026.5}
              y={120}
              width={2.5}
              height={15}
              fill="rgb(0,141,179)"
            />
            {/* //* horizontal line*/}
            <Rect
              cornerRadius={3}
              x={1020}
              y={126}
              width={15}
              height={2.5}
              fill="rgb(0,141,179)"
            />
          </Group>
        </Layer>
        {/* //* container */}
        <Layer>
          {this.state.canvas.map(
            (
              key // like a "for loop", this maps over this.state.canvas objects and pulls out the height, width, x, y properties to be used below
            ) => (
              //* container
              <Group
                draggable
                key={key}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                x={window.innerWidth / 2.25}
                y={window.innerHeight / 2.8}
              >
                <ContainerBuild />
              </Group>
            )
          )}
        </Layer>
      </Stage>
    </div>
  );
}
