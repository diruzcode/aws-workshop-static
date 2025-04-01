import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      <section className="hero">
        <h1>Bienvenido al Workshop de AWS</h1>
        <p>Aprende a desplegar sitios web en AWS usando S3 y CloudFront</p>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Amazon S3</h2>
          <p>Almacenamiento escalable y seguro para sitios web estáticos.</p>
          <p>Aprende a configurar buckets para alojamiento web, gestionar políticas de acceso y optimizar para un rendimiento máximo.</p>
        </div>
        
        <div className="feature">
          <h2>CloudFront</h2>
          <p>Red de distribución de contenido (CDN) para entrega rápida de tu sitio.</p>
          <p>Configura distribuciones para mejorar la velocidad de carga de tu sitio web y reducir la latencia para usuarios en todo el mundo.</p>
        </div>
        
        <div className="feature">
          <h2>Route 53 & ACM</h2>
          <p>Gestión de dominios y certificados SSL para una experiencia segura.</p>
          <p>Aprende a configurar dominios personalizados y habilitar HTTPS con certificados gratuitos de AWS Certificate Manager.</p>
        </div>
      </section>

      <section className="page-section">
        <h2>¿Por qué esta arquitectura?</h2>
        <p>Utilizar S3 y CloudFront para desplegar sitios web ofrece numerosas ventajas:</p>
        <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li>Escalabilidad automática para cualquier volumen de tráfico</li>
          <li>Alta disponibilidad con SLA de 99.9%</li>
          <li>Bajo costo con un modelo de pago por uso</li>
          <li>Distribución global del contenido para reducir la latencia</li>
          <li>Seguridad mejorada con HTTPS y WAF opcional</li>
        </ul>
        
        <Link to="/services" style={{ 
          display: 'inline-block', 
          background: '#ff9900',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginTop: '1rem'
        }}>
          Explorar servicios
        </Link>
      </section>
    </div>
  );
};

export default Home;