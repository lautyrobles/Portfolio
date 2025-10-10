import React from 'react'
import MinePet from './ProyectCard/MinePet'
import WorkHouse from './ProyectCard/WorkHouse'
import "./Proyect.css"


import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Proyects = () => {

  
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);


  return (
    <div className='proyects-main-container'>
      <div className='proyects-container'>
        
      <h1 data-aos='fade-in' className='proyects-main-title'>Mis Proyectos</h1>
      <MinePet/>
      <WorkHouse/>
      
      </div>
    </div>
  )
}

export default Proyects
