import React from 'react';
import { assetPath } from '../utils/assetPath';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passion-Driven Teaching',
      description: 'Hands-on classes with patient mentoring and real-time feedback'
    },
    {
      icon: Award,
      title: 'Certified Courses',
      description: 'Structured modules with certificate upon completion'
    },
    {
      icon: Users,
      title: 'Learner First',
      description: '1000+ happy learners who improved their baking skills'
    },
    {
      icon: Sparkles,
      title: 'Practical Skills',
      description: 'Master techniques, tools, and baking science you can apply at home'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#DCDCDC' }}>
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-rose-300/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <AnimatedElement animation="zoom-in" delay={100}>
                <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                  About Ayath Baking Studio
                </div>
              </AnimatedElement>
              <AnimatedElement animation="fade-up" delay={200}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Learn the Art of
                  <span className="block text-pink-600">Professional Baking</span>
                </h2>
              </AnimatedElement>
              <AnimatedElement animation="fade-up" delay={300}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Welcome to Ayath Baking Studio—your friendly space to build real baking skills with confidence. 
                  Located in Samthariya Nagar, Ambattur, Chennai, we offer certified baking courses from basics to advanced.
                </p>
              </AnimatedElement>

              {/* Learner badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-pink-700 shadow">Small Batches</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-pink-700 shadow">Hands-on Practice</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-pink-700 shadow">Certificate</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-pink-700 shadow">Mentor Support</span>
              </div>
            </div>

            <div className="prose prose-lg text-gray-600">
              <p>
                Our journey began with a simple dream—to help aspiring bakers learn the craft with clarity and joy. 
                Today, we run structured, certificate courses with small batches, personal attention, and lifetime mentorship.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">✨ What You’ll Learn & Experience</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Foundations: mixing methods, measurements, and oven science</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Sponges, breads, brownies, and pastries—step-by-step</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Frosting, layering, finishing, and presentation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Small batches, hands-on mentoring, and clear notes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Certificate upon completion and home-baker guidance</span>
                </li>
              </ul>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[{n:'1000+',l:'Happy Learners'},{n:'5.0',l:'Avg. Rating'},{n:'3+',l:'Years Teaching'}].map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 text-center shadow">
                    <div className="text-2xl font-bold text-pink-600">{s.n}</div>
                    <div className="text-sm text-gray-600">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="/courses" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold shadow hover:from-pink-600 hover:to-rose-700 transition-transform hover:-translate-y-0.5">Explore Courses</a>
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-pink-500 text-pink-600 font-semibold hover:bg-pink-50">Ask About Batches</a>
              </div>
            </div>
          </div>

          {/* Right Content - Images & Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <AnimatedElement animation="zoom-in" delay={200}>
                <img
                  src={assetPath('/product/img2.jpg')}
                  alt="Baking class showcase – product image 2"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </AnimatedElement>
              <AnimatedElement animation="zoom-in" delay={300}>
                <img
                  src={assetPath('/product/img3.jpg')}
                  alt="Baking class showcase – product image 3"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg mt-8 transition-transform duration-500 hover:scale-105"
                />
              </AnimatedElement>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedElement 
                  key={index}
                  animation="fade-up" 
                  delay={400 + (index * 100)}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;