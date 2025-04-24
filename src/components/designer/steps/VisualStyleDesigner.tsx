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
    id: 'vibrant-rainbow',
    name: 'Vibrant Rainbow',
    colors: ['#6D28D9', '#DB2777', '#F59E0B', '#10B981', '#FFFFFF'],
    preview: 'from-indigo-600 via-pink-500 to-yellow-500'
  }
];

// Font pairs
const fontPairs = [
  {
    id: 'modern-sans',
    name: 'Modern Sans-Serif',
    heading: 'Inter',
    body: 'Roboto',
    preview: 'font-sans'
  },
  {
    id: 'elegant-serif',
    name: 'Elegant Serif',
    heading: 'Playfair Display',
    body: 'Source Serif Pro',
    preview: 'font-serif'
  },
  {
    id: 'creative-mix',
    name: 'Creative Mix',
    heading: 'Poppins',
    body: 'Lora',
    preview: 'font-sans'
  },
  {
    id: 'professional-clean',
    name: 'Professional and Clean',
    heading: 'Montserrat',
    body: 'Open Sans',
    preview: 'font-sans'
  },
  {
    id: 'friendly-rounded',
    name: 'Friendly Rounded',
    heading: 'Quicksand',
    body: 'Nunito',
    preview: 'font-sans'
  },
  {
    id: 'tech-geometric',
    name: 'Tech Geometric',
    heading: 'Space Grotesk',
    body: 'DM Sans',
    preview: 'font-sans'
  }
];

// Photo styles
const photoStyles = [
  {
    id: 'documentary',
    name: 'Documentary/Realistic',
    description: 'Natural, authentic photos from real situations',
    preview: 'bg-gradient-to-r from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700'
  },
  {
    id: 'artistic',
    name: 'Stylized/Artistic',
    description: 'Creative, artistic photos with unique perspective',
    preview: 'bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900'
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean, simple photos with minimal details',
    preview: 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700'
  },
  {
    id: 'vibrant',
    name: 'Vibrant Colorful',
    description: 'Bright, vibrant colored photos with energetic mood',
    preview: 'bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 dark:from-yellow-900 dark:via-green-900 dark:to-blue-900'
  },
  {
    id: 'professional',
    name: 'Professional/Corporate',
    description: 'Professional, high-quality business-oriented photos',
    preview: 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900'
  }
];

const VisualStyleDesigner: React.FC<VisualStyleDesignerProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [activeTab, setActiveTab] = useState('colors');
  
  const handleSelectColorPalette = (paletteId: string) => {
    updateDesign('colorPalette', paletteId);
  };
  
  const handleSelectFontPair = (fontPairId: string) => {
    updateDesign('fontPair', fontPairId);
  };
  
  const handleSelectPhotoStyle = (photoStyleId: string) => {
    updateDesign('photoStyle', photoStyleId);
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
      <div className="flex justify-center mb-8">
        <div className="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'colors' 
                ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
            onClick={() => setActiveTab('colors')}
          >
            Colors
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'fonts' 
                ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
            onClick={() => setActiveTab('fonts')}
          >
            Fonts
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'photos' 
                ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
            onClick={() => setActiveTab('photos')}
          >
            Photos
          </button>
        </div>
      </div>

      {/* Color Palettes */}
      {activeTab === 'colors' && (
        <div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Choose a color palette that best reflects your brand's personality.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                <div className={`h-24 bg-gradient-to-r ${palette.preview}`}></div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-3">{palette.name}</h3>
                  <div className="flex space-x-2">
                    {palette.colors.map((color, index) => (
                      <div 
                        key={index} 
                        className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700" 
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Preview of the palette on a website element */}
                <div className="p-4 bg-gray-50 dark:bg-gray-900">
                  <div className="w-full h-20 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
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
      )}

      {/* Font Pairs */}
      {activeTab === 'fonts' && (
        <div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Choose a font combination that best reflects your brand's character.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {fontPairs.map((pair) => (
              <motion.div
                key={pair.id}
                className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all hover:-translate-y-1 ${
                  designChoices.fontPair === pair.id ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02]' : ''
                }`}
                onClick={() => handleSelectFontPair(pair.id)}
                variants={item}
              >
                <div className="p-6 bg-white dark:bg-gray-800">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-4">{pair.name}</h3>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">სათაური:</div>
                    <div className={`text-xl font-bold ${pair.preview}`}>{pair.heading}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">ძირითადი ტექსტი:</div>
                    <div className={`${pair.preview}`}>{pair.body}</div>
                  </div>
                </div>
                
                {/* Preview of the font pair on a website element */}
                <div className="p-4 bg-gray-50 dark:bg-gray-900">
                  <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                    <div className={`text-lg font-bold mb-2 ${pair.preview}`}>Heading Example</div>
                    <div className={`text-sm text-gray-600 dark:text-gray-300 ${pair.preview}`}>
                      This is a body text example that shows how your chosen font looks in a real context.
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Photo Styles */}
      {activeTab === 'photos' && (
        <div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Choose a photo style that best showcases your brand and products.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {photoStyles.map((style) => (
              <motion.div
                key={style.id}
                className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all hover:-translate-y-1 ${
                  designChoices.photoStyle === style.id ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-[1.02]' : ''
                }`}
                onClick={() => handleSelectPhotoStyle(style.id)}
                variants={item}
              >
                <div className={`h-40 ${style.preview} flex items-center justify-center p-6`}>
                  <div className="w-20 h-20 bg-white/30 dark:bg-black/30 rounded-full flex items-center justify-center">
                    {style.id === 'documentary' && (
                      <svg className="w-10 h-10 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {style.id === 'artistic' && (
                      <svg className="w-10 h-10 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                    {style.id === 'minimalist' && (
                      <svg className="w-10 h-10 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                    {style.id === 'vibrant' && (
                      <svg className="w-10 h-10 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    )}
                    {style.id === 'professional' && (
                      <svg className="w-10 h-10 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-2">{style.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{style.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Visual style defines the overall aesthetics of your website. You can change these choices at any time.
        </p>
      </div>
    </div>
  );
};

export default VisualStyleDesigner;
