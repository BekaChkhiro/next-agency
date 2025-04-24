import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveFeaturesProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

// Interactive features
const interactiveFeatures = [
  {
    id: 'booking',
    name: 'ონლაინ ჯავშანი',
    description: 'მომხმარებლებს შეუძლიათ დაჯავშნონ დრო ან სერვისი',
    animation: 'calendar'
  },
  {
    id: 'shop',
    name: 'ონლაინ მაღაზია',
    description: 'პროდუქტების გაყიდვა და კალათაში დამატების ფუნქციონალი',
    animation: 'cart'
  },
  {
    id: 'contact',
    name: 'კონტაქტის ფორმა',
    description: 'ინტერაქტიული ფორმა შეტყობინების გასაგზავნად',
    animation: 'form'
  },
  {
    id: 'social',
    name: 'სოციალური ინტეგრაცია',
    description: 'სოციალურ ქსელებთან ინტეგრაცია და გაზიარების ფუნქციები',
    animation: 'share'
  },
  {
    id: 'comments',
    name: 'ბლოგის კომენტარები',
    description: 'კომენტარების დატოვების და დისკუსიის შესაძლებლობა',
    animation: 'comment'
  },
  {
    id: 'search',
    name: 'საიტის ძიება',
    description: 'კონტენტის მოძიების ფუნქციონალი',
    animation: 'search'
  },
  {
    id: 'gallery',
    name: 'ინტერაქტიული გალერეა',
    description: 'ფოტოების ან პროდუქტების ინტერაქტიული გალერეა',
    animation: 'gallery'
  },
  {
    id: 'chat',
    name: 'ლაივ ჩატი',
    description: 'მომხმარებლებთან რეალურ დროში კომუნიკაციის საშუალება',
    animation: 'chat'
  }
];

const InteractiveFeatures: React.FC<InteractiveFeaturesProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(
    designChoices.interactiveFeatures || []
  );
  
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const toggleFeature = (featureId: string) => {
    const newSelectedFeatures = selectedFeatures.includes(featureId)
      ? selectedFeatures.filter(id => id !== featureId)
      : [...selectedFeatures, featureId];
    
    setSelectedFeatures(newSelectedFeatures);
    updateDesign('interactiveFeatures', newSelectedFeatures);
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

  // Animation components for each feature
  const CalendarAnimation = () => (
    <motion.div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {[...Array(28)].map((_, i) => (
          <motion.div 
            key={i} 
            className={`h-6 ${i === 15 ? 'bg-indigo-100 dark:bg-indigo-900/30' : 'bg-gray-50 dark:bg-gray-700'} rounded flex items-center justify-center`}
            animate={i === 15 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {i === 15 && (
              <motion.div 
                className="w-3 h-3 bg-indigo-500 rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const CartAnimation = () => (
    <motion.div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
      <div className="flex mb-2">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded mr-2"></div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-100 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-1/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
      <motion.div 
        className="h-8 bg-indigo-500 rounded flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div 
          className="flex items-center"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
          <div className="w-12 h-3 bg-white rounded"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  const FormAnimation = () => (
    <motion.div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col justify-between">
      <div className="h-6 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-6 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-12 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
      <motion.div 
        className="h-8 w-1/3 self-end bg-indigo-500 rounded"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );

  const ShareAnimation = () => (
    <motion.div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
      <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
      <div className="flex justify-center space-x-2">
        {['bg-blue-500', 'bg-sky-500', 'bg-red-500', 'bg-green-500'].map((color, i) => (
          <motion.div 
            key={i} 
            className={`w-8 h-8 ${color} rounded-full`}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>
    </motion.div>
  );

  const CommentAnimation = () => (
    <motion.div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
      <div className="flex mb-2">
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full mr-2"></div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
          <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
      <div className="flex mb-2">
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full mr-2"></div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-600 rounded mb-1"></div>
          <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
      <div className="flex items-center mt-auto">
        <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded mr-2"></div>
        <motion.div 
          className="w-6 h-6 bg-indigo-500 rounded"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );

  const SearchAnimation = () => (
    <motion.div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
      <div className="flex items-center mb-2">
        <div className="flex-1 h-8 bg-gray-100 dark:bg-gray-700 rounded-l"></div>
        <motion.div 
          className="w-8 h-8 bg-indigo-500 rounded-r flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-4 h-4 border-2 border-white rounded-full"></div>
        </motion.div>
      </div>
      <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-1"></div>
      <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-1"></div>
      <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
    </motion.div>
  );

  const GalleryAnimation = () => (
    <motion.div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
      <div className="flex-1 flex justify-between mb-2">
        <motion.div 
          className="w-1/3 h-full bg-gray-200 dark:bg-gray-600 rounded"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="w-1/3 h-full bg-indigo-200 dark:bg-indigo-900/30 rounded scale-110"
          animate={{ scale: [1.1, 1.15, 1.1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="w-1/3 h-full bg-gray-200 dark:bg-gray-600 rounded"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i} 
            className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-gray-600'}`}
            animate={i === 1 ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ))}
      </div>
    </motion.div>
  );

  const ChatAnimation = () => (
    <motion.div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
      <div className="flex justify-start mb-2">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-1 max-w-[70%]">
          <div className="h-3 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
      <div className="flex justify-end mb-2">
        <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-1 max-w-[70%]">
          <div className="h-3 w-16 bg-indigo-300 dark:bg-indigo-700 rounded"></div>
        </div>
      </div>
      <motion.div 
        className="flex justify-start"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-1 max-w-[70%]">
          <div className="h-3 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </motion.div>
      <div className="flex items-center mt-auto">
        <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded mr-2"></div>
        <div className="w-6 h-6 bg-indigo-500 rounded"></div>
      </div>
    </motion.div>
  );

  const getAnimationComponent = (animationType: string) => {
    switch(animationType) {
      case 'calendar': return <CalendarAnimation />;
      case 'cart': return <CartAnimation />;
      case 'form': return <FormAnimation />;
      case 'share': return <ShareAnimation />;
      case 'comment': return <CommentAnimation />;
      case 'search': return <SearchAnimation />;
      case 'gallery': return <GalleryAnimation />;
      case 'chat': return <ChatAnimation />;
      default: return <div>ანიმაცია არ არის ხელმისაწვდომი</div>;
    }
  };

  return (
    <div className="py-4">
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        აირჩიეთ ინტერაქტიული ფუნქციები, რომლებიც გსურთ დაამატოთ თქვენს ვებგვერდზე.
      </p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {interactiveFeatures.map((feature) => (
          <motion.div
            key={feature.id}
            className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all hover:-translate-y-1 ${
              selectedFeatures.includes(feature.id) ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02]' : ''
            }`}
            onClick={() => toggleFeature(feature.id)}
            onMouseEnter={() => setHoveredFeature(feature.id)}
            onMouseLeave={() => setHoveredFeature(null)}
            variants={item}
          >
            <div className="h-40 bg-gray-50 dark:bg-gray-900 p-4">
              {getAnimationComponent(feature.animation)}
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-800 dark:text-white">{feature.name}</h3>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  selectedFeatures.includes(feature.id) 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                  {selectedFeatures.includes(feature.id) && (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature preview */}
      {hoveredFeature && (
        <motion.div
          className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h3 className="font-medium text-gray-800 dark:text-white">
              {interactiveFeatures.find(f => f.id === hoveredFeature)?.name} - დემონსტრაცია
            </h3>
          </div>
          
          <div className="p-6 flex justify-center">
            <div className="w-full max-w-md h-48">
              {getAnimationComponent(interactiveFeatures.find(f => f.id === hoveredFeature)?.animation || '')}
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ინტერაქტიული ფუნქციები აუმჯობესებენ მომხმარებლის გამოცდილებას და ზრდიან ჩართულობას თქვენს ვებგვერდზე.
        </p>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
