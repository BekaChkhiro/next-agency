import React, { useState } from 'react';
import { motion } from '../../motion';

interface BusinessPersonalityProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

const personalityTypes = [
  {
    id: 'modern',
    title: 'თანამედროვე და მინიმალისტური',
    description: 'სუფთა ხაზები, დიდი სივრცე, მინიმალისტური დიზაინი',
    elements: ['სუფთა ხაზები', 'თეთრი სივრცე', 'მინიმალისტური', 'გეომეტრიული ფორმები']
  },
  {
    id: 'friendly',
    title: 'მეგობრული და თბილი',
    description: 'ღია ფერები, მომრგვალებული ფორმები, მეგობრული ტონი',
    elements: ['ღია ფერები', 'მომრგვალებული ფორმები', 'თბილი ტონები', 'ხალისიანი ელემენტები']
  },
  {
    id: 'luxury',
    title: 'ლუქსი და ელეგანტურობა',
    description: 'მდიდრული დეტალები, მუქი ტონები, პრემიუმ გამოცდილება',
    elements: ['მდიდრული დეტალები', 'მუქი ტონები', 'ოქროს ან ვერცხლის აქცენტები', 'ელეგანტური შრიფტები']
  },
  {
    id: 'creative',
    title: 'კრეატიული და ენერგიული',
    description: 'ცოცხალი ფერები, უჩვეულო ფორმები, ინოვაციური ელემენტები',
    elements: ['ცოცხალი ფერები', 'უჩვეულო ფორმები', 'მოულოდნელი ელემენტები', 'თამამი დიზაინი']
  },
  {
    id: 'traditional',
    title: 'ტრადიციული და სანდო',
    description: 'კლასიკური ელემენტები, ტრადიციული ფერები, სანდო შთაბეჭდილება',
    elements: ['კლასიკური ელემენტები', 'ტრადიციული ფერები', 'სიმეტრიული განლაგება', 'ისტორიული მოტივები']
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
        აირჩიეთ თქვენი ბრენდის პერსონალობა. ეს განსაზღვრავს თქვენი ვებგვერდის ვიზუალურ და ემოციურ ტონს.
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
          თქვენი ბრენდის პერსონალობა განსაზღვრავს როგორ აღიქვამენ მომხმარებლები თქვენს ბიზნესს. აირჩიეთ ის, რომელიც საუკეთესოდ ასახავს თქვენს ღირებულებებს.
        </p>
      </div>
    </div>
  );
};

export default BusinessPersonality;
