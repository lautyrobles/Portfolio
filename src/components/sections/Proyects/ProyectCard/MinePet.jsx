import React from 'react'
import "./MinePet.css"
import MinePetImg from "/src/assets/MinePet.png"

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { useTranslation } from "react-i18next";

const MinePet = () => {

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
        <h3>MinePet</h3>
      </div>

      <div data-aos='fade-up' className='minepet-description'>
        <p>{t("myProyectsP1")}</p>
      </div>

      <div data-aos='fade-up' className='minepet-img'>
        <a className='minepet-img' href="https://mine-pet.vercel.app/" target='_blanket'>
          <img src={MinePetImg} alt="Minepet" />
        </a>
      </div>
  
    </div>
  )
}

export default MinePet
