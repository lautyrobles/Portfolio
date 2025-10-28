import React, { useState, useEffect } from 'react'
import "./Contact.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next"
import emailjs from "emailjs-com"

const Contact = () => {
  const { t, i18n } = useTranslation()

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng)
  }

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // ID de tu servicio, template y public key
    const serviceID = "service_33h4r8b"
    const templateID = "template_y3g3zqv"
    const publicKey = "EFg31tUphxE5ZeP8k"

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (result) => {
          console.log("✅ Envío exitoso:", result.text)
          alert("Formulario enviado con éxito 🚀")
          setFormData({
            nombre: "",
            apellido: "",
            email: "",
            mensaje: "",
          })
        },
        (error) => {
          console.error("❌ Error al enviar:", error.text)
          alert("Ocurrió un error al enviar el formulario.")
        }
      )
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section name="contacto" className="formulario-container">
      <div className="form-container">
        <div className="title-container-form">
          <h2 data-aos="fade-in">{t("contact")}</h2>
        </div>
        <p data-aos="fade-in">
          {t("contactP")} <span>{t("contactE")}</span>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            data-aos="fade-in"
            type="text"
            name="nombre"
            placeholder={t("name")}
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <input
            data-aos="fade-in"
            type="text"
            name="apellido"
            placeholder={t("lastName")}
            value={formData.apellido}
            onChange={handleChange}
            required
          />

          <input
            data-aos="fade-in"
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            data-aos="fade-in"
            name="mensaje"
            placeholder={t("msg")}
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>

          <button data-aos="fade-right" type="submit">
            {t("send")}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
