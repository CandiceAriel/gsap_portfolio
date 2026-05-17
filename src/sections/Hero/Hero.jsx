import React, { Suspense, useRef } from 'react';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Float, Loader } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { TextPlugin, SplitText } from 'gsap/all';

import { useScrollToNext } from "../../hooks/useScrollToNext";
import './Hero.scss';

const Hero = ({nextRef}) => {
  const ref = useScrollToNext(nextRef);
  const containerRef = useRef(null);

   // Split your name into individual characters
  const line1 = "HI, I'M ".split("");
  const line2 = "CANDICE".split("");

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
    tl.to(".cursor", {
      opacity: 0,
      repeat: 4,
      yoyo: true,
      duration: 0.3,
      ease: "none",
    }).to(".cursor", {
      opacity: 0,
      duration: 0.2,
    });
  }, { scope: containerRef });

  return (
    <section ref={ref} id="hero" className="w-full h-dvh box-border flex flex-col justify-end px-page-wide py-xl" >
      <div className="hero__wrapper flex flex-col">
        <div className="hero__content-top flex flex-col pb-md gap-[1.25rem] md:flex-row">
          <div className="w-full flex flex-col md:w-3/5">
            <p className="hero__tag text-left">-  Front-end dev & Illustrator</p>
            <div className="hero__name text-left" ref={containerRef}>
              {/* Line 1 */}
              <p className="hero__name-line1">
                {line1.map((char, i) => (
                  <span key={i} className="char-line1 inline-block">
                    {char}
                  </span>
                ))}
              </p>
              {/* Line 2 — yellow */}
              <span className="hero__name-line2">
                {line2.map((char, i) => (
                  <span key={i} className="char-line2 inline-block">
                    {char}
                  </span>
                ))}

                {/* Blinking cursor after last char */}
                <span className="cursor" style={{
                  display: "inline-block",
                  width: "3px",
                  height: "0.8em",
                  background: "var(--yellow)",
                  marginLeft: "6px",
                  verticalAlign: "middle",
                }} />
              </span>

            </div>
          </div>
          <div className="w-full flex flex-col md:w-2/5 justify-end">
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