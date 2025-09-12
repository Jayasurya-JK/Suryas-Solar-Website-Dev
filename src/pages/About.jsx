import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Target, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const About = () => {
  const { toast } = useToast();

  const handleQuoteClick = () => {
    toast({
      title: "🚧 Quote Request",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make sustainable solar energy accessible and affordable for every Indian household, contributing to a cleaner, greener future."
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To be India's most trusted solar energy partner, empowering communities with clean energy solutions that last generations."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Quality, integrity, innovation, and customer satisfaction drive everything we do. We believe in building lasting relationships."
    }
  ];

  const achievements = [
    { number: "500+", label: "Solar Installations" },
    { number: "10+", label: "Years Experience" },
    { number: "50MW+", label: "Total Capacity Installed" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "MNRE Approved Vendor",
    "Electrical Contractor License",
    "Green Energy Certified"
  ];

  return (
    <>
      <Helmet>
        <title>About Suryas Solar - Leading Solar Energy Provider in India</title>
        <meta name="description" content="Learn about Suryas Solar's mission to provide sustainable and affordable solar energy solutions across India. 10+ years of experience, 500+ satisfied customers." />
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
              About <span className="text-[#F39C12]">Suryas Solar</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Pioneering sustainable energy solutions across India with a commitment to 
              quality, innovation, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631]">
                Our Story
              </h2>
              <div className="w-24 h-1.5 bg-[#3498DB]"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2014, Suryas Solar began with a simple yet powerful vision: 
                to make clean, renewable energy accessible to every Indian household. 
                What started as a small team of passionate engineers has grown into 
                one of India's most trusted solar installation companies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the past decade, we've installed solar systems across residential 
                and commercial properties, helping thousands of customers reduce their 
                carbon footprint while saving significantly on electricity bills.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-xl shadow-lg"
            >
              <img alt="Solar installation team working on rooftop" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1660330589505-9a433a742a7b" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2631]/30 to-transparent rounded-xl"></div>
            </motion.div>
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
              Our Mission, Vision & Values
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by our core principles, we're committed to transforming India's energy landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover-lift text-center"
              >
                <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1B2631] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              Our Achievements
            </h2>
             <div className="section-divider"></div>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#F39C12] mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
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
              Our Expert Team
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience in solar energy solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Gupta", role: "Founder & CEO", experience: "15+ years in renewable energy" },
              { name: "Priya Sharma", role: "Technical Director", experience: "12+ years in solar installations" },
              { name: "Amit Kumar", role: "Operations Manager", experience: "10+ years in project management" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover-lift text-center"
              >
                <img alt={`${member.name} - ${member.role}`} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" src="https://images.unsplash.com/photo-1661085724800-b40d4cb238a8" />
                <h3 className="text-xl font-semibold text-[#1B2631] mb-1">{member.name}</h3>
                <p className="text-[#27AE60] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
                Certifications & Credentials
              </h2>
               <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
             
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to quality and safety is reflected in our industry certifications 
                and compliance with national standards.
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#27AE60]" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img alt="ISO 9001 certification badge" className="w-full h-32 object-contain bg-[#F8F9F9] rounded-lg p-4" src="https://images.unsplash.com/photo-1653286978905-15d6315bcdb6" />
              <img alt="MNRE approved vendor certificate" className="w-full h-32 object-contain bg-[#F8F9F9] rounded-lg p-4" src="https://images.unsplash.com/photo-1677545491927-387e39381efd" />
              <img alt="Electrical contractor license" className="w-full h-32 object-contain bg-[#F8F9F9] rounded-lg p-4" src="https://images.unsplash.com/photo-1646754561048-8fcf0bab1ac3" />
              <img alt="Green energy certification" className="w-full h-32 object-contain bg-[#F8F9F9] rounded-lg p-4" src="https://images.unsplash.com/photo-1693730333248-6e0f79b705f2" />
            </motion.div>
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
              Ready to Join Our Solar Family?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the Suryas Solar difference. Get a personalized consultation 
              and discover how we can help you save with solar energy.
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

export default About;