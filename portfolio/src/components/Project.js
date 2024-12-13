import React from 'react';

function Service() {
  const projects = [
    {
      title: 'Web Development',
      description: 'Desciption 1',
      img: 'https://via.placeholder.com/300x200.png?text=Project',
      alt: 'Project 1'
    },
    {
      title: 'Mobile App Development',
      description: 'Desciption 2',
      img: 'https://via.placeholder.com/300x200.png?text=Project',
      alt: 'Project 2'
    },
    {
      title: 'UI/UX Design',
      description: 'Desciption 3',
      img: 'https://via.placeholder.com/300x200.png?text=Project',
      alt: 'Project 3'
    },
  ];

  return (
    <div className='service-section bg-gray-100 py-10'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='service-card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center'
            >
              <img src={project.img} alt={project.alt}/>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-600'>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;