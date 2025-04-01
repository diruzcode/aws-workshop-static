import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Amazon S3',
      description: 'Simple Storage Service (S3) es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad de datos, seguridad y rendimiento. Ideal para alojar sitios web estáticos con alta disponibilidad.',
      features: [
        'Alojamiento de sitios web estáticos',
        'Políticas de acceso personalizables',
        'Versionado de objetos',
        'Ciclo de vida de objetos',
        'Integración con CloudFront'
      ]
    },
    {
      id: 2,
      title: 'Amazon CloudFront',
      description: 'CloudFront es un servicio rápido de red de entrega de contenido (CDN) que entrega de forma segura datos, videos, aplicaciones y APIs a clientes de todo el mundo con baja latencia y altas velocidades de transferencia.',
      features: [
        'Red global de puntos de presencia',
        'Caché de bordes para mejorar rendimiento',
        'Protección contra DDoS',
        'Personalización con Lambda@Edge y CloudFront Functions',
        'Certificados SSL/TLS integrados'
      ]
    },
    {
      id: 3,
      title: 'Amazon Route 53',
      description: 'Route 53 es un servicio DNS web escalable y de alta disponibilidad. Se puede utilizar para registrar nombres de dominio, enrutar el tráfico a recursos y comprobar el estado de los recursos.',
      features: [
        'Registro de dominios',
        'Enrutamiento de tráfico',
        'Comprobaciones de estado',
        'Integración con otros servicios de AWS',
        'Registros DNS privados para VPC'
      ]
    },
    {
      id: 4,
      title: 'AWS Certificate Manager',
      description: 'AWS Certificate Manager (ACM) te permite aprovisionar, administrar e implementar fácilmente certificados SSL/TLS para su uso con los servicios de AWS y tus recursos internos conectados.',
      features: [
        'Certificados SSL/TLS gratuitos',
        'Renovación automática',
        'Integración con CloudFront y ALB',
        'Validación de dominio',
        'Administración centralizada de certificados'
      ]
    },
    {
      id: 5,
      title: 'CloudFront Functions',
      description: 'Las funciones de CloudFront permiten ejecutar JavaScript ligero en los bordes de CloudFront, lo que permite personalizar el contenido entregado a los usuarios sin servidores ni infraestructura adicional.',
      features: [
        'Manipulación de solicitudes y respuestas HTTP',
        'Redirección de rutas para SPAs',
        'Generación de respuestas HTTP personalizadas',
        'Bajo costo y alta escala',
        'Tiempo de ejecución limitado pero eficiente'
      ]
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Nuestros Servicios</h1>
      
      <section className="page-section">
        <p>
          En este workshop aprenderás a utilizar los siguientes servicios de AWS para implementar 
          sitios web estáticos y aplicaciones de una sola página (SPA) de manera eficiente, segura 
          y con alto rendimiento.
        </p>
      </section>
      
      <section className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Características:</h4>
            <ul style={{ marginLeft: '1.2rem' }}>
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;