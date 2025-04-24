import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LayoutArchitectureProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

// Layout types
const layoutTypes = [
  {
    id: 'classic',
    name: 'კლასიკური',
    description: 'მენიუ ზემოთ, ჰეროს სექცია, სტანდარტული განლაგება',
    preview: 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
  },
  {
    id: 'onepage',
    name: 'თანამედროვე ერთგვერდიანი',
    description: 'გრძელი ერთი გვერდი სექციებით, გლუვი გადასვლებით',
    preview: 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
  },
  {
    id: 'portfolio',
    name: 'მრავალსვეტიანი პორტფოლიო',
    description: 'გრიდზე დაფუძნებული განლაგება ვიზუალური კონტენტისთვის',
    preview: 'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20'
  },
  {
    id: 'ecommerce',
    name: 'პროდუქტზე ორიენტირებული მაღაზია',
    description: 'პროდუქტების გამოსაჩენად ოპტიმიზირებული განლაგება',
    preview: 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
  }
];

// Navigation styles
const navigationStyles = [
  {
    id: 'horizontal',
    name: 'ჰორიზონტალური მენიუ',
    description: 'კლასიკური ჰორიზონტალური ნავიგაცია ზედა ნაწილში',
    preview: 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700'
  },
  {
    id: 'vertical',
    name: 'ვერტიკალური მენიუ',
    description: 'გვერდითი ნავიგაცია მარცხენა ან მარჯვენა მხარეს',
    preview: 'bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30'
  },
  {
    id: 'hamburger',
    name: 'ჰამბურგერის მენიუ',
    description: 'დამალული მენიუ, რომელიც იხსნება ღილაკზე დაჭერით',
    preview: 'bg-gradient-to-r from-violet-50 to-violet-100 dark:from-violet-900/30 dark:to-violet-800/30'
  },
  {
    id: 'mega',
    name: 'მეგა-მენიუ',
    description: 'გაფართოებული ჩამოსაშლელი მენიუ მრავალი ვარიანტით',
    preview: 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30'
  },
  {
    id: 'simple',
    name: 'მარტივი ჩამოსაშლელი',
    description: 'ტრადიციული ჩამოსაშლელი მენიუ ქვეკატეგორიებით',
    preview: 'bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30'
  }
];

const LayoutArchitecture: React.FC<LayoutArchitectureProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [activeTab, setActiveTab] = useState('layout');
  
  const handleSelectLayout = (layoutId: string) => {
    updateDesign('layoutType', layoutId);
  };
  
  const handleSelectNavigation = (navigationId: string) => {
    updateDesign('navigationStyle', navigationId);
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

  // Layout preview components
  const ClassicLayoutPreview = () => (
    <div className="w-full h-full flex flex-col">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 mb-2"></div>
      <div className="h-20 bg-gray-300 dark:bg-gray-600 mb-2"></div>
      <div className="flex-1 flex gap-2">
        <div className="flex-[3] bg-gray-100 dark:bg-gray-800"></div>
        <div className="flex-1 bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
  
  const OnePageLayoutPreview = () => (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="h-6 bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-16 bg-gray-300 dark:bg-gray-600"></div>
      <div className="h-12 bg-gray-100 dark:bg-gray-800"></div>
      <div className="h-12 bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-12 bg-gray-100 dark:bg-gray-800"></div>
      <div className="h-12 bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
  
  const PortfolioLayoutPreview = () => (
    <div className="w-full h-full flex flex-col">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 mb-2"></div>
      <div className="flex-1 grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bg-gray-300 dark:bg-gray-600"></div>
        ))}
      </div>
    </div>
  );
  
  const EcommerceLayoutPreview = () => (
    <div className="w-full h-full flex flex-col">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 mb-2"></div>
      <div className="h-12 bg-gray-300 dark:bg-gray-600 mb-2"></div>
      <div className="flex-1 flex gap-2">
        <div className="w-1/5 bg-gray-100 dark:bg-gray-800"></div>
        <div className="flex-1 grid grid-cols-2 gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-200 dark:bg-gray-700 flex flex-col">
              <div className="h-3/5 bg-gray-300 dark:bg-gray-600 mb-1"></div>
              <div className="h-1/5 bg-gray-400 dark:bg-gray-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Navigation preview components
  const HorizontalNavPreview = () => (
    <div className="w-full h-full flex flex-col">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="flex gap-1 h-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-8 bg-gray-300 dark:bg-gray-600"></div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 mt-1"></div>
    </div>
  );
  
  const VerticalNavPreview = () => (
    <div className="w-full h-full flex">
      <div className="w-1/4 bg-gray-200 dark:bg-gray-700 flex flex-col items-center pt-2 gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600"></div>
        ))}
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 ml-1"></div>
    </div>
  );
  
  const HamburgerNavPreview = () => (
    <div className="w-full h-full flex flex-col">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 flex items-center px-2">
        <div className="w-6 h-4 bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 mt-1"></div>
    </div>
  );
  
  const MegaMenuNavPreview = () => (
    <div className="w-full h-full flex flex-col">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="flex gap-1 h-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-8 bg-gray-300 dark:bg-gray-600"></div>
          ))}
        </div>
      </div>
      <div className="h-20 bg-gray-300 dark:bg-gray-600 mt-1 flex p-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 flex flex-col gap-1">
            {[...Array(3)].map((_, j) => (
              <div key={j} className="h-4 bg-gray-400 dark:bg-gray-500"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 mt-1"></div>
    </div>
  );
  
  const SimpleDropdownNavPreview = () => (
    <div className="w-full h-full flex flex-col">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="flex gap-1 h-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-8 bg-gray-300 dark:bg-gray-600"></div>
          ))}
        </div>
      </div>
      <div className="h-12 bg-gray-300 dark:bg-gray-600 mt-1 ml-20 w-24"></div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 mt-1"></div>
    </div>
  );

  const getLayoutPreview = (id: string) => {
    switch(id) {
      case 'classic': return <ClassicLayoutPreview />;
      case 'onepage': return <OnePageLayoutPreview />;
      case 'portfolio': return <PortfolioLayoutPreview />;
      case 'ecommerce': return <EcommerceLayoutPreview />;
      default: return <ClassicLayoutPreview />;
    }
  };

  const getNavigationPreview = (id: string) => {
    switch(id) {
      case 'horizontal': return <HorizontalNavPreview />;
      case 'vertical': return <VerticalNavPreview />;
      case 'hamburger': return <HamburgerNavPreview />;
      case 'mega': return <MegaMenuNavPreview />;
      case 'simple': return <SimpleDropdownNavPreview />;
      default: return <HorizontalNavPreview />;
    }
  };

  return (
    <div className="py-4">
      <div className="flex justify-center mb-8">
        <div className="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'layout' 
                ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
            onClick={() => setActiveTab('layout')}
          >
            გვერდის განლაგება
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'navigation' 
                ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
            onClick={() => setActiveTab('navigation')}
          >
            ნავიგაციის სტილი
          </button>
        </div>
      </div>

      {/* Layout Types */}
      {activeTab === 'layout' && (
        <div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            აირჩიეთ თქვენი ვებგვერდის ძირითადი განლაგების სტრუქტურა.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {layoutTypes.map((layout) => (
              <motion.div
                key={layout.id}
                className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all hover:-translate-y-1 ${
                  designChoices.layoutType === layout.id ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02]' : ''
                }`}
                onClick={() => handleSelectLayout(layout.id)}
                variants={item}
              >
                <div className={`h-48 ${layout.preview} p-4`}>
                  <div className="w-full h-full bg-white/80 dark:bg-gray-800/80 rounded-lg p-2 shadow-sm">
                    {getLayoutPreview(layout.id)}
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2">{layout.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{layout.description}</p>
                </div>
                
                {/* 3D Animation placeholder */}
                <div className="p-4 bg-gray-50 dark:bg-gray-900 flex justify-center">
                  <motion.div 
                    className="w-full h-16 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center justify-center"
                    animate={{ 
                      rotateX: [0, 10, 0],
                      rotateY: [0, 15, 0],
                      z: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <span className="text-xs text-gray-500 dark:text-gray-400">3D ანიმირებული მაკეტი</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Navigation Styles */}
      {activeTab === 'navigation' && (
        <div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            აირჩიეთ თქვენი ვებგვერდის ნავიგაციის სტილი.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {navigationStyles.map((nav) => (
              <motion.div
                key={nav.id}
                className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all hover:-translate-y-1 ${
                  designChoices.navigationStyle === nav.id ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02]' : ''
                }`}
                onClick={() => handleSelectNavigation(nav.id)}
                variants={item}
              >
                <div className={`h-40 ${nav.preview} p-4`}>
                  <div className="w-full h-full bg-white/80 dark:bg-gray-800/80 rounded-lg p-2 shadow-sm">
                    {getNavigationPreview(nav.id)}
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2">{nav.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{nav.description}</p>
                </div>
                
                {/* Interactive animation */}
                <div className="p-4 bg-gray-50 dark:bg-gray-900">
                  <motion.div 
                    className="w-full h-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="flex gap-2 items-center"
                      animate={{ 
                        x: nav.id === 'hamburger' ? [0, 5, 0] : [0, 0, 0],
                        opacity: nav.id === 'hamburger' ? [1, 0.8, 1] : 1
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    >
                      {nav.id === 'hamburger' && (
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      )}
                      <span className="text-xs text-gray-500 dark:text-gray-400">ინტერაქტიული დემონსტრაცია</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          განლაგების არქიტექტურა განსაზღვრავს თქვენი ვებგვერდის სტრუქტურას და მომხმარებლის გამოცდილებას.
        </p>
      </div>
    </div>
  );
};

export default LayoutArchitecture;
