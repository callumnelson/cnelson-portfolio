// npm modules
import React from 'react'
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
          <React.Fragment key={idx}>
            <ExperienceCard key={idx} content={experience}/>
            {!(idx % 2) ? 
            idx < experiences.length - 2 ?
              <div className={styles.timeline}>
                <div className={styles.circle}></div>
              </div>
                :
              <div className={`${styles.timeline} ${styles.last}`}>
                <div className={styles.circle}></div>
              </div>
            :
              <></>
            }
          </React.Fragment>
        ))}
      </section>
    </>
  )
}

export default Experiences