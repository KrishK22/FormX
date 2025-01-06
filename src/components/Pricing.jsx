import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl mb-10 font-semibold">Pricing</h2>
      <div className="flex justify-center space-x-8">
        <div className="bg-white p-8 rounded-lg shadow-xl w-72 transition-transform hover:scale-105">
          <h3 className="text-2xl mb-4 font-medium">Free</h3>
          <p>Perfect for personal use or small projects.</p>
          <p>Includes basic features and limited templates.</p>
          <a href="#signup" className="bg-black text-white px-6 py-3 rounded-full text-lg mt-4 inline-block hover:bg-gray-800 transition-colors">Sign Up</a>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl w-72 transition-transform hover:scale-105">
          <h3 className="text-2xl mb-4 font-medium">Pro</h3>
          <p>For businesses and advanced users who need more features.</p>
          <p>Unlimited templates, premium AI features, and more.</p>
          <a href="#signup" className="bg-black text-white px-6 py-3 rounded-full text-lg mt-4 inline-block hover:bg-gray-800 transition-colors">Sign Up</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
