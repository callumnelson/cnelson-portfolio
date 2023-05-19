// npm modules
import { Link } from "react-router-dom"

// components
import ProjectCard from "../ProjectCard/ProjectCard"

// css
import styles from './Portfolio.module.css'

// data
import { projects } from "../../data/projects"

const Portfolio = () => {
  return (
    <>
      <Link id='portfolio'></Link>
      <section 
        id='portfolio'
        className={styles.container}
        >
        {projects.map( (project, idx) => (
          <ProjectCard project={project} key={idx}/>
        ))}
      </section>
    </>
  )
}
 
export default Portfolio