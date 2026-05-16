import React, { Suspense, useRef } from 'react';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Float, Loader } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { TextPlugin, SplitText } from 'gsap/all';

import './Hero.scss';

const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 768});
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
    <section id="hero" className="hero flex flex-col justify-end">
      <div className="hero__content-top flex flex-row">
        <div className="w-3/5 flex flex-col">
          <p className="hero__tag text-left">---  Front-end dev & Illustrator</p>
          <h1 className="title hero__name text-left"  ref={containerRef}>
            {/* Line 1 */}
            <span className="line">
              {line1.map((char, i) => (
                <span key={i} className="char-line1" style={{ display: "inline-block" }}>
                  {char}
                </span>
              ))}
            </span>
            <br/>
            {/* Line 2 — yellow */}
            <em>
              {line2.map((char, i) => (
                <span key={i} className="char-line2" style={{ display: "inline-block" }}>
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
            </em>

          </h1>
        </div>
        <div className="w-2/5 flex flex-col justify-end">
          <p className="hero__corner_label text-right">Region <strong>Asia / SEA</strong></p>
          <p className="hero__corner_label text-right">Stack <strong>React · TS · GSAP</strong></p>
          <p className="hero__corner_label text-right">Also <strong>Back-End Dev · Illustration</strong></p>
          <p className="hero__corner_label text-right">Status <strong className="text-yellow">Available</strong></p>
        </div>
      </div>
      <p className="hero__desc text-left">Building interfaces that feel alive — <br/> where code meets craft and every pixel has a purpose.</p>
    </section>
  )
}

export default Hero