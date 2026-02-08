import React from 'react'
import Profile from '../../assets/wildanimal.jpg'
import { Link } from 'react-router'
import { RiArrowLeftSLine } from 'react-icons/ri'
import './home.css'

//rafce
const Home = () => {
  return (
    <section className='home-container grid'>
      <img src={Profile} alt="profile" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">I'm <span>Chhay Sivlin</span>
          <br />A Passionate Developer & Educator
        </h1>

        <p className="home-description">
          I design and develop innovative web applications while sharing knowledge through teaching and mentorship. 
          With experience as a computer and Chinese teacher, combined with programming, web development, 
          and digital design skills, 
          I create impactful solutions and help others learn and grow along the way.
        </p>

        <Link to="/about" className='button'>
          More About Me
          <span className='button-icon'>
            <RiArrowLeftSLine />
          </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  )
}

export default Home