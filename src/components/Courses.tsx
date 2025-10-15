import React from 'react';
import { assetPath } from '../utils/assetPath';
import { useNavigate, Link } from 'react-router-dom';
import { Clock, Calendar, Award, CheckCircle, Star, ChefHat, Sparkles, ArrowRight, Users } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const Courses: React.FC = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'master',
      title: 'Master Baking Class',
      subtitle: 'Perfect Your Craft',
      duration: '12 Days',
      type: 'Master Program',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Expert',
      image: assetPath('/Master.jpg'),
      description: 'Our Master Baking Class is designed for those who want to perfect their craft. You will learn professional techniques and create everything from elegant pastries to sophisticated multi-layered cakes.',
      highlights: [
        'Multi-layered Cakes & Tiered Wedding Cakes',
        'Advanced Buttercream & Fondant Artistry',
        'Unique Pastries & French Macarons'
      ],
      benefits: [
        'Master certification',
        'Professional portfolio guidance',
        'Lifetime recipe access'
      ],
      popular: false,
      color: {
        primary: 'from-rose-500 to-pink-600',
        secondary: 'from-rose-50 to-pink-50',
        badge: 'bg-rose-500',
        text: 'text-rose-600',
        hover: 'hover:from-rose-600 hover:to-pink-700'
      }
    },
    {
      id: 'advanced',
      title: 'Advanced Baking Class',
      subtitle: 'Take Your Skills to the Next Level',
      duration: '7 Days',
      type: 'Advanced Program',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Advanced',
      image: assetPath('/Advance.jpg'),
      description: 'Ready to take your skills to the next level? Our Advanced Baking Class focuses on more complex recipes and techniques. From wedding cakes to buttercream frosting, you\'ll build expert-level skills.',
      highlights: [
        'Wedding Cakes & Themed Cakes',
        'Fondant Icing & Advanced Decoration',
        'Specialty Cookies & More'
      ],
      benefits: [
        'Advanced certification',
        'Professional recipe collection',
        'Small batch - max 6 students'
      ],
      popular: true,
      color: {
        primary: 'from-blue-500 to-cyan-500',
        secondary: 'from-blue-50 to-cyan-50',
        badge: 'bg-blue-500',
        text: 'text-blue-600',
        hover: 'hover:from-blue-600 hover:to-cyan-600'
      }
    },
    {
      id: 'basic',
      title: 'Basic Baking Class',
      subtitle: 'Perfect for Beginners',
      duration: '3 Days',
      type: 'Foundational Course',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Beginner Friendly',
      image: assetPath('/img/design(4).png?v=2'),
      description: 'Perfect for beginners, our Basic Baking Class teaches the fundamentals of baking. You\'ll learn to create delicious cakes, cookies, brownies, and more with step-by-step guidance.',
      highlights: [
        'Vanilla & Chocolate Sponge Cakes',
        'Brownies & Cupcakes',
        'Coconut Cookies',
        'Tea Cakes & Other Desserts'
      ],
      benefits: [
        'Beginner-friendly curriculum',
        'All ingredients provided',
        'Take-home recipe booklet'
      ],
      popular: false,
      color: {
        primary: 'from-amber-500 to-orange-500',
        secondary: 'from-amber-50 to-orange-50',
        badge: 'bg-amber-500',
        text: 'text-amber-600',
        hover: 'hover:from-amber-600 hover:to-orange-600'
      }
    }
  ];

  const handleLearnMore = (courseId: string) => {
    navigate(`/course/${courseId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-10 md:py-16" style={{ backgroundColor: '#DCDCDC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14 space-y-6">
          <AnimatedElement animation="zoom-in" delay={100}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>Now Enrolling - Limited Seats</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </AnimatedElement>

          <div className="space-y-3 md:space-y-4">
            <AnimatedElement animation="fade-up" delay={200}>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                Join Our Expert Baking Classes –
                <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Master the Art of Baking!
                </span>
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={300}>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the joy of baking with our expertly designed baking courses. Whether you're a beginner or looking to refine your skills, we have the perfect class for you!
              </p>
            </AnimatedElement>
            <div className="pt-4">
              <Link
                to="/courses#courses"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>View All Classes</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <AnimatedElement animation="zoom-in" delay={400}>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <ChefHat className="h-5 w-5 text-pink-600" />
                </div>
                <span className="font-medium">Expert Instructors</span>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="zoom-in" delay={500}>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-pink-600" />
                </div>
                <span className="font-medium">Certified Programs</span>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="zoom-in" delay={600}>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-pink-600" />
                </div>
                <span className="font-medium">Hands-On Training</span>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Vertical, alternating course sections */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {courses.map((course, index) => (
            <div key={course.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
              {/* Text column */}
              <AnimatedElement 
                animation="zoom-in" 
                delay={100}
                className={`${index % 2 === 1 ? 'md:order-2' : ''} px-4 sm:px-0`}
              >
                <div className="inline-block bg-pink-100 text-pink-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">Our Courses</div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                  {course.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className={`h-4 w-4 sm:h-5 sm:w-5 ${course.color.text}`} />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className={`h-4 w-4 sm:h-5 sm:w-5 ${course.color.text}`} />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">Daily 3.5 hrs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className={`h-4 w-4 sm:h-5 sm:w-5 ${course.color.text}`} />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">Batch 6-8</span>
                  </div>
                </div>
                <Link
                  to={`/courses/${course.id}`}
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${course.color.primary} ${course.color.hover} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </AnimatedElement>

              {/* Image column */}
              <AnimatedElement 
                animation="zoom-in" 
                delay={200}
                className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-fill transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 60%)'
                  }}></div>
                </div>
              </AnimatedElement>
            </div>
          ))}
        </div>

        <AnimatedElement animation="zoom-in" delay={100}>
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl mt-16 md:mt-24">
            <div className="max-w-3xl mx-auto space-y-6">
              <AnimatedElement animation="zoom-in" delay={200}>
                <div className="flex justify-center">
                  <div className="bg-pink-500 p-4 rounded-full">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement animation="zoom-in" delay={300}>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Why Choose Ayath iCakes Baking Classes?
                </h3>
              </AnimatedElement>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <AnimatedElement animation="zoom-in" delay={400}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <h4 className="font-bold text-pink-400 mb-2">Small Batch Training</h4>
                    <p className="text-gray-300 text-sm">Maximum 6-8 students per batch for personalized attention and hands-on learning</p>
                  </div>
                </AnimatedElement>
                <AnimatedElement animation="zoom-in" delay={500}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <h4 className="font-bold text-pink-400 mb-2">Certified Course</h4>
                    <p className="text-gray-300 text-sm">Learn from certified professionals in a registered, hygienic baking studio</p>
                  </div>
                </AnimatedElement>
                <AnimatedElement animation="zoom-in" delay={600}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <h4 className="font-bold text-pink-400 mb-2">Lifetime Support</h4>
                    <p className="text-gray-300 text-sm">Get ongoing guidance and recipe updates even after course completion</p>
                  </div>
                </AnimatedElement>
              </div>
              <AnimatedElement animation="zoom-in" delay={700}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="tel:8248477869"
                    className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Call: 8248477869
                  </a>
                  <a
                    href="https://wa.me/918248477869"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Courses;
