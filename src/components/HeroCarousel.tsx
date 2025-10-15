import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { assetPath } from '../utils/assetPath';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      image: assetPath('/hero/master.png'),
      route: '/courses/master',
      title: 'Master Baking Class'
    },
    {
      image: assetPath('/hero/advance.png'),
      route: '/courses/advanced',
      title: 'Advanced Baking Class'
    },
    {
      image: assetPath('/hero/Basic.png'),
      route: '/courses/basic',
      title: 'Basic Baking Class'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleJoinNow = () => {
    navigate(slides[currentSlide].route);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right
      prevSlide();
    }
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Carousel container */}
      <div 
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides wrapper with smooth horizontal sliding - Desktop: full width, Mobile/Tablet: show adjacent slides */}
        <div 
          className="flex h-full transition-transform duration-700 ease-out lg:gap-0 gap-4 sm:gap-6 md:gap-8 lg:px-0 px-4 sm:px-6 md:px-8"
          style={{ 
            transform: window.innerWidth >= 1024 
              ? `translateX(-${currentSlide * 100}%)` 
              : `translateX(calc(-${currentSlide * 100}% - ${currentSlide * (window.innerWidth < 640 ? 16 : window.innerWidth < 768 ? 24 : 32)}px))` 
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`lg:min-w-full min-w-[calc(100%-2rem)] sm:min-w-[calc(100%-3rem)] md:min-w-[calc(100%-4rem)] h-full flex-shrink-0 relative lg:rounded-none rounded-2xl overflow-hidden transition-all duration-500 ${
                index === currentSlide 
                  ? 'scale-100 opacity-100 lg:shadow-none shadow-2xl' 
                  : 'scale-95 opacity-60 lg:opacity-100 lg:scale-100'
              }`}
            >
              {/* Desktop: Full cover image */}
              <div className="hidden lg:block w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Mobile/Tablet: Contained image with padding */}
              <div className="lg:hidden w-full h-full bg-white p-4 sm:p-6 md:p-8 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white group-hover:text-pink-500 transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white group-hover:text-pink-500 transition-colors" />
        </button>

        {/* Join Now Button */}
        <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 lg:bottom-28 left-4 sm:left-8 md:left-12 lg:left-16 z-20">
          <button
            onClick={handleJoinNow}
            className="group relative px-5 py-2.5 sm:px-8 sm:py-3.5 md:px-10 md:py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 hover:shadow-3xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-3 text-sm sm:text-base md:text-lg lg:text-xl">
              Join Now
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Indicator dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center space-x-2 sm:space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-2.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full'
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 rounded-full hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile swipe indicator */}
        <div className="md:hidden absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 text-center text-white/80 text-xs sm:text-sm z-20 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          Swipe to explore
        </div>
      </div>

      {/* Custom CSS for smooth animations and responsive images */}
      <style>{`
        /* Fix for iOS Safari viewport height */
        @supports (-webkit-touch-callout: none) {
          .h-screen {
            height: -webkit-fill-available;
          }
        }

        /* Desktop - Full cover */
        @media (min-width: 1025px) {
          section img {
            object-fit: cover !important;
            object-position: center !important;
          }
        }

        /* Tablet - Zoom out to show full image */
        @media (min-width: 769px) and (max-width: 1024px) {
          section img {
            object-fit: contain !important;
            max-width: 100%;
            max-height: 100%;
          }
        }

        /* Mobile - Zoom out more to show full image */
        @media (max-width: 768px) {
          section img {
            object-fit: contain !important;
            max-width: 100%;
            max-height: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;