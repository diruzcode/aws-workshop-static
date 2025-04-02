import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Acerca de este Workshop</h1>
      
      <section className="page-section">
        <p>
          Este workshop está diseñado para ayudarte a comprender y aplicar las mejores prácticas para desplegar 
          sitios web en AWS utilizando Amazon S3 y CloudFront, integrando Route 53 para gestión de dominios 
          y Certificate Manager para seguridad SSL/TLS.
        </p>
        
        <p>
          A lo largo de este workshop, aprenderás a:
        </p>
        
        <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li>Configurar buckets de S3 para alojar sitios web estáticos</li>
          <li>Implementar CloudFront como CDN para mejorar el rendimiento global</li>
          <li>Configurar un dominio personalizado usando Route 53</li>
          <li>Crear y asociar certificados SSL gratuitos con AWS Certificate Manager</li>
          <li>Implementar funciones de CloudFront para manejar rutas dinámicas en aplicaciones React</li>
          <li>Automatizar despliegues con AWS CLI y scripts de shell</li>
        </ul>
      </section>
      
      <section className="page-section">
        <h2>Arquitectura del Workshop</h2>
        <p>
          Durante este workshop, implementaremos dos tipos de aplicaciones web:
        </p>
        
        <div style={{ 
          background: '#f9f9f9', 
          padding: '1rem', 
          borderRadius: '8px',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ color: '#232f3e', marginBottom: '0.5rem' }}>1. Sitio Web Estático HTML</h3>
          <p>
            Un sitio web simple con páginas HTML, CSS y JavaScript que se carga directamente desde S3 a través de CloudFront.
          </p>
        </div>
        
        <div style={{ 
          background: '#f9f9f9', 
          padding: '1rem', 
          borderRadius: '8px',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ color: '#232f3e', marginBottom: '0.5rem' }}>2. Aplicación React (SPA)</h3>
          <p>
            HOLA DESDE CHILE (SPA) construida con React que requiere configuración 
            especial para manejar correctamente las rutas dinámicas utilizando CloudFront Functions.
          </p>
        </div>
      </section>
      
      <section className="page-section">
        <h2>¿Qué necesitarás?</h2>
        <ul style={{ marginLeft: '1.5rem' }}>
          <li>Una cuenta de AWS (se puede usar la capa gratuita)</li>
          <li>AWS CLI instalado y configurado en tu máquina local</li>
          <li>Node.js y npm para el proyecto React</li>
          <li>Un editor de código (como VS Code, Sublime Text, etc.)</li>
          <li>Un dominio para configurar (opcional - puedes usar subdominios de prueba)</li>
        </ul>
      </section>
    </div>
  );
};

export default About;