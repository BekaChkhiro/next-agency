import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MeetingSchedulerProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

// Time slots for the meeting
const timeSlots = [
  { id: '1', day: 'ორშაბათი', date: '28 აპრილი', slots: ['10:00', '11:30', '14:00', '16:30'] },
  { id: '2', day: 'სამშაბათი', date: '29 აპრილი', slots: ['09:30', '11:00', '13:30', '15:00', '17:30'] },
  { id: '3', day: 'ოთხშაბათი', date: '30 აპრილი', slots: ['10:00', '12:30', '14:30', '16:00'] },
  { id: '4', day: 'ხუთშაბათი', date: '1 მაისი', slots: ['09:00', '11:30', '13:00', '15:30', '17:00'] },
  { id: '5', day: 'პარასკევი', date: '2 მაისი', slots: ['10:30', '12:00', '14:30', '16:30'] }
];

const MeetingScheduler: React.FC<MeetingSchedulerProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Load any existing meeting data
    if (designChoices.meeting) {
      const { day, time, contactInfo } = designChoices.meeting;
      setSelectedDay(day || '');
      setSelectedTime(time || '');
      
      if (contactInfo) {
        setName(contactInfo.name || '');
        setEmail(contactInfo.email || '');
        setPhone(contactInfo.phone || '');
        setNotes(contactInfo.notes || '');
      }
    }
  }, [designChoices.meeting]);

  const handleDaySelect = (dayId: string) => {
    setSelectedDay(dayId);
    setSelectedTime(''); // Reset time when day changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const validateForm = () => {
    if (!selectedDay || !selectedTime) {
      setError('გთხოვთ აირჩიოთ შეხვედრის დღე და დრო');
      return false;
    }
    
    if (!name.trim()) {
      setError('გთხოვთ შეიყვანოთ თქვენი სახელი');
      return false;
    }
    
    if (!email.trim() || !email.includes('@')) {
      setError('გთხოვთ შეიყვანოთ სწორი ელ-ფოსტის მისამართი');
      return false;
    }
    
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const selectedDayObj = timeSlots.find(day => day.id === selectedDay);
      
      updateDesign('meeting', {
        day: selectedDay,
        dayName: selectedDayObj?.day,
        date: selectedDayObj?.date,
        time: selectedTime,
        contactInfo: {
          name,
          email,
          phone,
          notes
        }
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Get the selected day object
  const getSelectedDayObj = () => {
    return timeSlots.find(day => day.id === selectedDay);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (isSubmitted) {
    const selectedDayObj = getSelectedDayObj();
    
    return (
      <motion.div 
        className="py-8 max-w-md mx-auto text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">შეხვედრა დაჯავშნილია!</h2>
          <p className="text-gray-600 dark:text-gray-300">
            თქვენი შეხვედრა დაგეგმილია
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-6">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border-b border-indigo-100 dark:border-indigo-800/20">
            <h3 className="font-medium text-indigo-800 dark:text-indigo-300">შეხვედრის დეტალები</h3>
          </div>
          <div className="p-6">
            <div className="flex items-start mb-4">
              <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">{selectedDayObj?.day}, {selectedDayObj?.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{selectedTime}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">{name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{email}</p>
                {phone && <p className="text-sm text-gray-600 dark:text-gray-300">{phone}</p>}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            დადასტურების წერილი გამოგზავნილია თქვენს ელ-ფოსტაზე. ჩვენი გუნდი დაგიკავშირდებათ შეხვედრამდე.
          </p>
          
          <button 
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
            onClick={() => setIsSubmitted(false)}
          >
            შეხვედრის რედაქტირება
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="py-4">
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        დაჯავშნეთ შეხვედრა ჩვენს გუნდთან თქვენი ვებგვერდის დიზაინის განსახილველად და პროექტის დასაწყებად.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border-b border-indigo-100 dark:border-indigo-800/20">
            <h3 className="font-medium text-indigo-800 dark:text-indigo-300">აირჩიეთ დღე და დრო</h3>
          </div>
          
          <div className="p-6">
            {/* Days */}
            <div className="flex overflow-x-auto pb-2 mb-4 space-x-2">
              {timeSlots.map((day) => (
                <button
                  key={day.id}
                  className={`flex-shrink-0 px-4 py-3 rounded-lg transition-colors ${
                    selectedDay === day.id 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'
                  }`}
                  onClick={() => handleDaySelect(day.id)}
                >
                  <p className="font-medium">{day.day}</p>
                  <p className="text-sm opacity-80">{day.date}</p>
                </button>
              ))}
            </div>
            
            {/* Time slots */}
            {selectedDay && (
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">ხელმისაწვდომი დრო</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {getSelectedDayObj()?.slots.map((time) => (
                    <button
                      key={time}
                      className={`px-4 py-2 rounded-lg text-center transition-colors ${
                        selectedTime === time 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'
                      }`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            
            {!selectedDay && (
              <div className="mt-6 text-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                <svg className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400">გთხოვთ აირჩიოთ დღე ზემოთ</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border-b border-indigo-100 dark:border-indigo-800/20">
            <h3 className="font-medium text-indigo-800 dark:text-indigo-300">თქვენი საკონტაქტო ინფორმაცია</h3>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    სახელი *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    ელ-ფოსტა *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    ტელეფონი
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    დამატებითი შენიშვნები
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                
                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/20 rounded-lg text-red-700 dark:text-red-300 text-sm">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                    isSubmitting || !selectedDay || !selectedTime
                      ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                  disabled={isSubmitting || !selectedDay || !selectedTime}
                >
                  {isSubmitting ? 'იგზავნება...' : 'დაჯავშნე შეხვედრა'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Selected meeting summary */}
      {selectedDay && selectedTime && (
        <motion.div 
          className="mt-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-indigo-700 dark:text-indigo-300">
              <span className="font-medium">არჩეული დრო:</span> {getSelectedDayObj()?.day}, {getSelectedDayObj()?.date}, {selectedTime}
            </p>
          </div>
        </motion.div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          შეხვედრის დროს განვიხილავთ თქვენს დიზაინის არჩევანს და დავგეგმავთ შემდეგ ნაბიჯებს პროექტის დასაწყებად.
        </p>
      </div>
    </div>
  );
};

export default MeetingScheduler;
