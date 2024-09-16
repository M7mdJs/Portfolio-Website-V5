import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaNpm, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Portfoliov3 from '../assets/Portfolio-V3.png';
import Portfoliov4 from '../assets/Portfolio-V4.png';
import Economy from '../assets/Economy.png';

const projects = [
  {
    title: 'Portfolio V4',
    image: Portfoliov4,
    alt: 'Portfolio V4',
    github: 'https://github.com/SrWitty/Portfolio-Website-V4',
    website: 'https://sir-witty.pages.dev/',
    npm: null, 
  },
  {
    title: 'Portfolio V3',
    image: Portfoliov3,
    alt: 'Portfolio V3',
    github: 'https://github.com/SrWitty/Portfolio-V3',
    website: 'https://iim7md11.pages.dev/',
    npm: null, 
  },
  {
    title: 'Atox Economy Bot',
    image: Economy,
    alt: 'Atox Economy Bot',
    github: 'https://github.com/SrWitty/Atox-Economy-Bot',
    website: null, 
    npm: null, 
  },
];

const Project = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/projects');
  };

  return (
    <section className="bg-[#080b01] py-16 text-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center"
            >
              <div className="relative bg-[#11110e] shadow-lg rounded-lg overflow-hidden z-10">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex space-x-4 mt-2">
                    {/* GitHub Link */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-green-500"
                      >
                        <FaGithub className="inline-block mr-1" />
                        GitHub
                      </a>
                    )}

                    {/* Website Link */}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-green-500"
                      >
                        <FaExternalLinkAlt className="inline-block mr-1" style={{ color: '#0A66C2' }} />
                        Website
                      </a>
                    )}

                    {/* NPM Link */}
                    {project.npm && (
                      <a
                        href={project.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-green-500"
                      >
                        <FaNpm className="inline-block mr-1" style={{ color: '#CB3837' }} />
                        NPM
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border-[6px] border-green-400 neon-border rounded-lg"></div>
              <div className="absolute inset-0 bg-green-400 blur-lg opacity-50 neon-overlay rounded-lg"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewAllClick}
            className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center text-sm neon-button"
          >
            VIEW ALL
            <FaArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
