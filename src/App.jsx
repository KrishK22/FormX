import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/GetStarted';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
