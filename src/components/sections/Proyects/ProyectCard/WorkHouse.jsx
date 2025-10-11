import React from 'react'
import "./WorkHouse.css"
import WorkHouseImg from "/src/assets/WorkHouse.png"

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const WorkHouse = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className='minepet-main-container'>

      <div data-aos='fade-up' className='minepet-title'>
        <h3>Woha</h3>
      </div>

      <div data-aos='fade-up' className='minepet-description'>
        <p>WorkHouse es un diseño Desktop de una aplicacion para busqueda de empleo que busca dar una interfaz agradable y fluida</p>
      </div>

      <div data-aos='fade-up' className='minepet-img'>
        <a className='minepet-img' href="https://work-house-repo.vercel.app/" target='_blanket'>
        <img src={WorkHouseImg} alt="Workhouse" />
        </a>
      </div>
  
    </div>
  )
}

export default WorkHouse
