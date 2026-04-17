import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Float, Loader } from '@react-three/drei';

const Hero = () => {
  const IMAGES = [
    '/images/SpiderLily.jpg',
  ];

  return (
    <section id="hero">
      <div className="padding-x">
        <h1>Hi, I'm Candice </h1>
        {/* <p>Front-End Developer who enjoys turning ideas into meaningful user experiences</p> */}
      </div>
      <div className='h-full'>
        <Canvas>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero