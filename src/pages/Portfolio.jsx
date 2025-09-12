import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Zap, 
  Calendar, 
  TrendingUp, 
  ArrowRight,
  Filter,
  Home,
  Building,
  Factory
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { toast } = useToast();

  const handleQuoteClick = () => {
    toast({
      title: "🚧 Quote Request",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleViewDetails = () => {
    toast({
      title: "🚧 Project Details",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Solar Installation",
      location: "Bandra, Mumbai",
      type: "residential",
      capacity: "8.5 kW",
      savings: "₹85,000/year",
      completion: "2024",
      description: "Complete rooftop solar solution for a luxury villa with battery backup system.",
      image: "Modern luxury villa with solar panels covering the entire rooftop"
    },
    {
      id: 2,
      title: "Corporate Office Complex",
      location: "Gurgaon, Delhi",
      type: "commercial",
      capacity: "150 kW",
      savings: "₹18,00,000/year",
      completion: "2024",
      description: "Large-scale commercial solar installation for a multi-story office complex.",
      image: "Large commercial building with extensive solar panel installation on rooftop"
    },
    {
      id: 3,
      title: "Manufacturing Plant Solar Farm",
      location: "Pune, Maharashtra",
      type: "industrial",
      capacity: "500 kW",
      savings: "₹60,00,000/year",
      completion: "2023",
      description: "Industrial-scale solar installation for a manufacturing facility.",
      image: "Industrial manufacturing plant with large solar panel arrays"
    },
    {
      id: 4,
      title: "Residential Apartment Complex",
      location: "Whitefield, Bangalore",
      type: "residential",
      capacity: "25 kW",
      savings: "₹2,50,000/year",
      completion: "2024",
      description: "Community solar project for a residential apartment complex.",
      image: "Modern apartment complex with solar panels on multiple building rooftops"
    },
    {
      id: 5,
      title: "Shopping Mall Solar Installation",
      location: "Koramangala, Bangalore",
      type: "commercial",
      capacity: "200 kW",
      savings: "₹24,00,000/year",
      completion: "2023",
      description: "Comprehensive solar solution for a major shopping mall.",
      image: "Large shopping mall with solar panels covering the entire rooftop area"
    },
    {
      id: 6,
      title: "Farmhouse Solar System",
      location: "Lonavala, Maharashtra",
      type: "residential",
      capacity: "12 kW",
      savings: "₹1,20,000/year",
      completion: "2024",
      description: "Off-grid solar system for a farmhouse with energy storage.",
      image: "Beautiful farmhouse surrounded by greenery with solar panels on the roof"
    }
  ];

  const stats = [
    { label: "Total Projects", value: "500+", icon: TrendingUp },
    { label: "Total Capacity", value: "50 MW+", icon: Zap },
    { label: "Annual Savings", value: "₹50 Cr+", icon: TrendingUp },
    { label: "CO₂ Reduced", value: "25,000 tons", icon: TrendingUp }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Filter },
    { key: 'residential', label: 'Residential', icon: Home },
    { key: 'commercial', label: 'Commercial', icon: Building },
    { key: 'industrial', label: 'Industrial', icon: Factory }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <>
      <Helmet>
        <title>Solar Installation Portfolio - Successful Projects | Suryas Solar</title>
        <meta name="description" content="Explore our portfolio of successful solar installations across India. Residential, commercial, and industrial solar projects with proven results and customer satisfaction." />
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
              Our <span className="text-[#F39C12]">Solar Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Showcasing successful solar installations across India with proven results 
              and satisfied customers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#F39C12] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#F8F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-[#F39C12] text-[#1B2631] shadow-lg'
                    : 'bg-white text-[#1B2631] hover:bg-[#27AE60] hover:text-white'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                <span>{filter.label}</span>
              </button>
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
              Featured Projects
            </h2>
             <div className="section-divider"></div>
            <p className="text-xl text-gray-600">
              Real installations, real results, real customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover-lift"
              >
                <div className="relative h-48">
                  <img alt={project.title} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.type === 'residential' ? 'bg-blue-100 text-blue-800' :
                      project.type === 'commercial' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B2631] mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1 text-[#27AE60]" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center text-[#27AE60] mb-1">
                        <Zap className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Capacity</span>
                      </div>
                      <div className="font-semibold text-[#1B2631]">{project.capacity}</div>
                    </div>
                    <div>
                      <div className="flex items-center text-[#27AE60] mb-1">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Annual Savings</span>
                      </div>
                      <div className="font-semibold text-[#1B2631]">{project.savings}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">Completed {project.completion}</span>
                    </div>
                    <Button onClick={handleViewDetails} className="btn-secondary text-sm px-4 py-2">
                      View Details
                    </Button>
                  </div>
                </div>
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
              Success Stories
            </h2>
             <div className="section-divider"></div>
            <p className="text-xl text-gray-600">
              Real impact, real savings, real customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "90%", label: "Average Bill Reduction" },
              { metric: "5-7 years", label: "Payback Period" },
              { metric: "98%", label: "Customer Satisfaction" }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F9F9] p-8 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl font-bold text-[#F39C12] mb-2">{story.metric}</div>
                <h3 className="text-xl font-semibold text-[#1B2631] mb-3">{story.label}</h3>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Let us help you create your own solar success story. Get a free consultation 
              and see how much you can save with solar energy.
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

export default Portfolio;