import { useTexture, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import MyWorksItem from "./ImageMeshes";

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
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={20} />

      {/* 💡 Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      <MyWorksItem />
    </Suspense>
  );
};

export default Experience;