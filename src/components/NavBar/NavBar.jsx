// Components & Assets
import Headshot from '../../assets/headshot.png'
import Clock from '../Clock/Clock'

// styling
import styles from './NavBar.module.css'

const NavBar = ({setDaytime}) => {
  
  return (
    <nav className={styles.navbar}>
      <img src={ Headshot } alt="Callum Nelson Headshot" />
      <h1>Callum Nelson</h1>
      <p>About</p>
      <p>Resume</p>
      <p>Portfolio</p>
      <Clock setDaytime={setDaytime}/>
    </nav>
  )
}

export default NavBar