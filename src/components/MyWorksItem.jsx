import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const images = [
  "/images/SpiderLily.jpg",
  "/images/alone.jpg",
  "/images/SpiderLily.jpg",
  "/images/alone.jpg",
];

export default function MyWorksItem() {
  const textures = useTexture(images);

  const quantity = textures.length;
  const radius = 5; 
  const FIXED_HEIGHT = 4.5; 

  return (
    <>
      {/* You can manually tweak these arrays if you ever want to offset the layout:
        position={[X, Y, Z]}  |  rotation={[X, Y, Z]}
      */}
      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        {textures.map((tex, i) => {
          if (!tex || !tex.image) return null;

          const aspect = tex.image.width / tex.image.height;
          const height = FIXED_HEIGHT;
          const width = aspect * height;

          const degrees = i * (360 / quantity);
          const radians = THREE.MathUtils.degToRad(degrees);

          return (
            <group key={i} rotation={[0, radians, 0]}>
              <mesh position={[0, 0, radius]}>
                <planeGeometry args={[width, height]} />
                <meshBasicMaterial 
                  map={tex} 
                  transparent={true}
                  side={THREE.DoubleSide}
                />
              </mesh>
            </group>
          );
        })}
      </group>
    </>
  );
}