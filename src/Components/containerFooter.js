import React from "react";
import { Group, Circle, Rect } from "react-konva";

export function ContainerFooter({ x, y }) {
  return (
    <div>
      <Group
        x={x}
        y={y}
        onMouseEnter={(e) => {
          const container = e.target.getStage().container();
          container.style.cursor = "pointer";
        }}
        onMouseLeave={(e) => {
          const container = e.target.getStage().container();
          container.style.cursor = "default";
        }}
      >
        {/* //* add container (plus) */}
        <div>
          <Rect x={28} y={15.5} width={15} height={15} />
          {/* //* vertical */}
          <Rect x={34.5} y={15.5} width={2.5} height={15} fill="black" />

          {/* //* horizontal */}
          <Rect x={28} y={21.5} width={15} height={2.5} fill="black" />
        </div>

        {/* //* drag */}
        <div>
          <Rect x={76} y={15} width={28} height={17} />
          {/* //* top row */}
          <Circle x={80} y={28} radius={2.5} fill="black" />
          <Circle x={90} y={28} radius={2.5} fill="black" />
          <Circle x={100} y={28} radius={2.5} fill="black" />

          {/* //* bottom row */}
          <Circle x={80} y={18} radius={2.5} fill="black" />
          <Circle x={90} y={18} radius={2.5} fill="black" />
          <Circle x={100} y={18} radius={2.5} fill="black" />
        </div>

        {/* //* delete container (minus) */}
        <div>
          <Rect x={136} y={17.5} width={15} height={10} />
          {/* //* horizontal */}
          <Rect x={136} y={21.5} width={15} height={2.5} fill="black" />
        </div>
      </Group>
    </div>
  );
}
