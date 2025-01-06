import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center bg-white">
      <h2 className="text-3xl mb-5 font-semibold">Contact Us</h2>
      <p className="text-lg mb-5">If you have any questions, feel free to reach out.</p>
      <a href="mailto:contact@formx.ai" className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition-colors">Email Us</a>
    </section>
  );
};

export default Contact;
