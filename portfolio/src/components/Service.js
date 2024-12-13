import React from 'react';

function Service() {
  const services = [
    {
      title: 'Web Development',
      description: 'Build modern, responsive, and efficient websites tailored to your needs.',
      icon: '🌐',
    },
    {
      title: 'Mobile App Development',
      description: 'Create user-friendly mobile applications for iOS and Android platforms.',
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      description: 'Design intuitive and visually appealing user interfaces and experiences.',
      icon: '🎨',
    },
  ];

  return (
    <div className='service-section bg-gray-100 py-10'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              className='service-card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center'
            >
              <div className='service-icon text-4xl mb-4'>{service.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;