import React from 'react';
import HeroSection from '../components/Hero';
import AboutClerisy from '../components/AboutClerisy';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutClerisy />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default Home;
