import React, { useState } from 'react';
import { motion } from '../../motion';

interface VisualStyleDesignerProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

// Color palettes
const colorPalettes = [
  {
    id: 'modern-blue',
    name: 'Modern Blue',
    colors: ['#0F172A', '#1E293B', '#3B82F6', '#BFDBFE', '#FFFFFF'],
    preview: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'warm-sunset',
    name: 'Warm Sunset',
    colors: ['#7C2D12', '#C2410C', '#FB923C', '#FFEDD5', '#FFFFFF'],
    preview: 'from-orange-500 to-amber-600'
  },
  {
    id: 'forest-green',
    name: 'Forest Green',
    colors: ['#14532D', '#15803D', '#4ADE80', '#DCFCE7', '#FFFFFF'],
    preview: 'from-green-600 to-emerald-700'
  },
  {
    id: 'elegant-purple',
    name: 'Elegant Purple',
    colors: ['#581C87', '#7E22CE', '#C084FC', '#F3E8FF', '#FFFFFF'],
    preview: 'from-purple-600 to-violet-700'
  },
  {
    id: 'ocean-teal',
    name: 'Ocean Teal',
    colors: ['#134E4A', '#0F766E', '#2DD4BF', '#CCFBF1', '#FFFFFF'],
    preview: 'from-teal-600 to-cyan-700'
  },
  {
    id: 'coral-pink',
    name: 'Coral Pink',
    colors: ['#831843', '#BE185D', '#FB7185', '#FCE7F3', '#FFFFFF'],
    preview: 'from-pink-600 to-rose-700'
  },
  {
    id: 'classic-gray',
    name: 'Classic Gray',
    colors: ['#1F2937', '#4B5563', '#9CA3AF', '#F3F4F6', '#FFFFFF'],
    preview: 'from-gray-600 to-gray-700'
  },

  {
    id: 'other',
    name: 'Other',
    colors: ['#6D28D9', '#DB2777', '#F59E0B', '#10B981', '#FFFFFF'],
    preview: 'from-indigo-600 via-pink-500 to-yellow-500'
  }
];





const VisualStyleDesigner: React.FC<VisualStyleDesignerProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {

  
  const handleSelectColorPalette = (paletteId: string) => {
    updateDesign('colorPalette', paletteId);
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


      {/* Color Palettes */}
        <div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Choose a color palette that best reflects your brand's personality.
          </p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {colorPalettes.map((palette) => (
              <motion.div
                key={palette.id}
                className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all hover:-translate-y-1 ${
                  designChoices.colorPalette === palette.id ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02]' : ''
                }`}
                onClick={() => handleSelectColorPalette(palette.id)}
                variants={item}
              >
                <div className={`h-16 sm:h-20 lg:h-24 bg-gradient-to-r ${palette.preview}`}></div>
                <div className="p-2 sm:p-3 lg:p-4 bg-white dark:bg-gray-800">
                  <h3 className="font-medium text-gray-800 dark:text-white text-sm sm:text-base mb-2 sm:mb-3">{palette.name}</h3>
                  <div className="flex space-x-2">
                    {palette.colors.map((color, index) => (
                      <div 
                        key={index} 
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full border border-gray-200 dark:border-gray-700" 
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Preview of the palette on a website element */}
                <div className="p-2 sm:p-3 lg:p-4 bg-gray-50 dark:bg-gray-900">
                  <div className="w-full h-12 sm:h-16 lg:h-20 bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 shadow-sm">
                    <div 
                      className="w-full h-6 rounded mb-2" 
                      style={{ backgroundColor: palette.colors[2] }}
                    ></div>
                    <div className="flex space-x-1">
                      <div 
                        className="w-1/3 h-4 rounded" 
                        style={{ backgroundColor: palette.colors[3] }}
                      ></div>
                      <div 
                        className="w-1/2 h-4 rounded" 
                        style={{ backgroundColor: palette.colors[3] }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>


      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Colors define the visual style of your website. You can change these choices at any time.
        </p>
      </div>
    </div>
  );
};

export default VisualStyleDesigner;
