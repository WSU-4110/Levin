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
        {/* //* drag */}
        <Rect x={76} y={15} width={28} height={17} />
        {/* //* top row */}
        <Circle x={80} y={28} radius={2.5} fill="white" />
        <Circle x={90} y={28} radius={2.5} fill="white" />
        <Circle x={100} y={28} radius={2.5} fill="white" />

        {/* //* bottom row */}
        <Circle x={80} y={18} radius={2.5} fill="white" />
        <Circle x={90} y={18} radius={2.5} fill="white" />
        <Circle x={100} y={18} radius={2.5} fill="white" />
      </Group>
    </div>
  );
}
