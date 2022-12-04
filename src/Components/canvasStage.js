import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Group } from "react-konva";
import ContainerStyle from "./conStyle";

// creates a random number between 1 and a number parameter passed in as "num"
const random = (num) => Math.floor(Math.random() * num) + 1;

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
              <Group
                key={key}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                draggable
              >
                {/* //* container style */}
                <ContainerStyle />
              </Group>
            )
          )}
        </Layer>

        {/* //* button */}
        <Layer>
          <Group
            x={-979}
            y={375}
            draggable
            onClick={this.handleClick}
            onMouseEnter={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
            }}
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
            }}
          >
            <div className="test123">
              {/* //* add container */}
              <Rect x={1000} y={100} width={35} height={35} />

              <Rect
                cornerRadius={3}
                x={1000}
                y={100}
                width={15}
                height={15}
                fill="black"
              />

              <Rect
                cornerRadius={3}
                x={1000}
                y={120}
                width={15}
                height={15}
                fill="black"
              />

              <Rect
                cornerRadius={3}
                x={1020}
                y={100}
                width={15}
                height={15}
                fill="black"
              />

              {/* //* vertical */}
              <Rect
                cornerRadius={3}
                x={1026.5}
                y={120}
                width={2.5}
                height={15}
                fill="black"
              />

              {/* //* horizontal */}
              <Rect
                cornerRadius={3}
                x={1020}
                y={126}
                width={15}
                height={2.5}
                fill="black"
              />
            </div>
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}
