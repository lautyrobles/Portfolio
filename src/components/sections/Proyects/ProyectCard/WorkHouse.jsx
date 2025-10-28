import React from 'react'
import "./WorkHouse.css"
import ipnImg from "/src/assets/IPN.jpeg"

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { useTranslation } from "react-i18next";

const WorkHouse = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

   const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='minepet-main-container'>

      <div data-aos='fade-up' className='minepet-title'>
        <h3>IPN</h3>
      </div>

      <div data-aos='fade-up' className='minepet-description'>
        <p>{t("myProyectsP2")}</p>
      </div>

      <div data-aos='fade-up' className='minepet-img'>
        <a className='minepet-img' href="http://ipn-software.vercel.app/" target='_blanket'>
        <img src={ipnImg} alt="IPN" />
        </a>
      </div>
  
    </div>
  )
}

export default WorkHouse
