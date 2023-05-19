// npm modules
import { Link } from 'react-router-dom'

// components
import ExperienceCard from '../ExperienceCard/ExperienceCard'

// data
import { experiences } from '../../data/experiences'

// styling
import styles from './Experiences.module.css'

const Experiences = ({daytime}) => {

  return (
    <>
      <Link id='experience'></Link>
      <section 
        id='experience'
        className={styles.container}
        >
        {experiences.map( (experience, idx) => (
          <>
            <ExperienceCard content={experience}/>
            {!(idx % 2) &&
            <div className={styles.timeline}>
              <div className={styles.circle}></div>
            </div>
            }
          </>
        ))}
      </section>
    </>
  )
}

export default Experiences