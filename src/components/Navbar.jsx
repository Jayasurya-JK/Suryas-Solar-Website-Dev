import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = () => {
    toast({
      title: "🚧 Quote Request",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const logoColor = isScrolled ? 'text-[#1B2631]' : 'text-white';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 w-full z-[10000] transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F8F9F9]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-16 sm:h-14">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/assets/suryas-logo.jpg" alt="Suryas Solar" className="h-10 w-10 object-cover rounded-full border-2 border-white shadow-md" />
            <div className="block">
              <span className="text-xl font-black text-[#C1509C] uppercase tracking-wide" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '900'}}>SURYAS</span>
              <span className="text-xl font-black text-[#C1509C] uppercase tracking-wide block" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '900'}}>SOLAR</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-[#F39C12]'
                    : isScrolled
                    ? 'text-[#1B2631] hover:text-[#C1509C]'
                    : 'text-[#1B2631] hover:text-[#F39C12]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
             <a href="tel:+917904369094" className={`flex items-center space-x-1 transition-colors ${ isScrolled ? 'text-[#27AE60] hover:text-[#1B2631]' : 'text-[#1B2631] hover:text-[#F39C12]' }`}>
              <Phone className="w-4 h-4" />
              <span className="font-medium">79043 69094</span>
            </a>
            <Button onClick={handleQuoteClick} className="btn-primary">
              Get Free Quote
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-[#1B2631]' : 'text-[#1B2631]'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-4 mb-8 p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded-md font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#F39C12] bg-[#F39C12]/10'
                    : 'text-[#1B2631] hover:text-[#1B2631] hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a href="tel:+917904369094" className="flex items-center space-x-2 text-[#1B2631] mb-3">
                <Phone className="w-4 h-4" />
                <span>79043 69094</span>
              </a>
              <Button onClick={handleQuoteClick} className="w-full btn-primary">
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;