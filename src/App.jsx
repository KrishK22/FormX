import React from 'react';
import Navbar from './components/Navbar';
import GetStarted from './components/GetStarted';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <GetStarted />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
