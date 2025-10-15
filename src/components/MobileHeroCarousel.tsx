import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { assetPath } from '../utils/assetPath';

const MobileHeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      image: assetPath('/hero/master.png'),
      route: '/courses/master',
    },
    {
      image: assetPath('/hero/advance.png'),
      route: '/courses/advanced',
    
    },
    {
      image: assetPath('/hero/Basic.png'),
      route: '/courses/basic',
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
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


  // Touch handling for swipe
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
    <section className="relative w-full h-[45vh] sm:h-[50vh] md:h-[55vh] overflow-hidden bg-gray-900">
      {/* Carousel container */}
      <div 
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 z-10'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full z-0'
                : 'opacity-0 translate-x-full z-0'
            }`}
          >
            {/* Background Image with Zoom Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={`Course slide ${index + 1}`}
                className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                  index === currentSlide 
                    ? 'scale-110 opacity-100' 
                    : 'scale-100 opacity-0'
                }`}
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end items-start pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 z-10">
              {/* Join Now Button with zoom-in animation */}
              <button
                onClick={handleJoinNow}
                className={`group relative px-4 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-500 hover:scale-110 overflow-hidden mb-2 sm:mb-0 ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100 delay-300' 
                    : 'opacity-0 scale-75'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-5 text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Join Now
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        ))}

        {/* Slide Indicators - Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-2 bg-pink-500'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows - Hidden on mobile and tablet */}
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute left-6 bottom-28 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-7 w-7 text-white group-hover:text-pink-500 transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute right-6 bottom-28 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="h-7 w-7 text-white group-hover:text-pink-500 transition-colors" />
        </button>


      </div>

      {/* Custom CSS for enhanced animations */}
      <style>{`
        /* Smooth zoom-in animation for images */
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        /* Button pulse animation */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Enhanced glow effect on hover */
        button:hover {
          box-shadow: 0 0 30px rgba(236, 72, 153, 0.6);
          animation: pulse 2s infinite;
        }

        /* Smooth image zoom on active slide */
        .z-10 img {
          animation: zoomIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default MobileHeroCarousel;