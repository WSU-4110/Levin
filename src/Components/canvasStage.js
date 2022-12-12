import React, { Component, useState } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Group } from "react-konva";
import { Container } from "./containerGroup";
import { NoEncryption } from "@mui/icons-material";

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
    stageScale: 1,
    stageX: 0,
    stageY: 0,
    // canvas: JSON.parse(localStorage.getItem("canvasObject"))
  };

  // when clicking on a rectangle, it creates a new rectangle by spreading out previous canvas values and adding a new set of values
  containerClick = () => {
    this.setState((prevState) => ({
      stage: [...prevState.stage, <ContainerRender />],
    }));

    console.log(this.state.stage);
    //  console.log(this.state.stage.length);
    // localStorage.setItem("canvasObject", JSON.stringify(this.state.stage));
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
      });
    }
  };

  handleWheel = (e) => {
    e.evt.preventDefault();

    const scaleBy = 1.1;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    this.setState({
      stageScale: newScale,
      stageX:
        -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:
        -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    });
  };

  render = () => (
    <div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        draggable
        onWheel={this.handleWheel}
        scaleX={this.state.stageScale}
        scaleY={this.state.stageScale}
        x={this.state.stageX}
        y={this.state.stageY}
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
            <Rect x={1000} y={180} width={35} height={35} />

            {/* //* top left square */}
            <Rect
              cornerRadius={3}
              x={1000}
              y={180}
              width={15}
              height={15}
              fill="rgb(0,174,112)"
            />

            {/* //* bottom left square */}
            <Rect
              cornerRadius={3}
              x={1000}
              y={200}
              width={15}
              height={15}
              fill="rgb(0,151,158)"
            />

            {/* //* top right square */}
            <Rect
              cornerRadius={3}
              x={1020}
              y={180}
              width={15}
              height={15}
              fill="rgb(0,160,140)"
            />

            {/* //* vertical line */}
            <Rect
              cornerRadius={3}
              x={1026.5}
              y={200}
              width={2.5}
              height={15}
              fill="rgb(0,141,179)"
            />
            {/* //* horizontal line*/}
            <Rect
              cornerRadius={3}
              x={1020}
              y={206}
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
              assignkey = this.state.stage.length // like a "for loop", this maps over this.state.canvas objects and pulls out the height, width, x, y properties to be used below
            ) => (
              //* container
              <Group
                draggable
                key={assignkey}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                onClick={this.handleRightClick}
                x={window.innerWidth / 2.23}
                y={window.innerHeight / 3.3}
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
