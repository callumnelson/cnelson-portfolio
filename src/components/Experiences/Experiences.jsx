// npm modules
import React from 'react'
import { Link } from 'react-router-dom'

// components
import ExperienceCard from '../ExperienceCard/ExperienceCard'

// data
import { experiences } from '../../data/experiences'

// styling
import styles from './Experiences.module.css'

const Experiences = () => {

  return (
    <>
      <Link id='experience'></Link>
      <section 
        id='experience'
        className={styles.container}
        >
        {experiences.map( (experience, idx) => (
          <React.Fragment key={idx}>
            {!(idx % 2) &&  
              <>
                <div></div>
                <div 
                  className={styles.timeline}
                >
                  <div className={styles.circle}></div>
                </div>
              </>
            }
            <ExperienceCard key={idx} content={experience}/>
            {!!(idx % 2) &&  
              <>
                <div 
                  className={styles.timeline}
                >
                  <div className={styles.circle}></div>
                </div>
                <div></div>
              </>
            }
          </React.Fragment>
        ))}
      </section>
    </>
  )
}

export default Experiences