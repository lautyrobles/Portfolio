import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { useTranslation } from "react-i18next";


const Trabajos = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

        const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div data-aos='fade-up' className='skills-box-container'>
        <h3>{t("skillsh7")}</h3>
        <ul>
            <li>{t("company")}</li>
            <li>{t("tech")}</li>
            <li>{t("commercial")}</li>
            <li>{t("atention")}</li>
            <li>{t("duration")}</li>
        </ul>  
        </div>
  )
}

export default Trabajos
