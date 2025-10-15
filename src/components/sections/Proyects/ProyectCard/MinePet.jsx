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
        <p>MinePet es un E-Commerce desarrollado con HTML, CSS y JavaScript, diseñado para ofrecer una experiencia visual atractiva, intuitiva y adaptable a todo tipo de dispositivos.</p>
        <p>Su interfaz está pensada para transmitir una estética amigable y profesional, priorizando la usabilidad y la presentación de los productos.</p>
        <p>MinePet representa un ejemplo de cómo aplicar buenas prácticas de diseño web y desarrollo front-end para crear una tienda online funcional, escalable y visualmente atractiva.</p>
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
