import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Pill, 
  Clock, 
  Plus, 
  Trash2, 
  Check, 
  X,
  Calendar,
  Bell,
  Settings,
  Activity,
  TrendingUp
} from 'lucide-react';
import { format } from 'date-fns';

interface Medicine {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  startDate: string;
  endDate: string;
  instructions: string;
  color: string;
  taken: boolean[];
}

const MedicineReminder = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([
    {
      id: 1,
      name: 'Paracetamol',
      dosage: '500mg',
      frequency: 'Twice Daily',
      times: ['08:00', '20:00'],
      startDate: '2024-01-01',
      endDate: '2024-01-15',
      instructions: 'Take after meals',
      color: 'bg-blue-500',
      taken: [true, false]
    },
    {
      id: 2,
      name: 'Vitamin D3',
      dosage: '1000 IU',
      frequency: 'Once Daily',
      times: ['09:00'],
      startDate: '2024-01-01',
      endDate: '2024-03-01',
      instructions: 'Take with breakfast',
      color: 'bg-orange-500',
      taken: [true]
    },
    {
      id: 3,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Three times daily',
      times: ['08:00', '14:00', '20:00'],
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      instructions: 'Take before meals',
      color: 'bg-green-500',
      taken: [true, true, false]
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    dosage: '',
    frequency: '',
    times: [''],
    startDate: '',
    endDate: '',
    instructions: '',
    color: 'bg-blue-500'
  });

  const [todaysReminders, setTodaysReminders] = useState<any[]>([]);

  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 
    'bg-red-500', 'bg-indigo-500', 'bg-pink-500', 'bg-teal-500'
  ];

  useEffect(() => {
    // Generate today's reminders
    const today = new Date();
    const reminders: any[] = [];
    
    medicines.forEach(medicine => {
      medicine.times.forEach((time, index) => {
        const [hours, minutes] = time.split(':');
        const reminderTime = new Date(today);
        reminderTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        
        reminders.push({
          id: `${medicine.id}-${index}`,
          medicine,
          time: reminderTime,
          taken: medicine.taken[index] || false,
          timeSlot: index
        });
      });
    });
    
    reminders.sort((a, b) => a.time.getTime() - b.time.getTime());
    setTodaysReminders(reminders);
  }, [medicines]);

  const handleAddMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    const medicine: Medicine = {
      id: Date.now(),
      ...newMedicine,
      taken: new Array(newMedicine.times.length).fill(false)
    };
    
    setMedicines([...medicines, medicine]);
    setNewMedicine({
      name: '',
      dosage: '',
      frequency: '',
      times: [''],
      startDate: '',
      endDate: '',
      instructions: '',
      color: 'bg-blue-500'
    });
    setShowAddForm(false);
  };

  const markAsTaken = (reminderId: string) => {
    const [medicineId, timeSlotStr] = reminderId.split('-');
    const timeSlot = parseInt(timeSlotStr);
    
    setMedicines(prev => prev.map(medicine => {
      if (medicine.id === parseInt(medicineId)) {
        const newTaken = [...medicine.taken];
        newTaken[timeSlot] = true;
        return { ...medicine, taken: newTaken };
      }
      return medicine;
    }));
  };

  const deleteMedicine = (id: number) => {
    setMedicines(prev => prev.filter(med => med.id !== id));
  };

  const addTimeSlot = () => {
    setNewMedicine({
      ...newMedicine,
      times: [...newMedicine.times, '']
    });
  };

  const removeTimeSlot = (index: number) => {
    setNewMedicine({
      ...newMedicine,
      times: newMedicine.times.filter((_, i) => i !== index)
    });
  };

  const updateTimeSlot = (index: number, value: string) => {
    const newTimes = [...newMedicine.times];
    newTimes[index] = value;
    setNewMedicine({ ...newMedicine, times: newTimes });
  };

  const getTodayStats = () => {
    const total = todaysReminders.length;
    const taken = todaysReminders.filter(r => r.taken).length;
    const adherence = total > 0 ? Math.round((taken / total) * 100) : 0;
    
    return { total, taken, adherence };
  };

  const stats = getTodayStats();

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
            <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-4 rounded-full">
              <Pill className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Medicine Reminder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Never miss your medication with smart reminders and adherence tracking
          </p>
        </motion.div>

        {/* Today's Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{format(new Date(), 'MMM dd')}</div>
            <div className="text-gray-600 text-sm">Today</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stats.taken}/{stats.total}</div>
            <div className="text-gray-600 text-sm">Taken</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="bg-gradient-to-r from-purple-500 to-violet-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stats.adherence}%</div>
            <div className="text-gray-600 text-sm">Adherence</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{medicines.length}</div>
            <div className="text-gray-600 text-sm">Active</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Reminders */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-blue-500" />
                  Today's Schedule
                </h2>
                <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </button>
              </div>
              
              <div className="space-y-4">
                {todaysReminders.map((reminder) => (
                  <motion.div
                    key={reminder.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center justify-between p-4 rounded-xl border-l-4 ${
                      reminder.taken 
                        ? 'bg-green-50 border-green-500' 
                        : new Date() > reminder.time
                        ? 'bg-red-50 border-red-500'
                        : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`${reminder.medicine.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                        <Pill className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{reminder.medicine.name}</h3>
                        <p className="text-sm text-gray-600">{reminder.medicine.dosage} • {reminder.medicine.instructions}</p>
                        <p className="text-sm font-medium text-gray-800">
                          {format(reminder.time, 'h:mm a')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {reminder.taken ? (
                        <div className="bg-green-500 text-white p-2 rounded-full">
                          <Check className="h-4 w-4" />
                        </div>
                      ) : (
                        <button
                          onClick={() => markAsTaken(reminder.id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Mark Taken
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {todaysReminders.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <Pill className="h-16 w-16 mx-auto mb-4 opacity-30" />
                    <p>No medications scheduled for today</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Medicine List */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Activity className="h-6 w-6 mr-3 text-purple-500" />
                  My Medicines
                </h2>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors flex items-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Medicine
                </button>
              </div>
              
              <div className="space-y-4">
                {medicines.map((medicine) => (
                  <motion.div
                    key={medicine.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`${medicine.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                          <Pill className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{medicine.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{medicine.dosage} • {medicine.frequency}</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {medicine.times.map((time, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {time}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500">{medicine.instructions}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteMedicine(medicine.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Add Medicine Form */}
          <div className="lg:col-span-1">
            <AnimatePresence>
              {showAddForm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Add Medicine</h3>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <form onSubmit={handleAddMedicine} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Medicine Name
                      </label>
                      <input
                        type="text"
                        required
                        value={newMedicine.name}
                        onChange={(e) => setNewMedicine({...newMedicine, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="e.g., Paracetamol"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dosage
                      </label>
                      <input
                        type="text"
                        required
                        value={newMedicine.dosage}
                        onChange={(e) => setNewMedicine({...newMedicine, dosage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="e.g., 500mg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Times
                      </label>
                      {newMedicine.times.map((time, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                          <input
                            type="time"
                            required
                            value={time}
                            onChange={(e) => updateTimeSlot(index, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          />
                          {newMedicine.times.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeTimeSlot(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addTimeSlot}
                        className="text-purple-500 hover:text-purple-700 text-sm font-medium"
                      >
                        + Add Time
                      </button>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Instructions
                      </label>
                      <input
                        type="text"
                        value={newMedicine.instructions}
                        onChange={(e) => setNewMedicine({...newMedicine, instructions: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="e.g., Take after meals"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Color
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {colors.map(color => (
                          <button
                            key={color}
                            type="button"
                            onClick={() => setNewMedicine({...newMedicine, color})}
                            className={`w-8 h-8 rounded-full ${color} ${
                              newMedicine.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Start Date
                        </label>
                        <input
                          type="date"
                          required
                          value={newMedicine.startDate}
                          onChange={(e) => setNewMedicine({...newMedicine, startDate: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          End Date
                        </label>
                        <input
                          type="date"
                          value={newMedicine.endDate}
                          onChange={(e) => setNewMedicine({...newMedicine, endDate: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors font-medium"
                    >
                      Add Medicine
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MedicineReminder;