import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  MapPin, 
  Star, 
  Phone, 
  Clock, 
  DollarSign,
  Search,
  Filter,
  Calendar,
  Award,
  Users,
  CheckCircle
} from 'lucide-react';

const DoctorFinder = () => {
  const [searchFilters, setSearchFilters] = useState({
    specialization: '',
    location: '',
    availability: '',
    maxFee: ''
  });

  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  const specializations = [
    'Cardiology', 'Dermatology', 'Neurology', 'Orthopedics', 
    'Pediatrics', 'Gynecology', 'General Medicine', 'Psychiatry'
  ];

  const mockDoctors = [
    {
      id: 1,
      name: 'Dr. Sarah Kumar',
      specialization: 'Cardiology',
      qualifications: 'MD, DM Cardiology',
      experience: 15,
      rating: 4.9,
      reviews: 245,
      consultationFee: 800,
      location: 'Mumbai, Maharashtra',
      hospital: 'Apollo Hospital',
      availability: 'Mon-Fri 10AM-6PM',
      languages: ['English', 'Hindi', 'Marathi'],
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300',
      verified: true,
      nextAvailable: '2024-01-20',
      about: 'Experienced cardiologist specializing in interventional cardiology and heart disease prevention.'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Patel',
      specialization: 'Neurology',
      qualifications: 'MD, DM Neurology',
      experience: 12,
      rating: 4.8,
      reviews: 189,
      consultationFee: 1200,
      location: 'Delhi, NCR',
      hospital: 'AIIMS Delhi',
      availability: 'Tue-Sat 9AM-5PM',
      languages: ['English', 'Hindi', 'Gujarati'],
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      verified: true,
      nextAvailable: '2024-01-22',
      about: 'Neurologist with expertise in stroke treatment, epilepsy management, and movement disorders.'
    },
    {
      id: 3,
      name: 'Dr. Priya Singh',
      specialization: 'Dermatology',
      qualifications: 'MD Dermatology',
      experience: 8,
      rating: 4.7,
      reviews: 156,
      consultationFee: 600,
      location: 'Bangalore, Karnataka',
      hospital: 'Fortis Hospital',
      availability: 'Mon-Wed-Fri 2PM-8PM',
      languages: ['English', 'Hindi', 'Kannada'],
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300',
      verified: true,
      nextAvailable: '2024-01-19',
      about: 'Dermatologist specializing in cosmetic dermatology, skin cancer screening, and acne treatment.'
    }
  ];

  const patientReviews = [
    {
      id: 1,
      patientName: 'Amit Kumar',
      rating: 5,
      comment: 'Excellent doctor! Very thorough examination and clear explanation.',
      date: '2024-01-10'
    },
    {
      id: 2,
      patientName: 'Sneha Sharma',
      rating: 5,
      comment: 'Professional and caring. Highly recommend Dr. Kumar.',
      date: '2024-01-08'
    }
  ];

  const handleBookAppointment = (doctorId: number) => {
    console.log('Booking appointment with doctor:', doctorId);
    alert('Appointment booking request sent! You will receive a confirmation shortly.');
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
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full">
              <Stethoscope className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Verified Doctors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover qualified doctors with verified credentials, patient reviews, and transparent pricing
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Search className="h-6 w-6 mr-3 text-blue-500" />
            Find Your Doctor
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization
              </label>
              <select
                value={searchFilters.specialization}
                onChange={(e) => setSearchFilters({...searchFilters, specialization: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Specializations</option>
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
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
                placeholder="Enter city"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select
                value={searchFilters.availability}
                onChange={(e) => setSearchFilters({...searchFilters, availability: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Any Time</option>
                <option value="today">Available Today</option>
                <option value="tomorrow">Available Tomorrow</option>
                <option value="this-week">This Week</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Consultation Fee (₹)
              </label>
              <input
                type="number"
                value={searchFilters.maxFee}
                onChange={(e) => setSearchFilters({...searchFilters, maxFee: e.target.value})}
                placeholder="Max fee"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <button className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg">
            <Search className="h-5 w-5 inline mr-2" />
            Search Doctors
          </button>
        </motion.div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Doctor Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                      {doctor.verified && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-blue-600 font-medium mb-1">{doctor.specialization}</p>
                    <p className="text-gray-600 text-sm">{doctor.qualifications}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        {doctor.experience} years exp.
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500" />
                        {doctor.rating} ({doctor.reviews})
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-3" />
                    <span className="text-sm">{doctor.hospital}, {doctor.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-3" />
                    <span className="text-sm">{doctor.availability}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-3" />
                    <span className="text-sm">Consultation: ₹{doctor.consultationFee}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-3" />
                    <span className="text-sm">Next available: {doctor.nextAvailable}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map(lang => (
                      <span key={lang} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* About */}
                <p className="text-gray-600 text-sm mb-4">{doctor.about}</p>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleBookAppointment(doctor.id)}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => setSelectedDoctor(selectedDoctor === doctor.id ? null : doctor.id)}
                    className="px-4 py-3 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href={`tel:+91${Math.floor(Math.random() * 9000000000) + 1000000000}`}
                    className="px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>

                {/* Extended Details */}
                {selectedDoctor === doctor.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Patient Reviews
                    </h4>
                    
                    <div className="space-y-4">
                      {patientReviews.map(review => (
                        <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{review.patientName}</span>
                            <div className="flex items-center">
                              {Array.from({length: review.rating}).map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm">{review.comment}</p>
                          <p className="text-gray-500 text-xs mt-2">{review.date}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Verified Doctors', value: '2,000+', icon: CheckCircle },
            { label: 'Specializations', value: '25+', icon: Stethoscope },
            { label: 'Cities Covered', value: '100+', icon: MapPin },
            { label: 'Satisfied Patients', value: '50,000+', icon: Users }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DoctorFinder;