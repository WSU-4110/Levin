import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Group } from "react-konva";
import ContainerStyle from "./conStyle";

export default class TestApp extends Component {
  // initializing state with a canvas JSON Array with a default rectangle
  state = {
    canvas: [{}],
  };

  // when clicking on a rectangle, it creates a new rectangle by spreading out previous canvas values and adding a new set of values
  handleClick = () => {
    this.setState((prevState) => ({
      canvas: [...prevState.canvas, <ContainerStyle />],
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
              >
                {/* //* container style */}
                <ContainerStyle />
              </Group>
            )
          )}

          {/* //* add container button  */}
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
              fill="black"
            />

            {/* //* bottom left square */}
            <Rect
              cornerRadius={3}
              x={1000}
              y={120}
              width={15}
              height={15}
              fill="black"
            />

            {/* //* top right square */}
            <Rect
              cornerRadius={3}
              x={1020}
              y={100}
              width={15}
              height={15}
              fill="black"
            />

            {/* //* vertical line */}
            <Rect
              cornerRadius={3}
              x={1026.5}
              y={120}
              width={2.5}
              height={15}
              fill="black"
            />
            {/* //* horizontal line*/}
            <Rect
              cornerRadius={3}
              x={1020}
              y={126}
              width={15}
              height={2.5}
              fill="black"
            />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}
