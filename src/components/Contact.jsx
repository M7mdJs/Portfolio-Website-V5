import React, { useState, useEffect } from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { Helmet } from 'react-helmet'; 

import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'Service_ID',
        'template_id',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'UserID' 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormStatus('Form submitted! Thank you.');
          setShowModal(true);
        },
        (error) => {
          console.log('FAILED...', error);
          setFormStatus('Failed to send the message. Please try again later.');
          setShowModal(true);
        }
      );

    setFormData({ name: '', email: '', message: '' });
  };

  // Close the modal after 3 seconds
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000); // 3 seconds

      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <section id="contact" className="bg-[#080b01] py-16 text-white">
            <Helmet>
        <title>M7md.js - Contact</title> 
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>

        {/* Social Links Section */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://discord.com/users/1091118468155314306"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#5865F2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4752c4] transition duration-200"
          >
            <FaDiscord size={24} className="mr-2" />
            Join Discord
          </a>
          <a
            href="https://twitter.com/SirWitty_1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#1DA1F2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a91da] transition duration-200"
          >
            <FaTwitter size={24} className="mr-2" />
            Follow on X
          </a>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-xl mx-auto bg-[#11110e] p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-[#080b01] text-white focus:ring-green-400 focus:border-green-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-[#080b01] text-white focus:ring-green-400 focus:border-green-400"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-[#080b01] text-white focus:ring-green-400 focus:border-green-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-400 text-black font-semibold py-3 rounded-lg hover:bg-green-500 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-center text-black">{formStatus}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
