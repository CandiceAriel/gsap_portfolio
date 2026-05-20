import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero from '../sections/Hero/Hero'
import Profile from '../sections/Profile/Profile'
import SelectedWorks from '../sections/SelectedWorks/SelectedWorks'
import WhatIDo from '../sections/WhatIDo/WhatIDo'

const Home = () => {
  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero nextRef={sec2} />
      <Profile ref={sec2} nextRef={sec3} />
      {/* <SelectedWorks/> */}
      <WhatIDo/>
      {/* <Works /> */}
    </div>
  );
  
}

export default Home