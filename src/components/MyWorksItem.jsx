import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const images = [
  "/images/SpiderLily.jpg",
  "/images/alone.jpg",
  "/images/SpiderLily.jpg",
  "/images/alone.jpg",
];

export default function MyWorksItem({controls}) {
  const textures = useTexture(images);
  const { camera } = useThree();

  const distance = camera.position.z;
  const vFov = THREE.MathUtils.degToRad(camera.fov);
  const visibleHeight = 2 * Math.tan(vFov / 2) * distance;
  const baseHeight = visibleHeight * 0.5;

  const quantity = textures.length;
  const radius = 3; 
  const { positionX, positionY, positionZ, rotationY } = controls;

  return (
    <>
      <group position={[positionX, positionY, positionZ]} rotation={[0, rotationY, 0]}>
        {textures.map((tex, i) => {
          if (!tex || !tex.image) return null;

          const aspect = tex.image.width / tex.image.height;
          const height = baseHeight;
          const width = aspect * height;

          const degrees = i * (360 / quantity);
          const radians = THREE.MathUtils.degToRad(degrees);

          return (
            <group key={i} rotation={[0, radians, 0]}>
              <mesh position={[0, 0, radius]} rotation={[0, 0, 0]}>
                <planeGeometry args={[width, height]} />
                {/* Since we aren't using RoundedBox or the <Image /> component,
                  standard PlaneGeometry is always a sharp rectangle.
                  To get rounded corners on a simple mesh, you usually 
                  apply a mask texture to 'alphaMap'.
                */}
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