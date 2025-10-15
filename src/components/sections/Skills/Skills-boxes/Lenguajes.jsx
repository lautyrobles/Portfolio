import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { useTranslation } from "react-i18next";


const Lenguajes = () => {

  useEffect(() => {
      AOS.init({duration: 1000})
    }, [])

      const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div data-aos='fade-up' className='skills-box-container'>
        <h3>{t("skillsH2")}</h3>
        <ul>
            <li>HTML5</li>
            <li>CSS3 (Flexbox y grid)</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li> 
        </ul>
      </div>
  )
}

export default Lenguajes
