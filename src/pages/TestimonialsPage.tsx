import React from 'react';
import Testimonials from '../components/Testimonials';

const TestimonialsPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
        <p className="text-gray-600 mt-2">Hear from learners who took our baking courses.</p>
      </header>
      <Testimonials />
    </main>
  );
};

export default TestimonialsPage;


