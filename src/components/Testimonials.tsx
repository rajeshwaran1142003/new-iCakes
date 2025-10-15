import React, { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya R.',
      location: 'Beginner Batch – Chennai',
      rating: 5,
      text: 'I joined the basic baking class and learned so much in just a few sessions. The hands-on guidance and tips boosted my confidence to bake at home!'
    },
    {
      name: 'Rajesh K.',
      location: 'Advanced Batch Graduate',
      rating: 5,
      text: 'The advanced module was fantastic—especially the science behind techniques. I can now perfect pastries and sponges consistently. Highly recommend these classes!'
    },
    {
      name: 'Sneha M.',
      location: 'Home Baker – Ambattur',
      rating: 5,
      text: 'Structured lessons, supportive mentors, and clear notes. I started taking small baking orders after the course—these classes truly elevated my skills.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Learners' },
    { number: '5.0', label: 'Average Rating' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Mentor Support' }
  ];

  // Simple initials generator for avatar
  const getInitials = (fullName: string) => {
    const parts = fullName.split(' ').filter(Boolean);
    const initials = parts.slice(0, 2).map(p => p[0]?.toUpperCase()).join('');
    return initials || 'A';
  };

  // Carousel ref for small screens
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 'prev' | 'next') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const amount = Math.floor(container.clientWidth * 0.9);
    container.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#DCDCDC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <AnimatedElement animation="zoom-in" delay={100}>
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
              Learner Stories
            </div>
          </AnimatedElement>
          <AnimatedElement animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What Our Learners
              <span className="block text-pink-600">Say About Us</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-up" delay={300}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from happy learners who transformed their baking with our hands-on classes.
            </p>
          </AnimatedElement>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <AnimatedElement key={index} animation="zoom-in" delay={100 + index * 50}>
              <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-gradient-to-br from-pink-400 via-pink-300 to-rose-400" />
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative md:static">
          {/* Mobile carousel controls */}
          <button
            aria-label="Previous testimonial"
            onClick={() => scrollByCard('prev')}
            className="md:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur rounded-full p-2 shadow hover:shadow-md border border-pink-100"
          >
            <ChevronLeft className="h-5 w-5 text-pink-600" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => scrollByCard('next')}
            className="md:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur rounded-full p-2 shadow hover:shadow-md border border-pink-100"
          >
            <ChevronRight className="h-5 w-5 text-pink-600" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none"
          >
            {testimonials.map((testimonial, index) => (
              <AnimatedElement key={index} animation="fade-up" delay={200 + index * 100}>
                <div className="min-w-[85%] snap-center md:min-w-0">
                  <div className="p-[2px] rounded-3xl bg-gradient-to-br from-pink-400 via-rose-400 to-pink-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                    <div className="bg-white rounded-[calc(1.5rem-2px)] p-8 relative h-full">
                    <div className="absolute top-4 right-4 text-pink-200">
                      <Quote className="h-8 w-8" />
                    </div>

                    {/* Avatar + name */}
                    <div className="flex items-center justify-center mb-5">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full grid place-items-center text-pink-700 font-semibold bg-pink-50 border border-pink-100">
                          {getInitials(testimonial.name)}
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 grid place-items-center text-white text-[10px] shadow">
                          <Star className="h-3 w-3 fill-yellow-300 text-yellow-300" />
                        </span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 leading-relaxed mb-6 italic text-center">
                      "{testimonial.text}"
                    </p>

                    {/* Customer Info */}
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>

                    {/* Decorative blob */}
                    <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-10" />
                  </div>
                </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <AnimatedElement animation="fade-up" delay={100}>
          <div className="mt-12 sm:mt-16 px-2 sm:px-0">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
              <div className="max-w-4xl mx-auto">
                <AnimatedElement animation="zoom-in" delay={200}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center leading-tight">
                    Join Our Happy Learners!
                  </h3>
                </AnimatedElement>
                <AnimatedElement animation="fade-up" delay={300}>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-center leading-relaxed px-2">
                    Experience the joy of baking with us and become part of our growing community of
                    skilled home bakers. Your learning journey deserves the best!
                  </p>
                </AnimatedElement>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0">
                  <AnimatedElement animation="zoom-in" delay={400} className="w-full sm:w-auto">
                    <a
                      href="https://wa.me/918248477869"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 shadow-lg text-sm sm:text-base whitespace-nowrap"
                    >
                      Enroll in a Baking Class
                    </a>
                  </AnimatedElement>
                  <AnimatedElement animation="zoom-in" delay={450} className="w-full sm:w-auto">
                    <a
                      href="tel:8248477869"
                      className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-pink-500 text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 font-semibold hover:scale-105 text-sm sm:text-base text-center"
                    >
                      <span className="hidden sm:inline">Call for Course Info: 8248477869</span>
                      <span className="sm:hidden">Call: 8248477869</span>
                    </a>
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Testimonials;