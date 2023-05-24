// npm modules
import { Link } from "react-router-dom"

// components
import ProjectCard from "../ProjectCard/ProjectCard"
import SectionHeader from "../SectionHeader/SectionHeader"

// css
import styles from './Portfolio.module.css'

// data
import { projects } from "../../data/projects"

const Portfolio = () => {
  return (
    <section 
      className={styles.container}
    >
      <Link id='portfolio'></Link>
      <SectionHeader sectionName={'Portfolio'} />
      <div 
        className={styles.projects}
        >
        {projects.map( (project, idx) => (
          <ProjectCard project={project} key={idx}/>
        ))}
      </div>
    </section>
  )
}
 
export default Portfolio