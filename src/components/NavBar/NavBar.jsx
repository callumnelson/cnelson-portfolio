// modules
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

// Components & Assets
import headshot from '../../assets/images/headshot.png'

// styling
import styles from './NavBar.module.css'

const NavBar = ({section, scrollPosition, fullHeight}) => {
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>
        <img src={ headshot } alt="Callum Nelson Headshot" />
        <h1>Callum</h1>
        <h1>Nelson</h1>
      </div>
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
      <div className={styles.footer}>
        <Link to="https://github.com/callumnelson" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github fa-xl"></i>
        </Link>
        <Link to="mailto:callum.nelson95@gmail.com" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-envelope fa-xl"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/callum-nelson/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </Link>
        <Link to="https://docs.google.com/document/d/1TnQtn5dfgpeaexHJMzqC55XDiOAJKQeYs6MKgJAkLdc/edit?usp=sharing" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-file-lines fa-xl"></i>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar