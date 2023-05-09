// npm modules
import { useLocation } from 'react-router-dom'

// Components & Assets
import Headshot from '../../assets/headshot.png'
import { NavLink } from 'react-router-dom'
import Clock from '../Clock/Clock'

// styling
import './NavBar.css'

const NavBar = ({setDaytime}) => {
  
  return (
    <nav className="navigation-bar">
      <NavLink to="/" id="logo">
        <img src={ Headshot } alt="Callum Nelson Headshot" />
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <Clock setDaytime={setDaytime}/>
    </nav>
  )
}

export default NavBar