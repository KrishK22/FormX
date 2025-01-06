import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20 text-center bg-white">
      <h2 className="text-3xl mb-10 font-semibold">Features</h2>
      <div className="flex justify-around space-x-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-72 transition-transform hover:scale-105">
          <h3 className="text-xl mb-4 font-medium">AI-Driven Form Design</h3>
          <p>Generate forms instantly with AI-based recommendations based on your input.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-72 transition-transform hover:scale-105">
          <h3 className="text-xl mb-4 font-medium">Drag and Drop Interface</h3>
          <p>Easily arrange fields with our intuitive drag-and-drop interface.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-72 transition-transform hover:scale-105">
          <h3 className="text-xl mb-4 font-medium">Customizable Templates</h3>
          <p>Choose from a wide variety of pre-designed templates or create your own from scratch.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
