import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Diseño = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

  return (
     <div data-aos='fade-up' className='skills-box-container'>
        <h3>Diseño y Accesibilidad</h3>
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
