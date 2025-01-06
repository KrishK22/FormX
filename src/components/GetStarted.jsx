import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white text-center flex flex-col justify-center items-center h-72 animate__animated animate__fadeIn">
      <h2 className="text-4xl md:text-5xl font-bold mb-5 animate__animated animate__fadeIn animate__delay-1s">Create forms in minutes with FormX AI</h2>
      <p className="text-lg mb-5 animate__animated animate__fadeIn animate__delay-2s">The easiest way to design, create, and deploy customized forms with AI-powered features.</p>
      <a href="#get-started" className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-black hover:text-white transition-transform transform hover:scale-105 shadow-xl">Get Started</a>
    </section>
  );
};

export default Hero;
