import React from 'react'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Restruant from './pages/Restruant'
import Footer from './components/Footer'

const App = () => {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path = '/restaurants' element={<Restruant/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App