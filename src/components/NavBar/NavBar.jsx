// modules
import { HashLink } from 'react-router-hash-link'

// components
import Footer from '../Footer/Footer'
import NameCard from '../NameCard/NameCard'

// styling
import styles from './NavBar.module.css'

const NavBar = ({section, scrollPosition, fullHeight}) => {
  
  return (
    <nav className={styles.navbar}>
      <NameCard />
      <div className={styles.menu}>
        <div 
          className={styles.progressBar}
          style={{height: `${scrollPosition/fullHeight*100}%`}}
        ></div>
        <div className={styles.destinations}>
          <HashLink smooth to={'/#about'}>
            <p className={section === 'about' ? styles.selected : ''}>About</p>
          </HashLink>
          <HashLink smooth to={'/#experience'}>
            <p className={section === 'experience' ? styles.selected : ''}>Experience</p>
          </HashLink>
          <HashLink smooth to={'/#portfolio'}>
            <p className={section === 'portfolio' ? styles.selected : ''}>Portfolio</p>
          </HashLink>
          <HashLink smooth to={'/#contact'}>
            <p className={section === 'contact' ? styles.selected : ''}>Contact</p>
          </HashLink>
        </div>
      </div>
      <Footer location={'nav'}/>
    </nav>
  )
}

export default NavBar