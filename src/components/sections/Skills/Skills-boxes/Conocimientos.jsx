import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { useTranslation } from "react-i18next";


const Conocimientos = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

        const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div data-aos='fade-up' className='skills-box-container'>
        <h3>{t("skillsH6")}</h3>
        <ul>
            <li>{t("programming")}</li>
            <li>JAVA - C</li>
            <li>{t("baseDatos")}</li>
            <li>SQL - MongoDB - Neo4j</li>
        </ul>  
        </div>
  )
}

export default Conocimientos
