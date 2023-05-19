//node modules
import { useState } from 'react'

//components
import NavBar from './components/NavBar/NavBar'

//pages
import Landing from './pages/Landing/Landing'

//css
import './App.css'

function App() {
  const [daytime, setDaytime] = useState(true)
  const [section, setSection] = useState('landing')

  return (
    <>
      <NavBar setDaytime={setDaytime}/>
      <div className='main'>
        <Landing name={'landing'}/>
      </div>
    </>
  )
}

export default App
