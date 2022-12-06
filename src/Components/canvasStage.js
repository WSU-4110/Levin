import React, { Component, useState } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Group } from "react-konva";
import { Container } from "./containerGroup";

function deleteContainer(e) {
  if (e.evt.button === 2) {
    document.getElementById("title").style.opacity = 0;
    document.getElementById("content").style.opacity = 0;
  }
}

function ContainerRender() {
  const [text, setText] = useState("Content");
  const [selected, setSelected] = useState(false);

  return (
    <Group
      onTap={deleteContainer}
      onClick={(e) => {
        if (e.currentTarget._id === e.target._id) {
          setSelected(false);
        }
      }}
    >
      <Container
        text={text}
        onTextChange={(value) => setText(value)}
        onClick={() => {
          setSelected(!selected);
        }}
        onTextClick={(newSelected) => {
          setSelected(newSelected);
        }}
      />
    </Group>
  );
}

export default class canvasStage extends Component {
  // initializing state with a canvas JSON Array with a default rectangle
  state = {
    stage: [{}],
    // canvas: JSON.parse(localStorage.getItem("canvasObject"))
  };

  // when clicking on a rectangle, it creates a new rectangle by spreading out previous canvas values and adding a new set of values
  containerClick = () => {
    this.setState((prevState) => ({
      stage: [...prevState.stage, <ContainerRender />],
    }));

    console.log(this.state.stage);
    console.log(this.state.stage.length);
    localStorage.setItem("canvasObject", JSON.stringify(this.state.stage));
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

  handleRightClick = (e) => {
    if (e.evt.button === 2) {
      e.target.getParent().setAttrs({
        visible: false,
        opacity: 0,
      });
    }
  };

  render = () => (
    <div>
      <Stage
        width={window.innerWidth * 4}
        height={window.innerHeight * 4}
        draggable
      >
        {/* //* add container button  */}
        <Layer>
          <Group
            x={-979}
            y={375}
            draggable
            //* calling handleClick to generate container
            onClick={this.containerClick}
            onTap={this.containerClick}
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
          {this.state.stage.map(
            (
              key = this.state.stage.length // like a "for loop", this maps over this.state.canvas objects and pulls out the height, width, x, y properties to be used below
            ) => (
              //* container
              <Group
                draggable
                key={key}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                onClick={this.handleRightClick}
                x={100}
                y={150}
              >
                <ContainerRender onClick={this.handleRightClick} />
              </Group>
            )
          )}
        </Layer>
      </Stage>
    </div>
  );
}
