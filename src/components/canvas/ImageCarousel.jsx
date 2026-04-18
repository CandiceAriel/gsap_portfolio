import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import {
  abs,
  add,
  div,
  length,
  max,
  mix,
  mul,
  positionLocal,
  smoothstep,
  sub,
  texture,
  uv,
  vec4,
} from "three/tsl";
import { NodeMaterial } from "three/webgpu";

const ImageCarousel = ({
  images = [],
  radius = 5,
  imageWidth = 3,
  imageHeight = 4,
  cornerRadius = 0.15,
  bendAmount = 0.3,
  centerOpacity = 1.0,
  adjacentOpacity = 0.7,
  farOpacity = 0.3,
}) => {
  const groupRef = useRef();
  const { gl } = useThree();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth rotation state
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const isDragging = useRef(false);
  const lastMouseX = useRef(0);
  const targetRotationRef = useRef(0);
  const isSnapping = useRef(false);

  const textures = useLoader(TextureLoader, images, (loader) => {
    loader.crossOrigin = "anonymous";
  });

  // Set correct colorSpace for all textures
  textures.forEach((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
  });

   const ImagePlane = ({ texture: imageTexture, index, total }) => {
    const meshRef = useRef();
    const materialRef = useRef();
    const angle = (index * Math.PI * 2) / total;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    // Calculate image position relative to current center
    const getImagePosition = () => {
      const totalImages = images.length;
      let distance = Math.abs(index - currentIndex);

      // Handle wraparound (e.g., if we have 6 images, image 0 and 5 are adjacent)
      if (distance > totalImages / 2) {
        distance = totalImages - distance;
      }

      return distance;
    };

    const getOpacity = () => {
      const position = getImagePosition();
      if (position === 0) return centerOpacity; // Center image
      if (position === 1) return adjacentOpacity; // Adjacent images
      return farOpacity; // Far images
    };

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.lookAt(0, meshRef.current.position.y, 0);
      }
    });

    // Create TSL material with rounded corners and cylindrical bending
    const roundedCornersMaterial = useMemo(() => {
      const material = new NodeMaterial();

      // Individual plane cylindrical bending
      const position = positionLocal;

      // Bend each plane individually to look curved
      // The bend should curve the plane inward toward the carousel center (like a cylinder segment)
      const bendStrength = mul(bendAmount, 2.0); // More pronounced curvature
      const normalizedX = div(position.x, imageWidth * 0.5); // Normalize to half-width for better curve
      const curvature = mul(mul(normalizedX, normalizedX), bendStrength);
      const bentZ = add(position.z, curvature); // Changed from sub to add for inward curve

      material.positionNode = vec4(position.x, position.y, bentZ, position.w);

      const uvCoords = uv();
      const imageColor = texture(imageTexture, uvCoords);

      // Calculate distance from center for rounded rectangle
      const center = sub(uvCoords, 0.5);
      const d = length(max(sub(abs(center), 0.5 - cornerRadius), 0.0));

      // Create smooth mask for rounded corners
      const mask = smoothstep(cornerRadius + 0.01, cornerRadius - 0.01, d);

      // Mix transparent and image color based on mask
      const finalColor = mix(vec4(0, 0, 0, 0), imageColor, mask);

      material.colorNode = finalColor;
      material.transparent = true;
      material.side = THREE.DoubleSide;

      return material;
    }, [imageTexture, cornerRadius, radius, bendAmount, imageWidth]);

    // Update opacity based on position
    roundedCornersMaterial.opacity = getOpacity();

    return (
      <mesh
        ref={meshRef}
        position={[x, 0, z]}
        material={roundedCornersMaterial}
      >
        <planeGeometry args={[imageWidth, imageHeight, 32, 32]} />
      </mesh>
    );
  };

  return (
    <group ref={groupRef}>
      {images.map((image, index) => (
        <ImagePlane
          key={`${image}-${index}`}
          texture={textures[index]}
          index={index}
          total={images.length}
        />
      ))}

      {/* Center light */}
      <pointLight position={[0, 2, 0]} intensity={0.5} />
      <ambientLight intensity={0.3} />
    </group>
  );
}

export default ImageCarousel