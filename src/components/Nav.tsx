import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the navigation items in an array
  const navItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Incidents', path: '/incidents' },
    { label: 'Locations', path: '/locations' },
    { label: 'Activities', path: '/activities' },
    { label: 'Documents', path: '/documents' },
    { label: 'Cypher AI', path: '/cypher-ai' }
  ];

  return (
    <nav className='flex items-center justify-between px-4 py-6 bg-[#E4E4E780] border-b-2'>
      <div className="logo">
        <img src="/images/logo.svg" alt="" />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 text-[#71717A]">
        {navItems.map((item) => (
          <NavLink 
            key={item.label} // Use label as a unique key
            to={item.path}
            className={({ isActive }) => 
              `text-[#09090B] ${isActive ? 'border-b-4 border-b-[#09090B] font-semibold rounded pb-4' : ''} hover:text-[#09090B] hover:border-b-[#09090B]`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-[#09090B] focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (dropdown) */}
      <div 
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-20 left-0 w-full bg-white text-[#71717A] shadow-lg py-4`}
      >
        {navItems.map((item) => (
          <NavLink 
            key={item.label} 
            to={item.path}
            onClick={() => setIsMenuOpen(false)} // Close the menu when an item is clicked
            className={({ isActive }) => 
              `block text-center py-2 px-4 ${isActive ? 'font-semibold text-[#09090B]' : ''} hover:text-[#09090B]`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Profile Section */}
      <div className='flex gap-4 hidden sm:flex'>
        <img src="/images/notify.svg" alt="" className='hover:opacity-80' />
        <img src="/images/profile.svg" alt="" className='hover:opacity-80' />
        <div className='text-[#71717A]'>
          <p className='font-semibold hover:text-[#09090B]'>Usman Zafar</p>
          <p className='hover:text-[#09090B]'>usmanzafar@gmail.com</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
