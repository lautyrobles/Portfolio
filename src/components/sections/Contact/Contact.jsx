import React, { useState } from 'react'
import "./Contact.css"


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {

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
     <section className="formulario-container">
      <div className='form-container'>
        <div className='title-container-form'>
          <h2 data-aos='fade-in'>Contacto</h2>
        </div>
      <p data-aos='fade-in'>Si te interesa mi trabajo o te gustaria ponerte en contacto, completá el formulario o enviame un correo a <span>lautamc123@hotmail.com</span></p>

      {/* El formulario ejecuta handleSubmit cuando se presiona el botón "Enviar" */}
      <form onSubmit={handleSubmit}>
        {/* Campo de nombre */}
        <input data-aos='fade-in'
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre} // Valor controlado por el estado
          onChange={handleChange} // Cada vez que cambia, se actualiza el estado
          required
        />

        {/* Campo de apellido */}
        <input data-aos='fade-in'
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />

        {/* Campo de correo electrónico */}
        <input data-aos='fade-in'
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Campo de mensaje */}
        <textarea data-aos='fade-in'
          name="mensaje"
          placeholder="Escribí tu mensaje..."
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        {/* Botón de envío */}
        <button data-aos='fade-right' type="submit">Enviar</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
