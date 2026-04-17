import React from 'react'
import { Image } from '@react-three/drei';

const CarouselItem = ({ url, index, total, radius }) => {
  const angle = (index / total) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  return (
    <Image
      url={url}
      position={[0, 2, 0]}
      // Rotation ensures the image faces the center
      rotation={[0, 0, 0]}
      scale={[1, 1.5, 1]} // Width, Height
    />
  );
}

export default CarouselItem