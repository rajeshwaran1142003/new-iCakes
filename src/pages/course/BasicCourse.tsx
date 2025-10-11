import React from 'react';
import { assetPath } from '../../utils/assetPath';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Clock, Award } from 'lucide-react';

const BasicCourse: React.FC = () => {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#DCDCDC' }}>
      {/* BREADCRUMB + BACK */}
      <div className="bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-sm">
          <nav className="text-gray-500 space-x-2">
            <Link to="/" className="hover:text-pink-600">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-pink-600">Courses</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Basic</span>
          </nav>
          <Link
            to="/courses"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-1.5 text-white font-semibold hover:from-pink-600 hover:to-rose-600 transition"
          >
            Back to Courses
          </Link>
        </div>
      </div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
        {/* decorative shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-10 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm text-pink-700 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>Beginner Friendly</span>
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">Basic Baking Class</h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4 leading-relaxed">
              Perfect for beginners, our Basic Baking Class teaches the fundamentals of baking. You'll learn to create delicious cakes, cookies, brownies, and more with step-by-step guidance.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-200">
                <Calendar className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium text-gray-800">3 days</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-200">
                <Clock className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium text-gray-800">10:30 am – 2 pm</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-200">
                <Award className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium text-gray-800">Certificate</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:-translate-y-1">
            <img src={assetPath('/img/design(4).png?v=2')} alt="Basic Baking" className="w-full h-[320px] md:h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* COURSE CONTENT GRID */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-serif">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Cakes</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Introduction</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Vanilla & Chocolate sponge</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Black forest cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Fruit filler cakes</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Glaze cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Butter scotch cake</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Desserts</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Brownie</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Jar Cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Cup Cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Tea Cake</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:col-span-2 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Cookies</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Coconut Cookies</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Salt Cookies</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Cassak Cookies</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* COURSE DETAILS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Duration:</span> 3 days</p>
              <p><span className="font-semibold">Type:</span> Hands-on</p>
              <p><span className="font-semibold">Schedule:</span> 10:30 am to 2 pm</p>
              <p><span className="font-semibold">Level:</span> Beginner</p>
              <p><span className="font-semibold">Certificate:</span> Included</p>
            </div>
            <a
              href="https://wa.me/918248477869?text=Hi!%20I%20want%20to%20enroll%20in%20the%20Basic%20Baking%20Class."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-white font-semibold hover:from-pink-600 hover:to-rose-600 transition shadow-lg"
            >
              Enroll Now
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default BasicCourse;


