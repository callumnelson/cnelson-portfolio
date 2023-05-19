// styling
import styles from './About.module.css'

const About = ({daytime}) => {

  return (
    <section 
      className={styles.container}
    >
      <div className={styles.header}>
        <h1>About</h1>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.about}>
        <p>Hi, I'm Callum. I'm a full-stack engineer living in London, born and raised in the greater Boston area. </p>
      </div>
    </section>
  )
}

export default About