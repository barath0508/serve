import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BloodDonation from './pages/BloodDonation';
import Communities from './pages/Communities';
import MedicalHelp from './pages/MedicalHelp';
import MedicineReminder from './pages/MedicineReminder';
import HealthHistory from './pages/HealthHistory';
import DoctorFinder from './pages/DoctorFinder';
import Emergency from './pages/Emergency';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blood-donation" element={<BloodDonation />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/medical-help" element={<MedicalHelp />} />
            <Route path="/medicine-reminder" element={<MedicineReminder />} />
            <Route path="/health-history" element={<HealthHistory />} />
            <Route path="/doctor-finder" element={<DoctorFinder />} />
            <Route path="/emergency" element={<Emergency />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;