import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MapPin, 
  Phone, 
  User, 
  Calendar,
  Search,
  Filter,
  Plus,
  Clock
} from 'lucide-react';

const BloodDonation = () => {
  const [activeTab, setActiveTab] = useState('find');
  const [searchFilters, setSearchFilters] = useState({
    bloodGroup: '',
    location: '',
    urgency: ''
  });

  const [donorData, setDonorData] = useState({
    name: '',
    bloodGroup: '',
    phone: '',
    location: '',
    lastDonation: ''
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  const mockDonors = [
    {
      id: 1,
      name: 'Rahul Sharma',
      bloodGroup: 'O+',
      location: 'Mumbai, Maharashtra',
      phone: '+91 98765 43210',
      lastDonation: '3 months ago',
      rating: 4.9,
      donations: 12
    },
    {
      id: 2,
      name: 'Priya Singh',
      bloodGroup: 'A+',
      location: 'Delhi, NCR',
      phone: '+91 87654 32109',
      lastDonation: '2 months ago',
      rating: 4.8,
      donations: 8
    },
    {
      id: 3,
      name: 'Amit Kumar',
      bloodGroup: 'B-',
      location: 'Bangalore, Karnataka',
      phone: '+91 76543 21098',
      lastDonation: '4 months ago',
      rating: 4.7,
      donations: 15
    }
  ];

  const handleRegisterDonor = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering donor:', donorData);
    // Show success message
    alert('Registration successful! You are now a registered blood donor.');
    setDonorData({ name: '', bloodGroup: '', phone: '', location: '', lastDonation: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blood Donation Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save lives by donating blood or find donors in your area instantly
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('find')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'find'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              <Search className="h-5 w-5 inline mr-2" />
              Find Donors
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'register'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              <Plus className="h-5 w-5 inline mr-2" />
              Become a Donor
            </button>
          </div>
        </motion.div>

        {/* Find Donors Tab */}
        {activeTab === 'find' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Search Filters */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Filter className="h-6 w-6 mr-3 text-red-500" />
                Search Filters
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group
                  </label>
                  <select
                    value={searchFilters.bloodGroup}
                    onChange={(e) => setSearchFilters({...searchFilters, bloodGroup: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={searchFilters.location}
                    onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                    placeholder="Enter city or area"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency
                  </label>
                  <select
                    value={searchFilters.urgency}
                    onChange={(e) => setSearchFilters({...searchFilters, urgency: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Any Time</option>
                    <option value="immediate">Immediate</option>
                    <option value="within-24h">Within 24 Hours</option>
                    <option value="within-week">Within a Week</option>
                  </select>
                </div>
              </div>
              
              <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors shadow-md hover:shadow-lg">
                <Search className="h-5 w-5 inline mr-2" />
                Search Donors
              </button>
            </div>

            {/* Donors List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDonors.map((donor, index) => (
                <motion.div
                  key={donor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-3 rounded-full">
                        <User className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{donor.name}</h3>
                        <p className="text-sm text-gray-600">{donor.donations} donations</p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-lg">
                      {donor.bloodGroup}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{donor.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">Last donation: {donor.lastDonation}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-yellow-500 font-medium">
                        ⭐ {donor.rating}
                      </div>
                      <a
                        href={`tel:${donor.phone}`}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Register as Donor Tab */}
        {activeTab === 'register' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Become a Life Saver
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Register as a blood donor and help save lives in your community
              </p>
              
              <form onSubmit={handleRegisterDonor} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={donorData.name}
                    onChange={(e) => setDonorData({...donorData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group
                  </label>
                  <select
                    required
                    value={donorData.bloodGroup}
                    onChange={(e) => setDonorData({...donorData, bloodGroup: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select your blood group</option>
                    {bloodGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={donorData.phone}
                    onChange={(e) => setDonorData({...donorData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="+91 12345 67890"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    value={donorData.location}
                    onChange={(e) => setDonorData({...donorData, location: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="City, State"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Blood Donation (Optional)
                  </label>
                  <input
                    type="date"
                    value={donorData.lastDonation}
                    onChange={(e) => setDonorData({...donorData, lastDonation: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-red-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Register as Blood Donor
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BloodDonation;