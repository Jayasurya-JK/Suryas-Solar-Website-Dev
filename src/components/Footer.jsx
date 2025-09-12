import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleQuoteClick = () => {
    toast({
      title: "🚧 Quote Request",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleSocialClick = () => {
    toast({
      title: "🚧 Social Media",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-[#1B2631] text-[#F8F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#F39C12] rounded-lg flex items-center justify-center">
                <Sun className="w-6 h-6 text-[#1B2631]" />
              </div>
              <span className="text-xl font-bold">Suryas Solar</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of sustainable rooftop solar solutions in India. 
              Empowering homes and businesses with clean, affordable energy.
            </p>
            <div className="flex space-x-4">
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-[#27AE60] transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-[#27AE60] transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-[#27AE60] transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-[#27AE60] transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-[#F39C12]">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-[#27AE60] transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-[#27AE60] transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-[#27AE60] transition-colors text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="block text-gray-300 hover:text-[#27AE60] transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-[#27AE60] transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-[#F39C12]">Our Services</span>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Solar Panel Installation</p>
              <p className="text-gray-300 text-sm">System Maintenance</p>
              <p className="text-gray-300 text-sm">Energy Consultation</p>
              <p className="text-gray-300 text-sm">Grid Connection</p>
              <p className="text-gray-300 text-sm">Performance Monitoring</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-[#F39C12]">Contact Us</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#27AE60]" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#27AE60]" />
                <span className="text-gray-300 text-sm">info@suryassolar.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#27AE60] mt-1" />
                <span className="text-gray-300 text-sm">
                  123 Solar Street, Green City,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
            <Button onClick={handleQuoteClick} className="w-full btn-primary mt-4">
              Get Free Quote
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Suryas Solar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm hover:text-[#27AE60] cursor-pointer">Privacy Policy</span>
            <span className="text-gray-400 text-sm hover:text-[#27AE60] cursor-pointer">Terms of Service</span>
            <span className="text-gray-400 text-sm hover:text-[#27AE60] cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;