//node modules
import { useState } from 'react'

//components
import NavBar from './components/NavBar/NavBar'

//pages
import Landing from './components/Landing/Landing'

//css
import './App.css'

function App() {
  const [section, setSection] = useState('landing')

  return (
    <>
      <NavBar/>
      <div className='main'>
        <Landing name={'landing'}/>
      </div>
    </>
  )
}

export default App
