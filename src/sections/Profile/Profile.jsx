import React from 'react'
import gsap from 'gsap';

import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Profile.scss';
import { useScrollToNext } from "../../hooks/useScrollToNext";

const Profile = ({nextRef}) => {
  const ref = useScrollToNext(nextRef);
  const skills = [
    { name: 'HTML / CSS', level: 85 },
    { name: 'Vue / Javascript', level: 80 },
    { name: 'React / TypeScript', level: 80 },
    { name: 'GSAP / Animation', level: 80 },
    { name: 'SQL / DB', level: 80 },
    { name: 'SQL Databases', level: 75 },
    { name: 'NoSQL Databases', level: 75 },
    { name: 'Illustration / Concept', level: 80 }
  ];

  return (
    <section ref={ref} id="profile">
      <div className="profile__wrapper flex flex-col justify-end">
        <SectionTitle number="01" title="Profile"/>
        <div className="profile__content flex flex-row md:">
          <div className="profile__content-left flex flex-row md:w-1/2">
            <p>I build things <br />
            that <span className="text-yellow">don't look</span> <br />
            like templates. </p>
          </div>
          <div className="profile__content-right flex flex-col md:w-1/2">
            <p>
              Front-end developer with a visual arts background. I bridge the gap between designers who can't code and developers who can't design — shipping production-ready interfaces that actually spark something.
            </p>
            <div className="profile__skills">
              {skills.map((skill, index) => (
                <div key={index} className="profile__skills-item">
                  
                  {/* 1. Skill Name */}
                  <span className="profile__skills-name">{skill.name}</span>
                  
                  {/* 2. The Progress Bar Track */}
                  <div className="profile__skills-track">
                    <div 
                      className="profile__skills-bar" 
                      style={{ width: `${skill.level}%` }} 
                    />
                  </div>
                  
                  {/* 3. Percentage Number */}
                  <span className="profile__skills-level">{skill.level}</span>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Profile