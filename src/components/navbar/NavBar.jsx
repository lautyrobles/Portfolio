import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='nav-container'>
     <div>
        <h1 className='nav-title'>Portfolio</h1>
     </div>
     <div className='nav-flags'>
      <img src="/src/assets/spanish-icon.png" alt="Español" />
      <img src="/src/assets/english-icon.png" alt="Ingles" />
     </div>
    </div>
  )
}

export default NavBar
