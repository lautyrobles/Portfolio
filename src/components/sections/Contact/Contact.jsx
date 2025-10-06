import React, { useState } from 'react'
import "./Contact.css"

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

  return (
     <section className="formulario-container">
      <h2>Contacto</h2>
      <p>Si te interesa mi trabajo o te gustaria ponerte en contacto, completá el formulario o enviame un correo a <span>lautamc123@hotmail.com</span></p>

      {/* El formulario ejecuta handleSubmit cuando se presiona el botón "Enviar" */}
      <form onSubmit={handleSubmit}>
        {/* Campo de nombre */}
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre} // Valor controlado por el estado
          onChange={handleChange} // Cada vez que cambia, se actualiza el estado
          required
        />

        {/* Campo de apellido */}
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />

        {/* Campo de correo electrónico */}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Campo de mensaje */}
        <textarea
          name="mensaje"
          placeholder="Escribí tu mensaje..."
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        {/* Botón de envío */}
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contact
