//node modules
import { useState, useEffect } from 'react'

//components
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'

// services
import { getMinutes } from "./modules/functions"

//css
import './App.css'

function App() {
  const [daytime, setDaytime] = useState(true)
  const [date, setDate] = useState(new Date())
  
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
      <NavBar/>
      <div className='main'>
        <Landing name={'landing'} daytime={daytime}/>
        <About />
      </div>
    </>
  )
}

export default App
