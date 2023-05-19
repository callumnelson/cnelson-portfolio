// modules
import { Link } from 'react-router-dom'

// Components & Assets
import Headshot from '../../assets/headshot.png'
import Clock from '../Clock/Clock'

// styling
import styles from './NavBar.module.css'

const NavBar = ({setDaytime}) => {
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>
        <img src={ Headshot } alt="Callum Nelson Headshot" />
        <h1>Callum</h1>
        <h1>Nelson</h1>
      </div>
      <div className={styles.destinations}>
        <p>About</p>
        <p>Resume</p>
        <p>Portfolio</p>
        <Clock setDaytime={setDaytime}/>
      </div>
      <div className={styles.footer}>
        <Link to="https://github.com/callumnelson" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github fa-xl"></i>
        </Link>
        <Link to="mailto:callum.nelson95@gmail.com" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-envelope fa-xl"></i>
        </Link>
        <Link to="https://www.linkedin.com/callum-nelson" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar