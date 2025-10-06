import React from 'react'
import "./Skills.css"
import Lenguajes from './Skills-boxes/Lenguajes'
import Librerias from './Skills-boxes/Librerias'
import Herramientas from './Skills-boxes/Herramientas'
import Diseño from './Skills-boxes/Diseño'
import Conocimientos from './Skills-boxes/Conocimientos'
import Trabajos from './Skills-boxes/Trabajos'

const Skills = () => {
  return (
    <div className='skills-main-container'>
      
      <Lenguajes/>
      <Librerias/>
      <Herramientas/>
      <Diseño/>
      <Conocimientos/>
      <Trabajos/>

    </div>
  )
}

export default Skills
