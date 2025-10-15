import React from 'react'
import "./Skills-boxes.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Conocimientos = () => {

  useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

  return (
    <div data-aos='fade-up' className='skills-box-container'>
        <h3>Experiencia Academica</h3>
        <ul>
            <li>Programación Estructurada / POO</li>
            <li>JAVA - C</li>
            <li>Bases de Datos</li>
            <li>SQL - MongoDB - Neo4j</li>
        </ul>  
        </div>
  )
}

export default Conocimientos
