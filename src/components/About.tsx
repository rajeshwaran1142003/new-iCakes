import React from 'react';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Every cake is crafted with love and attention to detail'
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'Certified course provider for your peace of mind'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: '1000+ happy customers across Chennai'
    },
    {
      icon: Sparkles,
      title: 'Premium Ingredients',
      description: 'Only the finest, freshest ingredients in every creation'
    }
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#DCDCDC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                About Ayath_iCakes
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Where Passion Meets 
                <span className="block text-pink-600">Perfection</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Ayath_iCakes, where every bite tells a story of dedication and craftsmanship. 
                Located in Samthariya Nagar, Ambattur, Chennai, we are a certified baking studio that transforms 
                ordinary celebrations into extraordinary memories.
              </p>
            </div>

            <div className="prose prose-lg text-gray-600">
              <p>
                Our journey began with a simple dream—to bring joy through exceptional baking. 
                Today, we're proud to run certified course programs, ensuring quality and trust in every class.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">✨ What Makes Us Special:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Fusion cakes with unique flavor combinations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Rich, decadent Truffle Cakes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Gourmet brownies that melt in your mouth</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Custom designs for every celebration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Premium ingredients sourced locally</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Hygienic preparation with certified standards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Images & Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Baker decorating cake"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Beautiful chocolate truffle cake"
                className="w-full h-48 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;