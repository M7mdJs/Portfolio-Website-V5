import React from 'react';
import { FaGithub, FaDiscord } from 'react-icons/fa'; 

const Footer = () => {
 
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080b01] py-6 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <p className="text-sm">&copy; {currentYear} M7md.js. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/SrWitty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-current transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://discord.com/users/1091118468155314306"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-current transition-colors"
          >
            <FaDiscord size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
