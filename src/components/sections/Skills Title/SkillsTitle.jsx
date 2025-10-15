import React from 'react'
import "./SkillsTitle.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { useTranslation } from "react-i18next";

const SkillsTitle = () => {

    useEffect(() => {
            AOS.init({duration: 1000})
          }, [])

  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='skills-title-container'>
      <h1 data-aos="fade-up" className='skills-title'>{t("skillsH1")}</h1>
    </div>
  )
}

export default SkillsTitle
