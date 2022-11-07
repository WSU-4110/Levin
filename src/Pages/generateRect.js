import React, { Component, useState } from "react";
import Konva from "konva";
import { Stage, Layer, Rect } from "react-konva";

function loadRect() {
    return ({
         x: 250,
         y: 25,
         width: 50,
         height: 100,
         isDragging: false,
    })
}

const INITIAL_STATE = loadRect();

// creates a random number between 1 and a number parameter passed in as "num"
const random = num => Math.floor(Math.random() * num) + 1;

const Rectangles = () => {
  // initializing state with a canvas JSON Array with a default rectangle
  const [rect, setRect] = React.useState(INITIAL_STATE);

  // creates a new object with random: x, y, width, and height values (the number passed in represents a maximum value)
const newRectangle = () => ({
    x: random(250),
    y: random(300),
    width: random(100),
    height: random(100)
  });
  
    // when clicking on a rectangle, it creates a new rectangle by spreading out previous canvas values and adding a new set of values
  const handleClick = (e) => {
      e.setState(prevState => ({
        canvas: [...prevState.canvas, { ...newRectangle() }]
      }));
    };
  
   // handles rectangle dragging
   const handleDragStart = (e) => {
    e.target.setRect({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  
   // handles rectangle dropping
  const handleDragEnd = (e) => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };  

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {setRect.state.canvas.map(({ height, width, x, y }, key) => ( // like a "for loop", this maps over this.state.canvas objects and pulls out the height, width, x, y properties to be used below
          <Rect
            key={key}
            x={x}
            y={y}
            width={width}
            height={height}
            stroke="grey"
            draggable
            fill="blue"
            shadowOffset={{ x: 5, y: 5 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onClick={handleClick}
          />
        ))}
      </Layer>
    </Stage>
  );
}

export default Rectangles;