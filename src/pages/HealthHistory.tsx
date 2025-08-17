import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Plus, 
  Download, 
  Calendar, 
  User,
  Stethoscope,
  Pill,
  Activity,
  Heart,
  Clipboard,
  History,
  Search
} from 'lucide-react';

const HealthHistory = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [newRecord, setNewRecord] = useState({
    type: '',
    title: '',
    date: '',
    doctor: '',
    hospital: '',
    notes: '',
    medications: '',
    followUp: ''
  });

  const healthRecords = [
    {
      id: 1,
      type: 'checkup',
      title: 'Annual Health Checkup',
      date: '2024-01-15',
      doctor: 'Dr. Sarah Kumar',
      hospital: 'Apollo Hospital',
      diagnosis: 'Normal health parameters',
      medications: 'Vitamin D3 supplement',
      notes: 'All vital signs normal. Recommended regular exercise.',
      followUp: '2024-07-15'
    },
    {
      id: 2,
      type: 'surgery',
      title: 'Appendectomy',
      date: '2023-08-20',
      doctor: 'Dr. Raj Patel',
      hospital: 'Fortis Hospital',
      diagnosis: 'Acute Appendicitis',
      medications: 'Antibiotics, Pain medication',
      notes: 'Laparoscopic appendectomy performed successfully',
      followUp: '2023-09-03'
    },
    {
      id: 3,
      type: 'consultation',
      title: 'Cardiology Consultation',
      date: '2023-12-10',
      doctor: 'Dr. Amit Singh',
      hospital: 'AIIMS Delhi',
      diagnosis: 'Mild Hypertension',
      medications: 'Amlodipine 5mg',
      notes: 'Blood pressure slightly elevated. Lifestyle changes advised.',
      followUp: '2024-03-10'
    }
  ];

  const vitalSigns = {
    bloodPressure: '120/80',
    heartRate: '72 bpm',
    temperature: '98.6°F',
    weight: '70 kg',
    height: '175 cm',
    bmi: '22.9'
  };

  const allergies = ['Penicillin', 'Shellfish'];
  const chronicConditions = ['Hypertension (Controlled)'];
  const emergencyContacts = [
    { name: 'John Doe', relation: 'Father', phone: '+91 98765 43210' },
    { name: 'Jane Doe', relation: 'Mother', phone: '+91 87654 32109' }
  ];

  const getRecordIcon = (type: string) => {
    switch (type) {
      case 'surgery': return <Heart className="h-5 w-5" />;
      case 'consultation': return <Stethoscope className="h-5 w-5" />;
      case 'checkup': return <Clipboard className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getRecordColor = (type: string) => {
    switch (type) {
      case 'surgery': return 'from-red-500 to-pink-500';
      case 'consultation': return 'from-blue-500 to-indigo-500';
      case 'checkup': return 'from-green-500 to-teal-500';
      default: return 'from-purple-500 to-violet-500';
    }
  };

  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding record:', newRecord);
    alert('Health record added successfully!');
    setNewRecord({
      type: '',
      title: '',
      date: '',
      doctor: '',
      hospital: '',
      notes: '',
      medications: '',
      followUp: ''
    });
    setShowAddRecord(false);
  };

  const generatePDFReport = () => {
    alert('PDF health report is being generated and will be downloaded shortly.');
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
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4 rounded-full">
              <FileText className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Personal Health History
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Maintain comprehensive digital health records and generate reports instantly
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <button
            onClick={() => setShowAddRecord(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Health Record
          </button>
          <button
            onClick={generatePDFReport}
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <Download className="h-5 w-5 mr-2" />
            Export PDF Report
          </button>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'records', label: 'Medical Records', icon: History },
              { id: 'medications', label: 'Medications', icon: Pill }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-orange-500'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Personal Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="h-6 w-6 mr-3 text-orange-500" />
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name</span>
                  <span className="font-medium">John Doe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Age</span>
                  <span className="font-medium">35 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Blood Group</span>
                  <span className="font-medium">O+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender</span>
                  <span className="font-medium">Male</span>
                </div>
              </div>
            </div>

            {/* Vital Signs */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="h-6 w-6 mr-3 text-red-500" />
                Latest Vital Signs
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(vitalSigns).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 capitalize mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="font-bold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Allergies & Conditions */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-3 text-red-500" />
                  Allergies
                </h3>
                <div className="space-y-2">
                  {allergies.map((allergy, index) => (
                    <div key={index} className="bg-red-50 text-red-700 px-3 py-2 rounded-lg">
                      {allergy}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clipboard className="h-6 w-6 mr-3 text-blue-500" />
                  Chronic Conditions
                </h3>
                <div className="space-y-2">
                  {chronicConditions.map((condition, index) => (
                    <div key={index} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg">
                      {condition}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Medical Records Tab */}
        {activeTab === 'records' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search medical records..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            {/* Records List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {healthRecords.map((record, index) => (
                <motion.div
                  key={record.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-r ${getRecordColor(record.type)} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
                      {getRecordIcon(record.type)}
                    </div>
                    <span className="text-sm text-gray-500">{record.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{record.title}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Stethoscope className="h-4 w-4 mr-2" />
                      <span className="text-sm">{record.doctor}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{record.hospital}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Diagnosis</h4>
                    <p className="text-gray-700 text-sm">{record.diagnosis}</p>
                  </div>
                  
                  {record.medications && (
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Medications</h4>
                      <p className="text-blue-700 text-sm">{record.medications}</p>
                    </div>
                  )}
                  
                  <p className="text-gray-600 text-sm mb-4">{record.notes}</p>
                  
                  {record.followUp && (
                    <div className="flex items-center text-green-600 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Follow-up: {record.followUp}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Medications Tab */}
        {activeTab === 'medications' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Pill className="h-6 w-6 mr-3 text-purple-500" />
              Current Medications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Amlodipine', dosage: '5mg', frequency: 'Once daily', purpose: 'Blood pressure' },
                { name: 'Vitamin D3', dosage: '1000 IU', frequency: 'Once daily', purpose: 'Bone health' },
                { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', purpose: 'Blood sugar control' }
              ].map((medication, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Pill className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{medication.name}</h4>
                      <p className="text-sm text-gray-600">{medication.dosage} • {medication.frequency}</p>
                    </div>
                  </div>
                  <p className="text-sm text-blue-600 font-medium">{medication.purpose}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Add Record Modal */}
        {showAddRecord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Add Health Record</h3>
                <button
                  onClick={() => setShowAddRecord(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleAddRecord} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Record Type
                    </label>
                    <select
                      required
                      value={newRecord.type}
                      onChange={(e) => setNewRecord({...newRecord, type: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select type</option>
                      <option value="checkup">Health Checkup</option>
                      <option value="consultation">Consultation</option>
                      <option value="surgery">Surgery</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={newRecord.date}
                      onChange={(e) => setNewRecord({...newRecord, date: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={newRecord.title}
                    onChange={(e) => setNewRecord({...newRecord, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="e.g., Annual Physical Exam"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Doctor Name
                    </label>
                    <input
                      type="text"
                      value={newRecord.doctor}
                      onChange={(e) => setNewRecord({...newRecord, doctor: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hospital/Clinic
                    </label>
                    <input
                      type="text"
                      value={newRecord.hospital}
                      onChange={(e) => setNewRecord({...newRecord, hospital: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Hospital name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    rows={4}
                    value={newRecord.notes}
                    onChange={(e) => setNewRecord({...newRecord, notes: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Diagnosis, observations, recommendations..."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Medications Prescribed
                    </label>
                    <input
                      type="text"
                      value={newRecord.medications}
                      onChange={(e) => setNewRecord({...newRecord, medications: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="List of medications"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Follow-up Date
                    </label>
                    <input
                      type="date"
                      value={newRecord.followUp}
                      onChange={(e) => setNewRecord({...newRecord, followUp: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    Add Record
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddRecord(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default HealthHistory;