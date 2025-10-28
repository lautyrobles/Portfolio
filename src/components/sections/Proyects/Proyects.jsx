import React from 'react'
import MinePet from './ProyectCard/MinePet'
import WorkHouse from './ProyectCard/WorkHouse'
import "./Proyect.css"


import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { useTranslation } from "react-i18next";

const Proyects = () => {

  
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className='proyects-main-container'>
      <div className='proyects-container'>
        
      <h1 data-aos='fade-in' className='proyects-main-title'>{t("myProyects")}</h1>
       <div className='section-container'>

      <WorkHouse/>
      <MinePet/>
      
       </div>
      
      </div>
    </div>
  )
}

export default Proyects
