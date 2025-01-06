import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-10">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">FormX AI</h1>
        <ul className="flex space-x-8">
          <li><a href="#features" className="hover:text-gray-400 transition-colors">Features</a></li>
          <li><a href="#pricing" className="hover:text-gray-400 transition-colors">Pricing</a></li>
          <li><a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
  