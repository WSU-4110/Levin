import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Group } from "react-konva";

// creates a random number between 1 and a number parameter passed in as "num"
const random = num => Math.floor(Math.random() * num) + 1;

// creates a new object with random: x, y, width, and height values (the number passed in represents a maximum value)
const newRectangle = () => ({
  x: random(250),
  y: random(300),
  width: 150,
  height: 200
});

export default class TestApp extends Component {
  // initializing state with a canvas JSON Array with a default rectangle
  state = {
    canvas: [
      {
        x: 250,
        y: 25,
        width: 50,
        height: 100
      }
    ]
  };

  // when clicking on a rectangle, it creates a new rectangle by spreading out previous canvas values and adding a new set of values
  handleClick = () => {
    this.setState(prevState => ({
      canvas: [...prevState.canvas, { ...newRectangle() }]
    }));
  };

  // handles rectangle dragging
  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };

  // handles rectangle dropping
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };

  render = () => (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {this.state.canvas.map(({ height, width, x, y }, key) => ( // like a "for loop", this maps over this.state.canvas objects and pulls out the height, width, x, y properties to be used below
          <Group onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} draggable x={x} y={y}>
            <Rect
              key={key}
              //x={x}
              //y={y}
              width={width}
              height={height}
              stroke="grey"
              //draggable
              fill="blue"
              shadowOffset={{ x: 5, y: 5 }}
              //onDragStart={this.handleDragStart}
              //onDragEnd={this.handleDragEnd}
            />
            <Rect
              key={key}
              //x={x}
              //y={y}
              width={width}
              height={height/5}
              stroke="grey"
              //draggable
              fill="green"
              //onDragStart={this.handleDragStart}
              //onDragEnd={this.handleDragEnd}
            />
          </Group>
        ))}
      </Layer>
      <Layer>
      <Rect
            x={200}
            y={200}
            width={100}
            height={100}
            fill="red"
            onClick={this.handleClick}
            />
      </Layer>
    </Stage>
  );
}