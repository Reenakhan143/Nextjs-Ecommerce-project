import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from "react-icons/fa"; // Import the LinkedIn icon

const Footer = () => {
  return (
    <div>
      <footer className='flex-col space-y-10 justify-between m-10 mb-0'>
        <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700'>
          <Link className='hover:text-cyan-500 text-amber-500' href="#">Home</Link>
          <Link className='hover:text-cyan-500 text-amber-500' href="#order">Order</Link>
          <Link className='hover:text-cyan-500 text-amber-500' href="#offer">Offer</Link>
          <Link className='hover:text-cyan-500 text-amber-500' href="#contact">Contact</Link>
        </nav>

        <div className='flex justify-center space-x-5 transition-transform-500 ease-in-out transform hover:scale-105'>
          {/* GitHub Icon */}
          <a href="https://github.com" target='blank' rel='nofollow noopener'>
            <img 
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" 
              alt="GitHub Logo" 
              className="w-8 h-8"
            />
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com" target='blank' rel='nofollow noopener'>
            <FaLinkedin className="text-blue-600 w-8 h-8" />
          </a>
        </div>
        <p className='text-center hover:text-cyan-500 text-amber-400 font-medium mb-8'>2024 Reena khan . All Right Reserved.</p>
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
}

export default Footer;
