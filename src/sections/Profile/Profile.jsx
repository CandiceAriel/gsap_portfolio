import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Profile.scss';

const Profile = () => {
  const skills = [
    { name: 'React / TypeScript', level: 92 },
    { name: 'CSS / Animation', level: 95 },
    { name: 'GSAP / Motion', level: 80 },
    { name: 'Illustration / Concept', level: 88 },
    { name: 'Figma / Design Systems', level: 85 },
  ];

  return (
    <section id="profile">
      <div className="profile__wrapper flex flex-col justify-end">
        <SectionTitle number="01" title="Profile"/>
        <div className="profile__content flex flex-row">
          <div className="profile__content-left w-1/2 flex flex-row">
            <p>I build things <br />
            that <span className="text-yellow">don't look</span> <br />
            like templates. </p>
          </div>
          <div className="profile__content-right w-1/2 flex flex-col justify-between">
            <p>
              Front-end developer with a visual arts background. I bridge the gap between designers who can't code and developers who can't design — shipping production-ready interfaces that actually spark something.
            </p>
            <p>
              When I'm not in the codebase I'm illustrating — character design, concept art, UI illustration. Two disciplines, one obsession with craft.
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