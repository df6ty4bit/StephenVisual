import React from 'react';
import './Services.css'; // <--- UPDATED IMPORT

const Services = () => {
  const services = [
    {
      title: 'Event Coverage',
      description: 'Comprehensive photography and videography for weddings, corporate events, birthdays, and more. We capture every significant moment.',
      icon: '📸', // Use emoji or an actual icon library like FontAwesome later
    },
    {
      title: 'Professional Photo Editing',
      description: 'Expert retouching, color grading, culling, and photo manipulation to enhance your images to perfection.',
      icon: '✨',
    },
    {
      title: 'Portrait Photography',
      description: 'Stunning individual, family, and group portraits for personal branding, fashion, and memorable keepsakes.',
      icon: '🧑‍🤝‍🧑',
    },
    {
      title: 'Product Photography',
      description: 'High-quality, detailed images of your products optimized for e-commerce, catalogs, and marketing materials.',
      icon: '📦',
    },
    {
      title: 'Album Design',
      description: 'Beautifully designed photo albums that tell your story in a unique and captivating way, preserving memories for a lifetime.',
      icon: '📖',
    },
    {
      title: 'Content Creation (Social Media)',
      description: 'Visual content tailored for your social media channels to boost engagement and brand presence.',
      icon: '📱',
    },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem'}}>
        StephenVisual offers a range of professional photography and editing services to meet your every need.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span style={{fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem'}}>{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
