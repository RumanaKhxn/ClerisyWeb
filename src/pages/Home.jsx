import React from 'react';
import HeroSection from '../components/Hero';
import AboutClerisy from '../components/AboutClerisy';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import PatientPortalSection from '../components/PatientPortalSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutClerisy />
      <ServicesSection />
      <TestimonialsSection />
      <PatientPortalSection />
      <ContactSection />
      
    </>
  );
};

export default Home;
