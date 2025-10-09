import React from 'react';
import { Sparkles } from 'lucide-react';

const CoursesBanner: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 py-3 md:py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleClick}
          className="w-full flex items-center justify-center space-x-3 text-white hover:scale-105 transition-transform duration-300"
        >
          <Sparkles className="h-5 w-5 animate-pulse" />
          <span className="font-bold text-sm sm:text-base md:text-lg">
            New Baking Classes Enrolling Now! Limited Spots – Book Today!
          </span>
          <Sparkles className="h-5 w-5 animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default CoursesBanner;
