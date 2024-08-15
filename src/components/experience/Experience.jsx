import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      <div className="experience__pl">
          <h4>Programming Languages</h4>
          <div className="experience__content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h5>C/C++</h5>
                <small className='text-light small-text'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h5>Java</h5>
                <small className='text-light small-text'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h5>JavaScript</h5>
                <small className='text-light small-text'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
              <h5>TypeScript</h5>
              <small className='text-light small-text'>Beginner</small>
             </div>
            </article>
          </div>
        </div>

        <div className="experience__databases">
          <h4>Databases</h4>
            <div className="experience__content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>MySql</h5>
                  <small className='text-light small-text'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>MongoDB</h5>
                  <small className='text-light small-text'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>Microsoft SQL</h5>
                  <small className='text-light small-text'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>

        <div className="experience__frontend">
          <h4>Frontend Technologies</h4>
          <div className="experience__content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h5>React JS</h5>
                <small className='text-light small-text'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h5>Angular JS</h5>
                <small className='text-light small-text'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h5>Bootstrap</h5>
                <small className='text-light small-text'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
              <h5>Material-UI</h5>
              <small className='text-light small-text'>Intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
              <h5>Tailwind CSS</h5>
              <small className='text-light small-text'>Intermediate</small>
             </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h4>Backend Technologies</h4>
            <div className="experience__content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>Node JS</h5>
                  <small className='text-light small-text'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>Express JS</h5>
                  <small className='text-light small-text'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>Hibernate</h5>
                  <small className='text-light small-text'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>Spring</h5>
                  <small className='text-light small-text'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>Spring Boot</h5>
                  <small className='text-light small-text'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h5>ASP.Net Web API</h5>
                <small className='text-light small-text'>Beginner</small>
               </div>
              </article>
            </div>
          </div>

          <div className="experience__protocols">
          <h4>Protocols</h4>
            <div className="experience__content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>REST API</h5>
                  <small className='text-light small-text'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>WebSocket</h5>
                  <small className='text-light small-text'>Beginner</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__developerTools">
          <h4>Developer Tools</h4>
            <div className="experience__content">
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>Git</h5>
                  <small className='text-light small-text'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h5>GitHub</h5>
                  <small className='text-light small-text'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Experience