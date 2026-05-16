import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Float, Loader } from '@react-three/drei';
import Experience from '../components/Experience';
import { Leva } from 'leva';

const MyWorks = () => {
  return (
    <section id="myWork" className="h-screen w-full bg-[url(/images/HeroBg.jpg)]  bg-cover bg-center">
      <div className="h-full w-full">
        <Leva />
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </section>
  )
}

export default MyWorks