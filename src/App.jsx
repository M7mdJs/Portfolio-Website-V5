import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Project from './components/Project';
import Works from './components/Works'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Loading from './components/Loading'; 

const App = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer); 
    };
  }, []);

  if (loading) {
    return <Loading />; 
  }

  return (
    <Router>
      <div className="bg-[#080b01] text-white min-h-screen">
        <Header className="header" />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<>
              <Helmet>
                <title>M7md.js - Home</title>
              </Helmet>
              <Hero />
              <Services />
              <Project />
            </>} />
            <Route path="/projects" element={<>
              <Helmet>
                <title>M7md.js - Projects</title>
              </Helmet>
              <Works />
            </>} />
            <Route path="/about" element={<>
              <Helmet>
                <title>M7md.js - About</title>
              </Helmet>
              <About />
            </>} />
            <Route path="/contact" element={<>
              <Helmet>
                <title>M7md.js - Contact</title>
              </Helmet>
              <Contact />
            </>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
