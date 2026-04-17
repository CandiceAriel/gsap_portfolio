import React from 'react'
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import CarouselItem from '../CarouselItem';

const CircularCarousel = ({ images }) => {
  const groupRef = useRef();

  // useEffect(() => {
  //   // Continuous rotation using GSAP
  //   gsap.to(groupRef.current.rotation, {
  //     y: Math.PI * 2,
  //     duration: 20,
  //     repeat: -1,
  //     ease: "none"
  //   });
  // }, []);

  return (
    <group ref={groupRef}>
      {images.map((url, i) => (
        <CarouselItem
          key={i} 
          index={i} 
          total={images.length} 
          url={url} 
          radius={8} 
        />
      ))}
    </group>
  )
}

export default CircularCarousel