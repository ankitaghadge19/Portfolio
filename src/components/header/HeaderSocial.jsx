import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ankita-ghadge-8438b1203" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ankitaghadge19" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/ankita_ghadge19?t=cOT4rx3jba80LuOmOkrBwg&s=09" target="_blank"><FaTwitterSquare/></a>
    </div>
  )
}

export default HeaderSocial