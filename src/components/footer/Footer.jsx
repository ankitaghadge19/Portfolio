import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ankita Ghadge</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Academics</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ankita-ghadge-8438b1203" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ankitaghadge19" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/ankita_ghadge19?t=cOT4rx3jba80LuOmOkrBwg&s=09" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ankita Ghadge. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer