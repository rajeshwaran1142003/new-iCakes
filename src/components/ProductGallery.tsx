import React, { useState } from 'react';
import { assetPath } from '../utils/assetPath';
import { ShoppingCart, Heart, Star, Eye, Share2, Clock, Award, Sparkles, ChefHat, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setIsCartOpen(true);
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fusion', name: 'Fusion Cakes' },
    { id: 'truffle', name: 'Truffle Cakes' },
    { id: 'brownies', name: 'Brownies' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'cookies', name: 'Cookies' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'seasonal', name: 'Seasonal Specials' }
  ];

  const products = [
    {
      id: 1,
      name: 'Mango Cheesecake Fusion',
      category: 'fusion',
      price: '₹899',
      rating: 4.9,
      image: assetPath('/product/img1.jpg'),
      description: 'Tropical mango blended with creamy cheesecake layers',
      popular: true,
      preparationTime: '2-3 hours'
    },
    {
      id: 2,
      name: 'Red Velvet Rose',
      category: 'fusion',
      price: '₹799',
      rating: 4.8,
      image: assetPath('/product/img2.jpg'),
      description: 'Classic red velvet with rose-infused cream cheese frosting',
      preparationTime: '2-3 hours'
    },
    {
      id: 3,
      name: 'Dark Chocolate Truffle',
      category: 'truffle',
      price: '₹1299',
      rating: 5.0,
      image: assetPath('/product/img3.jpg'),
      description: 'Rich Belgian dark chocolate with silky truffle layers',
      popular: true,
      preparationTime: '4-5 hours'
    },
    {
      id: 4,
      name: 'White Chocolate Raspberry',
      category: 'truffle',
      price: '₹1399',
      rating: 4.9,
      image: assetPath('/product/img4.jpg'),
      description: 'Delicate white chocolate with fresh raspberry compote',
      preparationTime: '4-5 hours'
    },
    {
      id: 5,
      name: 'Classic Fudge Brownies',
      category: 'brownies',
      price: '₹299',
      rating: 4.7,
      image: assetPath('/product/img5.jpg'),
      description: 'Decadent fudgy brownies with premium cocoa',
      preparationTime: '1-2 hours'
    },
    {
      id: 6,
      name: 'Walnut Crunch Brownies',
      category: 'brownies',
      price: '₹349',
      rating: 4.8,
      image: assetPath('/product/img6.jpg'),
      description: 'Rich brownies loaded with crunchy walnuts',
      preparationTime: '1-2 hours'
    },
    {
      id: 7,
      name: 'Chocolate Orange Fusion',
      category: 'fusion',
      price: '₹849',
      rating: 4.6,
      image: assetPath('/product/img7.jpg'),
      description: 'Chocolate sponge with zesty orange cream filling',
      preparationTime: '2-3 hours'
    },
    {
      id: 8,
      name: 'Caramel Truffle Delight',
      category: 'truffle',
      price: '₹1199',
      rating: 4.9,
      image: assetPath('/product/img8.jpg'),
      description: 'Smooth caramel truffle with salted caramel drizzle',
      preparationTime: '4-5 hours'
    },
    {
      id: 9,
      name: 'Salted Caramel Brownies',
      category: 'brownies',
      price: '₹379',
      rating: 4.8,
      image: assetPath('/product/img9.jpg'),
      description: 'Gooey brownies with salted caramel swirls',
      popular: true,
      preparationTime: '1-2 hours'
    },
    {
      id: 10,
      name: 'Vanilla Bean Cupcakes',
      category: 'cupcakes',
      price: '₹89',
      rating: 4.8,
      image: assetPath('/product/img10.jpg'),
      description: 'Premium vanilla bean cupcakes with buttercream frosting',
      preparationTime: '1 hour'
    },
    {
      id: 11,
      name: 'Chocolate Chip Cookies',
      category: 'cookies',
      price: '₹45',
      rating: 4.9,
      image: assetPath('/product/img11.jpg'),
      description: 'Classic chocolate chip cookies with premium chocolate',
      popular: true,
      preparationTime: '30 mins'
    },
    {
      id: 12,
      name: 'Tiramisu Delight',
      category: 'desserts',
      price: '₹599',
      rating: 4.9,
      image: assetPath('/product/img12.jpg'),
      description: 'Traditional Italian tiramisu with coffee and mascarpone',
      preparationTime: '3-4 hours'
    },
    {
      id: 13,
      name: 'Strawberry Shortcake',
      category: 'desserts',
      price: '₹699',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/5947098/pexels-photo-5947098.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Fresh strawberry shortcake with whipped cream',
      preparationTime: '2-3 hours'
    },
    {
      id: 14,
      name: 'Oreo Cheesecake',
      category: 'desserts',
      price: '₹799',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Creamy cheesecake with crushed Oreo cookies',
      preparationTime: '3-4 hours'
    },
    {
      id: 15,
      name: 'Red Velvet Cupcakes',
      category: 'cupcakes',
      price: '₹99',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Classic red velvet cupcakes with cream cheese frosting',
      preparationTime: '1 hour'
    },
    {
      id: 16,
      name: 'Macarons Assortment',
      category: 'desserts',
      price: '₹399',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3776945/pexels-photo-3776945.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'French macarons in various flavors and colors',
      popular: true,
      preparationTime: '2-3 hours'
    },
    {
      id: 17,
      name: 'Chocolate Chip Cookie Dough',
      category: 'cookies',
      price: '₹55',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Soft and chewy cookie dough with premium chocolate chips',
      preparationTime: '30 mins'
    },
    {
      id: 18,
      name: 'Holiday Special Cake',
      category: 'seasonal',
      price: '₹1499',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Festive holiday cake with seasonal decorations',
      popular: true,
      preparationTime: '4-6 hours'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg animate-pulse">
            <Sparkles className="h-4 w-4" />
            <span>Premium Bakery Products</span>
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Our Delicious
            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every cake tells a story, every bite creates a memory. Explore our carefully 
            crafted collection of premium desserts, from classic favorites to innovative fusion creations.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="bg-pink-100 p-2 rounded-lg">
                <ChefHat className="h-5 w-5 text-pink-600" />
              </div>
              <span className="font-medium">18+ Products</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="bg-pink-100 p-2 rounded-lg">
                <Award className="h-5 w-5 text-pink-600" />
              </div>
              <span className="font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="bg-pink-100 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-pink-600" />
              </div>
              <span className="font-medium">Fresh Daily</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg -translate-y-1'
                  : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                
                {product.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1 animate-bounce">
                    <Star className="h-3 w-3 fill-current" />
                    <span>POPULAR</span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-md">
                    <Heart className="h-4 w-4 text-pink-600" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-md">
                    <Eye className="h-4 w-4 text-pink-600" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-md">
                    <Share2 className="h-4 w-4 text-pink-600" />
                </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-1">
                    {product.name}
                  </h3>
                    <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">{product.preparationTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold text-pink-600">
                    {product.price}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium flex items-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-pink-500 p-4 rounded-full">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Don't see what you're looking for?
              </h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                We specialize in custom cakes for all occasions! From birthday celebrations to wedding cakes, 
                tell us your vision and we'll create something magical just for you.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <h4 className="font-bold text-pink-400 mb-2">Custom Designs</h4>
                  <p className="text-gray-300 text-sm">Personalized cakes for any occasion</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <h4 className="font-bold text-pink-400 mb-2">Fresh Ingredients</h4>
                  <p className="text-gray-300 text-sm">Premium quality ingredients only</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <h4 className="font-bold text-pink-400 mb-2">Expert Craftsmanship</h4>
                  <p className="text-gray-300 text-sm">Handcrafted with love and precision</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918248477869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg text-lg"
                >
                  Custom Order on WhatsApp
                </a>
                <a
                  href="tel:8248477869"
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold transform hover:scale-105 text-lg"
                >
                  Call for Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;