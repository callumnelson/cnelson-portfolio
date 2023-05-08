//node modules
import { useState } from 'react'

//components
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

//pages
import Landing from './pages/Landing'

//css
import './App.css'

function App() {
  const [daytime, setDaytime] = useState(true)

  return (
    <>
      <NavBar setDaytime={setDaytime}/>
      <Routes>
        <Route path='/' element={<Landing daytime={daytime} />}/>
      </Routes>
      <Footer setDayTime={setDaytime}/>
    </>
  )
}

export default App
