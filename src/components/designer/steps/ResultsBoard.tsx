import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ResultsBoardProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

const ResultsBoard: React.FC<ResultsBoardProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [downloadReady, setDownloadReady] = useState(false);
  
  useEffect(() => {
    // Simulate preparing the download
    const timer = setTimeout(() => {
      setDownloadReady(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Helper function to get business type name
  const getBusinessTypeName = (id: string) => {
    const businessTypes = {
      restaurant: 'რესტორანი/კაფე',
      retail: 'საცალო მაღაზია',
      beauty: 'სილამაზის სალონი',
      professional: 'პროფესიული მომსახურება',
      tech: 'ტექნოლოგიები/სტარტაპი',
      fitness: 'ფიტნესი/ჯანმრთელობა',
      education: 'განათლება',
      travel: 'ტურიზმი/მოგზაურობა',
      realestate: 'უძრავი ქონება',
      arts: 'ხელოვნება/გართობა',
      nonprofit: 'არაკომერციული ორგანიზაცია',
      manufacturing: 'წარმოება',
      other: 'სხვა'
    };
    
    return businessTypes[id as keyof typeof businessTypes] || 'არჩეული არ არის';
  };

  // Helper function to get personality name
  const getPersonalityName = (id: string) => {
    const personalities = {
      modern: 'თანამედროვე და მინიმალისტური',
      friendly: 'მეგობრული და თბილი',
      luxury: 'ლუქსი და ელეგანტურობა',
      creative: 'კრეატიული და ენერგიული',
      traditional: 'ტრადიციული და სანდო'
    };
    
    return personalities[id as keyof typeof personalities] || 'არჩეული არ არის';
  };

  // Helper function to get layout type name
  const getLayoutName = (id: string) => {
    const layouts = {
      classic: 'კლასიკური',
      modern: 'თანამედროვე ერთგვერდიანი',
      portfolio: 'მრავალსვეტიანი პორტფოლიო',
      shop: 'პროდუქტზე ორიენტირებული'
    };
    
    return layouts[id as keyof typeof layouts] || 'არჩეული არ არის';
  };

  // Helper function to get navigation style name
  const getNavigationName = (id: string) => {
    const navigations = {
      horizontal: 'ჰორიზონტალური',
      vertical: 'ვერტიკალური',
      hamburger: 'ჰამბურგერის მენიუ',
      mega: 'მეგა-მენიუ',
      simple: 'მარტივი ჩამოსაშლელი'
    };
    
    return navigations[id as keyof typeof navigations] || 'არჩეული არ არის';
  };

  // Helper function to get color palette preview
  const getColorPalettePreview = () => {
    if (!designChoices.colorPalette) return null;
    
    const colors = designChoices.colorPalette.colors || ['#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#404040'];
    
    return (
      <div className="flex space-x-2">
        {colors.map((color: string, index: number) => (
          <div 
            key={index}
            className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    );
  };

  // Helper function to get font preview
  const getFontPreview = () => {
    if (!designChoices.fontPair) return null;
    
    const { heading, body } = designChoices.fontPair;
    
    return (
      <div className="space-y-2">
        <div className="text-lg font-semibold" style={{ fontFamily: heading }}>Aa</div>
        <div className="text-sm" style={{ fontFamily: body }}>Aa</div>
      </div>
    );
  };

  // Helper function to count selected interactive features
  const countSelectedFeatures = () => {
    if (!designChoices.interactiveFeatures) return 0;
    return designChoices.interactiveFeatures.length;
  };

  // Helper function to count selected special needs
  const countSelectedSpecialNeeds = () => {
    if (!designChoices.specialNeeds) return 0;
    return designChoices.specialNeeds.length;
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

  return (
    <div className="py-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">თქვენი ვებგვერდის დიზაინის შეჯამება</h2>
        <p className="text-gray-600 dark:text-gray-300">
          აქ არის თქვენი ყველა არჩევანის ვიზუალური შეჯამება
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Business Info Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          variants={item}
        >
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border-b border-indigo-100 dark:border-indigo-800/20">
            <h3 className="font-medium text-indigo-800 dark:text-indigo-300">ბიზნესის ინფორმაცია</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">ბიზნესის ტიპი</h4>
              <p className="font-medium text-gray-800 dark:text-white">
                {designChoices.businessType ? getBusinessTypeName(designChoices.businessType) : 'არჩეული არ არის'}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">ბრენდის პერსონალობა</h4>
              <p className="font-medium text-gray-800 dark:text-white">
                {designChoices.personality ? getPersonalityName(designChoices.personality) : 'არჩეული არ არის'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual Style Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          variants={item}
        >
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border-b border-purple-100 dark:border-purple-800/20">
            <h3 className="font-medium text-purple-800 dark:text-purple-300">ვიზუალური სტილი</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">ფერთა პალიტრა</h4>
              {getColorPalettePreview() || <p className="text-gray-400 dark:text-gray-500">არჩეული არ არის</p>}
            </div>
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">შრიფტები</h4>
              {getFontPreview() || <p className="text-gray-400 dark:text-gray-500">არჩეული არ არის</p>}
            </div>
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">ფოტო სტილი</h4>
              <p className="font-medium text-gray-800 dark:text-white">
                {designChoices.photoStyle || 'არჩეული არ არის'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Layout Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          variants={item}
        >
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800/20">
            <h3 className="font-medium text-blue-800 dark:text-blue-300">ლეიაუტი და ნავიგაცია</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">გვერდის განლაგება</h4>
              <p className="font-medium text-gray-800 dark:text-white">
                {designChoices.layoutType ? getLayoutName(designChoices.layoutType) : 'არჩეული არ არის'}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">ნავიგაციის სტილი</h4>
              <p className="font-medium text-gray-800 dark:text-white">
                {designChoices.navigationType ? getNavigationName(designChoices.navigationType) : 'არჩეული არ არის'}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">კონტენტის პრიორიტეტები</h4>
              {designChoices.contentPriorities && designChoices.contentPriorities.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {designChoices.contentPriorities.slice(0, 3).map((priority: string, index: number) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded text-xs text-blue-700 dark:text-blue-300">
                      {priority}
                    </span>
                  ))}
                  {designChoices.contentPriorities.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300">
                      +{designChoices.contentPriorities.length - 3}
                    </span>
                  )}
                </div>
              ) : (
                <p className="text-gray-400 dark:text-gray-500">არჩეული არ არის</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          variants={item}
        >
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-800/20">
            <h3 className="font-medium text-green-800 dark:text-green-300">ფუნქციები და საჭიროებები</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">ინტერაქტიული ფუნქციები</h4>
              <p className="font-medium text-gray-800 dark:text-white">
                {countSelectedFeatures()} არჩეული ფუნქცია
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">სპეციალური საჭიროებები</h4>
              <p className="font-medium text-gray-800 dark:text-white">
                {countSelectedSpecialNeeds()} არჩეული საჭიროება
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">მობილური გამოცდილება</h4>
              <p className="font-medium text-gray-800 dark:text-white">
                {designChoices.mobileExperience ? 'ოპტიმიზირებულია' : 'სტანდარტული'}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 3D Preview Section */}
      <motion.div 
        className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        variants={item}
      >
        <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          <h3 className="font-medium text-gray-800 dark:text-white">თქვენი ვებგვერდის 3D ვიზუალიზაცია</h3>
        </div>
        <div className="p-6">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400 dark:text-gray-500">3D ვიზუალიზაცია ხელმისაწვდომია თქვენი დიზაინის შეჯამებაში</p>
          </div>
        </div>
      </motion.div>

      {/* Download Section */}
      <motion.div 
        className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        variants={item}
      >
        <div className="p-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-4 sm:mb-0">
            <h3 className="font-medium text-gray-800 dark:text-white mb-1">შეინახეთ თქვენი დიზაინი</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              ჩამოტვირთეთ თქვენი დიზაინის შეჯამება PDF ფორმატში
            </p>
          </div>
          <div className="flex space-x-3">
            <button 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                downloadReady 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
              }`}
              disabled={!downloadReady}
            >
              {downloadReady ? 'PDF ჩამოტვირთვა' : 'მზადდება...'}
            </button>
            <button 
              className="px-4 py-2 bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-600 rounded-lg font-medium transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-indigo-500 dark:text-indigo-400"
            >
              გაზიარება
            </button>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          თქვენი დიზაინის არჩევანი შენახულია და მზად არის შემდეგი ნაბიჯისთვის.
        </p>
      </div>
    </div>
  );
};

export default ResultsBoard;
