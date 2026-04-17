import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const images = [
  "/images/SpiderLily.jpg",
  "/images/alone.jpg",
  "/images/SpiderLily.jpg",
  "/images/alone.jpg",
];

export default function MyWorksItem() {
  const textures = useTexture(images);
  const { camera } = useThree();
  const baseZ = 2;
  const distance = camera.position.z;
  const vFov = THREE.MathUtils.degToRad(camera.fov);
  const visibleHeight = 2 * Math.tan(vFov / 2) * distance;

  const baseHeight = visibleHeight * 0.6; // 🔥 60% of screen

  const activeIndex = 1;

  return (
    <>
      {textures.map((tex, i) => {
        if (!tex.image) return null;

        const aspect = tex.image.width / tex.image.height;
        const offset = i - activeIndex;

        const scale = offset === 0 ? 1 : 0.7;

        const height = baseHeight * scale;
        const width = aspect * height;

        return (
          <mesh
            key={i}
            position={[
              offset * (width * 2),        // spread horizontally
              0,
              baseZ - Math.abs(offset) * 1.5 // push back
            ]}
          >
            <planeGeometry args={[width, height]} />
            <meshStandardMaterial map={tex} />
          </mesh>
        );
      })}
    </>
  );
}