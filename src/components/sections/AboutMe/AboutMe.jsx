import React from 'react'
import "./AboutMe.css"
import profileImg from "/src/assets/portfolio-profile-img.png"
import linkedIn from "/src/assets/linkedin-icon.png"
import github from "/src/assets/github-icon.png"
import email from "/src/assets/email-icon.png"
import cvIcon from "/src/assets/cv-icon.png"

const AboutMe = () => {
  return (
    <div className='aboutme-container page-enter'>
      <div className='aboutme-title'>
        <div className='aboutme-p'>
      <h1>Lautaro Robles</h1>
      <p className='page-enter-title'>Desarrollador Front End</p>
      </div>
      <div className='myimg-container'>
      <img className='myimg page-enter-right-to-left' src={profileImg} alt="profileImg" />
      </div>
      </div>
      <p className='aboutme-p-title'>Estudiante avanzado de la carrera de Desarrollo de Software en el ITU de la Universidad de Cuyo. Desarrollador Front End especializado en ReactJS.</p>
      <div className='aboutme-img-container'>
        <img className='aboutme-box social-box-1' src={linkedIn} alt="LinkedIn" />
        <img className='aboutme-box social-box-2' src={github} alt="GitHub" />
        <img className='aboutme-box social-box-3' src={email} alt="Email" />
        <img className='aboutme-box social-box-4' src={cvIcon} alt="Curriculum Vitae" />
      </div>
    </div>
  )
}

export default AboutMe

{/* <h3>Sobre mi</h3>
<p>Me apasiona crear soluciones digitales funcionales y elegantes, combinando mis conocimientos académicos con la experiencia práctica para construir experiencias útiles y agradables para los usuarios. Siempre estoy en búsqueda de nuevos desafíos y proyectos que me permitan seguir creciendo como desarrollador.</p> */}