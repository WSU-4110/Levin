import React from "react";
import { Group, Circle, Rect } from "react-konva";

export function ContainerFooter() {
  return (
    <div>
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
    </div>
  );
}
