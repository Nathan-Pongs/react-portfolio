import React from 'react';
import background from '../img/background.jpg';

function Header() {
  const header = [
    {
      title: "About",
      link: "#about"
    },
    {
      title: "Services",
      link: "#service"
    },
    {
      title: "Projects",
      link: "#project"
    },
    {
      title: "Contact",
      link: "#contact"
    },

  ];
  return (
    <div>
      {/* Header Section */}
      <section className='header-container flex flex-col md:flex-row justify-between p-4 md:p-6 bg-[#4078f1] text-white'>
        {/* Logo Section */}
        <div className='logo text-2xl w-full md:w-auto text-center md:text-left'>
          <h1>Soryapongs Than</h1>
        </div>

        {/* Navigation Section */}
        <nav className='navbar w-full md:w-auto mt-4 md:mt-0'>
          <ul className='navbar-container flex flex-col md:flex-row items-center justify-center md:justify-between space-y-2 md:space-y-0 md:space-x-8'>
            {header.map((header, index) => (
              <li key={index}>
                <a href={header.link} className='hover:text-gray-200'>{header.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Hero Section */}
      <section className='hero relative'>
        <div className='relative h-screen w-full'>
          <img
            src={background}
            alt='Background'
            className='absolute inset-0 h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center'>
            <h2 className='text-white text-3xl md:text-5xl font-bold'>
              Soryapongs Than
            </h2>
            <h3 className='pt-[10px] text-white'>Junior developer</h3>
            <div className='flex justify-center mt-[40px]'>
                <button><a href='#projects' className='text-xl bg-[#48e26c] hover:bg-[#29c94e] p-[10px] rounded-xl'>View my projects</a></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;