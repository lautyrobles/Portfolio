import React from 'react'
import "./WorkHouse.css"
import WorkHouseImg from "/src/assets/WorkHouse.png"

const WorkHouse = () => {
  return (
    <div className='minepet-main-container'>

      <div className='minepet-title'>
        <h3>Woha</h3>
      </div>

      <div className='minepet-description'>
        <p>WorkHouse es un diseño Desktop de una aplicacion para busqueda de empleo que busca dar una interfaz agradable y fluida</p>
      </div>

      <div className='minepet-img'>
        <img src={WorkHouseImg} alt="Workhouse" />
      </div>
  
    </div>
  )
}

export default WorkHouse
