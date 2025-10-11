import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assetPath } from '../utils/assetPath';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    assetPath('/hero/Basic.png'),
    assetPath('/hero/advance.png'),
    assetPath('/hero/master.png')
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
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
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen bg-gray-100 overflow-hidden">
      {/* Carousel container */}
      <div 
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

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

        {/* Indicator dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center space-x-2 sm:space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-2.5">
            {images.map((_, index) => (
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

        /* Desktop view - keep original cover behavior */
        @media (min-width: 1025px) {
          section img {
            object-fit: cover !important;
            object-position: center !important;
          }
        }

        /* Tablet view - zoom out to show full image */
        @media (min-width: 769px) and (max-width: 1024px) {
          section img {
            object-fit: contain !important;
            object-position: center !important;
            background-color: #f3f4f6;
          }
        }

        /* Mobile view - zoom out more to show full image */
        @media (max-width: 768px) {
          section img {
            object-fit: contain !important;
            object-position: center !important;
            background-color: #f3f4f6;
          }
        }

        /* Small mobile devices - ensure full visibility */
        @media (max-width: 480px) {
          section img {
            object-fit: contain !important;
            object-position: center !important;
            background-color: #f3f4f6;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;