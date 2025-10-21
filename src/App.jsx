
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderNavigation from './components/HeaderNavigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;














// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HeaderNavigation from './components/HeaderNavigation';
// import Footer from './components/Footer';

// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <>
//       <HeaderNavigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;













// import { useState } from 'react'
// import './App.css'
// import HeaderNavigation from './components/HeaderNavigation'
// import HeroSection from './components/Hero'
// import AboutClerisy from './components/AboutClerisy'
// import ServicesSection from './components/ServicesSection'
// import TestimonialsSection from './components/TestimonialsSection'
// import ContactSection from './components/ContactSection'
// import Footer from './components/Footer'
 

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <HeaderNavigation /> 
//      <HeroSection />
//      <AboutClerisy />
//      <ServicesSection />
//      <TestimonialsSection />
//      <ContactSection />
//      <Footer />
   
//     </>
//   )
// }

// export default App
