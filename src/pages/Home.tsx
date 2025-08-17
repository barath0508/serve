import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  HandHeart, 
  Pill, 
  FileText, 
  Stethoscope,
  Phone,
  Shield,
  Clock,
  MapPin,
  Star,
  TrendingUp,
  Activity
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      title: 'Blood Donation Connect',
      description: 'Register as a donor or find blood donors near you instantly',
      icon: Heart,
      path: '/blood-donation',
      color: 'from-red-500 to-pink-500',
      stats: '10,000+ Active Donors'
    },
    {
      title: 'Hospital Communities',
      description: 'Join hospital communities for support and updates',
      icon: Users,
      path: '/communities',
      color: 'from-blue-500 to-indigo-500',
      stats: '500+ Communities'
    },
    {
      title: 'Medical & Financial Help',
      description: 'Crowdfund medical expenses and get community support',
      icon: HandHeart,
      path: '/medical-help',
      color: 'from-green-500 to-teal-500',
      stats: '₹50L+ Raised'
    },
    {
      title: 'Medicine Reminder',
      description: 'Never miss your medication with smart reminders',
      icon: Pill,
      path: '/medicine-reminder',
      color: 'from-purple-500 to-violet-500',
      stats: '95% Adherence Rate'
    },
    {
      title: 'Health History',
      description: 'Maintain comprehensive digital health records',
      icon: FileText,
      path: '/health-history',
      color: 'from-orange-500 to-yellow-500',
      stats: 'PDF Export Ready'
    },
    {
      title: 'Find Doctors',
      description: 'Discover verified doctors with reviews and ratings',
      icon: Stethoscope,
      path: '/doctor-finder',
      color: 'from-cyan-500 to-blue-500',
      stats: '2,000+ Verified Doctors'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '50,000+', icon: Users },
    { label: 'Lives Saved', value: '5,000+', icon: Heart },
    { label: 'Medical Campaigns', value: '1,200+', icon: HandHeart },
    { label: 'Success Rate', value: '98%', icon: TrendingUp }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="bg-white/20 backdrop-blur-lg p-4 rounded-full">
                <Activity className="h-16 w-16 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Your Digital Health &{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Support Platform
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            >
              Connect for blood donation, join hospital communities, track health, 
              find doctors, and get support from the community - all in one place.
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/blood-donation"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Helping Lives
              </Link>
              <Link
                to="/emergency"
                className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Emergency Help
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-green-500 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Complete Health Ecosystem
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Everything you need for health management and community support
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Link to={feature.path}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                      <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          {feature.stats}
                        </span>
                        <div className="text-blue-600 group-hover:translate-x-1 transition-transform">
                          →
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trusted by Healthcare Professionals
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform ensures the highest standards of data security, 
                privacy protection, and medical accuracy to serve you better.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="text-gray-800 font-medium">End-to-End Encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-800 font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-800 font-medium">Pan-India Network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-600" />
                  <span className="text-gray-800 font-medium">Verified Professionals</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <Activity className="h-24 w-24 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                  <p className="text-blue-100 mb-6">
                    Connect with thousands of people helping each other stay healthy
                  </p>
                  <Link
                    to="/communities"
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;