import React, { useState } from 'react'
import "./AboutMe.css"
import profileImg from "/src/assets/portfolio-profile-img.png"
import linkedIn from "/src/assets/linkedin-icon.png"
import github from "/src/assets/github-icon.png"
import email from "/src/assets/email-icon.png"
import cvIcon from "/src/assets/cv-icon.png"
import { Link } from 'react-scroll'

import { useTranslation } from "react-i18next";

const AboutMe = () => {

   const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  const cvPath = i18n.language === "es" ? "/CURRICULUM VITAE - LAUTARO ROBLES.pdf" : "/RESUME - Lautaro Robles.pdf"
  
  const cvName = i18n.language === "es" ? "CURRICULUM VITAE - LAUTARO ROBLES.PDF" : "RESUME - Lautaro Robles.pdf"  

  return (
    <div className='aboutme-container page-enter'>
      <div className='aboutme-title'>
        <div className='aboutme-p'>
      <h1>Lautaro Robles</h1>
      <p className='page-enter-title'>{t("developer")}</p>
      </div>
      <div className='myimg-container'>
      <img className='myimg page-enter-right-to-left' src={profileImg} alt="profileImg" />
      </div>
      </div>
      <p className='aboutme-p-title'>{t("estudiante")}</p>
      <div className='aboutme-img-container'>
        <a target='_blank' href="https://www.linkedin.com/in/lautaro-robles-003a44233/">
        <img className='aboutme-box social-box-1' src={linkedIn} alt="LinkedIn" />
        </a>
        <a target='_blank' href="https://github.com/lautyrobles">
        <img className='aboutme-box social-box-2' src={github} alt="GitHub" />
        </a>
        <Link to="contacto" smooth={true} duration={1000}>
        <img className='aboutme-box social-box-3' src={email} alt="Email" />
        </Link>
        <a target='_blank' href={cvPath} download={cvName}>
        <img className='aboutme-box social-box-4' src={cvIcon} alt="Curriculum Vitae" />
        </a>
      </div>
    </div>
  )
}

export default AboutMe

{/* <h3>Sobre mi</h3>
<p>Me apasiona crear soluciones digitales funcionales y elegantes, combinando mis conocimientos académicos con la experiencia práctica para construir experiencias útiles y agradables para los usuarios. Siempre estoy en búsqueda de nuevos desafíos y proyectos que me permitan seguir creciendo como desarrollador.</p> */}