import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assetPath } from '../utils/assetPath';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header 
      className={`sticky top-0 z-50 shadow-lg transition-all duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={assetPath('/logo.jpg')} 
              alt="Ayath iCakes Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Ayath iCakes</h1>
              <p className="text-xs sm:text-sm text-gray-600">Baking Academy</p>
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
                    : 'text-black hover:text-pink-400'
                }`}
                style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)' }}
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
              className="p-2 text-black transition-colors duration-300"
              style={{ filter: 'drop-shadow(0 1px 2px rgba(255, 255, 255, 0.5))' }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-white/90 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isActiveLink(item.path)
                      ? 'text-pink-600 font-bold'
                      : 'text-black hover:text-pink-400'
                  } px-3 py-2 rounded-lg`}
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