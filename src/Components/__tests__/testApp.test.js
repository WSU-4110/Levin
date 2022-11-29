import {render, screen, cleanup} from "@testing-library/react"
import TestApp from "../testApp"
import { TestApp2 } from "../testApp";
import Konva from "konva";
import { Stage, Layer, Rect } from "react-konva";
import React, { Component } from "react";

test('should render konva canvas', () => {
    render(<TestApp/>);
    const testAppElmnt = screen.getByTestId('testApp-1');
    expect(testAppElmnt).toBeInTheDocument()
}) 

describe('Test stage component', () => {

    it('can attach stage events', async function () {
      let eventCount = 0;
      const handleEvent = () => {
        eventCount += 1;
      };
  
      class App extends React.Component {
        render() {
          return (
            <Stage width={300} height={300} onMouseDown={handleEvent}>
              <Layer>
                <Rect width={100} height={100} />
              </Layer>
            </Stage>
          );
        }
      }
  
      const { stage } = await render(<App />);
      stage.simulateMouseDown({ x: 50, y: 50 });
      expect(eventCount).toBe(1);
    });

})

it('test null event', async function () {

  const { stage } = await render(<TestApp2 />);
  stage.simulateMouseDown({ x: 50, y: 50 });
});

describe('Bad structure', () => {
  it('No dom inside Konva', async function () {
    const { stage } = await render(<TestApp2 />, <div/>);
  });
});

describe('Fragments', () => {
  const Fragmented = () => (
    <React.Fragment>
      <Rect />
      <Rect />
    </React.Fragment>
  );
  
  it('can use lazy and suspense', async function () {
    const { stage } = await render(<TestApp2 />, <Fragmented/>);
    expect(stage.find('Rect').length).toBe(2);
  });

});

describe('Hooks', () => {
  it('check setState hook', async function () {
    const App = () => {
      const [fill, setColor] = React.useState('black');

      return (
        <Stage width={300} height={300}>
          <Layer>
            <Rect
              fill={fill}
              width={100}
              height={100}
              onMouseDown={() => {
                setColor('red');
              }}
            />
          </Layer>
        </Stage>
      );
    };
    const { stage } = await render(<App />);

    expect(stage.findOne('Rect').fill()).toBe('black');
    stage.simulateMouseDown({ x: 50, y: 50 });
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(stage.findOne('Rect').fill()).toBe('red');
  });
});