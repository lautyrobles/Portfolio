import React, { useState } from 'react'
import "./Contact.css"


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { useTranslation } from "react-i18next";

const Contact = () => {

    const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

    const [formData, setFormData] = useState({
        nombre:"",
        apellido:"",
        email:"",
        mensaje:"",
    })

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos Enviados", formData);
        alert("Formulario enviado con exito")
        setFormData({
            nombre:"",
            apellido:"",
            email:"",
            mensaje:"",
        })
    }

    
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
     <section name="contacto" className="formulario-container">
      <div className='form-container'>
        <div className='title-container-form'>
          <h2 data-aos='fade-in'>{t("contact")}</h2>
        </div>
      <p data-aos='fade-in'>{t("contactP")} <span>{t("contactE")}</span></p>

      {/* El formulario ejecuta handleSubmit cuando se presiona el botón "Enviar" */}
      <form onSubmit={handleSubmit}>
        {/* Campo de nombre */}
        <input data-aos='fade-in'
          type="text"
          name="nombre"
          placeholder={t("name")}
          value={formData.nombre} // Valor controlado por el estado
          onChange={handleChange} // Cada vez que cambia, se actualiza el estado
          required
        />

        {/* Campo de apellido */}
        <input data-aos='fade-in'
          type="text"
          name="apellido"
          placeholder={t("lastName")}
          value={formData.apellido}
          onChange={handleChange}
          required
        />

        {/* Campo de correo electrónico */}
        <input data-aos='fade-in'
          type="email"
          name="email"
          placeholder={t("email")}
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Campo de mensaje */}
        <textarea data-aos='fade-in'
          name="mensaje"
          placeholder={t("msg")}
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        {/* Botón de envío */}
        <button data-aos='contact-button fade-right' type="submit">{t("send")}</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
