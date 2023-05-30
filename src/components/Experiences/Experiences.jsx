// npm modules
import React from 'react'
import { Link } from 'react-router-dom'

// components
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import SectionHeader from '../SectionHeader/SectionHeader'

// data
import { experiences } from '../../data/experiences'

// styling
import styles from './Experiences.module.css'

const Experiences = () => {
  return (
    <section className={styles.container}>
      <Link id="experience"></Link>
      <SectionHeader sectionName={'Experience'} />
      <div className={styles.experiences}>
        {experiences.map((experience, idx) => (
          <React.Fragment key={idx}>
            {!(idx % 2) && (
              <>
                <div></div>
                <div className={idx < experiences.length - 1 ? styles.timeline : styles.last}>
                  <div className={styles.circle}></div>
                </div>
              </>
            )}
            <ExperienceCard key={idx} content={experience} />
            {!!(idx % 2) && (
              <>
                <div className={idx < experiences.length - 1 ? styles.timeline : styles.last}>
                  <div className={styles.circle}></div>
                </div>
                <div></div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Experiences
