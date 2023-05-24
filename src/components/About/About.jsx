// npm modules
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// components
import SectionHeader from '../SectionHeader/SectionHeader'

// styling
import styles from './About.module.css'

const About = ({daytime}) => {

  return (
    <section 
      id='about'
      className={styles.container}
    >
      <div className={daytime ? styles.downDay : styles.downNight}>
        <HashLink smooth to={'/#about'}>
          <i 
            className="fa-solid fa-angle-down fa-2xl"
          >
          </i>
        </HashLink>
      </div>
      <SectionHeader sectionName={'About Me'} />
      <Link id='about'></Link>
      <div className={styles.about}>
        <p>Hi, I'm Callum. I'm a full-stack developer living in London, born and raised in the greater Boston area. I am a former teacher, data analyst, and education resource equity consultant with expertise in data analysis, project planning, and team management in a highly collaborative environment. Now, I build tools that empower leaders with timely and actionable insights.</p>
        <button>Let's Connect</button>
      </div>
    </section>
  )
}

export default About