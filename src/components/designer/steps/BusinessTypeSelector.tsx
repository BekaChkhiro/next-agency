import React from 'react';
import { motion } from '../../motion';

import { DesignChoices, UpdateDesignFunction } from '@/types/designTypes';

interface BusinessTypeSelectorProps {
  designChoices: DesignChoices;
  updateDesign: UpdateDesignFunction;
  isQuickVersion: boolean;
}

// Layout preview components for each business type
const ImageLayoutPreview = () => (
  <div className="w-full h-full flex flex-col">
    <div className="h-2 w-full bg-gradient-to-r from-indigo-500 to-indigo-600 mb-1"></div>
    <div className="flex-1 flex">
      <div className="w-2/3 p-1">
        <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-600 mb-1 rounded-sm"></div>
        <div className="h-2 w-1/2 bg-gray-300 dark:bg-gray-600 mb-2 rounded-sm"></div>
        <div className="h-8 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 mb-1 rounded shadow-sm flex items-center px-2">
          <div className="h-2 w-1/3 bg-indigo-300 dark:bg-indigo-600 rounded-sm"></div>
        </div>
        <div className="h-4 w-full flex space-x-1 mt-2">
          <div className="h-full w-1/5 bg-indigo-200 dark:bg-indigo-800 rounded-sm shadow-sm"></div>
          <div className="h-full w-1/5 bg-indigo-200 dark:bg-indigo-800 rounded-sm shadow-sm"></div>
        </div>
      </div>
      <div className="w-1/3 p-1">
        <div className="h-12 w-full bg-gradient-to-br from-indigo-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded shadow-sm flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-indigo-300 dark:bg-indigo-600"></div>
        </div>
      </div>
    </div>
    <div className="h-6 flex space-x-1 p-1">
      <div className="h-full w-1/4 bg-gradient-to-r from-indigo-200 to-indigo-300 dark:from-indigo-800 dark:to-indigo-700 rounded-sm shadow-sm"></div>
      <div className="h-full w-1/4 bg-gradient-to-r from-indigo-200 to-indigo-300 dark:from-indigo-800 dark:to-indigo-700 rounded-sm shadow-sm"></div>
      <div className="h-full w-1/4 bg-gradient-to-r from-indigo-200 to-indigo-300 dark:from-indigo-800 dark:to-indigo-700 rounded-sm shadow-sm"></div>
    </div>
  </div>
);

const OnlineStoreLayoutPreview = () => (
  <div className="w-full h-full flex flex-col">
    <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-600 mb-1"></div>
    <div className="h-4 flex space-x-2 p-1 mb-1 items-center">
      <div className="h-full w-1/5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 rounded-sm shadow-sm flex items-center justify-center">
        <div className="h-1.5 w-3/4 bg-blue-400 dark:bg-blue-500 rounded-sm"></div>
      </div>
      <div className="h-full w-1/5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 rounded-sm shadow-sm flex items-center justify-center">
        <div className="h-1.5 w-3/4 bg-blue-400 dark:bg-blue-500 rounded-sm"></div>
      </div>
      <div className="h-full w-1/5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 rounded-sm shadow-sm flex items-center justify-center">
        <div className="h-1.5 w-3/4 bg-blue-400 dark:bg-blue-500 rounded-sm"></div>
      </div>
      <div className="ml-auto h-full aspect-square bg-blue-400 dark:bg-blue-600 rounded-sm shadow-sm flex items-center justify-center">
        <div className="h-2 w-2 bg-white dark:bg-blue-200 rounded-sm"></div>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-2 p-1">
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded shadow-sm flex flex-col overflow-hidden">
        <div className="h-3/5 bg-blue-100 dark:bg-blue-900/30 w-full"></div>
        <div className="p-1">
          <div className="h-1.5 w-3/4 bg-gray-400 dark:bg-gray-500 rounded-sm mb-1"></div>
          <div className="h-1.5 w-1/2 bg-blue-400 dark:bg-blue-500 rounded-sm"></div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded shadow-sm flex flex-col overflow-hidden">
        <div className="h-3/5 bg-blue-100 dark:bg-blue-900/30 w-full"></div>
        <div className="p-1">
          <div className="h-1.5 w-3/4 bg-gray-400 dark:bg-gray-500 rounded-sm mb-1"></div>
          <div className="h-1.5 w-1/2 bg-blue-400 dark:bg-blue-500 rounded-sm"></div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded shadow-sm flex flex-col overflow-hidden">
        <div className="h-3/5 bg-blue-100 dark:bg-blue-900/30 w-full"></div>
        <div className="p-1">
          <div className="h-1.5 w-3/4 bg-gray-400 dark:bg-gray-500 rounded-sm mb-1"></div>
          <div className="h-1.5 w-1/2 bg-blue-400 dark:bg-blue-500 rounded-sm"></div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded shadow-sm flex flex-col overflow-hidden">
        <div className="h-3/5 bg-blue-100 dark:bg-blue-900/30 w-full"></div>
        <div className="p-1">
          <div className="h-1.5 w-3/4 bg-gray-400 dark:bg-gray-500 rounded-sm mb-1"></div>
          <div className="h-1.5 w-1/2 bg-blue-400 dark:bg-blue-500 rounded-sm"></div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded shadow-sm flex flex-col overflow-hidden">
        <div className="h-3/5 bg-blue-100 dark:bg-blue-900/30 w-full"></div>
        <div className="p-1">
          <div className="h-1.5 w-3/4 bg-gray-400 dark:bg-gray-500 rounded-sm mb-1"></div>
          <div className="h-1.5 w-1/2 bg-blue-400 dark:bg-blue-500 rounded-sm"></div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded shadow-sm flex flex-col overflow-hidden">
        <div className="h-3/5 bg-blue-100 dark:bg-blue-900/30 w-full"></div>
        <div className="p-1">
          <div className="h-1.5 w-3/4 bg-gray-400 dark:bg-gray-500 rounded-sm mb-1"></div>
          <div className="h-1.5 w-1/2 bg-blue-400 dark:bg-blue-500 rounded-sm"></div>
        </div>
      </div>
    </div>
  </div>
);

const PersonalLayoutPreview = () => (
  <div className="w-full h-full flex flex-col">
    <div className="h-2 w-full bg-rose-500 mb-1"></div>
    <div className="flex-1 flex">
      <div className="w-1/3 p-1">
        <div className="h-10 w-full bg-rose-200 dark:bg-rose-800 rounded-full mb-1"></div>
        <div className="h-1 w-3/4 bg-gray-300 dark:bg-gray-600 mb-1"></div>
        <div className="h-1 w-1/2 bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="w-2/3 p-1">
        <div className="h-2 w-1/2 bg-gray-300 dark:bg-gray-600 mb-1"></div>
        <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>
);

const EducationalLayoutPreview = () => (
  <div className="w-full h-full flex flex-col">
    <div className="h-2 w-full bg-lime-500 mb-1"></div>
    <div className="flex-1 flex flex-col p-1 space-y-1">
      <div className="h-3 flex items-center">
        <div className="h-2 w-2/3 bg-gray-300 dark:bg-gray-600"></div>
        <div className="ml-auto h-2 w-6 bg-lime-300 dark:bg-lime-700 rounded-sm"></div>
      </div>
      <div className="h-3 flex items-center">
        <div className="h-2 w-2/3 bg-gray-300 dark:bg-gray-600"></div>
        <div className="ml-auto h-2 w-6 bg-lime-300 dark:bg-lime-700 rounded-sm"></div>
      </div>
      <div className="h-3 flex items-center">
        <div className="h-2 w-2/3 bg-gray-300 dark:bg-gray-600"></div>
        <div className="ml-auto h-2 w-6 bg-lime-300 dark:bg-lime-700 rounded-sm"></div>
      </div>
      <div className="h-3 flex items-center">
        <div className="h-2 w-2/3 bg-gray-300 dark:bg-gray-600"></div>
        <div className="ml-auto h-2 w-6 bg-lime-300 dark:bg-lime-700 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const TourismLayoutPreview = () => (
  <div className="w-full h-full flex flex-col">
    <div className="h-2 w-full bg-amber-500 mb-1"></div>
    <div className="h-3 flex space-x-1 p-1 mb-1">
      <div className="h-full w-1/4 bg-amber-200 dark:bg-amber-800 rounded-sm"></div>
      <div className="h-full w-1/4 bg-amber-200 dark:bg-amber-800 rounded-sm"></div>
      <div className="h-full w-1/4 bg-amber-200 dark:bg-amber-800 rounded-sm"></div>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-1 p-1">
      <div className="bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
    </div>
  </div>
);

const OtherLayoutPreview = () => (
  <div className="w-full h-full flex flex-col">
    <div className="h-2 w-full bg-indigo-500 mb-1"></div>
    <div className="flex-1 p-1">
      <div className="h-2 w-1/2 bg-gray-300 dark:bg-gray-600 mb-1"></div>
      <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
      <div className="h-3 w-full flex space-x-1">
        <div className="h-full w-1/3 bg-indigo-200 dark:bg-indigo-800 rounded-sm"></div>
        <div className="h-full w-1/3 bg-indigo-200 dark:bg-indigo-800 rounded-sm"></div>
        <div className="h-full w-1/3 bg-indigo-200 dark:bg-indigo-800 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const businessTypes = [
  {
    id: 'image',
    title: 'Corporate Site',
    photo: {
      src: '/images/business-types/corporate-site.webp',
      alt: 'Corporate site example',
      colorClass: 'bg-purple-50 dark:bg-purple-900/20'
    },
    description: 'Branding, corporate image'
  },
  {
    id: 'online-store',
    title: 'Online Store',
    photo: {
      src: '/images/business-types/online-shop.webp',
      alt: 'Online store example',
      colorClass: 'bg-blue-50 dark:bg-blue-900/20'
    },
    description: 'E-commerce, product sales'
  },
  {
    id: 'personal',
    title: 'Personal',
    photo: {
      src: '/images/business-types/personal-site.webp',
      alt: 'Personal site example',
      colorClass: 'bg-pink-50 dark:bg-pink-900/20'
    },
    description: 'Personal portfolio, blog, CV'
  },
  {
    id: 'educational',
    title: 'Educational',
    photo: {
      src: '/images/business-types/educational-site.webp',
      alt: 'Educational site example',
      colorClass: 'bg-lime-50 dark:bg-lime-900/20'
    },
    description: 'Learning platform, courses, training'
  },
  {
    id: 'tourism',
    title: 'Tourism',
    photo: {
      src: '/images/business-types/tourism-site.webp',
      alt: 'Tourism site example',
      colorClass: 'bg-amber-50 dark:bg-amber-900/20'
    },
    description: 'Travel agency, adventure, tours'
  },
  {
    id: 'other',
    title: 'Other',
    photo: {
      src: '/images/business-types/other-site.webp',
      alt: 'Other site type example',
      colorClass: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    description: 'Other project types, custom requirements'
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
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Business Type</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Choose your business or project type. This will help us create a design that meets your requirements.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 px-2 sm:px-3 py-2 sm:py-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {businessTypes.map((type) => (
          <motion.div
            key={type.id}
            className={`overflow-hidden cursor-pointer transition-all duration-300 relative ${
              designChoices.businessType === type.id 
                ? 'bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-800/40 dark:to-indigo-700/20 shadow-lg rounded-xl transform scale-105 z-10 border-2 border-indigo-300 dark:border-indigo-500' 
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow hover:border-gray-300 dark:hover:border-gray-600 rounded-lg hover:-translate-y-1'
            }`}
            onClick={() => handleSelectBusinessType(type.id)}
            variants={item}
            whileHover={{ scale: designChoices.businessType === type.id ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {designChoices.businessType === type.id && (
              <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-indigo-500 dark:bg-indigo-400 text-white rounded-full p-0.5 sm:p-1 shadow-sm z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <div className="h-24 sm:h-32 overflow-hidden flex flex-col rounded-lg shadow-sm" 
              style={{
                borderColor: designChoices.businessType === type.id ? '#6366f1' : 'transparent',
                borderWidth: designChoices.businessType === type.id ? '2px' : '0px'
              }}
            >
              <div className={`flex-1 overflow-hidden relative ${designChoices.businessType === type.id ? '' : type.photo.colorClass}`}>
                <img 
                  src={type.photo.src} 
                  alt={type.photo.alt} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.style.display = 'flex';
                    e.currentTarget.parentElement.style.alignItems = 'center';
                    e.currentTarget.parentElement.style.justifyContent = 'center';
                    e.currentTarget.parentElement.innerHTML = `<div class="text-sm text-gray-500 dark:text-gray-400 p-2 text-center">${type.title}</div>`;
                  }}
                />
              </div>
            </div>
            <div className={`p-2 sm:p-3 ${designChoices.businessType === type.id ? '' : ''}`}>
              <h3 className={`font-semibold text-sm sm:text-base mb-0.5 sm:mb-1 ${designChoices.businessType === type.id ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-800 dark:text-white'}`}>{type.title}</h3>
              <p className={`text-xs sm:text-sm ${designChoices.businessType === type.id ? 'text-indigo-600/80 dark:text-indigo-400/80' : 'text-gray-500 dark:text-gray-400'}`}>{type.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 inline-block py-2 px-4 rounded-lg">
          Don't see your business type? Choose the most similar category or "Other", we'll clarify details later.
        </p>
      </div>
    </div>
  );
};

export default BusinessTypeSelector;
