import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Lenguajes = () => {

  useEffect(() => {
      AOS.init({duration: 1000})
    }, [])

  return (
    <div data-aos='fade-up' className='skills-box-container'>
        <h3>Lenguajes y Bases</h3>
        <ul>
            <li>HTML5</li>
            <li>CSS3 (Flexbox y grid)</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li> 
        </ul>
      </div>
  )
}

export default Lenguajes
