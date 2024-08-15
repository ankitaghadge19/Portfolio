import React from 'react'
import './about.css'
import ME from '../../assets/AnkitaGhadge.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiSkills} from 'react-icons/gi'
import { FaGraduationCap } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

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
              <FaGraduationCap className='about__icon'/>
              <h5>Specialization</h5>
              <small>Computer Engineer</small><br/>
              <small>9.34 CGPA</small>
            </article>
            <article className='about__card'>
              <FaAward class='about__icon'/>
              <h5>Experience</h5>
              <small>Intern @Hexaware Technologies</small>
            </article>
            <article className='about__card'>
              <IoShieldCheckmark class='about__icon'/>
              <h5>Top Skills</h5>
              <small>MERN Stack</small><br/>
              <small>Java (Core & Advanced)</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary class='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
            
        </div>

        <p>
        Hi! I'm Ankita Ghadge, a passionate Full-Stack Developer dedicated to building innovative solutions with emerging technologies. With hands-on experience in developing diverse web applications, I am committed to continuous learning and actively contributing to make a positive impact in this digital world.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

        

      </div>
    </section>
  )
}

export default About