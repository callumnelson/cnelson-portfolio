// npm modules
import { HashLink } from 'react-router-hash-link'

// assets
import bostonDay from '../../assets/images/bostonDay.png'
import bostonNight from '../../assets/images/bostonNight.png'

// styling
import styles from './Landing.module.css'

const Landing = ({daytime, setSection}) => {

  return (
    <section 
      className={styles.container} 
      style={{ backgroundImage: `url(${daytime ? bostonDay : bostonNight})` }}
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