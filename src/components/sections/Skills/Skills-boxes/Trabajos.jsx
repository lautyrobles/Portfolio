import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Trabajos = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

  return (
    <div data-aos='fade-up' className='skills-box-container'>
        <h3>Experiencia <br /> Laboral</h3>
        <ul>
            <li>Empresa: Indicom S.A.</li>
            <li>Soporte Tecnico</li>
            <li>Soporte Comercial</li>
            <li>Atencion al Cliente</li>
            <li>Duracion: 3 Años</li>
        </ul>  
        </div>
  )
}

export default Trabajos
