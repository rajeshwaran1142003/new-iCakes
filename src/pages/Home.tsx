import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import CoursesBanner from '../components/CoursesBanner';
import Courses from '../components/Courses';
// Removed About and Testimonials to simplify homepage

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: '#DCDCDC' }}>
      {/* Desktop Hero - visible only on desktop (1024px+) */}
      <div className="hidden lg:block">
        <HeroCarousel />
      </div>
      
      <div className="space-y-16 md:space-y-24">
        <CoursesBanner />
        <Courses />
        {/* Focus the homepage on courses and learning content */}
      </div>
    </div>
  );
};

export default Home;