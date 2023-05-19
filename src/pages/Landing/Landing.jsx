//Assets
import BostonDay from '../../assets/BostonDay.png'
import BostonNight from '../../assets/BostonNight.png'

// styling
import styles from './Landing.module.css'

const Landing = ({daytime}) => {

  return (
    <section 
      className={styles.container} 
      style={{ backgroundImage: `url(${daytime ? BostonDay : BostonNight})` }}
    >
      <h1 className={styles.header}>Hi, I'm Callum Nelson</h1>
      <h2 className={styles.subheader}>I'm a full-stack engineer living in London, raised in Boston</h2>
    </section>
  )
}

export default Landing