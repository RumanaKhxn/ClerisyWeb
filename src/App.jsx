

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderNavigation from './components/HeaderNavigation';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

function App() {
  return (
    <>
      <HeaderNavigation />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
































