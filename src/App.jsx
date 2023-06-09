//node modules
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NameCard from './components/NameCard/NameCard'

// assets
import bostonday from './assets/images/bostonday.png'

//css
import './App.css'

function App() {
  const mainRef = useRef()
  const [section, setSection] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)
  const [aboutTop, setAboutTop] = useState(0)
  const [experienceTop, setExperienceTop] = useState(0)
  const [portfolioTop, setPortfolioTop] = useState(0)
  const [contactTop, setContactTop] = useState(0)
  const [fullHeight, setFullHeight] = useState(0)

  useEffect(() => {
    const main = mainRef.current
    const updatePosition = () => {
      setFullHeight(main.scrollHeight - main.clientHeight)
      setAboutTop(document.getElementById('about').offsetTop)
      setExperienceTop(document.getElementById('experience').offsetTop)
      setPortfolioTop(document.getElementById('portfolio').offsetTop)
      setContactTop(document.getElementById('contact').offsetTop)
      setScrollPosition(main.scrollTop)
      if (main.scrollTop >= aboutTop - 100 && main.scrollTop < portfolioTop - 100) setSection('about')
      else if (main.scrollTop > portfolioTop - 100 && main.scrollTop < experienceTop - 100) setSection('portfolio')
      else if (main.scrollTop >= experienceTop - 100 && main.scrollTop < contactTop - aboutTop) setSection('experience')
      else if (main.scrollTop >= contactTop - aboutTop) setSection('contact')
      else setSection('landing')
    }
    main.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => main.removeEventListener('scroll', updatePosition)
  }, [aboutTop, experienceTop, portfolioTop, contactTop])

  return (
    <div className="container" style={{ backgroundImage: `url(${bostonday})` }}>
      <NavBar section={section} scrollPosition={scrollPosition} fullHeight={fullHeight} />
      <div id="main" ref={mainRef}>
        <Link id="top"></Link>
        <NameCard location={'site'} />
        <About section={section} />
        <Portfolio />
        <Experiences />
        <Contact />
        <Footer location={'site'} />
      </div>
    </div>
  )
}

export default App
