import React from 'react';
import { assetPath } from '../../utils/assetPath';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Clock, Award } from 'lucide-react';

const MasterCourse: React.FC = () => {
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
            <span className="text-gray-800 font-medium">Master</span>
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
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-10 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm text-pink-700 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>Advanced Level</span>
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">Master Baking Class</h1>
            <p className="text-lg md:text-xl text-gray-700 mt-4 leading-relaxed">
              Our Master Baking Class is designed for those who want to perfect their craft. You will learn professional techniques and create everything from elegant pastries to sophisticated multi-layered cakes.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-200">
                <Calendar className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium text-gray-800">12 days</span>
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
            <img src={assetPath('/img/design.png?v=2')} alt="Master Baking" className="w-full h-[320px] md:h-[420px] object-cover" />
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
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Introduction</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Introduction to Baking</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Outlook on Oven and Its Usage</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Equipment and Ingredients Used</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Cakes & Sponges</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Vanilla Sponge</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Chocolate Sponge</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Black forest Cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Strawberry glaze Cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Chocolate Truffle Cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Tender coconut Cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Two-tier wedding Cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Rosamalai Cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Fondant Theme Cake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Barbie Cake</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Icings</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Whipped Cream Icing</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Butter Cream Icing</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Fondant Icing</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Chocolate Ganache</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Glaze Icing</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Cream Cheese Icing</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Cookies</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Butter Salt Cookies</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Coconut cookie</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Cosak cookie</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Cluten free Cookie</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Desserts</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Brownie</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Jes cakes</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Cupcake</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Tea cake</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Breads & Buns</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Korean cheese buns</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Garlic bread</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Pizza</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Donut</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Coconut bun</span></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Additional Skills</h3>
              <div className="space-y-3 text-gray-800 text-base md:text-lg">
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Puff making veg & non-veg</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Chocolate making: 10 types</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Ice cream 10 varieties</span></div>
                <div className="flex items-start space-x-3"><span className="text-pink-600">🍰</span><span>Macarons (French)</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* COURSE DETAILS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Duration:</span> 12 days</p>
              <p><span className="font-semibold">Type:</span> Hands-on</p>
              <p><span className="font-semibold">Schedule:</span> 10:30 am to 2 pm</p>
              <p><span className="font-semibold">Level:</span> Advanced</p>
              <p><span className="font-semibold">Certificate:</span> Included</p>
            </div>
            <a
              href="https://wa.me/918248477869?text=Hi!%20I%20want%20to%20enroll%20in%20the%20Master%20Baking%20Class."
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

export default MasterCourse;


