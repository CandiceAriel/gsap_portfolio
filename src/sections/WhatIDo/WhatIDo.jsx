import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './WhatIDo.scss';

const WhatIDo = () => {
  const services = [
    {
      num: '// 001',
      title: 'FRONT-END DEV',
      desc: 'Crafting responsive, high-performance web interfaces with Vue, React, and TypeScript. Specializing in fluid motion design and pixel-perfect execution, bridging the gap between raw concept and semantic, maintainable code.'
    },
    {
      num: '// 002',
      title: 'BACK-END DEV',
      desc: 'Building scalable, secure server-side foundations. Experienced in API orchestration, robust database architecture, and seamless integrations across both SQL and NoSQL ecosystems.'
    },
    {
      num: '// 003',
      title: 'ILLUSTRATION',
      desc: "Bringing ideas to life through character design, UI assets, and concept art. Adapting seamlessly from sharp, technical flat vectors to deeply layered, painterly aesthetics for editorial or interactive digital media."
    }
  ];

  return (
    <section id="what-i-do" className="what-i-do">
      <div className="what-i-do__wrapper">
        <SectionTitle number="03" title="What I Do"/>
        <div className="what-i-do__grid flex flex-row">
            {services.map((service, index) => (
            <div key={index} className="what-i-do__card">
              
              {/* Card Meta Number */}
              <span className="what-i-do__card-number">{service.num}</span>
              
              {/* 3D-Style Hexagon Icon Element */}
              <div className="what-i-do__card-icon-wrap">
                <div className="what-i-do__card-icon-bracket what-i-do__card-icon-bracket--left">|</div>
                <div className="what-i-do__card-icon-hex" />
                <div className="what-i-do__card-icon-bracket what-i-do__card-icon-bracket--right">|</div>
              </div>

              {/* Title and Description */}
              <h3 className="what-i-do__card-title">{service.title}</h3>
              <p className="what-i-do__card-desc">{service.desc}</p>
              
            </div>
          ))}
        </div>
      </div>
     
    </section>
  )
}

export default WhatIDo