import { useTexture, PerspectiveCamera,OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useControls } from "leva"; // Import the hook

import MyWorksItem from "./MyWorksItem";

const Experience = () => {
  // Define your controls here
  const config = useControls("Carousel Settings", {
    positionX: { value: 0, min: -10, max: 10 },
    positionY: { value: 0, min: -10, max: 10 },
    positionZ: { value: 0, min: -10, max: 10 },
    rotationX: { value: 0, min: 0, max: Math.PI * 2 },
    rotationY: { value: 0, min: 0, max: Math.PI * 2 },
    rotationZ: { value: 0, min: 0, max: Math.PI * 2 },
  });

  return (
    <Suspense
      fallback={
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="gray" />
        </mesh>
      }
    >
      {/* 🎥 Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />

      {/* 💡 Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      <MyWorksItem  controls={config}/>
      <OrbitControls />
    </Suspense>
  );
};

export default Experience;