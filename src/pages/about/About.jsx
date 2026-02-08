import React from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import Info from '../../components/Info'
import CV from '../../pdf/sivlin_cv.pdf'
import { skilldesign, skillfront, skillback, skillteach, skillothers } from '../../Data'
import SkillsItem from '../../components/SkillsItem'
import { resume } from '../../Data'
import { ResumeItem } from '../../components/ResumeItem'
import { certifications } from '../../Data'
import Stats from '../../components/Stats'
import './about.css'
import CertificateItem from '../../components/CertificationItem'

//rafce
const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>

            <ul className="info-list grid">
              <Info />
            </ul>

            <a href={CV} download='' className='button'>
              Download CV 
              <span className="button-icon">
                <RiDownload2Fill />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">My Skills</h3>

        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">Frontend Developer</h3>

            <div className="skills-items grid">
              {skillfront.map((val) => (
                <SkillsItem key={val.id} {...val} />
                ))}
            </div>
          </div>

          <div className='skills-group'>
            <h3 className='skills-title'>Backend Developer</h3>

            <div className='skills-items grid'>
                {skillback.map((val) => (
                    <SkillsItem key={val.id} {...val} />
                ))}
            </div>
          </div>

          <div className='skills-group'>
            <h3 className='skills-title'>Web Designer</h3>

            <div className='skills-items grid'>
              {skilldesign.map((val) => (
                    <SkillsItem key={val.id} {...val} />
                  ))}
            </div>
          </div>

          <div className='skills-group'>
            <h3 className='skills-title'>Teacher/Educator</h3>

            <div className='skills-items grid'>
              {skillteach.map((val) => (
                    <SkillsItem key={val.id} {...val} />
                  ))}
            </div>
          </div>

          <div className='skills-group'>
            <h3 className='skills-title'>Others</h3>

            <div className='skills-items grid'>
              {skillothers.map((val) => (
                  <SkillsItem key={val.id} {...val} />
                ))}
            </div>
          </div>
        </div>

      </section>

      <div className='separator'></div>
      
      <section className='resume'>
        <h3 className='section-subtitle subtitle-center'>
          Experience & Education
        </h3>

        <div className='resume-container grid'>

          {/* Experience  */}
          <div className="resume-column">
            <h4 className="resume-column-title">Experience</h4>
            <div className="resume-group grid">
              {resume.map((val) => {
                if (val.category === 'experience') {
                  return <ResumeItem key={val.id} {...val} />
                }
              })}
            </div>
          </div>

          {/* Training & Social Experience */}
          <div className="resume-column">
            <h4 className="resume-column-title">Training & Social Experience</h4>
            <div className="resume-group grid">
              {resume
                .filter((val) => val.category === 'training')
                .map((val) => (
                  <ResumeItem key={val.id} {...val} />
                ))}
            </div>
          </div>
          
          {/* Education  */}
          <div className="resume-column">
            <h4 className="resume-column-title">Education</h4>
            <div className='resume-group grid'>
              {resume.map((val) => {
                if(val.category === 'education'){
                  return <ResumeItem key={val.id} {...val} />
                }
              })}
            </div>
          </div>

          
        </div>
      </section>


      <div className='separator'></div>
      
      <section className='certifications'>
        <h3 className='section-subtitle subtitle-center'>
          Certifications
        </h3>

        <CertificateItem />
      </section>
    </main>
  )
}

export default About