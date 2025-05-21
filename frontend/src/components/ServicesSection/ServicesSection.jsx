import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  { title: 'Consulting', description: 'Get expert business consulting', path: '/consulting' },
  { title: 'Taxes', description: 'File your taxes with a pro, your way', path: '/taxes' },
  { title: 'Payroll', description: 'Manage your payroll efficiently', path: '/payroll' },
  { title: 'Bookkeeping', description: 'Schedule a bookkeeping consultation', path: '/bookkeeping' },
  { title: 'Business Formation', description: 'Get help with forming your business', path: '/business-formation' },
  { title: 'Auditing', description: 'Comprehensive auditing services', path: '/auditing' },
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesSection;
