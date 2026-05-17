import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Float, Loader } from '@react-three/drei';
import Experience from '../../components/Experience';
import SectionTitle from '../../components/SectionTitle/SectionTitle'

import './SelectedWorks.scss';

const SelectedWorks = () => {
  return (
    <section id="selected-works" className="selected-works flex flex-col">
      <div className="selected-works__wrapper grow-1 flex flex-col md:gap-md">
        <SectionTitle number="02" title="Selected Work"/>
        <div className="selected-works__canvas-container grow-1">
          {/* <Leva /> */}
          <Canvas>
            <Experience />
          </Canvas>
        </div>
      </div>
     
    </section>
  )
}

export default SelectedWorks