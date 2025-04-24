import React from 'react';
import { motion } from '../../motion';

import { DesignChoices, UpdateDesignFunction } from '@/types/designTypes';

interface BusinessTypeSelectorProps {
  designChoices: DesignChoices;
  updateDesign: UpdateDesignFunction;
  isQuickVersion: boolean;
}

const businessTypes = [
  {
    id: 'restaurant',
    title: 'Restaurant/Cafe',
    image: '/images/business-types/restaurant.jpg',
    description: 'Dining space, culinary, cafe'
  },
  {
    id: 'retail',
    title: 'Retail Store',
    image: '/images/business-types/retail.jpg',
    description: 'Modern store showcase'
  },
  {
    id: 'beauty',
    title: 'Beauty Salon',
    image: '/images/business-types/beauty.jpg',
    description: 'Stylized salon interior'
  },
  {
    id: 'professional',
    title: 'Professional Services',
    image: '/images/business-types/professional.jpg',
    description: 'Office environment, consultations'
  },
  {
    id: 'tech',
    title: 'Technology/Startup',
    image: '/images/business-types/tech.jpg',
    description: 'Innovative workspace'
  },
  {
    id: 'fitness',
    title: 'Fitness/Health',
    image: '/images/business-types/fitness.jpg',
    description: 'Modern fitness space'
  },
  {
    id: 'education',
    title: 'Education',
    image: '/images/business-types/education.jpg',
    description: 'Learning environment, courses'
  },
  {
    id: 'travel',
    title: 'Tourism/Travel',
    image: '/images/business-types/travel.jpg',
    description: 'Travel agency, travel blog'
  },
  {
    id: 'event',
    title: 'Events',
    image: '/images/business-types/event.jpg',
    description: 'Event organization, planning'
  },
  {
    id: 'creative',
    title: 'Creative Studio',
    image: '/images/business-types/creative.jpg',
    description: 'Design, photography, art'
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    image: '/images/business-types/realestate.jpg',
    description: 'Real estate agency, developer'
  },
  {
    id: 'nonprofit',
    title: 'Non-profit Organization',
    image: '/images/business-types/nonprofit.jpg',
    description: 'Charity, social projects'
  }
];

const BusinessTypeSelector: React.FC<BusinessTypeSelectorProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const handleSelectBusinessType = (businessType: string) => {
    updateDesign('businessType', businessType);
  };

  // For demo purposes, we'll create placeholder images
  const getPlaceholderStyle = (id: string) => {
    const colors: {[key: string]: string} = {
      restaurant: 'from-amber-400 to-red-500',
      retail: 'from-blue-400 to-indigo-500',
      beauty: 'from-pink-400 to-purple-500',
      professional: 'from-gray-400 to-gray-600',
      tech: 'from-cyan-400 to-blue-500',
      fitness: 'from-green-400 to-emerald-500',
      education: 'from-yellow-400 to-orange-500',
      travel: 'from-sky-400 to-indigo-500',
      event: 'from-purple-400 to-pink-500',
      creative: 'from-rose-400 to-red-500',
      realestate: 'from-teal-400 to-cyan-500',
      nonprofit: 'from-lime-400 to-green-500'
    };
    
    return `bg-gradient-to-br ${colors[id] || 'from-gray-400 to-gray-600'}`;
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
        Choose your business or project type. This will help us create a design that meets your needs.
      </p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {businessTypes.map((type) => (
          <motion.div
            key={type.id}
            className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform hover:-translate-y-1 ${
              designChoices.businessType === type.id ? 'ring-2 ring-indigo-600 dark:ring-indigo-400' : ''
            }`}
            onClick={() => handleSelectBusinessType(type.id)}
            variants={item}
          >
            <div className={`h-40 ${getPlaceholderStyle(type.id)} flex items-center justify-center`}>
              <div className="text-white text-4xl">
                {type.id === 'restaurant' && '🍽️'}
                {type.id === 'retail' && '🛍️'}
                {type.id === 'beauty' && '💇‍♀️'}
                {type.id === 'professional' && '👔'}
                {type.id === 'tech' && '💻'}
                {type.id === 'fitness' && '🏋️‍♀️'}
                {type.id === 'education' && '🎓'}
                {type.id === 'travel' && '✈️'}
                {type.id === 'event' && '🎪'}
                {type.id === 'creative' && '🎨'}
                {type.id === 'realestate' && '🏠'}
                {type.id === 'nonprofit' && '❤️'}
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="font-medium text-gray-800 dark:text-white mb-1">{type.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{type.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Don't see your business type? Choose the most similar category, we'll refine the details later.
        </p>
      </div>
    </div>
  );
};

export default BusinessTypeSelector;
