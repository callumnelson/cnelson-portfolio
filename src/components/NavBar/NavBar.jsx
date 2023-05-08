// Components & Assets
import Headshot from '../../assets/headshot.png'
import { Link } from 'react-router-dom'
import Clock from '../Clock/Clock'


const NavBar = ({setDaytime}) => {
  return (
    <nav className="navigation-bar">
      <Link to="/" id="logo">
        <img src={ Headshot } alt="Callum Nelson Headshot" />
      </Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Clock setDaytime={setDaytime}/>
    </nav>
  )
}

export default NavBar