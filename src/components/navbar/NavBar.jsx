import React, { useState } from 'react'
import "./NavBar.css"
import spanishFlag from "/src/assets/spanish-icon.png"
import americanFlag from "/src/assets/english-icon.png"

import { useTranslation } from 'react-i18next'

const NavBar = () => {

  const { i18n } = useTranslation()
  const [selectedLang, setSelectedLang] = useState(i18n.lenguage)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setSelectedLang(lng)
  }

  return (
     
  <div className='nav-container'>
      <div className='nav-title'>
        <h1 className='portfolio-enter'>Portfolio</h1>
      </div>
      <div className='nav-flags'>
        <img
          className='page-enter-flags-1'
          src={spanishFlag}
          alt="Español"
          onClick={() => changeLanguage('es')}
          style={{ cursor: 'pointer', border: selectedLang === 'es' ? '2px solid lightgreen' : 'none',}}
        />
        <img
          className='page-enter-flags-2'
          src={americanFlag}
          alt="Inglés"
          onClick={() => changeLanguage('en')}
          style={{ cursor: 'pointer', border: selectedLang === 'en' ? '2px solid lightgreen' : 'none',}}
        />
      </div>
    </div>
    
  )
}

export default NavBar
