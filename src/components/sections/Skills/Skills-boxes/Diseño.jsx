import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { useTranslation } from "react-i18next";


const Diseño = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

        const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
     <div data-aos='fade-up' className='skills-box-container'>
        <h3>{t("skillsH5")}</h3>
        <ul>
            <li>Responsive Design</li>
            <li>UI Libraries</li>
            <li>Figma</li>
            <li>Adobe XD</li>
        </ul>  
        </div>
  )
}

export default Diseño
