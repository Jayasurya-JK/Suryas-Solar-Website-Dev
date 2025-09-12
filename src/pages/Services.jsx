import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Settings, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Home,
  Building,
  Factory
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
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

  const mainServices = [
    {
      icon: Sun,
      title: "Solar Panel Installation",
      description: "Complete rooftop solar system installation with premium quality panels and inverters.",
      features: [
        "Site assessment and design",
        "High-efficiency solar panels",
        "Professional installation",
        "Grid connection setup",
        "Performance testing"
      ]
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Comprehensive maintenance services to ensure optimal performance and longevity.",
      features: [
        "Regular cleaning and inspection",
        "Performance monitoring",
        "Component replacement",
        "Preventive maintenance",
        "Emergency repairs"
      ]
    },
    {
      icon: Users,
      title: "Solar Consultation",
      description: "Expert consultation to help you make informed decisions about solar energy.",
      features: [
        "Energy audit and analysis",
        "Custom system design",
        "Financial planning",
        "Subsidy assistance",
        "ROI calculations"
      ]
    }
  ];

  const solarTypes = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Perfect for homes and apartments",
      capacity: "1kW - 10kW",
      savings: "Up to 90%"
    },
    {
      icon: Building,
      title: "Commercial Solar",
      description: "Ideal for offices and businesses",
      capacity: "10kW - 100kW",
      savings: "Up to 85%"
    },
    {
      icon: Factory,
      title: "Industrial Solar",
      description: "Large-scale industrial solutions",
      capacity: "100kW+",
      savings: "Up to 80%"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Reduce Electricity Bills",
      description: "Save up to 90% on your monthly electricity costs with our efficient solar systems."
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "Comprehensive warranty coverage on panels, inverters, and installation workmanship."
    },
    {
      icon: BarChart3,
      title: "Increase Property Value",
      description: "Solar installations can increase your property value by up to 15-20%."
    }
  ];

  const process = [
    { step: "01", title: "Site Assessment" },
    { step: "02", title: "Custom Design" },
    { step: "03", title: "Installation" },
    { step: "04", title: "Grid Connection" },
    { step: "05", title: "Monitoring" }
  ];

  return (
    <>
      <Helmet>
        <title>Solar Services - Installation, Maintenance & Consultation | Suryas Solar</title>
        <meta name="description" content="Comprehensive solar services including rooftop installation, system maintenance, and expert consultation. Residential, commercial, and industrial solar solutions across India." />
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
              Our <span className="text-[#F39C12]">Solar Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Comprehensive solar energy solutions from consultation to installation 
              and ongoing maintenance support.
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
              Complete Solar Solutions
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing maintenance, we provide end-to-end solar services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F9F9] p-8 rounded-xl shadow-md hover-lift"
              >
                <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1B2631] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#27AE60]" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={handleLearnMore} className="w-full mt-6 btn-primary">
                  Learn More
                </Button>
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
              Solutions for Every Need
            </h2>
             <div className="section-divider"></div>
            <p className="text-xl text-gray-600">
              Customized solar systems for residential, commercial, and industrial applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solarTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover-lift text-center"
              >
                <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1B2631] mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capacity:</span>
                    <span className="font-semibold text-[#27AE60]">{type.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Savings:</span>
                    <span className="font-semibold text-[#27AE60]">{type.savings}</span>
                  </div>
                </div>
                <Button onClick={handleQuoteClick} className="w-full mt-6 btn-secondary">
                  Get Quote
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-96 rounded-xl shadow-lg"
            >
              <img alt="Benefits of Solar Energy" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1508515053969-7b94994de552?q=80&w=2070&auto=format&fit=crop" />
            </motion.div>
             <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
                Benefits of Going Solar
              </h2>
               <div className="w-24 h-1.5 bg-[#3498DB] mb-6"></div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#27AE60] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B2631]">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              Our Installation Process
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-600">
              A simple, transparent process from consultation to commissioning.
            </p>
          </motion.div>

          <div className="relative">
             <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-[#3498DB]/50"></div>
             <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1B2631] text-xl font-bold border-4 border-white shadow-md">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-[#1B2631] mb-2">{step.title}</h3>
                  </motion.div>
                ))}
              </div>
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
              Ready to Go Solar?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Get a free consultation and personalized quote for your solar installation. 
              Our experts are ready to help you start saving with solar energy.
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

export default Services;