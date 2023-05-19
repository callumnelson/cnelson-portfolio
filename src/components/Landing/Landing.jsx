// npm modules
import { HashLink } from 'react-router-hash-link'

// assets
import BostonDay from '../../assets/BostonDay.png'
import BostonNight from '../../assets/BostonNight.png'

// styling
import styles from './Landing.module.css'

const Landing = ({daytime, setSection}) => {

  return (
    <section 
      className={styles.container} 
      style={{ backgroundImage: `url(${daytime ? BostonDay : BostonNight})` }}
    >
      <div className={daytime ? styles.downDay : styles.downNight}>
        <HashLink smooth to={'/#about'}>
          <i 
            className="fa-solid fa-angle-down fa-2xl"
            onClick={() => setSection('about')}
          >

          </i>
        </HashLink>
      </div>
    </section>
  )
}

export default Landing