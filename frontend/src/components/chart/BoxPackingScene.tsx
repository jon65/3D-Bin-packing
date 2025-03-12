import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { Box } from './type'

interface BoxPackingSceneProps {
  boxes: Box[]
  container?: Box // Optional container prop
}

const defaultContainer: Box = {
  position: [0, 0, 0],  // Default position at origin
  rotation: [0, 0, 0],  // Default rotation (no rotation)
  size: [5, 5, 5],      // Default size: 5x5x5 (width, height, depth)
}

const BoxPackingScene: React.FC<BoxPackingSceneProps> = ({ boxes, container = defaultContainer }) => {
  return (
    <Canvas
      camera={{
        position: [5, 5, 5],
        fov: 75, // Adjust the field of view for a wider scene
        near: 0.1, // Set near clipping plane
        far: 1000, // Set far clipping plane
      }}
      style={{ width: '100%', height: '100%' }} // Make the canvas fill the screen
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* 3D plane */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* Container visualization */}
      <mesh position={container.position}>
        <boxGeometry args={container.size} />
        <meshStandardMaterial color="skyblue" wireframe={true} />
      </mesh>

      {/* Box packing boxes */}
      {boxes.map((box, index) => (
        <BoxMesh key={index} box={box} />
      ))}

      {/* Controls for orbiting and zooming */}
      <OrbitControls />
    </Canvas>
  )
}

interface BoxMeshProps {
  box: Box
}

const BoxMesh: React.FC<BoxMeshProps> = ({ box }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (meshRef.current) {
      // Apply rotation to the mesh
      meshRef.current.rotation.set(...box.rotation) // Apply the rotation in radians
    }
  }, [box.rotation]) // Reapply the rotation if it changes

  return (
    <mesh ref={meshRef} position={box.position}>
      <boxGeometry args={box.size} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default BoxPackingScene
