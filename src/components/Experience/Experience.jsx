// npm modules
import { Link } from 'react-router-dom'

// components
import ExperienceCard from '../ExperienceCard/ExperienceCard'

// styling
import styles from './Experience.module.css'

const Resume = ({daytime}) => {
  const contents = [{},
    {
      organization: 'Education Resource Strategies',
      role: 'Principal Associate',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci quas eveniet tenetur doloremque quae eum quidem quos, quisquam earum, repellat esse nisi unde, obcaecati magnam aliquam labore accusamus ad!',
      start: 2020,
      end: 2023
    },
    {
      organization: 'Brown University',
      role: 'Principal Associate',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci quas eveniet tenetur doloremque quae eum quidem quos, quisquam earum, repellat esse nisi unde, obcaecati magnam aliquam labore accusamus ad!',
      start: 2020,
      end: 2023
    },
    {},
  ]

  return (
    <>
      <Link id='experience'></Link>
      <section 
        id='experience'
        className={styles.container}
        >
        <ExperienceCard content={contents[0]} />
        <div className={styles.timeline}>
          <div className={styles.circle}></div>
        </div>
        <ExperienceCard content={contents[1]} />

        <ExperienceCard content={contents[2]} />
        <div className={styles.timeline}>
          <div className={styles.circle}></div>
        </div>
        <ExperienceCard content={contents[3]} />

        <ExperienceCard content={contents[0]} />
        <div className={styles.timeline}>
          <div className={styles.circle}></div>
        </div>
        <ExperienceCard content={contents[1]} />

        <ExperienceCard content={contents[2]} />
        <div className={styles.timeline}>
          <div className={styles.circle}></div>
        </div>
        <ExperienceCard content={contents[3]} />
      </section>
    </>
  )
}

export default Resume