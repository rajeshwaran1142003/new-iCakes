import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assetPath } from '../utils/assetPath';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-pink-200">
              <img src={assetPath('/logo.jpg')} alt="Ayath iCakes Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Ayath iCakes
              </h1>
              <p className="text-xs text-gray-600">Baking Studio</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  isActiveLink(item.path)
                    ? 'text-pink-600 font-bold'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${
                    isActiveLink(item.path) ? 'w-full' : 'w-0'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Actions removed per course-only site */}
          <div className="hidden md:flex items-center space-x-4"></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isActiveLink(item.path)
                      ? 'text-pink-600 font-bold'
                      : 'text-gray-700 hover:text-pink-600'
                  } px-4 py-2 rounded-lg`}
                >
                  {item.name}
                </Link>
              ))}
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}