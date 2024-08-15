import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from'../../assets/p.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ankita Ghadge</h1>
        <h3 className="text-light">Full-Stack Developer</h3> 
        <CTA/>
        {/* <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="profile"/>
        </div> 

        <a href="#contact" className='scroll__down'>Scroll Down</a> */}

       
      </div>
    </header>
  )
}

export default Header