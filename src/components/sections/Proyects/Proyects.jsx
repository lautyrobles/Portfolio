import React from 'react'
import MinePet from './ProyectCard/MinePet'
import WorkHouse from './ProyectCard/WorkHouse'
import "./Proyect.css"

const Proyects = () => {
  return (
    <div className='proyects-main-container'>
      <h1 className='proyects-main-title'>Mis Proyectos</h1>
      <MinePet/>
      <WorkHouse/>
    </div>
  )
}

export default Proyects
