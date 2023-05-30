// npm modules
import { Link } from 'react-router-dom'

// components
import Screenshot from '../Screenshot/Screenshot'
import Icon from '../Icon/Icon'

// css
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <header>
        <h1>{project.title}</h1>
      </header>
      <p>{project.description}</p>
      <div className={styles.body}>
        <Screenshot category={project.screenshot} />
        <div className={styles.info}>
          <div className={styles.stack}>
            {project.technologies.map((tech, idx) => (
              <div key={idx}>
                <Icon category={tech} key={idx} />
                <p>{tech}</p>
              </div>
            ))}
          </div>
          <div className={styles.links}>
            <Link to={project.githubLink} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github fa-xl"></i>
              <p>View on GitHub</p>
            </Link>
            <Link to={project.deployedLink} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-globe fa-xl"></i>
              <p>Visit deployed site</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
