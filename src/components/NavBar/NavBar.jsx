// modules
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

// Components & Assets
import Headshot from '../../assets/headshot.png'

// styling
import styles from './NavBar.module.css'

const NavBar = () => {
  const [section, setSection] = useState('landing')
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>
        <img src={ Headshot } alt="Callum Nelson Headshot" />
        <h1>Callum</h1>
        <h1>Nelson</h1>
      </div>
      <div className={styles.destinations}>
        <HashLink smooth to={'/#about'} onClick={() => setSection('about')}>
          <p className={section === 'about' ? styles.selected : ''}>About</p>
        </HashLink>
        <HashLink smooth to={'/#experience'} onClick={() => setSection('experience')}>
          <p className={section === 'experience' ? styles.selected : ''}>Experience</p>
        </HashLink>
        <HashLink smooth to={'/#portfolio'} onClick={() => setSection('portfolio')}>
          <p className={section === 'portfolio' ? styles.selected : ''}>Portfolio</p>
        </HashLink>
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