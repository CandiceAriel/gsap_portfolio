import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './WhatIDo.scss';

const WhatIDo = () => {
  const services = [
    {
      num: '// 001',
      title: 'FRONT-END DEV',
      desc: 'Vue, React, TypeScript, performant animations. From design tokens to deployed product — pixel-perfect execution with clean, maintainable code.'
    },
    {
      num: '// 002',
      title: 'BACK-END DEV',
      desc: 'SQL, No-SQL, API Integration, Database architecture & management.'
    },
    {
      num: '// 003',
      title: 'ILLUSTRATION',
      desc: "Character design, UI illustration, concept art. Editorial to game-ready. Style ranges from technical/flat to painterly/detailed."
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