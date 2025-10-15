import React from 'react'
import "./Skills-boxes.css"


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { useTranslation } from "react-i18next";


const Librerias = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

        const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div data-aos='fade-up' className='skills-box-container'>
        <h3>{t("skillsH3")}</h3>
        <ul>
            <li>ReactJS</li>
            <li>ReactRouter</li>
            <li>TailWindCSS / SASS</li>
            <li>Fetch API</li>
        </ul>  
        </div>
  )
}

export default Librerias
