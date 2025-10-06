import React from 'react'
import NavBar from './components/navbar/NavBar'
import AboutMe from './components/sections/AboutMe/AboutMe'
import "./App.css"
import Skills from './components/sections/Skills/Skills'
import Proyects from './components/sections/Proyects/Proyects'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/sections/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <AboutMe/>
      <Skills/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

