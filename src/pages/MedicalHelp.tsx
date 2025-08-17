import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HandHeart, 
  DollarSign, 
  Target, 
  Clock, 
  User,
  MapPin,
  Heart,
  Share,
  Plus,
  TrendingUp,
  Calendar,
  CheckCircle
} from 'lucide-react';

const MedicalHelp = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [donationAmount, setDonationAmount] = useState('');

  const mockCampaigns = [
    {
      id: 1,
      title: 'Help Ravi\'s Heart Surgery',
      patient: 'Ravi Kumar',
      age: 8,
      condition: 'Congenital Heart Disease',
      location: 'Mumbai, Maharashtra',
      targetAmount: 500000,
      raisedAmount: 320000,
      daysLeft: 15,
      story: 'Little Ravi needs urgent heart surgery. His family cannot afford the expensive treatment.',
      image: 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      supporters: 245,
      urgency: 'high'
    },
    {
      id: 2,
      title: 'Cancer Treatment for Priya',
      patient: 'Priya Sharma',
      age: 34,
      condition: 'Breast Cancer',
      location: 'Delhi, NCR',
      targetAmount: 800000,
      raisedAmount: 450000,
      daysLeft: 30,
      story: 'Priya is fighting breast cancer and needs financial support for chemotherapy treatment.',
      image: 'https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      supporters: 189,
      urgency: 'medium'
    },
    {
      id: 3,
      title: 'Kidney Transplant Fund',
      patient: 'Amit Singh',
      age: 45,
      condition: 'Chronic Kidney Disease',
      location: 'Bangalore, Karnataka',
      targetAmount: 1200000,
      raisedAmount: 200000,
      daysLeft: 45,
      story: 'Amit urgently needs a kidney transplant. Help us raise funds for this life-saving surgery.',
      image: 'https://images.pexels.com/photos/3779700/pexels-photo-3779700.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      supporters: 98,
      urgency: 'high'
    }
  ];

  const [newCampaign, setNewCampaign] = useState({
    patientName: '',
    condition: '',
    targetAmount: '',
    story: '',
    location: ''
  });

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      default: return 'bg-green-500';
    }
  };

  const handleDonate = (campaignId: number, amount: string) => {
    console.log('Donating', amount, 'to campaign', campaignId);
    alert(`Thank you for your donation of ₹${amount}!`);
    setDonationAmount('');
  };

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating campaign:', newCampaign);
    alert('Campaign submitted for verification. You will be notified once approved.');
    setNewCampaign({ patientName: '', condition: '', targetAmount: '', story: '', location: '' });
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
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full">
              <HandHeart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Medical & Financial Help
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Support medical campaigns and help families in need of financial assistance for treatment
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total Raised', value: '₹5.2 Crores', icon: TrendingUp, color: 'from-green-500 to-teal-500' },
            { label: 'Active Campaigns', value: '245', icon: HandHeart, color: 'from-blue-500 to-indigo-500' },
            { label: 'Lives Helped', value: '1,200+', icon: Heart, color: 'from-red-500 to-pink-500' },
            { label: 'Success Rate', value: '92%', icon: CheckCircle, color: 'from-purple-500 to-violet-500' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'browse'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              <Heart className="h-5 w-5 inline mr-2" />
              Browse Campaigns
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'create'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              <Plus className="h-5 w-5 inline mr-2" />
              Start Campaign
            </button>
          </div>
        </motion.div>

        {/* Browse Campaigns Tab */}
        {activeTab === 'browse' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {campaign.verified && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          ✓ Verified
                        </span>
                      )}
                      <span className={`${getUrgencyColor(campaign.urgency)} text-white px-3 py-1 rounded-full text-xs font-medium capitalize`}>
                        {campaign.urgency} Priority
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-gray-700">
                        {campaign.daysLeft} days left
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.title}</h3>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm">{campaign.patient}, {campaign.age} years</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{campaign.location}</span>
                    </div>
                    
                    <p className="text-sm text-blue-600 font-medium mb-4">{campaign.condition}</p>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {campaign.story}
                    </p>
                    
                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-gray-900">
                          ₹{campaign.raisedAmount.toLocaleString()}
                        </span>
                        <span className="text-gray-600">
                          of ₹{campaign.targetAmount.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                        <div
                          className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${getProgressPercentage(campaign.raisedAmount, campaign.targetAmount)}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{campaign.supporters} supporters</span>
                        <span>{Math.round(getProgressPercentage(campaign.raisedAmount, campaign.targetAmount))}% funded</span>
                      </div>
                    </div>
                    
                    {/* Donation Input */}
                    <div className="flex space-x-2 mb-4">
                      <input
                        type="number"
                        placeholder="Amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                      <button
                        onClick={() => handleDonate(campaign.id, donationAmount)}
                        disabled={!donationAmount}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Donate
                      </button>
                    </div>
                    
                    {/* Quick Amounts */}
                    <div className="flex space-x-2 mb-4">
                      {['500', '1000', '2000', '5000'].map(amount => (
                        <button
                          key={amount}
                          onClick={() => setDonationAmount(amount)}
                          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          ₹{amount}
                        </button>
                      ))}
                    </div>
                    
                    <button className="w-full bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center">
                      <Share className="h-4 w-4 mr-2" />
                      Share Campaign
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Create Campaign Tab */}
        {activeTab === 'create' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Start a Medical Campaign
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Create a verified campaign to raise funds for medical treatment
              </p>
              
              <form onSubmit={handleCreateCampaign} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newCampaign.patientName}
                    onChange={(e) => setNewCampaign({...newCampaign, patientName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter patient's full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Condition
                  </label>
                  <input
                    type="text"
                    required
                    value={newCampaign.condition}
                    onChange={(e) => setNewCampaign({...newCampaign, condition: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="e.g., Heart Surgery, Cancer Treatment"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Amount (₹)
                  </label>
                  <input
                    type="number"
                    required
                    value={newCampaign.targetAmount}
                    onChange={(e) => setNewCampaign({...newCampaign, targetAmount: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Required amount for treatment"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    value={newCampaign.location}
                    onChange={(e) => setNewCampaign({...newCampaign, location: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="City, State"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient's Story
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={newCampaign.story}
                    onChange={(e) => setNewCampaign({...newCampaign, story: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Tell the patient's story and why help is needed..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit for Verification
                </motion.button>
              </form>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-blue-900 mb-2">Verification Process</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Medical documents will be verified</li>
                  <li>• Identity verification required</li>
                  <li>• Campaign review takes 24-48 hours</li>
                  <li>• Funds are directly transferred to hospital</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MedicalHelp;