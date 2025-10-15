import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { useTranslation } from "react-i18next";


const Herramientas = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

        const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
     <div data-aos='fade-up' className='skills-box-container'>
        <h3>{t("skillsH4")}</h3>
        <ul>
            <li>Git y GitHub</li>
            <li>NPM</li>
            <li>WebPack / Vite</li>
            <li>API Rest</li>
        </ul>  
        </div>
  )
}

export default Herramientas
