import React from 'react';
import { ArrowRight } from 'lucide-react';

const Specialties: React.FC = () => {
  const specialties = [
    {
      title: 'Fusion Cakes',
      description: 'Innovative flavors meet traditional techniques',
      subtitle: 'Perfect for birthdays, anniversaries & celebrations',
      popular: ['Mango Cheesecake', 'Red Velvet Rose', 'Chocolate Orange'],
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1200&q=100',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Truffle Cakes',
      description: 'Rich, luxurious, and irresistibly smooth',
      subtitle: 'Premium Belgian chocolate experiences',
      popular: ['Dark Chocolate', 'White Chocolate Raspberry', 'Caramel Truffle'],
      image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1200&q=100',
      gradient: 'from-amber-700 to-yellow-600'
    },
    {
      title: 'Gourmet Brownies',
      description: 'Fudgy, decadent, and perfectly crafted',
      subtitle: 'Available in individual and party sizes',
      popular: ['Classic Fudge', 'Walnut Crunch', 'Salted Caramel'],
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1200&q=100',
      gradient: 'from-amber-600 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
            Our Specialties
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Signature
            <span className="block text-pink-600">Creations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each specialty is crafted with premium ingredients and years of expertise to deliver 
            unforgettable taste experiences
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/20`}></div>
                <div className="absolute top-4 right-4 bg-white shadow-lg px-3 py-1 rounded-full transform transition-transform duration-300 group-hover:scale-105">
                  <span className="text-sm font-medium text-gray-800">Premium</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{specialty.description}</p>
                  <p className="text-sm text-gray-500">{specialty.subtitle}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Popular Options:</h4>
                  <div className="space-y-2">
                    {specialty.popular.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/918248477869?text=${encodeURIComponent(`👋 Hello Ayath_iCakes!

🎂 I'm interested in ordering: ${specialty.title}

✨ Available Flavors I saw:
${specialty.popular.map(flavor => `• ${flavor}`).join('\n')}

💝 This is for a special celebration

📞 Please help me with:
• Current pricing
• Available sizes
• Customization options
• Delivery information

Thank you! 😊`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group"
                >
                  <span>Order Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Can't decide? Let us help!
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our expert bakers are happy to recommend the perfect cake for your special occasion. 
              Get personalized suggestions based on your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8248477869"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-semibold"
              >
                Call for Consultation
              </a>
              <a
                href="https://wa.me/918248477869"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 font-semibold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;