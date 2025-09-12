import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight,
  MessageSquare,
  User,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleQuoteClick = () => {
    toast({
      title: "🚧 Quote Request",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Contact Form",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", details: ["+91 98765 43210"], description: "Call for immediate assistance" },
    { icon: Mail, title: "Email", details: ["info@suryassolar.com"], description: "Send queries anytime" },
    { icon: MapPin, title: "Address", details: ["123 Solar Street, Mumbai"], description: "Visit for consultation" },
    { icon: Clock, title: "Business Hours", details: ["Mon - Sat: 9am - 6pm"], description: "We're here for you" }
  ];

  const offices = [
    {
      city: "Mumbai HQ",
      address: "123 Solar Street, Green City, Mumbai, Maharashtra 400001",
      phone: "+91 98765 43210",
      email: "mumbai@suryassolar.com"
    },
    {
      city: "Delhi Office",
      address: "456 Energy Avenue, Green Park, New Delhi 110016",
      phone: "+91 87654 32109",
      email: "delhi@suryassolar.com"
    },
    {
      city: "Bangalore Office",
      address: "789 Solar Plaza, Koramangala, Bangalore, Karnataka 560034",
      phone: "+91 76543 21098",
      email: "bangalore@suryassolar.com"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Suryas Solar - Get Free Solar Consultation | Phone, Email, Address</title>
        <meta name="description" content="Contact Suryas Solar for free solar consultation. Call +91 98765 43210, email info@suryassolar.com, or visit our offices in Mumbai, Delhi, and Bangalore." />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-[#1B2631] text-[#F8F9F9] overflow-hidden">
        <div className="absolute inset-0 solar-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Contact <span className="text-[#F39C12]">Us</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Ready to start your solar journey? Get in touch with our experts 
              for a free consultation and personalized quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
              Get in Touch
            </h2>
             <div className="section-divider"></div>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for your solar energy needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F9F9] p-6 rounded-xl shadow-md hover-lift text-center"
              >
                <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1B2631] mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#1B2631] mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27AE60] focus:border-transparent" placeholder="Your Full Name *" required />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27AE60] focus:border-transparent" placeholder="Your Email Address *" required />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27AE60] focus:border-transparent" placeholder="Your Phone Number *" required />
                </div>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27AE60] focus:border-transparent" placeholder="Subject" />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27AE60] focus:border-transparent" placeholder="Tell us about your requirements... *" required></textarea>
                </div>
                <Button type="submit" className="w-full btn-primary text-lg py-3">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#1B2631] mb-4">Find Us</h3>
                <div className="h-96 bg-gray-200 rounded-lg">
                  <img alt="Map showing Suryas Solar office locations" className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1672717657137-ef4f359d27d9" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
              Our Office Locations
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-600">
              Visit us at any of our convenient locations across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F9F9] p-6 rounded-xl shadow-md hover-lift"
              >
                <h3 className="text-xl font-bold text-[#1B2631] mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#27AE60] mt-1 shrink-0" />
                    <p className="text-gray-700">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#27AE60]" />
                    <p className="text-gray-700">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#27AE60]" />
                    <p className="text-gray-700">{office.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#3498DB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Don't wait! Contact us today for a free consultation and discover 
              how much you can save with solar energy.
            </p>
            <Button onClick={handleQuoteClick} className="btn-primary text-lg px-8 py-4">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;