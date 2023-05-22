//node modules
import { useState, useEffect, useRef } from 'react'

//components
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Portfolio from './components/Portfolio/Portfolio'

// services
import { getMinutes } from "./modules/functions"

//css
import './App.css'

function App() {
  const mainRef = useRef()
  const [daytime, setDaytime] = useState(true)
  const [date, setDate] = useState(new Date())
  const [section, setSection] = useState('landing')
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const main = mainRef.current
    const experience = document.getElementById('experience').offsetTop
    const portfolio = document.getElementById('portfolio').offsetTop
    const updatePosition = () => {
      setScrollPosition(main.scrollTop)
      if (main.scrollTop > 0 && main.scrollTop < experience) setSection('about')
      else if (main.scrollTop > 0 && main.scrollTop < portfolio) setSection('experience')
      else if (main.scrollTop >= portfolio) setSection('portfolio')
      else setSection('landing')
    }
    main.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => main.removeEventListener('scroll', updatePosition)
  }, [scrollPosition]);
  
  const time = date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric'
  })

  const currentTime = getMinutes(time)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 60000)
    if (currentTime > 420 && currentTime < 1020) {
      setDaytime(true)
    } else {
      setDaytime(false)
    }
    return () => clearInterval(intervalId)
  }, [currentTime, setDaytime])

  return (
    <>
      <NavBar section={section} setSection={setSection}/>
      <div id='main' ref={mainRef}>
        <Landing name={'landing'} daytime={daytime} setSection={setSection}/>
        <About />
        <Experiences />
        <Portfolio />
      </div>
    </>
  )
}

export default App
