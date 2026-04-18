import { useTexture, PerspectiveCamera,OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import MyWorksItem from "./MyWorksItem";

const Experience = () => {
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
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />

      {/* 💡 Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      <MyWorksItem />
      <OrbitControls />
    </Suspense>
  );
};

export default Experience;