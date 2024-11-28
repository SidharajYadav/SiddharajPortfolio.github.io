import React from "react";
import { Canvas } from "@react-three/fiber";
import Setup from "../components/Setup";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const MobileSetup = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#171721" }}>
      <Canvas
        camera={{ position: [0, 50, 90], fov: 80 }}
        style={{ height: "75vh", width: "100%" }} 
      >
        <OrbitControls target={[0, 0, 0]} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 5]} intensity={2} /> 
        
        <Suspense fallback={null}>
          <Setup /> 
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MobileSetup;
