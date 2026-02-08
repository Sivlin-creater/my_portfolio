import { useState } from 'react'
import { portfolio } from "../../Data"
import './portfolio.css'
import { RiLink } from 'react-icons/ri'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

//rafce
const Portfolio = () => {
  return (
    <section className='portfolio section'>
      <h2 className='section-title'>
        My <span>Portfolio</span>
      </h2>

      <div className='portfolio-container container grid'>
        {portfolio.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

const PortfolioCard = ({ project }) => {
  const [current, setCurrent] = useState(0)
  const total = project.images.length

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1)
  }

  return (
    <article className='portfolio-card'>
      <div className='portfolio-img-wrapper'>
        <img
          src={project.images[current]}
          alt={project.title}
          className='portfolio-img'
        />

        {total > 1 && (
          <>
            <button className='slide-btn left' onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <button className='slide-btn right' onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      <h3 className="portfolio-title">{project.title}</h3>
      <p className="portfolio-description">{project.description}</p>

      <div className='portfolio-skills'>
        {project.skills.map((skill, index) => (
          <img src={skill} className='portfolio-skill' key={index} />
        ))}
      </div>

      {project.link && (
        <a href={project.link} className='portfolio-link' target="_blank">
          <RiLink className='link-icon' />
          Visit Project
        </a>
      )}
    </article>
  )
}

export default Portfolio