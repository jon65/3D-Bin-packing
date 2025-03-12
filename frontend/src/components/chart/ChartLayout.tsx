'use client'
import { div } from "three/tsl";
import { Box } from "./type";
import BoxPackingScene from "./BoxPackingScene";





export const ChartLayout = () => { 
      const boxes: Box[] = [
    {
      position: [0, 0, 0],     // 3 elements in the tuple
      rotation: [Math.PI / 4, 0, 0],  // 3 elements in the tuple
      size: [1, 2, 3],         // 3 elements in the tuple
    },
    {
      position: [2, 0, 0],     // 3 elements in the tuple
      rotation: [0, Math.PI / 4, 0],  // 3 elements in the tuple
      size: [1, 2, 1],         // 3 elements in the tuple
    },
    // Add more boxes as needed...
  ]

    return (
      <div style={{ width: '100%', height: '100vh' }}>
      <BoxPackingScene boxes={boxes} />
    </div>
    );
}