import React from 'react'
import "./SkillsTitle.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const SkillsTitle = () => {

    useEffect(() => {
            AOS.init({duration: 1000})
          }, [])

  return (
    <div className='skills-title-container'>
      <h1 data-aos="fade-up" className='skills-title'>Habilidades y experiencias</h1>
    </div>
  )
}

export default SkillsTitle
