import React from 'react'
import "./NavBar.css"
import spanishFlag from "/src/assets/spanish-icon.png"
import americanFlag from "/src/assets/english-icon.png"

const NavBar = () => {
  return (
     
    <div className='nav-container'>
     <div className='nav-title'>
        <h1 className='portfolio-enter'>Portfolio</h1>
     </div>
     <div className='nav-flags'>
      <img className='page-enter-flags-1' src={spanishFlag} alt="Español" />
      <img className='page-enter-flags-2' src={americanFlag} alt="Ingles" />
     </div>
    </div>
    
  )
}

export default NavBar
