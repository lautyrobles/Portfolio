import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      developer: "Front End Developer",
      estudiante: "Advanced Software Development student at the ITU of the National University of Cuyo. Front-end developer specializing in ReactJS.",
      skillsH1: "Skills and experiences",
      skillsH2: "Languages ​​and Bases",
      skillsH3: "Frameworks and Libraries",
      skillsH4: "Tools and Ecosystems",
      skillsH5: "Design and Accessibility",
      skillsH6: "Academic Experience",
      skillsh7: "Work Experience",
      programming: "Structured programming / OOP",
      baseDatos: "Data Bases",
      myProyects: "My Proyects",
      myProyectsP1: "MinePet is an e-commerce site developed with HTML, CSS, and JavaScript, designed to offer an attractive, intuitive, and adaptable visual experience for all types of devices. Its interface is designed to convey a friendly and professional aesthetic, prioritizing usability and product presentation. MinePet represents an example of how to apply good web design and front-end development practices to create a functional, scalable, and visually appealing online store.",
        myProyectsP2: "WorkHouse is a prototype digital job search and training platform, designed with HTML, CSS, and JavaScript. It features a modern, responsive, and easy-to-navigate design that demonstrates how users can search for jobs, access courses, and manage their career opportunities from a single, intuitive environment.",
        contact: "Contact",
        contactP: "If you are interested about my work and you would like to get in touch, please complete the following form or send an email to",
        contactE: "lautamc123@hotmail.com",
        company: "Company: Indicom",
        tech: "Technical Support",
        commercial: "Commercial Support",
        atention: "Customer Support",
        duration: "Duration: 3 Years",
        name: "Name",
        lastName: "Last Name",
        email: "E-Mail",
        msg: "Write your message...",
        send: "Submit",
    }
  },
  es: {
    translation: {
        developer: "Desarrollador Front End",
      estudiante: "Estudiante avanzado de la carrera de Desarrollo de Software en el ITU de la Universidad Nacional de Cuyo. Desarrollador Front End especializado en ReactJS.",
      skillsH1: "Habilidades y experiencias",
      skillsH2: "Lenguajes y Bases",
      skillsH3: "Frameworks y Librerias",
      skillsH4: "Herramientas y Ecosistemas",
      skillsH5: "Diseño y Accesibilidad",
      skillsH6: "Experiencia Academica",
      skillsh7: "Experiencia Laboral",
      programming: "Programacion Estructurada / POO",
      baseDatos: "Bases de datos",
      myProyects: "Mis Proyectos",
      myProyectsP1: "MinePet es un E-Commerce desarrollado con HTML, CSS y JavaScript, diseñado para ofrecer una experiencia visual atractiva, intuitiva y adaptable a todo tipo de dispositivos. Su interfaz está pensada para transmitir una estética amigable y profesional, priorizando la usabilidad y la presentación de los productos. MinePet representa un ejemplo de cómo aplicar buenas prácticas de diseño web y desarrollo front-end para crear una tienda online funcional, escalable y visualmente atractiva.",
        myProyectsP2: "WorkHouse es un prototipo de plataforma digital de búsqueda laboral y formación, diseñado con HTML, CSS y JavaScript. Presenta un diseño moderno, adaptable y fácil de navegar, que muestra cómo los usuarios podrían buscar empleos, acceder a cursos y gestionar sus oportunidades laborales desde un mismo entorno intuitivo.",
        contact: "Contacto",
        contactP: "Si te interesa mi trabajo o te gustaría ponerte en contacto, completá el formulario o enviame un correo a",
        contactE: "lautamc123@hotmail.com",
        company: "Empresa: Indicom S.A.",
        tech: "Soporte Técnico",
        commercial: "Soporte Comercial",
        atention: "Atención al Cliente",
        duration: "Duración: 3 Años",
        name: "Nombre",
        lastName: "Apellido",
        email: "Correo electrónico",
        msg: "Escribí tu mensaje...",
        send: "Enviar",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;