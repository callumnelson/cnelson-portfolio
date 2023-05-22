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
  const ref = useRef()
  const [daytime, setDaytime] = useState(true)
  const [date, setDate] = useState(new Date())
  const [section, setSection] = useState('landing')
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const main = ref.current
    const updatePosition = () => {
      setScrollPosition(main.scrollTop)
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

  console.log(scrollPosition)

  return (
    <>
      <NavBar section={section} setSection={setSection}/>
      <div id='main' ref={ref}>
        <Landing name={'landing'} daytime={daytime} setSection={setSection}/>
        <About />
        <Experiences />
        <Portfolio />
      </div>
    </>
  )
}

export default App
