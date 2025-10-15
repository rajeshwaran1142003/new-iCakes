import React from 'react';
import { assetPath } from '../../utils/assetPath';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Clock, Award } from 'lucide-react';
import AnimatedElement from '../../components/AnimatedElement';

const AdvancedCourse: React.FC = () => {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#DCDCDC' }}>
      {/* BREADCRUMB + BACK */}
      <div className="bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between text-xs sm:text-sm flex-wrap gap-2">
          <nav className="text-gray-500 space-x-1.5 sm:space-x-2">
            <Link to="/" className="hover:text-pink-600">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-pink-600">Courses</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Advanced</span>
          </nav>
          <Link
            to="/courses"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-white font-semibold hover:from-pink-600 hover:to-rose-600 transition"
          >
            Back to Courses
          </Link>
        </div>
      </div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-10 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div>
            <AnimatedElement animation="zoom-in" delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm text-pink-700 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                <Sparkles className="h-4 w-4" />
                <span>Intermediate Level</span>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={200}>
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">Advanced Baking Class</h1>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={300}>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-3 sm:mt-4 leading-relaxed">
                Ready to take your skills to the next level? Our Advanced Baking Class focuses on more complex recipes and techniques. From wedding cakes to buttercream frosting, you'll build expert-level skills.
              </p>
            </AnimatedElement>
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <AnimatedElement animation="fade-right" delay={350}>
                <div className="flex items-center space-x-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-200 hover:scale-105 transition-all">
                  <Calendar className="h-4 w-4 text-pink-600" />
                  <span className="text-sm font-medium text-gray-800">7 days</span>
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-right" delay={400}>
                <div className="flex items-center space-x-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-200 hover:scale-105 transition-all">
                  <Clock className="h-4 w-4 text-pink-600" />
                  <span className="text-sm font-medium text-gray-800">10:30 am – 2 pm</span>
                </div>
              </AnimatedElement>
            </div>
          </div>
          <AnimatedElement animation="zoom-in" delay={200}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img src={assetPath('/img/design(5).png?v=2')} alt="Advanced Baking" className="w-full h-[240px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14 lg:py-16">
        {/* WHAT YOU'LL LEARN HEADING */}
        <AnimatedElement animation="fade-right" delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 sm:mb-6 md:mb-8 lg:mb-10">What You'll Learn</h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* COURSE CONTENT GRID */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 font-serif auto-rows-fr">
              <AnimatedElement animation="fade-up" delay={200}>
                <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all h-full flex flex-col">
                  <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl">Cakes</h3>
                  <div className="space-y-2 md:space-y-3 text-gray-800 text-sm md:text-base lg:text-lg flex-grow">
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Introduction</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Vanilla Sponge</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Chocolate Sponge</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Black forest Cake</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Fruit filler Cake</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Chocolate Truffle Cake</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Rasamalai Cake</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Barbie Cake</span></div>
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-up" delay={250}>
                <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all h-full flex flex-col">
                  <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl">Desserts</h3>
                  <div className="space-y-2 md:space-y-3 text-gray-800 text-sm md:text-base lg:text-lg flex-grow">
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Brownie</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Jar Cake</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Cup Cake</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Tea Cake</span></div>
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-up" delay={300}>
                <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all h-full flex flex-col">
                  <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl">Cookies</h3>
                  <div className="space-y-2 md:space-y-3 text-gray-800 text-sm md:text-base lg:text-lg flex-grow">
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Salt Cookies</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Coconut Cookies</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Cassak Cookies</span></div>
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-up" delay={350}>
                <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all h-full flex flex-col">
                  <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl">Breads & Buns</h3>
                  <div className="space-y-2 md:space-y-3 text-gray-800 text-sm md:text-base lg:text-lg flex-grow">
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Coconut Bun</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Garlic Bread</span></div>
                    <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Pizza</span></div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>

          {/* COURSE DETAILS SIDEBAR */}
          <aside className="lg:col-span-1">
          <AnimatedElement animation="fade-left" delay={200}>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Duration:</span> 7 days</p>
                <p><span className="font-semibold">Type:</span> Hands-on</p>
                <p><span className="font-semibold">Schedule:</span> 10:30 am to 2 pm</p>
                <p><span className="font-semibold">Level:</span> Intermediate</p>
                <p><span className="font-semibold">Certificate:</span> Included</p>
              </div>
              <a
                href="https://wa.me/918248477869?text=Hi!%20I%20want%20to%20enroll%20in%20the%20Advanced%20Baking%20Class."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-white font-semibold hover:from-pink-600 hover:to-rose-600 hover:scale-105 transition-all shadow-lg"
              >
                Enroll Now
              </a>
            </div>
          </AnimatedElement>
        </aside>
        </div>
      </section>
    </main>
  );
};

export default AdvancedCourse;


