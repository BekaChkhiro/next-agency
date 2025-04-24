import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MobileExperienceProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

// Mobile menu types
const mobileMenuTypes = [
  {
    id: 'hamburger',
    name: 'ჰამბურგერის მენიუ',
    description: 'კლასიკური სამ-ხაზიანი მენიუ, რომელიც იხსნება გვერდიდან',
  },
  {
    id: 'bottom',
    name: 'ქვედა ნავიგაცია',
    description: 'ფიქსირებული ნავიგაცია ეკრანის ქვედა ნაწილში',
  },
  {
    id: 'fullscreen',
    name: 'სრულეკრანიანი მენიუ',
    description: 'მენიუ, რომელიც იკავებს მთელ ეკრანს გახსნისას',
  },
  {
    id: 'dropdown',
    name: 'ჩამოსაშლელი მენიუ',
    description: 'ჩამოსაშლელი მენიუ ეკრანის ზედა ნაწილიდან',
  }
];

const MobileExperience: React.FC<MobileExperienceProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [mobileSettings, setMobileSettings] = useState<any>(
    designChoices.mobileSettings || {
      menuType: 'hamburger',
      adaptiveImages: true,
      touchFriendly: true,
      simplifiedLayout: false
    }
  );
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuTypeChange = (menuType: string) => {
    const newSettings = { ...mobileSettings, menuType };
    setMobileSettings(newSettings);
    updateDesign('mobileSettings', newSettings);
  };

  const handleToggleOption = (option: string) => {
    const newSettings = { 
      ...mobileSettings, 
      [option]: !mobileSettings[option] 
    };
    setMobileSettings(newSettings);
    updateDesign('mobileSettings', newSettings);
  };

  const handleScroll = (direction: 'up' | 'down') => {
    if (direction === 'down' && scrollPosition < 3) {
      setScrollPosition(scrollPosition + 1);
    } else if (direction === 'up' && scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mobile preview components based on menu type
  const MobilePreview = () => {
    const { menuType } = mobileSettings;
    
    return (
      <div className="relative w-[280px] h-[560px] bg-gray-800 rounded-[32px] p-3 shadow-xl mx-auto">
        {/* Phone frame */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl"></div>
        
        {/* Phone screen */}
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[24px] overflow-hidden relative">
          {/* Header */}
          <div className="h-14 bg-indigo-600 dark:bg-indigo-800 flex items-center justify-between px-4">
            <div className="text-white font-medium">მობილური ვერსია</div>
            
            {menuType === 'hamburger' && (
              <motion.button 
                className="w-8 h-8 flex flex-col justify-center items-center"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div 
                  className="w-5 h-0.5 bg-white mb-1"
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
                <motion.div 
                  className="w-5 h-0.5 bg-white mb-1"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
                <motion.div 
                  className="w-5 h-0.5 bg-white"
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              </motion.button>
            )}
            
            {menuType === 'dropdown' && (
              <motion.button 
                className="w-8 h-8 flex justify-center items-center"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            )}
          </div>
          
          {/* Content */}
          <div className="h-[calc(100%-56px)] overflow-hidden">
            {/* Hamburger menu */}
            {menuType === 'hamburger' && isMenuOpen && (
              <motion.div 
                className="absolute top-14 left-0 w-3/4 h-[calc(100%-56px)] bg-white dark:bg-gray-800 shadow-lg z-10"
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 px-6">
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </motion.div>
            )}
            
            {/* Dropdown menu */}
            {menuType === 'dropdown' && isMenuOpen && (
              <motion.div 
                className="absolute top-14 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-10"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 px-6">
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </motion.div>
            )}
            
            {/* Fullscreen menu */}
            {menuType === 'fullscreen' && isMenuOpen && (
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-indigo-600 dark:bg-indigo-800 z-20 flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button 
                  className="absolute top-4 right-4 w-8 h-8 flex justify-center items-center"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                
                <div className="w-3/4">
                  <div className="h-10 bg-white/20 rounded mb-6"></div>
                  <div className="h-10 bg-white/20 rounded mb-6"></div>
                  <div className="h-10 bg-white/20 rounded mb-6"></div>
                  <div className="h-10 bg-white/20 rounded mb-6"></div>
                  <div className="h-10 bg-white/20 rounded"></div>
                </div>
              </motion.div>
            )}
            
            {/* Page content */}
            <div 
              className="h-full overflow-hidden"
              style={{ filter: (menuType === 'hamburger' || menuType === 'dropdown') && isMenuOpen ? 'blur(2px)' : 'none' }}
            >
              <div className="p-4" style={{ transform: `translateY(-${scrollPosition * 100}px)`, transition: 'transform 0.3s' }}>
                {/* Hero section */}
                <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-2"></div>
                    <div className="h-4 w-40 bg-gray-300 dark:bg-gray-600 rounded mx-auto"></div>
                  </div>
                </div>
                
                {/* Content sections */}
                <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 p-3">
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                
                <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 p-3">
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                
                <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 p-3">
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                
                <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 p-3">
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Bottom navigation */}
            {menuType === 'bottom' && (
              <div className="absolute bottom-0 left-0 w-full h-14 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center">
                {['home', 'search', 'favorites', 'profile'].map((item, index) => (
                  <motion.div 
                    key={item} 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-indigo-100 dark:bg-indigo-900/30' : ''
                    }`}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMenu}
                  >
                    <div className={`w-5 h-5 rounded-full ${
                      index === 0 ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`}></div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Scroll indicator */}
            <div className="absolute bottom-4 right-4 flex flex-col">
              <motion.button 
                className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full mb-2 flex items-center justify-center"
                onClick={() => handleScroll('up')}
                disabled={scrollPosition === 0}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </motion.button>
              
              <motion.button 
                className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center"
                onClick={() => handleScroll('down')}
                disabled={scrollPosition === 3}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </div>
          </div>
          
          {menuType === 'fullscreen' && !isMenuOpen && (
            <motion.button 
              className="absolute top-3 right-4 w-8 h-8 flex justify-center items-center"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="py-4">
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        განსაზღვრეთ თქვენი ვებგვერდის მობილური გამოცდილება. დღეს მომხმარებლების უმეტესობა მობილურ მოწყობილობებს იყენებს.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mobile preview */}
        <div className="order-2 lg:order-1">
          <MobilePreview />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              სიმულაციასთან ინტერაქცია:
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-300"
                onClick={toggleMenu}
              >
                მენიუს ჩვენება/დამალვა
              </button>
              <button 
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-300"
                onClick={() => handleScroll('down')}
              >
                ჩამოსქროლვა
              </button>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="order-1 lg:order-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-6">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h3 className="font-medium text-gray-800 dark:text-white">მობილური მენიუს ტიპი</h3>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mobileMenuTypes.map((menuType) => (
                  <div 
                    key={menuType.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      mobileSettings.menuType === menuType.id 
                        ? 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800' 
                        : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => handleMenuTypeChange(menuType.id)}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`w-4 h-4 rounded-full mr-2 ${
                        mobileSettings.menuType === menuType.id 
                          ? 'bg-indigo-500' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}></div>
                      <h4 className="font-medium text-gray-800 dark:text-white">{menuType.name}</h4>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{menuType.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h3 className="font-medium text-gray-800 dark:text-white">მობილური ოპტიმიზაციის პარამეტრები</h3>
            </div>
            
            <div className="p-4">
              <div className="space-y-4">
                <div 
                  className="flex items-center justify-between p-3 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => handleToggleOption('adaptiveImages')}
                >
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">ადაპტური სურათები</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">ავტომატურად მოარგებს სურათების ზომას მოწყობილობის ეკრანს</p>
                  </div>
                  <div className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                    mobileSettings.adaptiveImages ? 'bg-indigo-500 justify-end' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <div className="w-4 h-4 rounded-full bg-white mx-1"></div>
                  </div>
                </div>
                
                <div 
                  className="flex items-center justify-between p-3 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => handleToggleOption('touchFriendly')}
                >
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">შეხებაზე ოპტიმიზირებული</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">უფრო დიდი ღილაკები და ინტერაქტიული ელემენტები შეხებისთვის</p>
                  </div>
                  <div className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                    mobileSettings.touchFriendly ? 'bg-indigo-500 justify-end' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <div className="w-4 h-4 rounded-full bg-white mx-1"></div>
                  </div>
                </div>
                
                <div 
                  className="flex items-center justify-between p-3 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => handleToggleOption('simplifiedLayout')}
                >
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">გამარტივებული განლაგება</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">მობილურისთვის გამარტივებული ვერსია ნაკლები ელემენტებით</p>
                  </div>
                  <div className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                    mobileSettings.simplifiedLayout ? 'bg-indigo-500 justify-end' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <div className="w-4 h-4 rounded-full bg-white mx-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          მობილურზე ოპტიმიზირებული ვებგვერდი აუცილებელია თანამედროვე ციფრულ სამყაროში. 
          ვებგვერდის ვიზიტორების 60%-ზე მეტი მობილურ მოწყობილობებს იყენებს.
        </p>
      </div>
    </div>
  );
};

export default MobileExperience;
