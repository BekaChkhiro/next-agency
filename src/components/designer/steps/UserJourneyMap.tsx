import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface UserJourneyMapProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

// Journey types
const journeyTypes = [
  {
    id: 'information',
    name: 'ინფორმაციის ძიება',
    description: 'მომხმარებელი ეძებს ინფორმაციას თქვენი ბიზნესის შესახებ',
    steps: [
      { id: 'landing', name: 'მთავარი გვერდი', description: 'პირველი შთაბეჭდილება' },
      { id: 'about', name: 'შესახებ', description: 'ბიზნესის შესახებ ინფორმაცია' },
      { id: 'services', name: 'სერვისები', description: 'შეთავაზებული სერვისები' },
      { id: 'contact', name: 'კონტაქტი', description: 'დაკავშირების ინფორმაცია' }
    ]
  },
  {
    id: 'purchase',
    name: 'შესყიდვის პროცესი',
    description: 'მომხმარებელი ყიდულობს პროდუქტს ან სერვისს',
    steps: [
      { id: 'landing', name: 'მთავარი გვერდი', description: 'პირველი შთაბეჭდილება' },
      { id: 'products', name: 'პროდუქტები', description: 'პროდუქტების დათვალიერება' },
      { id: 'product', name: 'პროდუქტის გვერდი', description: 'კონკრეტული პროდუქტის დეტალები' },
      { id: 'cart', name: 'კალათა', description: 'შერჩეული პროდუქტები' },
      { id: 'checkout', name: 'გადახდა', description: 'შეკვეთის დასრულება' },
      { id: 'confirmation', name: 'დადასტურება', description: 'შეკვეთის დადასტურება' }
    ]
  },
  {
    id: 'booking',
    name: 'დაჯავშნის პროცესი',
    description: 'მომხმარებელი ჯავშნის სერვისს ან შეხვედრას',
    steps: [
      { id: 'landing', name: 'მთავარი გვერდი', description: 'პირველი შთაბეჭდილება' },
      { id: 'services', name: 'სერვისები', description: 'სერვისების დათვალიერება' },
      { id: 'calendar', name: 'კალენდარი', description: 'თავისუფალი დროის არჩევა' },
      { id: 'details', name: 'დეტალები', description: 'პერსონალური ინფორმაციის შევსება' },
      { id: 'confirmation', name: 'დადასტურება', description: 'ჯავშნის დადასტურება' }
    ]
  },
  {
    id: 'subscription',
    name: 'გამოწერის პროცესი',
    description: 'მომხმარებელი ირჩევს და იწერს სერვისს',
    steps: [
      { id: 'landing', name: 'მთავარი გვერდი', description: 'პირველი შთაბეჭდილება' },
      { id: 'plans', name: 'გეგმები', description: 'სხვადასხვა გეგმების შედარება' },
      { id: 'signup', name: 'რეგისტრაცია', description: 'ანგარიშის შექმნა' },
      { id: 'payment', name: 'გადახდა', description: 'გადახდის დეტალების შევსება' },
      { id: 'dashboard', name: 'პანელი', description: 'მომხმარებლის პანელი' }
    ]
  }
];

const UserJourneyMap: React.FC<UserJourneyMapProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [selectedJourneys, setSelectedJourneys] = useState<string[]>(
    designChoices.userJourneys || ['information']
  );
  
  const [activeJourney, setActiveJourney] = useState<string>(
    selectedJourneys[0] || 'information'
  );
  
  const [highlightedStep, setHighlightedStep] = useState<string | null>(null);

  const toggleJourney = (journeyId: string) => {
    let newSelectedJourneys;
    
    if (selectedJourneys.includes(journeyId)) {
      // Don't allow removing the last journey
      if (selectedJourneys.length === 1) {
        return;
      }
      newSelectedJourneys = selectedJourneys.filter(id => id !== journeyId);
      
      // If we're removing the active journey, set a new active one
      if (activeJourney === journeyId) {
        setActiveJourney(newSelectedJourneys[0]);
      }
    } else {
      newSelectedJourneys = [...selectedJourneys, journeyId];
      setActiveJourney(journeyId);
    }
    
    setSelectedJourneys(newSelectedJourneys);
    updateDesign('userJourneys', newSelectedJourneys);
  };

  const setActive = (journeyId: string) => {
    if (selectedJourneys.includes(journeyId)) {
      setActiveJourney(journeyId);
    }
  };

  const getJourneyById = (id: string) => {
    return journeyTypes.find(journey => journey.id === id) || journeyTypes[0];
  };

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

  return (
    <div className="py-4">
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        განსაზღვრეთ მომხმარებლის მოგზაურობის გზები თქვენს ვებგვერდზე. ეს დაგეხმარებათ უკეთესი მომხმარებლის გამოცდილების შექმნაში.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Journey selection */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h3 className="font-medium text-gray-800 dark:text-white">მოგზაურობის ტიპები</h3>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                აირჩიეთ მომხმარებლის მოგზაურობის ტიპები, რომლებიც შეესაბამება თქვენს ვებგვერდს:
              </p>
              
              <motion.div 
                className="space-y-3"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {journeyTypes.map((journey) => (
                  <motion.div
                    key={journey.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedJourneys.includes(journey.id) 
                        ? 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800' 
                        : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                    } ${
                      activeJourney === journey.id && selectedJourneys.includes(journey.id)
                        ? 'ring-2 ring-indigo-500 dark:ring-indigo-400'
                        : ''
                    }`}
                    onClick={() => toggleJourney(journey.id)}
                    onMouseEnter={() => setActive(journey.id)}
                    variants={item}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800 dark:text-white">{journey.name}</h4>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        selectedJourneys.includes(journey.id) 
                          ? 'bg-indigo-500 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}>
                        {selectedJourneys.includes(journey.id) && (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{journey.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Journey visualization */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h3 className="font-medium text-gray-800 dark:text-white">
                {getJourneyById(activeJourney).name} - ვიზუალური რუკა
              </h3>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {getJourneyById(activeJourney).description}
                </p>
              </div>
              
              {/* Journey steps visualization */}
              <div className="relative">
                {/* Steps connection line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
                
                {/* Steps */}
                <div className="flex justify-between relative z-10">
                  {getJourneyById(activeJourney).steps.map((step, index) => (
                    <div 
                      key={step.id} 
                      className="flex flex-col items-center"
                      onMouseEnter={() => setHighlightedStep(step.id)}
                      onMouseLeave={() => setHighlightedStep(null)}
                    >
                      <motion.div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          highlightedStep === step.id
                            ? 'bg-indigo-500 text-white'
                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="text-sm font-medium">{index + 1}</span>
                      </motion.div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-800 dark:text-white mb-1">{step.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 max-w-[100px]">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* User flow animation */}
                <motion.div 
                  className="absolute top-1/2 left-0 w-4 h-4 bg-indigo-500 rounded-full transform -translate-y-1/2 z-20"
                  animate={{ 
                    x: ['0%', '100%'],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* Journey details */}
              <div className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 dark:text-white mb-3">მომხმარებლის ქმედებები და მიზნები</h4>
                
                <div className="space-y-4">
                  {getJourneyById(activeJourney).steps.map((step) => (
                    <motion.div 
                      key={step.id}
                      className={`p-3 rounded-lg border ${
                        highlightedStep === step.id
                          ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                          highlightedStep === step.id
                            ? 'bg-indigo-500 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                        }`}>
                          <span className="text-xs font-medium">{getJourneyById(activeJourney).steps.findIndex(s => s.id === step.id) + 1}</span>
                        </div>
                        <h5 className="font-medium text-gray-800 dark:text-white">{step.name}</h5>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-gray-500 dark:text-gray-400 mb-1">მომხმარებლის ქმედება:</div>
                          <div className="text-gray-800 dark:text-white">
                            {step.id === 'landing' && 'შემოდის საიტზე და ათვალიერებს'}
                            {step.id === 'about' && 'კითხულობს ინფორმაციას ბიზნესის შესახებ'}
                            {step.id === 'services' && 'ათვალიერებს შეთავაზებულ სერვისებს'}
                            {step.id === 'products' && 'ათვალიერებს პროდუქტებს და ფილტრავს'}
                            {step.id === 'product' && 'კითხულობს პროდუქტის დეტალებს'}
                            {step.id === 'cart' && 'ამოწმებს არჩეულ პროდუქტებს'}
                            {step.id === 'checkout' && 'ავსებს საჭირო ინფორმაციას'}
                            {step.id === 'confirmation' && 'იღებს დადასტურებას'}
                            {step.id === 'calendar' && 'ირჩევს თავისუფალ დროს'}
                            {step.id === 'details' && 'ავსებს პერსონალურ ინფორმაციას'}
                            {step.id === 'plans' && 'ადარებს სხვადასხვა გეგმებს'}
                            {step.id === 'signup' && 'ქმნის ანგარიშს'}
                            {step.id === 'payment' && 'ავსებს გადახდის დეტალებს'}
                            {step.id === 'dashboard' && 'ათვალიერებს პერსონალურ პანელს'}
                            {step.id === 'contact' && 'ეძებს საკონტაქტო ინფორმაციას'}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-500 dark:text-gray-400 mb-1">მიზანი:</div>
                          <div className="text-gray-800 dark:text-white">
                            {step.id === 'landing' && 'პირველი შთაბეჭდილების მიღება'}
                            {step.id === 'about' && 'ბიზნესის უკეთ გაცნობა'}
                            {step.id === 'services' && 'სერვისების შესახებ ინფორმაციის მიღება'}
                            {step.id === 'products' && 'სასურველი პროდუქტის პოვნა'}
                            {step.id === 'product' && 'გადაწყვეტილების მიღება'}
                            {step.id === 'cart' && 'შეკვეთის გადახედვა'}
                            {step.id === 'checkout' && 'შეკვეთის დასრულება'}
                            {step.id === 'confirmation' && 'დარწმუნება შეკვეთის წარმატებაში'}
                            {step.id === 'calendar' && 'სასურველი დროის არჩევა'}
                            {step.id === 'details' && 'პერსონალიზაცია'}
                            {step.id === 'plans' && 'საუკეთესო გეგმის არჩევა'}
                            {step.id === 'signup' && 'წვდომის მიღება'}
                            {step.id === 'payment' && 'გადახდის დასრულება'}
                            {step.id === 'dashboard' && 'სერვისის გამოყენება'}
                            {step.id === 'contact' && 'დაკავშირების გზების პოვნა'}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Sales funnel visualization */}
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h3 className="font-medium text-gray-800 dark:text-white">გაყიდვების გზა</h3>
            </div>
            
            <div className="p-6">
              <div className="relative max-w-md mx-auto">
                {/* Funnel */}
                <svg viewBox="0 0 200 200" className="w-full h-auto">
                  <defs>
                    <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Funnel shape */}
                  <motion.path 
                    d="M20,20 L180,20 L150,80 L130,140 L70,140 L50,80 Z" 
                    fill="url(#funnelGradient)"
                    fillOpacity="0.2"
                    stroke="url(#funnelGradient)"
                    strokeWidth="2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />
                  
                  {/* Funnel sections */}
                  <motion.path 
                    d="M20,20 L180,20 L170,40 L30,40 Z" 
                    fill="url(#funnelGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                  
                  <motion.path 
                    d="M30,40 L170,40 L160,60 L40,60 Z" 
                    fill="url(#funnelGradient)"
                    fillOpacity="0.9"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />
                  
                  <motion.path 
                    d="M40,60 L160,60 L150,80 L50,80 Z" 
                    fill="url(#funnelGradient)"
                    fillOpacity="0.8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  />
                  
                  <motion.path 
                    d="M50,80 L150,80 L140,100 L60,100 Z" 
                    fill="url(#funnelGradient)"
                    fillOpacity="0.7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  />
                  
                  <motion.path 
                    d="M60,100 L140,100 L130,120 L70,120 Z" 
                    fill="url(#funnelGradient)"
                    fillOpacity="0.6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  />
                  
                  <motion.path 
                    d="M70,120 L130,120 L130,140 L70,140 Z" 
                    fill="url(#funnelGradient)"
                    fillOpacity="0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  />
                  
                  {/* Labels */}
                  <text x="100" y="30" textAnchor="middle" fill="#4B5563" className="text-xs">ვიზიტორები (100%)</text>
                  <text x="100" y="50" textAnchor="middle" fill="#4B5563" className="text-xs">დაინტერესებულები (75%)</text>
                  <text x="100" y="70" textAnchor="middle" fill="#4B5563" className="text-xs">განხილვა (50%)</text>
                  <text x="100" y="90" textAnchor="middle" fill="#4B5563" className="text-xs">გადაწყვეტილება (35%)</text>
                  <text x="100" y="110" textAnchor="middle" fill="#4B5563" className="text-xs">მოქმედება (25%)</text>
                  <text x="100" y="130" textAnchor="middle" fill="#4B5563" className="text-xs">კონვერსია (15%)</text>
                </svg>
                
                {/* Animated user */}
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full"
                  animate={{ 
                    y: [0, 30, 50, 70, 90, 110],
                    x: [0, 5, -5, 0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                გაყიდვების გზა აჩვენებს, თუ როგორ გადადიან მომხმარებლები ვებგვერდზე ვიზიტიდან საბოლოო კონვერსიამდე.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          მომხმარებლის მოგზაურობის რუკა გეხმარებათ უკეთ გაიგოთ, როგორ ურთიერთობენ მომხმარებლები თქვენს ვებგვერდთან და გააუმჯობესოთ კონვერსიის მაჩვენებლები.
        </p>
      </div>
    </div>
  );
};

export default UserJourneyMap;
