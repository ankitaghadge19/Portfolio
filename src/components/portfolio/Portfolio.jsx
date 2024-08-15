import React from "react";
import "./portfolio.css";
import img1 from "../../assets/FlightMgmt.png";
import img2 from "../../assets/SmartBookSwap.png";
import img3 from "../../assets/MERN-ChatApp.png";
import img4 from "../../assets/NewsMonkey.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "Flight Management System",
    github: "https://github.com/ankitaghadge19/Flight-Booking-System",
  },
  {
    id: 2,
    image: img2,
    title: "SmartBookSwap",
    github: "https://github.com/ankitaghadge19/SmartBookSwap",
  },
  {
    id: 3,
    image: img3,
    title: "MERN-ChatApp",
    github: "https://github.com/ankitaghadge19/MERN-Chat-App",
  },
  {
    id: 4,
    image: img4,
    title: "News Monkey Website",
    github: "https://github.com/ankitaghadge19/NewsMonkey-React-App",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
