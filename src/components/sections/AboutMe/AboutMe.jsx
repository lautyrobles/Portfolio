import React from 'react'
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className='aboutme-container'>
      <div className='aboutme-title'>
        <div className='aboutme-p'>
      <h1>Lautaro Robles</h1>
      <p>Desarrollador Front End</p>
      </div>
      <div className='myimg-container'>
      <img className='myimg' src="/src/assets/portfolio-profile-img.png" alt="Image" />
      </div>
      </div>
      <p className='aboutme-p-title'>Estudiante avanzado de la carrera de Desarrollo de Software en ITU de la Universidad de Cuyo. Desarrollador Front End especializado ReactJS</p>
      <div className='aboutme-img-container'>
        <img className='aboutme-box' src="/src/assets/linkedin-icon.png" alt="LinkedIn" />
        <img className='aboutme-box' src="/src/assets/github-icon.png" alt="GitHub" />
        <img className='aboutme-box' src="/src/assets/email-icon.png" alt="Email" />
        <img className='aboutme-box' src="/src/assets/instagram-icon.png" alt="Instagram" />
      </div>
    </div>
  )
}

export default AboutMe

{/* <h3>Sobre mi</h3>
<p>Me apasiona crear soluciones digitales funcionales y elegantes, combinando mis conocimientos académicos con la experiencia práctica para construir experiencias útiles y agradables para los usuarios. Siempre estoy en búsqueda de nuevos desafíos y proyectos que me permitan seguir creciendo como desarrollador.</p> */}