import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpecialNeedsProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

// Special needs/features
const specialFeatures = [
  {
    id: 'multilingual',
    name: 'Multilingual Website',
    description: 'Website available in multiple languages',
    icon: 'language',
    complexity: 'medium'
  },
  {
    id: 'payment',
    name: 'Payment System',
    description: 'Online payment integration',
    icon: 'credit-card',
    complexity: 'high'
  },
  {
    id: 'membership',
    name: 'User Profile System',
    description: 'User registration and profiles',
    icon: 'user',
    complexity: 'high'
  },
  {
    id: 'seo',
    name: 'SEO Optimization',
    description: 'Search engine optimization',
    icon: 'search',
    complexity: 'medium'
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Track visitor statistics',
    icon: 'chart',
    complexity: 'low'
  },
  {
    id: 'blog',
    name: 'Blog/News',
    description: 'Blog or news section',
    icon: 'news',
    complexity: 'medium'
  },
  {
    id: 'social',
    name: 'Social Media Integration',
    description: 'Integration with social networks',
    icon: 'share',
    complexity: 'low'
  },
  {
    id: 'forms',
    name: 'Contact Form',
    description: 'Complex forms for data collection',
    icon: 'form',
    complexity: 'medium'
  },
  {
    id: 'accessibility',
    name: 'Admin Panel',
    description: 'Content management system',
    icon: 'accessibility',
    complexity: 'medium'
  },
  {
    id: 'search',
    name: 'Site Search',
    description: 'Internal website search functionality',
    icon: 'search-doc',
    complexity: 'medium'
  },
  {
    id: 'chat',
    name: 'Live Chat',
    description: 'Live chat functionality with users',
    icon: 'chat',
    complexity: 'high'
  },
  {
    id: 'api',
    name: 'API Integration',
    description: 'Integration with external services',
    icon: 'api',
    complexity: 'high'
  }
];

const SpecialNeeds: React.FC<SpecialNeedsProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(
    designChoices.specialNeeds || []
  );
  
  const [activeTab, setActiveTab] = useState<string>('all');

  const toggleFeature = (featureId: string) => {
    const newSelectedFeatures = selectedFeatures.includes(featureId)
      ? selectedFeatures.filter(id => id !== featureId)
      : [...selectedFeatures, featureId];
    
    setSelectedFeatures(newSelectedFeatures);
    updateDesign('specialNeeds', newSelectedFeatures);
  };

  // Filter features by complexity
  const getFilteredFeatures = () => {
    if (activeTab === 'all') {
      return specialFeatures;
    }
    
    return specialFeatures.filter(feature => feature.complexity === activeTab);
  };

  // Get icon component based on icon name
  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case 'language':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        );
      case 'credit-card':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        );
      case 'user':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'search':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'news':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'share':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        );
      case 'form':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case 'accessibility':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      case 'search-doc':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
          </svg>
        );
      case 'api':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'chat':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
    }
  };

  // Get complexity badge color
  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800/30';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800/30';
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800/30';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-800/30';
    }
  };

  // Get visual preview for a feature
  const getFeaturePreview = (feature: any) => {
    switch(feature.id) {
      case 'multilingual':
        return (
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
            <div className="flex justify-end mb-2 space-x-1">
              <div className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">GE</div>
              <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">EN</div>
              <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">RU</div>
            </div>
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        );
      case 'payment':
        return (
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
            <div className="flex justify-between mb-3">
              <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="flex space-x-1">
                <div className="h-6 w-10 bg-indigo-100 dark:bg-indigo-900/30 rounded"></div>
                <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-10 w-full bg-indigo-100 dark:bg-indigo-900/30 rounded"></div>
          </div>
        );
      case 'membership':
        return (
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
            <div className="flex items-center mb-3">
              <div className="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mr-2"></div>
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        );
      case 'seo':
        return (
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col">
            <div className="h-5 w-full bg-green-100 dark:bg-green-900/30 rounded mb-2 flex items-center px-1">
              <div className="h-3 w-3/4 bg-green-200 dark:bg-green-800 rounded"></div>
            </div>
            <div className="h-4 w-full bg-blue-100 dark:bg-blue-900/30 rounded mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg p-2 flex items-center justify-center">
            <div className="text-4xl text-gray-300 dark:text-gray-600">
              {getIconComponent(feature.icon)}
            </div>
          </div>
        );
    }
  };

  // Animation variants for container and items
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  // Animation for selected features
  const selectedItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="py-4 sm:py-6 md:py-8 px-2 sm:px-4 max-w-7xl mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-800 dark:text-white mb-2 sm:mb-3">Website Features</h2>
      <p className="text-xs sm:text-sm md:text-base text-center text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 md:mb-10 max-w-2xl mx-auto">
        Select special features and requirements for your website.
      </p>

      <div className="flex justify-center mb-4 sm:mb-6 md:mb-10">
        <div className="flex space-x-1 sm:space-x-2 p-1 sm:p-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <button
            className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === 'all' 
                ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-gray-200 dark:ring-gray-600' 
                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === 'low' 
                ? 'bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
            }`}
            onClick={() => setActiveTab('low')}
          >
            Simple
          </button>
          <button
            className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === 'medium' 
                ? 'bg-white dark:bg-gray-800 text-yellow-600 dark:text-yellow-400 shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400'
            }`}
            onClick={() => setActiveTab('medium')}
          >
            Medium
          </button>
          <button
            className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === 'high' 
                ? 'bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400'
            }`}
            onClick={() => setActiveTab('high')}
          >
            Complex
          </button>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {getFilteredFeatures().map((feature) => (
          <motion.div
            key={feature.id}
            className={`rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              selectedFeatures.includes(feature.id) 
                ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02] bg-indigo-50/50 dark:bg-indigo-900/10' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-800/80 border border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => toggleFeature(feature.id)}
            variants={item}
          >
            <div className="h-12 sm:h-20 md:h-36 bg-gray-50 dark:bg-gray-900 p-1 sm:p-2 md:p-4 transition-colors duration-300">
              {getFeaturePreview(feature)}
            </div>
            <div className="p-2 sm:p-3 md:p-5 bg-white dark:bg-gray-800 transition-colors duration-300">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <h3 className="font-semibold text-gray-800 dark:text-white text-[10px] sm:text-xs md:text-base truncate">{feature.name}</h3>
                <span className={`text-[8px] sm:text-[10px] md:text-xs px-1 sm:px-1.5 md:px-2.5 py-0.5 rounded-full font-medium ${getComplexityColor(feature.complexity)}`}>
                  {feature.complexity === 'low' && 'Simple'}
                  {feature.complexity === 'medium' && 'Medium'}
                  {feature.complexity === 'high' && 'Complex'}
                </span>
              </div>
              <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-600 dark:text-gray-300 mb-1 sm:mb-2 md:mb-4 mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-2">{feature.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-indigo-600 dark:text-indigo-400">
                  <div className="scale-50 sm:scale-75 md:scale-100">{getIconComponent(feature.icon)}</div>
                </div>
                <div className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  selectedFeatures.includes(feature.id) 
                    ? 'bg-indigo-600 text-white scale-110' 
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/30'
                }`}>
                  {selectedFeatures.includes(feature.id) && (
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Selected features summary */}
      {selectedFeatures.length > 0 && (
        <motion.div 
          className="mt-6 sm:mt-8 md:mt-12 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 sm:p-3 md:p-5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 dark:text-white flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-1.5 md:mr-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Selected Features ({selectedFeatures.length})
            </h3>
          </div>
          
          <div className="p-2 sm:p-4 md:p-6">
            <motion.div 
              className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2"
              initial="hidden"
              animate="show"
            >
              {selectedFeatures.map((featureId) => {
                const feature = specialFeatures.find(f => f.id === featureId);
                if (!feature) return null;
                
                return (
                  <motion.div 
                    key={featureId}
                    className={`px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-md sm:rounded-lg flex items-center ${getComplexityColor(feature.complexity)} border border-transparent shadow-sm`}
                    variants={selectedItem}
                    layout
                  >
                    <span className="mr-1 sm:mr-1.5 md:mr-2 text-[10px] sm:text-xs md:text-sm">{feature.name}</span>
                    <button 
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-white/30 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFeature(featureId);
                      }}
                    >
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <div className="mt-3 sm:mt-4 md:mt-6 p-2 sm:p-3 md:p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-md sm:rounded-lg border border-indigo-100 dark:border-indigo-800/30 shadow-sm">
              <div className="flex items-start">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-indigo-600 dark:text-indigo-400 mr-1 sm:mr-1.5 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[10px] sm:text-xs md:text-sm text-indigo-700 dark:text-indigo-300">
                  You have selected {selectedFeatures.length} feature(s). 
                  {selectedFeatures.filter(id => specialFeatures.find(f => f.id === id)?.complexity === 'high').length > 0 && 
                    ' Some selected features are complex and may affect project timeline and budget.'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-6 sm:mt-8 md:mt-12 text-center max-w-2xl mx-auto">
        <div className="p-3 sm:p-4 md:p-5 bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium text-indigo-600 dark:text-indigo-400">Pro tip:</span> Identifying special features at the beginning of the project will help us with better planning and implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialNeeds;
