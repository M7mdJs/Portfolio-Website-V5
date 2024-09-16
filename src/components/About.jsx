import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaAward } from 'react-icons/fa';
import { useTransition, animated } from 'react-spring';
import { Helmet } from 'react-helmet';
import { FaGithub, FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa';

import pfp from '../assets/pfp.jpg';

const technologies = {
  'Programming Languages': [
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'PHP', icon: 'https://skillicons.dev/icons?i=php' },
  ],
  'Markup Languages': [
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'Markdown', icon: 'https://skillicons.dev/icons?i=md' },
  ],
  Frameworks: [
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'TailWind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'BootStrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
  ],
  Databases: [
    { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  ],
  Services: [
    { name: 'Replit', icon: 'https://skillicons.dev/icons?i=replit' },
    { name: 'Netlify', icon: 'https://skillicons.dev/icons?i=netlify' },
    { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
  ],
  Others: [
    { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
    { name: 'vscode', icon: 'https://skillicons.dev/icons?i=vscode' },
  ],
};

const About = () => {
  const [activeTab, setActiveTab] = useState('Programming Languages');
  const [direction, setDirection] = useState('left');

  const transitions = useTransition(technologies[activeTab], {
    from: { opacity: 0, transform: direction === 'left' ? 'translate3d(-50%,0,0)' : 'translate3d(50%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: direction === 'left' ? 'translate3d(50%,0,0)' : 'translate3d(-50%,0,0)' },
  });

  const handleTabChange = (tab) => {
    setDirection(activeTab === tab ? 'left' : 'right'); 
    setActiveTab(tab);
  };

  return (
    <section id="about" className="bg-[#080b01] py-16 text-white">
      <Helmet>
        <title>M7md.js - About</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 mb-8 md:mb-0 relative animate-slide-in-left">
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src={pfp}
                alt="Mm7d.js"
                className="w-full h-auto object-cover relative z-10"
              />
              <div className="absolute inset-0 border-4 border-green-400 neon-glow"></div>
              <div className="absolute inset-0 rounded-lg bg-green-400 blur-lg opacity-50"></div>
            </div>
          </div>

        
          <div className="md:w-1/2 px-4">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-[#11110e] p-6 rounded-lg shadow-lg animate-slide-in-right delay-100">
                <div className="text-green-500 mb-4">
                  <FaUser size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-gray-400">
                  I am M7md a passionate developer with a knack for creating intuitive and engaging applications. With experience in various technologies, I aim to build solutions that are both functional and user-friendly.
                </p>
              </div>
              <div className="bg-[#11110e] p-6 rounded-lg shadow-lg animate-slide-in-right delay-300">
                <div className="text-green-500 mb-4">
                  <FaBriefcase size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">My Work</h3>
                <p className="text-gray-400">
                  Over the years, I have worked on numerous projects ranging from web applications to mobile apps. My focus is on leveraging modern technologies to deliver high-quality products that meet the needs of users and clients.
                </p>
              </div>
              <div className="bg-[#11110e] p-6 rounded-lg shadow-lg animate-slide-in-right delay-500">
                <div className="text-green-500 mb-4">
                  <FaAward size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                <p className="text-gray-400">
                  I have been recognized for my contributions to various projects and have received awards for innovative solutions and excellent performance. My dedication to continuous learning and improvement drives my success in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">Technologies I Use</h3>

       
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(technologies).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out ${
                  activeTab === tab
                    ? 'bg-green-400 text-black'
                    : 'bg-[#11110e] text-gray-400 hover:bg-green-400 hover:text-black'
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {transitions((style, tech) => (
              <animated.div key={tech.name} style={style} className="flex flex-col items-center">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                <span className="mt-2 text-sm text-gray-300">{tech.name}</span>
              </animated.div>
            ))}
          </div>
        </div>

     
<div className="mt-12 px-4 text-center">
  <h3 className="text-2xl font-bold mb-4">Social Media</h3>
  <div className="flex justify-center gap-6">
    <a
      href="https://github.com/SrWitty"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-wrapper github"
    >
      <FaGithub size={32} color="#333" className="icon" />
    </a>
    <a
      href="https://www.instagram.com/_m7md_js/"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-wrapper instagram"
    >
      <FaInstagram size={32} color="#C13584" className="icon" />
    </a>
    <a
      href="https://discord.com/users/1091118468155314306"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-wrapper discord"
    >
      <FaDiscord size={32} color="#7289DA" className="icon" />
    </a>
    <a
      href="https://x.com/SirWitty_1"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-wrapper twitter"
    >
      <FaTwitter size={32} color="#1DA1F2" className="icon" />
    </a>
  </div>
</div>
</div>
    </section>
  );
};

export default About;
