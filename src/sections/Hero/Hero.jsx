import React, { Suspense, useRef } from 'react';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Float, Loader } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { TextPlugin, SplitText } from 'gsap/all';

import { useScrollToNext } from "../../hooks/useScrollToNext";
import './Hero.scss';
import heroBg from '/images/hero_bg.png';

const Hero = ({nextRef}) => {
  const ref = useScrollToNext(nextRef);
  const containerRef = useRef(null);

   // Split your name into individual characters
  const line1Part1 = "FRONT-END".split("");
  const line1Part2 = "DEVELOPER".split("");
  const line2 = "ILLUSTRATOR".split("");

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.6 });

    // 1. Fade up the whole block first
    tl.from(containerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    // 2. Type line 1 — each char fades + slides in
    tl.from(".char-line1", {
      opacity: 0,
      stagger: 0.08,
      duration: 0.01, // nearly instant per char
      ease: "none",
    });

    // 3. Type line 2 (yellow) — slightly faster
    tl.from(
      ".char-line2",
      {
        opacity: 0,
        stagger: 0.08,
        duration: 0.01, // nearly instant per char
        ease: "none",
      },
      
    );

    // 4. Cursor blink then fade out
    // tl.to(".cursor", {
    //   opacity: 0,
    //   repeat: -1,
    //   yoyo: true,
    //   duration: 0.3,
    //   ease: "none",
    // }).to(".cursor", {
    //   opacity: 0,
    //   duration: 0.2,
    // });
  }, { scope: containerRef });

  return (
    <section ref={ref} id="hero" className="w-full h-dvh box-border relative flex flex-col justify-end px-page-wide py-xl" >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply pointer-events-none" 
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="hero__wrapper flex flex-col">
        <div className="hero__content-top flex flex-col pb-md gap-[1.25rem] md:flex-row">
          <div className="w-full flex flex-col md:w-4/5">
            {/* <p className="hero__tag text-left">Front-end developer</p>
            <p className="hero__tag-outlined text-left">Illustrator</p> */}
            <div className="hero__tag text-left" ref={containerRef}>
              {/* Line 1 — Front-End Developer */}
              <p className="hero__tag-line1 block leading-none font-heading font-black tracking-tighter text-5xl md:text-8xl">
                {line1Part1.map((char, i) => (
                  <span key={`l1p1-${i}`} className="char-line1 inline-block">
                    {char}
                  </span>
                ))}
                <br />
                {line1Part2.map((char, i) => (
                  <span key={`l1p2-${i}`} className="char-line1 inline-block">
                    {char}
                  </span>
                ))}
              </p>

              {/* Line 2 — Illustrator (Changed from span to div) */}
              <div className="hero__tag-line2 block leading-none mt-2 font-display text-5xl md:text-8xl">
                {line2.map((char, i) => (
                  <span key={`l2-${i}`} className="char-line2 inline-block text-transparent">
                    {char}
                  </span>
                ))}

                {/* The Blinking Cursor */}
                {/* <span className="cursor inline-block w-[30px] h-[2px] bg-black ml-1.5 align-baseline" /> */}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:w-1/5 justify-end">
            <p className="hero__corner_label text-left md:text-right">Region <strong>Asia / SEA</strong></p>
            <p className="hero__corner_label text-left md:text-right">Stack <strong>Vue · React · TS · GSAP</strong></p>
            <p className="hero__corner_label text-left md:text-right">Also <strong>Back-End Dev · Illustration</strong></p>
            <p className="hero__corner_label text-left md:text-right">Status <strong className="text-yellow">Available</strong></p>
          </div>
        </div>
        <p className="hero__desc text-left">Building interfaces that feel alive — <br/> where code meets craft and every pixel has a purpose.</p>
      </div>
   
    </section>
  )
}

export default Hero