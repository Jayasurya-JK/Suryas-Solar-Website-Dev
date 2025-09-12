import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Zap, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const handleQuoteClick = () => {
    toast({
      title: "🚧 Quote Request",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleLearnMore = () => {
    toast({
      title: "🚧 Learn More",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const benefits = [
    { icon: Zap, title: "Reduce Energy Bills", description: "Save up to 90% on electricity costs" },
    { icon: Shield, title: "25-Year Warranty", description: "Long-term protection and peace of mind" },
    { icon: Users, title: "Expert Installation", description: "Certified professionals with 10+ years experience" },
    { icon: Award, title: "Government Subsidies", description: (<>We assist with PM Surya Ghar subsidy claims. Eligible customers can receive government subsidy up to <strong style={{color:'#27AE60'}}>₹78,000</strong>. We handle eligibility checks, documentation and submission for a hassle-free claim.</>) }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Excellent service! Our electricity bill reduced by 85%. Highly recommend Suryas Solar."
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "Professional installation and great customer support. Very satisfied with the solar system."
    },
    {
      name: "Amit Patel",
      location: "Bangalore",
      rating: 5,
      text: "Best investment we made for our home. Clean energy and significant savings every month."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Suryas Solar - Leading Rooftop Solar Installation Provider in India</title>
        <meta name="description" content="Transform your home with sustainable solar energy. Expert rooftop solar installation, maintenance, and consultation services across India. Get your free quote today!" />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1B2631]">
        <div className="absolute inset-0 solar-pattern opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F8F9F9]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Power Your Future with
              <span className="block text-[#F39C12]">Clean Solar Energy</span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              India's trusted solar installation partner. Reduce your electricity bills by up to 90% 
              with our premium rooftop solar solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={handleQuoteClick} className="btn-primary text-lg px-8 py-4">
                Get Free Quote Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={handleLearnMore} className="btn-secondary text-lg px-8 py-4 bg-transparent border-2 border-[#F39C12] text-[#F39C12] hover:bg-[#F39C12] hover:text-[#1B2631]">
                Learn More
              </Button>
            </div>

            <div className="hero-stats grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left relative z-10">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-[#F39C12]">100 kW+</div>
                <div className="text-gray-300 mt-2">Installations</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-[#F39C12]">10+</div>
                <div className="text-gray-300 mt-2">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-[#F39C12]">25</div>
                <div className="text-gray-300 mt-2">Year Warranty</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#F8F9F9] to-transparent pointer-events-none"></div>
      </section>

      <section className="section-padding bg-[#F8F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
              Why Choose Solar Energy?
            </h2>
             <div className="section-divider"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have made the smart switch to solar energy.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover-lift text-center flex flex-col items-center justify-start min-h-[160px]"
              >
                <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1B2631] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{typeof benefit.description === 'string' ? benefit.description : benefit.description}</p>
              </motion.div>
            ))}
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
              Simple 4-Step Process
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Site Feasibility", description: "We assess roof condition, orientation and energy needs to design the right system." },
              { step: "02", title: "Approvals & Registration", description: "MNRE/TNEB registration and e-token processing for subsidy eligibility." },
              { step: "03", title: "Delivery & Installation", description: "Material delivery and professional installation — typically completed within 3–5 days." },
              { step: "04", title: "Commissioning & Subsidy", description: "We submit commissioning documents and apply for subsidy; funds (up to ₹78,000) are released to your bank account." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F9F9] p-6 rounded-xl shadow-soft text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 rounded-full text-white text-2xl font-bold shadow-md" style={{ background: 'linear-gradient(135deg, #27AE60, #3498DB)' }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1B2631] mb-2">{item.title}</h3>
                <p className="text-[#4B5A60]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
              What Our Customers Say
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-600">
              Real experiences from satisfied solar customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover-lift"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F39C12] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-[#1B2631]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
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
              Ready to Start Saving with Solar?
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Get a free consultation and personalized quote for your home. 
              Start your journey to energy independence today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleQuoteClick} className="btn-primary text-lg px-8 py-4">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;