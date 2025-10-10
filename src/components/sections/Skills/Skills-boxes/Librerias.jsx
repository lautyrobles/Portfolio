import React from 'react'
import "./Skills-boxes.css"


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Librerias = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

  return (
    <div data-aos='fade-up' className='skills-box-container'>
        <h3>Frameworks y Librerias</h3>
        <ul>
            <li>ReactJS</li>
            <li>ReactRouter</li>
            <li>TailWindCSS / SASS</li>
            <li>Fetch API</li>
        </ul>  
        </div>
  )
}

export default Librerias
