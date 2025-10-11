import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { assetPath } from '../utils/assetPath';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const courses = [
    {
      id: 'basic',
      title: 'Basic Baking Class',
      subtitle: 'Perfect for beginners! Learn cake foundations and decorating essentials.',
      intro: 'Perfect for beginners, our Basic Baking Class teaches the fundamentals of baking. You\'ll learn to create delicious cakes, cookies, brownies, and more with step-by-step guidance.',
      image: assetPath('/photo/Basic.png'),
      link: '/courses/basic',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 'advanced',
      title: 'Advanced Baking Class',
      subtitle: 'Level up your baking skills with advanced frosting, flavor, and design.',
      intro: 'Ready to take your skills to the next level? Our Advanced Baking Class focuses on more complex recipes and techniques. From wedding cakes to buttercream frosting, you\'ll build expert-level skills.',
      image: assetPath('/photo/Advance.png'),
      link: '/courses/advanced',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'master',
      title: 'Master Baking Class',
      subtitle: 'Become a professional baker with complete mastery and certification.',
      intro: 'Our Master Baking Class is designed for those who want to perfect their craft. You will learn professional techniques and create everything from elegant pastries to sophisticated multi-layered cakes.',
      image: assetPath('/photo/Master.png'),
      link: '/courses/master',
      color: 'from-rose-500 to-pink-700'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, courses.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      {/* Background decorative elements - Consistent across all devices */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full blur-md animate-pulse delay-3000"></div>
      </div>

      {/* Main carousel container */}
      <div className="relative w-full h-screen">
        {/* Carousel slides */}
        <div className="relative w-full h-full">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  backgroundImage: `url(${course.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'scroll',
                  minHeight: '100vh',
                  minWidth: '100vw'
                }}
              >
              </div>

              {/* Content overlay */}
              <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Using a scaled container approach for mobile/tablet - centered and properly scaled */}
                  <div className="scale-[0.35] sm:scale-[0.5] md:scale-[0.65] lg:scale-[0.85] xl:scale-100 origin-center">
                    <div className="grid grid-cols-3 gap-12 items-center" style={{ width: '1400px' }}>
                      {/* Left Content */}
                      <div className="col-span-1 space-y-8 animate-fade-up">
                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-white font-bold drop-shadow-lg">5.0 Rating</span>
                        </div>

                        {/* Main headline */}
                        <h1 
                          className="text-6xl font-bold leading-tight text-black"
                          style={{ 
                            fontFamily: 'Playfair Display, serif'
                          }}
                        >
                          {course.title}
                        </h1>

                        {/* Subtitle */}
                        <p 
                          className="text-xl text-amber-800 leading-relaxed max-w-xl font-bold drop-shadow-lg"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {course.subtitle}
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <Link
                            to={course.link}
                            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-brown px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                          >
                            <span>Join Now</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Course info badge */}
                        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 inline-block">
                          <p className="text-sm text-white font-bold">
                            <span className="text-yellow-300 font-semibold">📍 Chennai's</span> Favorite Baking Academy
                          </p>
                        </div>
                      </div>

                      {/* Right Content - Course Introduction */}
                      <div className="col-span-2 flex justify-end items-end animate-fade-up-delay">
                        <div className="w-3/6 bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl mr-8 mb-20">
                          <p className="text-xl text-amber-900 leading-relaxed font-bold" style={{ fontFamily: 'Inter, sans-serif'  }}>
                            {course.intro}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Previous course"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white group-hover:text-yellow-300 transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Next course"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white group-hover:text-yellow-300 transition-colors" />
        </button>

        {/* Course indicator dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full'
                    : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile swipe indicator */}
        <div className="md:hidden absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 text-center text-white/70 text-xs sm:text-sm z-20">
          Swipe to explore courses
        </div>
      </div>

      {/* Custom CSS for animations and background coverage */}
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-up-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out;
        }
        
        .animate-fade-up-delay {
          animation: fade-up-delay 0.8s ease-out 0.3s both;
        }

        /* Adjust background images for mobile and tablet - zoomed out to show full image */
        @media (max-width: 1024px) {
          .absolute.inset-0.w-full.h-full {
            background-size: contain !important;
            background-position: center center !important;
            background-repeat: no-repeat !important;
            min-height: 100vh !important;
            min-height: -webkit-fill-available !important;
          }
        }
        
        /* For tablets - slightly smaller to ensure full visibility */
        @media (min-width: 769px) and (max-width: 1024px) {
          .absolute.inset-0.w-full.h-full {
            background-size: 90% !important;
          }
        }
        
        /* For mobile devices - smaller background to show full image */
        @media (max-width: 768px) {
          .absolute.inset-0.w-full.h-full {
            background-size: 85% !important;
          }
        }
        
        /* For very small mobile devices - even smaller background */
        @media (max-width: 480px) {
          .absolute.inset-0.w-full.h-full {
            background-size: 75% !important;
          }
        }

        /* Fix for iOS Safari viewport height */
        @supports (-webkit-touch-callout: none) {
          .h-screen {
            height: -webkit-fill-available;
          }
        }

        /* Ensure proper scaling on mobile - maintain desktop layout */
        @media (max-width: 640px) {
          /* Extra small mobile devices - scale to 35% */
          .scale-\[0\.35\] {
            transform: scale(0.35) !important;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          /* Small tablets - scale to 50% */
          .sm\:scale-\[0\.5\] {
            transform: scale(0.5) !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          /* Tablets - scale to 65% */
          .md\:scale-\[0\.65\] {
            transform: scale(0.65) !important;
          }
        }

        @media (min-width: 1025px) and (max-width: 1280px) {
          /* Small desktops - scale to 85% */
          .lg\:scale-\[0\.85\] {
            transform: scale(0.85) !important;
          }
        }

        /* Prevent text wrapping and maintain desktop layout */
        .grid.grid-cols-3 {
          white-space: normal;
        }

        /* Ensure content stays centered on mobile */
        @media (max-width: 768px) {
          .relative.z-10 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
