import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';

import Hero from './sections/Hero/Hero'
import Profile from './sections/Profile/Profile'
import SelectedWorks from './sections/SelectedWorks/SelectedWorks'
import WhatIDo from './sections/WhatIDo/WhatIDo'
import Home from './pages/Home'

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
      <Home />
    </main>
    
  )
}

export default App