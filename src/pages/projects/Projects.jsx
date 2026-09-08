import { useState } from 'react'
import { projects } from "../../Data"
import './projects.css'
import { RiLink } from 'react-icons/ri'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

//rafce
const Projects = () => {
  return (
    <section className='projects section'>
      <h2 className='section-title'>
        My <span>Projects</span>
      </h2>

      <div className='projects-container container grid'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0)
  const total = project.images.length

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1)
  }

  return (
    <article className='projects-card'>
      <div className='projects-img-wrapper'>
        <img
          src={project.images[current]}
          alt={project.title}
          className='projects-img'
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

      <h3 className="projects-title">{project.title}</h3>
      <p className="projects-description">{project.description}</p>

      <br />
      {/* <div className='projects-skills'>
        {project.skills.map((skill, index) => (
          <img src={skill} className='projects-skill' key={index} />
        ))}
      </div> */}

      {project.link && (
        <a href={project.link} className='projects-link' target="_blank">
          <RiLink className='link-icon' />
          Visit Project
        </a>
      )}
    </article>
  )
}

export default Projects
