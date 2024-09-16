import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  
import pfp from '../assets/pfp.jpg';

const Hero = () => {
  const navigate = useNavigate();  

  const handleAboutClick = () => {
    navigate('/about');  
  };

  return (
    <section className="bg-[#080b01] text-white min-h-screen relative">
      <div className="max-w-6xl mx-auto pt-24 pb-16 px-8 flex flex-col md:flex-row items-center">
        
       
        <div className="md:w-1/2 mb-8 md:mb-0 relative animate-slide-in-left">
          <div className="relative w-3/4 mx-auto">
            <img
              src={pfp}
              alt="M7md.Js"
              className="rounded-none w-full h-auto object-cover relative z-10"
            />
         
            <div className="absolute inset-0 border-[6px] border-green-400 neon-glow rounded-none"></div>
          </div>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-full bg-transparent">
            <div className="absolute inset-0 rounded-none w-full h-full bg-green-400 blur-lg opacity-50"></div>
          </div>
        </div>

       
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-xl mb-2 text-green-400">Hello I'm M7md.Js</h2>
          <h1 className="text-5xl font-bold mb-4 animate-slide-in-right">Web Developer</h1>
          <p className="mb-6 text-gray-400 text-sm">
            Rutrum odio est pretea viverra sed lobortis elit. Eget fringilla tempus suspendisse amet vitae amet lorem erat fermentum. Arcu eu quis mauris est diam eget mulla purus ipsum. Lacinisa accumsan enim amet.
          </p>

          
          <button 
            onClick={handleAboutClick}  
            className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center text-sm neon-button"
          >
            ABOUT ME
            <ArrowRight className="ml-2" size={16} />
          </button>

      
          <div className="mt-8 bg-black bg-opacity-50 p-4 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[#2bff2b] opacity-10 blur-md"></div>
            <div className="grid grid-cols-4 gap-4 relative z-10">
              {[
                { value: '4+', label: 'Years experience' },
                { value: '10+', label: 'Clients' },
                { value: '30+', label: 'Completed projects' },
                { value: '20+', label: 'Achievements' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl font-bold text-[#2bff2b]">{item.value}</h3>
                  <p className="text-xs text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
