// npm modules
import { useLocation } from 'react-router-dom'

// Components & Assets
import Headshot from '../../assets/headshot.png'
import { Link } from 'react-router-dom'
import Clock from '../Clock/Clock'


const NavBar = ({setDaytime}) => {
  const { pathname } = useLocation()
  
  return (
    <nav className="navigation-bar">
      <Link to="/" id="logo">
        <img src={ Headshot } alt="Callum Nelson Headshot" />
      </Link>
      <Link 
        to="/about" 
        className={pathname==='/about' ? 'selected' : ''}
      >
        About
      </Link>
      <Link 
        to="/contact"
        className={pathname==='/contact' ? 'selected' : ''}
      >
        Contact
      </Link>
      <Link 
        to="/resume"
        className={pathname==='/resume' ? 'selected' : ''}
      >
        Resume
      </Link>
      <Link 
        to="/portfolio"
        className={pathname==='/portfolio' ? 'selected' : ''}
      >
        Portfolio
      </Link>
      <Clock setDaytime={setDaytime}/>
    </nav>
  )
}

export default NavBar