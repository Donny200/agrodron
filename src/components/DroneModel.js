import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Drone() {
  const { scene } = useGLTF("/models/dron.glb"); 
  return <primitive object={scene} scale={0.5} />;
}

export default function DroneModel() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Drone />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}