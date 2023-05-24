//node modules
import { useState, useEffect, useRef } from 'react'

//components
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Portfolio from './components/Portfolio/Portfolio'

// services
import { getMinutes } from "./modules/functions"

// assets
import bostonDay from './assets/images/bostonDay.png'
import bostonNight from './assets/images/bostonNight.png'

//css
import './App.css'

function App() {
  const mainRef = useRef()
  const [daytime, setDaytime] = useState(true)
  const [date, setDate] = useState(new Date())
  const [section, setSection] = useState('about')
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const main = mainRef.current
    const updatePosition = () => {
      const experience = document.getElementById('experience').offsetTop
      const portfolio = document.getElementById('portfolio').offsetTop
      setScrollPosition(main.scrollTop)
      if (main.scrollTop >= 0 && main.scrollTop < experience) setSection('about')
      else if (main.scrollTop > 0 && main.scrollTop < portfolio) setSection('experience')
      else if (main.scrollTop >= portfolio) setSection('portfolio')
      else setSection('landing')
    }
    main.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => main.removeEventListener('scroll', updatePosition)
  }, []);
  
  const time = date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric'
  })

  const currentTime = getMinutes(time)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setDate(new Date())
  //   }, 60000)
  //   if (currentTime > 420 && currentTime < 1020) {
  //     setDaytime(true)
  //   } else {
  //     setDaytime(false)
  //   }
  //   return () => clearInterval(intervalId)
  // }, [currentTime, setDaytime])

  return (
    <div 
      className='container'
      style={{ backgroundImage: `url(${daytime ? bostonDay : bostonNight})` }}
    >
      <NavBar section={section}/>
      <div id='main' ref={mainRef}>
        <About />
        <Experiences />
        <Portfolio />
      </div>
    </div>
  )
}

export default App
