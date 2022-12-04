import React from 'react'
import './portfolio.css'
import img1 from '../../assets/BankingWebsite.png'
import img2 from '../../assets/ResumeBuilder.png'
import img3 from '../../assets/SpotifyClone.png'
import img4 from '../../assets/TextUtils.png'
import img5 from '../../assets/NewsMonkey.png'
import img6 from '../../assets/ToDoList.png'
import img7 from '../../assets/WeatherForecast.png'
import img8 from '../../assets/BookRegistration.png'

const data =[
  {
    id: 1,
    image: img1,
    title: 'Basic Banking Website',
    github: 'https://github.com/ankitaghadge19/BasicBankingSystem'
  },
  {
    id: 2,
    image: img2,
    title: 'Resume Builder Website',
    github: 'https://github.com/ankitaghadge19/ResumeBuilder'
  },
  {
    id: 3,
    image: img3,
    title: 'Spotify Clone Website',
    github: 'https://github.com/ankitaghadge19/Spotify-Clone'
  },
  {
    id: 4,
    image: img4,
    title: 'Text-Utils Website',
    github: 'https://github.com/ankitaghadge19/TextUtils-reactjs'
  },
  {
    id: 5,
    image: img5,
    title: 'Monkey News Website',
    github: 'https://github.com/ankitaghadge19/NewsApp-reactjs'
  },
  {
    id: 6,
    image: img7,
    title: 'Weather Forecast Website',
    github: 'https://github.com/ankitaghadge19/WeatherApp-reactjs'
  },
  {
    id: 8,
    image: img8,
    title: 'Book Registration Website',
    github: 'https://github.com/ankitaghadge19/Book-Registration-Website'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">


       {
        data.map(({id, image, title, github}) =>{
          return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
          )
        })
       }



      </div>
    </section>
  )
}

export default Portfolio