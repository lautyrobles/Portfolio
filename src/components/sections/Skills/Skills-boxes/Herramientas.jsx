import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Herramientas = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

  return (
     <div data-aos='fade-up' className='skills-box-container'>
        <h3>Herramientas y Ecosistemas</h3>
        <ul>
            <li>Git y GitHub</li>
            <li>NPM</li>
            <li>WebPack / Vite</li>
            <li>API Rest</li>
        </ul>  
        </div>
  )
}

export default Herramientas
