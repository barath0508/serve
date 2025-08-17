import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Heart,
  Truck,
  Shield,
  Navigation,
  Users,
  Activity
} from 'lucide-react';

const Emergency = () => {
  const [userLocation, setUserLocation] = useState('Mumbai, Maharashtra');

  const emergencyNumbers = [
    { service: 'Ambulance', number: '108', icon: Truck, color: 'from-red-500 to-red-600' },
    { service: 'Police', number: '100', icon: Shield, color: 'from-blue-500 to-blue-600' },
    { service: 'Fire Brigade', number: '101', icon: AlertTriangle, color: 'from-orange-500 to-orange-600' },
    { service: 'Women Helpline', number: '1091', icon: Users, color: 'from-purple-500 to-purple-600' }
  ];

  const nearbyHospitals = [
    {
      id: 1,
      name: 'Apollo Hospital',
      address: 'Tardeo, Mumbai',
      distance: '2.3 km',
      phone: '+91 22 6678 1000',
      emergency: true,
      beds: 45,
      rating: 4.8,
      specialties: ['Emergency', 'Cardiology', 'Neurology']
    },
    {
      id: 2,
      name: 'Fortis Hospital',
      address: 'Mulund, Mumbai',
      distance: '3.8 km',
      phone: '+91 22 6754 3000',
      emergency: true,
      beds: 32,
      rating: 4.6,
      specialties: ['Emergency', 'Orthopedics', 'ICU']
    },
    {
      id: 3,
      name: 'Lilavati Hospital',
      address: 'Bandra West, Mumbai',
      distance: '5.1 km',
      phone: '+91 22 2640 0000',
      emergency: true,
      beds: 28,
      rating: 4.7,
      specialties: ['Emergency', 'Surgery', 'Pediatrics']
    }
  ];

  const emergencyContacts = [
    { name: 'John Doe (Father)', phone: '+91 98765 43210', relation: 'Father' },
    { name: 'Jane Doe (Mother)', phone: '+91 87654 32109', relation: 'Mother' },
    { name: 'Dr. Sarah Kumar', phone: '+91 98765 12345', relation: 'Family Doctor' }
  ];

  const firstAidTips = [
    {
      title: 'Heart Attack',
      steps: [
        'Call 108 immediately',
        'Keep the person calm and seated',
        'Loosen tight clothing',
        'Give aspirin if available and not allergic'
      ],
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Choking',
      steps: [
        'Stand behind the person',
        'Place arms around their waist',
        'Make a fist and place it above navel',
        'Perform quick upward thrusts'
      ],
      icon: AlertTriangle,
      color: 'text-orange-500'
    },
    {
      title: 'Severe Bleeding',
      steps: [
        'Apply direct pressure to wound',
        'Elevate the injured area if possible',
        'Use clean cloth or bandage',
        'Call for medical help immediately'
      ],
      icon: Activity,
      color: 'text-red-600'
    }
  ];

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleGetDirections = (hospitalName: string) => {
    alert(`Opening directions to ${hospitalName}...`);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Location:', position.coords);
          alert('Location updated successfully!');
        },
        (error) => {
          alert('Location access denied. Please allow location access for better emergency services.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
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
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full animate-pulse">
              <Phone className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Emergency Help
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Get immediate access to emergency services, nearby hospitals, and first aid guidance
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span>{userLocation}</span>
            <button
              onClick={getCurrentLocation}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              Update Location
            </button>
          </div>
        </motion.div>

        {/* Emergency Numbers */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyNumbers.map((emergency, index) => {
              const Icon = emergency.icon;
              return (
                <motion.div
                  key={emergency.service}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEmergencyCall(emergency.number)}
                  className="cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${emergency.color} p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8" />
                      <span className="text-2xl font-bold">{emergency.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{emergency.service}</h3>
                    <p className="text-sm opacity-90 mt-2">Tap to call immediately</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Nearby Hospitals */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-red-500" />
                Nearby Emergency Hospitals
              </h2>
              
              <div className="space-y-4">
                {nearbyHospitals.map((hospital, index) => (
                  <motion.div
                    key={hospital.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-gray-900">{hospital.name}</h3>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            {hospital.beds} beds
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{hospital.address}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span>⭐ {hospital.rating}</span>
                          <span>{hospital.distance} away</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {hospital.specialties.map(specialty => (
                            <span key={specialty} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEmergencyCall(hospital.phone)}
                        className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </button>
                      <button
                        onClick={() => handleGetDirections(hospital.name)}
                        className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Directions
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Emergency Contacts & First Aid */}
          <div className="space-y-8">
            {/* Emergency Contacts */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-blue-500" />
                Emergency Contacts
              </h2>
              
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{contact.name}</h4>
                      <p className="text-sm text-gray-600">{contact.relation}</p>
                    </div>
                    <button
                      onClick={() => handleEmergencyCall(contact.phone)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* First Aid Tips */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="h-6 w-6 mr-3 text-green-500" />
                Quick First Aid Tips
              </h2>
              
              <div className="space-y-4">
                {firstAidTips.map((tip, index) => {
                  const Icon = tip.icon;
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon className={`h-5 w-5 ${tip.color}`} />
                        <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                      </div>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                        {tip.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-semibold text-yellow-800">Important Note</h4>
                </div>
                <p className="text-sm text-yellow-700">
                  These are basic first aid tips. Always call emergency services immediately in serious situations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 24/7 Support */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
        >
          <Clock className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency Support</h2>
          <p className="text-xl text-blue-100 mb-6">
            Our emergency services are available round the clock to help you in critical situations
          </p>
          <button
            onClick={() => handleEmergencyCall('108')}
            className="bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Phone className="h-6 w-6 inline mr-2" />
            Call Emergency Now - 108
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Emergency;