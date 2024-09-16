import React from 'react';

const TestimonialCard = ({ name, content }) => (
  <div className="bg-[#11110e] p-6 rounded-lg">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
      <div>
        <h4 className="font-bold text-white">{name}</h4> {/* Added text-white to the name */}
        <div className="text-yellow-500">★★★★★</div>
      </div>
    </div>
    <p className="text-gray-400">{content}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#080b01]"> {/* Set the section background to #080b01 */}
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Listen to my clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard 
          name="Eduardo Vatrres" 
          content="⎓Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl."
        />
        <TestimonialCard 
          name="Bryan" 
          content="⎓Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl."
        />
      </div>
    </section>
  );
};

export default Testimonials;
