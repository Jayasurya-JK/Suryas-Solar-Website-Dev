import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  Clock,
  TrendingUp,
  Lightbulb,
  DollarSign,
  Leaf
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const handleQuoteClick = () => {
    toast({
      title: "🚧 Quote Request",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleReadMore = () => {
    toast({
      title: "🚧 Read Article",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const categories = [
    { key: 'all', label: 'All Articles', icon: Tag },
    { key: 'tips', label: 'Solar Tips', icon: Lightbulb },
    { key: 'savings', label: 'Cost Savings', icon: DollarSign },
    { key: 'environment', label: 'Environment', icon: Leaf },
    { key: 'technology', label: 'Technology', icon: TrendingUp }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Solar Panel Maintenance Tips for Maximum Efficiency",
      excerpt: "Learn how to maintain your solar panels for optimal performance and longevity. Simple tips that can save you thousands in the long run.",
      category: "tips",
      author: "Rajesh Gupta",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "Solar technician cleaning solar panels on a residential rooftop",
      featured: true
    },
    {
      id: 2,
      title: "How Much Can You Really Save with Solar Energy in India?",
      excerpt: "A comprehensive analysis of solar savings across different Indian cities, including real customer case studies and ROI calculations.",
      category: "savings",
      author: "Priya Sharma",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "Indian family looking at reduced electricity bill with solar panels in background"
    },
    {
      id: 3,
      title: "Solar Energy's Impact on Reducing Carbon Footprint",
      excerpt: "Discover how switching to solar energy can significantly reduce your carbon footprint and contribute to a cleaner environment.",
      category: "environment",
      author: "Amit Kumar",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "Green earth with solar panels and clean energy symbols"
    },
    {
      id: 4,
      title: "Latest Solar Panel Technology Trends in 2024",
      excerpt: "Explore the cutting-edge solar panel technologies that are revolutionizing the renewable energy industry this year.",
      category: "technology",
      author: "Dr. Sunita Patel",
      date: "2024-01-01",
      readTime: "7 min read",
      image: "Modern high-efficiency solar panels with advanced technology features"
    },
    {
      id: 5,
      title: "Government Subsidies and Incentives for Solar Installation",
      excerpt: "Complete guide to available government subsidies, tax benefits, and incentives for solar installations across India.",
      category: "savings",
      author: "Vikash Singh",
      date: "2023-12-28",
      readTime: "10 min read",
      image: "Government building with solar panels and subsidy documents"
    },
    {
      id: 6,
      title: "Choosing the Right Solar Panel Size for Your Home",
      excerpt: "Step-by-step guide to calculate the perfect solar panel system size based on your energy consumption and roof space.",
      category: "tips",
      author: "Meera Joshi",
      date: "2023-12-25",
      readTime: "6 min read",
      image: "Architect measuring rooftop for solar panel installation planning"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Solar Energy Blog - Tips, Savings & Technology | Suryas Solar</title>
        <meta name="description" content="Expert insights on solar energy, maintenance tips, cost savings, and latest technology trends. Learn everything about solar power from India's leading solar experts." />
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
              Solar Energy <span className="text-[#F39C12]">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Expert insights, practical tips, and the latest trends in solar energy 
              to help you make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27AE60] focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all text-sm ${
                    selectedCategory === category.key
                      ? 'bg-[#F39C12] text-[#1B2631]'
                      : 'bg-[#F8F9F9] text-[#1B2631] hover:bg-[#27AE60] hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {featuredPost && (
        <section className="section-padding bg-[#F8F9F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4 text-center">
                Featured Article
              </h2>
              <div className="section-divider"></div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift md:flex"
            >
                <div className="md:w-1/2">
                  <img alt={featuredPost.title} className="w-full h-64 md:h-full object-cover" src="https://images.unsplash.com/photo-1674409357782-ff37369af131" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="px-3 py-1 bg-[#F39C12]/20 text-[#F39C12] rounded-full text-sm font-medium self-start mb-4">
                    Featured
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1B2631] mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4 mt-auto">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4 text-[#27AE60]" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-[#27AE60]" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Button onClick={handleReadMore} className="btn-primary">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2631] mb-4">
              Latest Articles
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-600">
              Stay updated with the latest in solar energy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F9F9] rounded-xl shadow-md overflow-hidden hover-lift flex flex-col"
              >
                <img alt={post.title} className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium self-start mb-3 ${
                      post.category === 'tips' ? 'bg-yellow-100 text-yellow-800' :
                      post.category === 'savings' ? 'bg-green-100 text-green-800' :
                      post.category === 'environment' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                  }`}>
                    {categories.find(cat => cat.key === post.category)?.label}
                  </span>

                  <h3 className="text-xl font-semibold text-[#1B2631] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-[#27AE60]" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <Button onClick={handleReadMore} className="btn-secondary text-sm px-4 py-2">
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-[#F8F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1B2631] rounded-xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#F39C12]">
              Stay Updated with Solar Insights
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Subscribe to our newsletter for the latest solar energy tips, 
              industry news, and exclusive offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); toast({ title: "🚧 Feature not implemented" }); }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-[#1B2631] focus:ring-2 focus:ring-[#F39C12] focus:outline-none"
                required
              />
              <Button type="submit" className="btn-primary">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;