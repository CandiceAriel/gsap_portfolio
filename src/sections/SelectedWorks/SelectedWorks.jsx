import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Float, Loader } from '@react-three/drei';
import Experience from '../../components/Experience';
import SectionTitle from '../../components/SectionTitle/SectionTitle'

import './SelectedWorks.scss';

const SelectedWorks = () => {
  return (
    <section id="myWork" className="selected-works">
      <div className="selected-works__wrapper">
        <SectionTitle number="02" title="Selected Work"/>
        <div className="selected-works__canvas-container">
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