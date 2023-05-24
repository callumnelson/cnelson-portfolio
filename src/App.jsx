//node modules
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Portfolio from './components/Portfolio/Portfolio'

// assets
import bostonDay from './assets/images/bostonDay.png'

//css
import './App.css'

function App() {
  const mainRef = useRef()
  const [section, setSection] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)
  const [aboutTop, setAboutTop] = useState(0)
  const [experienceTop, setExperienceTop] = useState(0)
  const [portfolioTop, setPortfolioTop] = useState(0)

  useEffect(() => {
    const main = mainRef.current
    const updatePosition = () => {
      setAboutTop(document.getElementById('about').offsetTop)
      setExperienceTop(document.getElementById('experience').offsetTop)
      setPortfolioTop(document.getElementById('portfolio').offsetTop)
      setScrollPosition(main.scrollTop)
      if (main.scrollTop >= aboutTop - 100 && main.scrollTop < experienceTop - 100) setSection('about')
      else if (main.scrollTop > experienceTop - 100 && main.scrollTop < portfolioTop - 100) setSection('experience')
      else if (main.scrollTop >= portfolioTop - 100) setSection('portfolio')
      else setSection('landing')
    }
    main.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => main.removeEventListener('scroll', updatePosition)
  }, [aboutTop, experienceTop, portfolioTop]);

  return (
    <div 
      className='container'
      style={{ backgroundImage: `url(${bostonDay})`}}
    >
      <NavBar section={section}/>
      <div id='main' ref={mainRef}>
        <Link id='top'></Link>
        <About section={section}/>
        <Experiences />
        <Portfolio />
      </div>
    </div>
  )
}

export default App
