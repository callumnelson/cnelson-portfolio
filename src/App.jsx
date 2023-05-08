//node modules
import { useState } from 'react'

//components
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

//pages
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'

//css
import './App.css'

function App() {
  const [daytime, setDaytime] = useState(true)

  return (
    <>
      <NavBar setDaytime={setDaytime}/>
      <Routes>
        <Route path='/' element={<Landing daytime={daytime} />}/>
        <Route path='/about' element={<About daytime={daytime}/>}/>
        <Route path='/contact' element={<Contact daytime={daytime}/>}/>
        <Route path='/portfolio' element={<Portfolio daytime={daytime}/>}/>
      </Routes>
      <Footer setDayTime={setDaytime}/>
    </>
  )
}

export default App
