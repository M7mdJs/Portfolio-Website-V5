import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faBoxOpen, faHome } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, description, isActive }) => (
  <div className="relative">

    {isActive && (
      <div className="absolute -inset-2 bg-green-500 transform rotate-3 rounded-lg z-0"></div>
    )}
    
   
    <div className="bg-[#11110e] relative p-6 rounded-lg text-center text-gray-400 z-10">
      <div className="text-yellow-400 text-5xl mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>

      <h3 className="text-xl font-bold mb-2 text-gray-200">{title}</h3>

      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="py-16 bg-[#080b01]"> 
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <ServiceCard 
          icon={faPaintBrush} 
          title="Website Developer" 
          description="A morbi felis libero sit sed. Orci duis nascetur orci mi cursus. Ante condimentum in elementum egestas nullam pellentesque volutpat."
        />
        <ServiceCard 
          icon={faBoxOpen} 
          title="Product Design" 
          description="A morbi felis libero sit sed. Orci duis nascetur orci mi cursus. Ante condimentum in elementum egestas nullam pellentesque volutpat."
          isActive={true} 
        />
        <ServiceCard 
          icon={faHome} 
          title="Branding" 
          description="A morbi felis libero sit sed. Orci duis nascetur orci mi cursus. Ante condimentum in elementum egestas nullam pellentesque volutpat."
        />
      </div>
    </section>
  );
}

export default Services;
