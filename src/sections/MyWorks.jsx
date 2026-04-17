import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Float, Loader } from '@react-three/drei';
import CircularCarousel from '../components/canvas/CircularCarousel';

const MyWorks = () => {
  const IMAGES = [
    '/images/SpiderLily.jpg',
  ];

  return (
    <section id="hero">
      <div className='h-full'>
        <Canvas>
            <CircularCarousel images={IMAGES}/>
        </Canvas>
      </div>
    </section>
  )
}

export default MyWorks