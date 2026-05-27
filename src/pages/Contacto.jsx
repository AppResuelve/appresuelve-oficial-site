import { useState } from 'react'
import { company } from '../data/productos'
import './Contacto.css'

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulamos el envío
    setSubmitted(true)
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="contacto-page">
      <section className="page-header">
        <div className="header-content">
          <h1>Contacto</h1>
          <p>¿Tenés una idea? Escribinos y la convertimos en realidad digital</p>
        </div>
      </section>

      <section className="contacto-content">
        <div className="contacto-container">
          <div className="contacto-info">
            <h2>Hablemos</h2>
            <p>
              Estamos disponibles para discutir tu próximo proyecto. Ya sea una idea nueva o una
              mejora a tu sistema existente, podemos ayudarte.
            </p>

            <div className="info-item">
              <h3>Email</h3>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>

            <div className="info-item">
              <h3>Teléfono</h3>
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </div>

            <div className="info-item">
              <h3>Ubicación</h3>
              <p>{company.location}</p>
            </div>

            <div className="info-item">
              <h3>Redes</h3>
              <div className="social-links">
                <a href={company.social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={company.social.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="contacto-form">
            {submitted ? (
              <div className="success-message">
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Contános sobre tu proyecto..."
                    rows={5}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
