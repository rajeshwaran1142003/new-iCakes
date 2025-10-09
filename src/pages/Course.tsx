import React from 'react';
import { assetPath } from '../utils/assetPath';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Award, Star, Calendar, Clock, Users, ArrowRight, ChefHat, Zap } from 'lucide-react';

const Course: React.FC = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'basic',
      title: 'Basic Baking Class',
      subtitle: 'Perfect for Beginners',
      duration: '3 Days',
      level: 'Beginner',
      image: assetPath('/img/design(4).png?v=2'),
      description:
        "Perfect for beginners, our Basic Baking Class teaches the fundamentals of baking. You'll learn to create delicious cakes, cookies, brownies, and more with step-by-step guidance.",
      badge: 'Foundational',
      color: {
        primary: 'from-amber-500 to-orange-500',
        secondary: 'from-amber-50 to-orange-50',
        text: 'text-amber-600',
        badge: 'bg-amber-500',
      },
      link: '/courses/basic',
    },
    {
      id: 'master',
      title: 'Master Baking Class',
      subtitle: 'Perfect Your Craft',
      duration: '12 Days',
      level: 'Advanced',
      image: assetPath('/img/design.png?v=2'),
      description:
        'Our Master Baking Class is designed for those who want to perfect their craft. You will learn professional techniques and create everything from elegant pastries to sophisticated multi-layered cakes.',
      badge: 'Most Popular',
      color: {
        primary: 'from-rose-500 to-pink-600',
        secondary: 'from-rose-50 to-pink-50',
        text: 'text-rose-600',
        badge: 'bg-rose-500',
      },
      link: '/courses/master',
      popular: true,
    },
    {
      id: 'advanced',
      title: 'Advanced Baking Class',
      subtitle: 'Take Your Skills to the Next Level',
      duration: '7 Days',
      level: 'Intermediate',
      image: assetPath('/img/design(5).png?v=2'),
      description:
        "Ready to take your skills to the next level? Our Advanced Baking Class focuses on more complex recipes and techniques. From wedding cakes to buttercream frosting, you'll build expert-level skills.",
      badge: 'Advanced Program',
      color: {
        primary: 'from-blue-500 to-cyan-500',
        secondary: 'from-blue-50 to-cyan-50',
        text: 'text-blue-600',
        badge: 'bg-blue-500',
      },
      link: '/courses/advanced',
    },
  ];

  const handleLearnMore = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#DCDCDC' }}>
      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold shadow-md">
              <Sparkles className="h-4 w-4" />
              <span>Professional Baking Education</span>
              <Sparkles className="h-4 w-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Choose Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Learning Journey</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-pink-100">
              Explore structured courses from beginner to master level with hands-on sessions, small batches, and certified curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="tel:8248477869"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-7 py-3 font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Call: 8248477869
              </a>
              <a
                href="https://wa.me/918248477869"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white px-7 py-3 font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-20 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">Why Choose Our
              <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Baking Classes?</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We provide a comprehensive learning experience with expert mentors, hands-on practice, and lifetime guidance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Expert Instructors', icon: <ChefHat className="h-6 w-6" /> },
              { title: 'Certified Programs', icon: <Award className="h-6 w-6" /> },
              { title: 'Small Batch Training', icon: <Users className="h-6 w-6" /> },
              { title: 'Hands-On Learning', icon: <Zap className="h-6 w-6" /> },
              { title: 'Lifetime Support', icon: <Star className="h-6 w-6" /> },
              { title: 'Modern Studio', icon: <Sparkles className="h-6 w-6" /> },
            ].map((f, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-600 mt-1">High-quality, student-first training with practical outcomes.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section id="courses" className="py-16 md:py-24 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>Now Enrolling - Limited Seats</span>
              <Sparkles className="h-4 w-4" />
            </div>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900">Choose Your Course</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-3">Each course builds on the previous one to grow your skills with confidence.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group ${
                  course.popular ? 'ring-4 ring-rose-500 ring-offset-4' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {course.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1 animate-bounce">
                      <Star className="h-3 w-3 fill-current" />
                      <span>MOST POPULAR</span>
                    </div>
                  </div>
                )}

                <div className="relative h-56 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className={`inline-block ${course.color.badge} text-white px-3 py-1 rounded-full text-xs font-bold mb-2`}>{course.badge}</div>
                    <h3 className="text-2xl font-bold text-white leading-tight">{course.title}</h3>
                    <p className="text-pink-100 text-sm">{course.subtitle}</p>
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  <p className="text-gray-600 text-sm leading-relaxed min-h-[66px]">{course.description}</p>

                  <div className="grid grid-cols-3 gap-3">
                    <div className={`bg-gradient-to-br ${course.color.secondary} p-3 rounded-xl text-center group-hover:scale-105 transition-transform duration-300`}>
                      <Calendar className={`h-5 w-5 ${course.color.text} mx-auto mb-1`} />
                      <p className="text-xs text-gray-600 font-medium mb-0.5">Duration</p>
                      <p className="text-sm font-bold text-gray-900">{course.duration}</p>
                    </div>
                    <div className={`bg-gradient-to-br ${course.color.secondary} p-3 rounded-xl text-center group-hover:scale-105 transition-transform duration-300`}>
                      <Clock className={`h-5 w-5 ${course.color.text} mx-auto mb-1`} />
                      <p className="text-xs text-gray-600 font-medium mb-0.5">Daily</p>
                      <p className="text-sm font-bold text-gray-900">3.5 hrs</p>
                    </div>
                    <div className={`bg-gradient-to-br ${course.color.secondary} p-3 rounded-xl text-center group-hover:scale-105 transition-transform duration-300`}>
                      <Users className={`h-5 w-5 ${course.color.text} mx-auto mb-1`} />
                      <p className="text-xs text-gray-600 font-medium mb-0.5">Batch</p>
                      <p className="text-sm font-bold text-gray-900">6-8</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLearnMore(course.link)}
                    className={`w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${course.color.primary} text-white px-6 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;


