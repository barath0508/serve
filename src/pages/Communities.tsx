import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Heart,
  Search,
  Plus,
  Star,
  Activity,
  Bell,
  UserPlus
} from 'lucide-react';

const Communities = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedCommunity, setSelectedCommunity] = useState<number | null>(null);

  const mockCommunities = [
    {
      id: 1,
      name: 'All India Institute of Medical Sciences',
      location: 'New Delhi',
      members: 2500,
      type: 'Government Hospital',
      description: 'Premier medical institute providing comprehensive healthcare services',
      recentUpdates: [
        'Blood donation drive - January 15th',
        'Free health checkup camp this weekend',
        'New cardiac surgery wing inauguration'
      ],
      isJoined: false,
      rating: 4.8,
      events: 12,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      name: 'Apollo Hospitals Network',
      location: 'Multi-city',
      members: 5200,
      type: 'Private Hospital Chain',
      description: 'Leading healthcare provider with advanced medical technology',
      recentUpdates: [
        'Telemedicine services now available 24/7',
        'Cancer awareness workshop - Feb 5th',
        'New pediatric unit opened in Hyderabad'
      ],
      isJoined: true,
      rating: 4.9,
      events: 18,
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      name: 'Fortis Healthcare',
      location: 'Pan India',
      members: 3800,
      type: 'Private Hospital',
      description: 'Quality healthcare with personalized patient care',
      recentUpdates: [
        'Mental health support groups starting',
        'Vaccination drive for senior citizens',
        'New robotic surgery department'
      ],
      isJoined: false,
      rating: 4.7,
      events: 8,
      image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const communityPosts = [
    {
      id: 1,
      author: 'Dr. Sarah Kumar',
      hospital: 'AIIMS Delhi',
      content: 'Urgent need for O+ blood donors for emergency surgery. Contact blood bank immediately.',
      timestamp: '2 hours ago',
      likes: 45,
      comments: 12,
      isUrgent: true
    },
    {
      id: 2,
      author: 'Apollo Admin',
      hospital: 'Apollo Chennai',
      content: 'Free diabetes screening camp this Saturday from 9 AM to 5 PM. No appointment needed.',
      timestamp: '5 hours ago',
      likes: 78,
      comments: 23,
      isUrgent: false
    }
  ];

  const handleJoinCommunity = (communityId: number) => {
    console.log('Joining community:', communityId);
    // Update join status in real app
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
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-full">
              <Users className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hospital Communities
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hospital communities for updates, support, and collaborative healthcare initiatives
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
              onClick={() => setActiveTab('browse')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'browse'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <Search className="h-5 w-5 inline mr-2" />
              Browse Communities
            </button>
            <button
              onClick={() => setActiveTab('my-communities')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'my-communities'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <Heart className="h-5 w-5 inline mr-2" />
              My Communities
            </button>
          </div>
        </motion.div>

        {/* Browse Communities Tab */}
        {activeTab === 'browse' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search hospitals and communities..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                />
              </div>
            </div>

            {/* Communities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockCommunities.map((community, index) => (
                <motion.div
                  key={community.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <img
                      src={community.image}
                      alt={community.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-700">{community.type}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{community.name}</h3>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{community.location}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {community.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {community.members.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          {community.rating}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {community.events}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {community.recentUpdates.slice(0, 2).map((update, idx) => (
                        <div key={idx} className="text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                          • {update}
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => handleJoinCommunity(community.id)}
                      className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        community.isJoined
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
                      }`}
                    >
                      {community.isJoined ? (
                        <>
                          <UserPlus className="h-4 w-4 inline mr-2" />
                          Joined
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4 inline mr-2" />
                          Join Community
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* My Communities Tab */}
        {activeTab === 'my-communities' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Joined Communities */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="h-6 w-6 mr-3 text-red-500" />
                My Communities
              </h2>
              
              <div className="space-y-4">
                {mockCommunities.filter(c => c.isJoined).map((community) => (
                  <div key={community.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <img
                        src={community.image}
                        alt={community.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{community.name}</h3>
                        <p className="text-sm text-gray-600">{community.members.toLocaleString()} members</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Bell className="h-5 w-5 text-blue-500" />
                      <MessageCircle className="h-5 w-5 text-green-500" />
                      <Activity className="h-5 w-5 text-purple-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Feed */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="h-6 w-6 mr-3 text-blue-500" />
                Recent Updates
              </h2>
              
              <div className="space-y-6">
                {communityPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`p-6 rounded-xl border-l-4 ${
                      post.isUrgent 
                        ? 'bg-red-50 border-red-500' 
                        : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{post.author}</h4>
                        <p className="text-sm text-gray-600">{post.hospital} • {post.timestamp}</p>
                      </div>
                      {post.isUrgent && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          URGENT
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-800 mb-4">{post.content}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <button className="flex items-center hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </button>
                      <button className="flex items-center hover:text-blue-500 transition-colors">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {post.comments}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Communities;