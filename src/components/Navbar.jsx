import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Phone } from 'lucide-react';
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
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#F39C12] rounded-lg flex items-center justify-center">
              <Sun className="w-6 h-6 text-[#1B2631]" />
            </div>
            <span className={`text-xl font-bold ${logoColor}`}>Suryas Solar</span>
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
                    ? 'text-[#1B2631] hover:text-[#27AE60]'
                    : 'text-[#F8F9F9] hover:text-[#F39C12]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
             <a href="tel:+919876543210" className={`flex items-center space-x-1 transition-colors ${ isScrolled ? 'text-[#27AE60] hover:text-[#1B2631]' : 'text-[#F8F9F9] hover:text-[#F39C12]' }`}>
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <Button onClick={handleQuoteClick} className="btn-primary">
              Get Free Quote
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-[#1B2631]' : 'text-[#F8F9F9]'
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
            className="md:hidden bg-[#F8F9F9] rounded-lg shadow-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded-md font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#F39C12] bg-[#F39C12]/10'
                    : 'text-[#1B2631] hover:text-[#27AE60] hover:bg-[#27AE60]/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a href="tel:+919876543210" className="flex items-center space-x-2 text-[#27AE60] mb-3">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
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