import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiSkills} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward class='about__icon'/>
              <h5>Experience</h5>
              <small>Intern at Spark Foundation</small>
            </article>
            <article className='about__card'>
              <FiUsers class='about__icon'/>
              <h5>Academic GPA</h5>
              <small>8.98 SGPA(2nd Year)</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary class='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
        </div>

        <p>
        I am a student of Third Year pursuing Bachelor's Degree in Computer Science under Savitribai Phule Pune University at Dr. D. Y. Patil Institute of Technology Pimpri, Pune.   
        </p>

        <p>
        Currently I am looking for Internship opportunities where I can apply my knowledge practically and can get a industrial experience.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

        

      </div>
    </section>
  )
}

export default About