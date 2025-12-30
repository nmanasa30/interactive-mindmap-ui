import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

import mindmapData from "../data/mindmap.json";
import { transformData } from "../utils/transformData";

export default function MindmapCanvas() {
  const { nodes, edges } = transformData(mindmapData);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
