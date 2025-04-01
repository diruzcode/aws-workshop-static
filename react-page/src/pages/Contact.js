import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    
    // En un escenario real, aquí enviarías los datos a un backend
    // Para este ejemplo, solo simulamos una respuesta exitosa
    setTimeout(() => {
      setFormSubmitted(true);
    }, 500);
  };
  
  return (
    <div className="page-container">
      <h1 className="page-title">Contacto</h1>
      
      {formSubmitted ? (
        <div style={{
          padding: '2rem',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <h2 style={{ color: '#4caf50', marginBottom: '1rem' }}>¡Mensaje enviado!</h2>
          <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
          <button 
            onClick={() => {
              setFormSubmitted(false);
              setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
              });
            }}
            style={{
              backgroundColor: '#232f3e',
              marginTop: '1rem'
            }}
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <section className="contact-form">
          <h2>Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Asunto:</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                required
              ></textarea>
            </div>
            
            <button type="submit">Enviar mensaje</button>
          </form>
        </section>
      )}
      
      <section className="page-section" style={{ marginTop: '3rem' }}>
        <h2>Información del Workshop</h2>
        <p>
          Este workshop es parte de nuestra serie educativa sobre servicios AWS. 
          Si tienes preguntas específicas sobre el workshop o necesitas ayuda con 
          algún paso en particular, no dudes en contactarnos.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ color: '#232f3e', marginBottom: '0.5rem' }}>Email</h3>
            <p>workshop@example.com</p>
          </div>
          <div>
            <h3 style={{ color: '#232f3e', marginBottom: '0.5rem' }}>GitHub</h3>
            <p>github.com/example/aws-workshop</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;