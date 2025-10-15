import React from 'react'
import NavBar from './components/navbar/NavBar'
import AboutMe from './components/sections/AboutMe/AboutMe'
import "./App.css"
import Skills from './components/sections/Skills/Skills'
import Proyects from './components/sections/Proyects/Proyects'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/sections/Footer/Footer'
import SkillsTitle from './components/sections/Skills Title/SkillsTitle'

import './i18n'
import { useTranslation } from 'react-i18next'

const App = () => {

  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  }

  return (
    <div>
      <NavBar/>
      <AboutMe/>
      <SkillsTitle/>
      <Skills/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

