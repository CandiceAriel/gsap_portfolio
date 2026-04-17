import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Float, Loader } from '@react-three/drei';
import Experience from '../components/Experience';

const MyWorks = () => {

  return (
    <section id="myWork" className="h-screen w-full">
      <div className="h-full w-full">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </section>
  )
}

export default MyWorks