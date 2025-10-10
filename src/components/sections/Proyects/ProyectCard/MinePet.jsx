import React from 'react'
import "./MinePet.css"
import MinePetImg from "/src/assets/MinePet.png"

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const MinePet = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className='minepet-main-container'>

      <div data-aos='fade-up' className='minepet-title'>
        <h3>MinePet</h3>
      </div>

      <div data-aos='fade-up' className='minepet-description'>
        <p>MinePet es un E-Comerce con un diseño agradable a la vista, versatil y estructurado con HTML, CSS, JavaScript y Sass</p>
      </div>

      <div data-aos='fade-up' className='minepet-img'>
        <img src={MinePetImg} alt="MinePet" />
      </div>
  
    </div>
  )
}

export default MinePet
