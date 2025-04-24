import React from 'react';
import { motion } from '../../motion';

import { DesignChoices, UpdateDesignFunction } from '@/types/designTypes';

interface BusinessPersonalityProps {
  designChoices: DesignChoices;
  updateDesign: UpdateDesignFunction;
  isQuickVersion: boolean;
}

const personalityTypes = [
  {
    id: 'modern',
    title: 'Modern and Minimalist',
    description: 'Clean lines, ample space, minimalist design',
    elements: ['Clean lines', 'White space', 'Minimalist', 'Geometric shapes']
  },
  {
    id: 'friendly',
    title: 'Friendly and Warm',
    description: 'Light colors, rounded shapes, friendly tone',
    elements: ['Light colors', 'Rounded shapes', 'Warm tones', 'Playful elements']
  },
  {
    id: 'luxury',
    title: 'Luxury and Elegance',
    description: 'Rich details, dark tones, premium experience',
    elements: ['Rich details', 'Dark tones', 'Gold or silver accents', 'Elegant fonts']
  },
  {
    id: 'creative',
    title: 'Creative and Energetic',
    description: 'Vibrant colors, unusual shapes, innovative elements',
    elements: ['Vibrant colors', 'Unusual shapes', 'Unexpected elements', 'Bold design']
  },
  {
    id: 'traditional',
    title: 'Traditional and Trustworthy',
    description: 'Classic elements, traditional colors, trustworthy impression',
    elements: ['Classic elements', 'Traditional colors', 'Symmetrical layout', 'Historical motifs']
  }
];

const BusinessPersonality: React.FC<BusinessPersonalityProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const handleSelectPersonality = (personalityType: string) => {
    updateDesign('businessPersonality', personalityType);
  };

  // For demo purposes, we'll create placeholder styles
  const getPlaceholderStyle = (id: string) => {
    const styles: {[key: string]: string} = {
      modern: 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700',
      friendly: 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30',
      luxury: 'bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black',
      creative: 'bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30',
      traditional: 'bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30'
    };
    
    return styles[id] || 'bg-gray-100 dark:bg-gray-800';
  };

  const getTextStyle = (id: string) => {
    const styles: {[key: string]: string} = {
      modern: 'text-gray-800 dark:text-white',
      friendly: 'text-orange-800 dark:text-orange-200',
      luxury: 'text-white',
      creative: 'text-purple-800 dark:text-purple-200',
      traditional: 'text-amber-800 dark:text-amber-200'
    };
    
    return styles[id] || 'text-gray-800 dark:text-white';
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
        Choose your brand personality. This will define the visual and emotional tone of your website.
      </p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {personalityTypes.map((type) => (
          <motion.div
            key={type.id}
            className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all hover:-translate-y-1 ${
              designChoices.businessPersonality === type.id ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02]' : ''
            }`}
            onClick={() => handleSelectPersonality(type.id)}
            variants={item}
          >
            <div className={`h-48 ${getPlaceholderStyle(type.id)} p-6 flex flex-col justify-between`}>
              <h3 className={`font-bold text-xl ${getTextStyle(type.id)}`}>{type.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {type.elements.map((element, index) => (
                  <span 
                    key={index} 
                    className={`text-xs px-3 py-1 rounded-full ${
                      type.id === 'luxury' 
                        ? 'bg-black/20 text-white' 
                        : 'bg-white/30 dark:bg-black/30 text-gray-800 dark:text-white'
                    }`}
                  >
                    {element}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-300">{type.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Your brand personality determines how users perceive your business. Choose the one that best reflects your values.
        </p>
      </div>
    </div>
  );
};

export default BusinessPersonality;
