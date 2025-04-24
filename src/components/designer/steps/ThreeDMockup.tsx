import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ThreeDMockupProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

const ThreeDMockup: React.FC<ThreeDMockupProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [isRotating, setIsRotating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [zoom, setZoom] = useState(1);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 15, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Automatically rotate the mockup
  useEffect(() => {
    if (!isRotating) return;
    
    const interval = setInterval(() => {
      setRotation(prev => ({
        ...prev,
        y: (prev.y + 0.5 * rotationSpeed) % 360
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, [isRotating, rotationSpeed]);

  // Handle mouse interactions for manual rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setIsRotating(false);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    
    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.5)),
      y: (prev.y + deltaX * 0.5) % 360
    }));
    
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  // Get color based on selected palette
  const getColorFromPalette = (index: number) => {
    const colorMap: {[key: string]: string[]} = {
      'modern-blue': ['#0F172A', '#1E293B', '#3B82F6', '#BFDBFE', '#FFFFFF'],
      'warm-sunset': ['#7C2D12', '#C2410C', '#FB923C', '#FFEDD5', '#FFFFFF'],
      'forest-green': ['#14532D', '#15803D', '#4ADE80', '#DCFCE7', '#FFFFFF'],
      'elegant-purple': ['#581C87', '#7E22CE', '#C084FC', '#F3E8FF', '#FFFFFF'],
      'ocean-teal': ['#134E4A', '#0F766E', '#2DD4BF', '#CCFBF1', '#FFFFFF'],
      'coral-pink': ['#831843', '#BE185D', '#FB7185', '#FCE7F3', '#FFFFFF'],
      'classic-gray': ['#1F2937', '#4B5563', '#9CA3AF', '#F3F4F6', '#FFFFFF'],
      'vibrant-rainbow': ['#6D28D9', '#DB2777', '#F59E0B', '#10B981', '#FFFFFF']
    };
    
    const palette = designChoices.colorPalette || 'modern-blue';
    const colors = colorMap[palette] || colorMap['modern-blue'];
    
    return colors[index % colors.length];
  };

  // Get layout style based on selected layout type
  const getLayoutStyle = () => {
    const layoutType = designChoices.layoutType || 'classic';
    
    switch(layoutType) {
      case 'classic':
        return {
          header: { height: '60px', color: getColorFromPalette(2) },
          hero: { height: '300px', color: getColorFromPalette(3) },
          content: { display: 'flex', mainWidth: '70%', sidebarWidth: '30%' }
        };
      case 'onepage':
        return {
          header: { height: '60px', color: getColorFromPalette(2) },
          sections: [
            { height: '300px', color: getColorFromPalette(3) },
            { height: '250px', color: getColorFromPalette(4) },
            { height: '200px', color: getColorFromPalette(3) },
            { height: '250px', color: getColorFromPalette(4) }
          ]
        };
      case 'portfolio':
        return {
          header: { height: '60px', color: getColorFromPalette(2) },
          grid: { columns: 3, itemHeight: '150px', color: getColorFromPalette(3) }
        };
      case 'ecommerce':
        return {
          header: { height: '60px', color: getColorFromPalette(2) },
          filters: { height: '50px', color: getColorFromPalette(3) },
          products: { columns: 3, itemHeight: '200px', color: getColorFromPalette(4) }
        };
      default:
        return {
          header: { height: '60px', color: getColorFromPalette(2) },
          hero: { height: '300px', color: getColorFromPalette(3) },
          content: { display: 'flex', mainWidth: '70%', sidebarWidth: '30%' }
        };
    }
  };

  // Render different layout types
  const renderLayoutContent = () => {
    const layoutType = designChoices.layoutType || 'classic';
    const layoutStyle = getLayoutStyle();
    
    switch(layoutType) {
      case 'classic':
        return (
          <>
            <div 
              style={{ height: layoutStyle.header.height, backgroundColor: layoutStyle.header.color }}
              className="w-full rounded-t-lg"
            ></div>
            <div 
              style={{ height: layoutStyle.hero.height, backgroundColor: layoutStyle.hero.color }}
              className="w-full"
            ></div>
            <div className="flex w-full" style={{ height: '300px' }}>
              <div 
                style={{ width: layoutStyle.content.mainWidth, backgroundColor: getColorFromPalette(4) }}
                className="h-full"
              ></div>
              <div 
                style={{ width: layoutStyle.content.sidebarWidth, backgroundColor: getColorFromPalette(1) }}
                className="h-full"
              ></div>
            </div>
          </>
        );
      
      case 'onepage':
        return (
          <>
            <div 
              style={{ height: layoutStyle.header.height, backgroundColor: layoutStyle.header.color }}
              className="w-full rounded-t-lg"
            ></div>
            {layoutStyle.sections.map((section, index) => (
              <div 
                key={index}
                style={{ height: section.height, backgroundColor: section.color }}
                className="w-full"
              ></div>
            ))}
          </>
        );
      
      case 'portfolio':
        return (
          <>
            <div 
              style={{ height: layoutStyle.header.height, backgroundColor: layoutStyle.header.color }}
              className="w-full rounded-t-lg"
            ></div>
            <div className="grid grid-cols-3 gap-2 p-2" style={{ height: '500px' }}>
              {[...Array(9)].map((_, index) => (
                <div 
                  key={index}
                  style={{ height: layoutStyle.grid.itemHeight, backgroundColor: layoutStyle.grid.color }}
                  className="rounded"
                ></div>
              ))}
            </div>
          </>
        );
      
      case 'ecommerce':
        return (
          <>
            <div 
              style={{ height: layoutStyle.header.height, backgroundColor: layoutStyle.header.color }}
              className="w-full rounded-t-lg"
            ></div>
            <div 
              style={{ height: layoutStyle.filters.height, backgroundColor: layoutStyle.filters.color }}
              className="w-full"
            ></div>
            <div className="flex" style={{ height: '500px' }}>
              <div className="w-1/5 p-2" style={{ backgroundColor: getColorFromPalette(1) }}></div>
              <div className="w-4/5 grid grid-cols-3 gap-2 p-2">
                {[...Array(6)].map((_, index) => (
                  <div 
                    key={index}
                    style={{ height: layoutStyle.products.itemHeight, backgroundColor: layoutStyle.products.color }}
                    className="rounded"
                  ></div>
                ))}
              </div>
            </div>
          </>
        );
      
      default:
        return (
          <div 
            style={{ height: '500px', backgroundColor: getColorFromPalette(3) }}
            className="w-full rounded-lg"
          ></div>
        );
    }
  };

  return (
    <div className="py-4">
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        თქვენი ვებგვერდის 3D მაკეტი, რომელიც ასახავს თქვენს მიერ არჩეულ დიზაინს. შეგიძლიათ დაატრიალოთ და მასშტაბი შეცვალოთ.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 3D Mockup */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg">
            <div 
              ref={containerRef}
              className="w-full h-[400px] relative cursor-grab"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  rotateX: rotation.x,
                  rotateY: rotation.y,
                  scale: zoom,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Laptop base */}
                <div className="relative" style={{ transform: 'translateZ(-50px)' }}>
                  <div 
                    className="w-[500px] h-[300px] rounded-xl bg-gray-700 dark:bg-gray-900"
                    style={{ transform: 'rotateX(75deg) translateZ(10px)' }}
                  ></div>
                  
                  {/* Laptop screen */}
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[280px] w-[500px] h-[300px] bg-white dark:bg-gray-800 rounded-lg border-8 border-gray-700 dark:border-gray-900 overflow-hidden"
                    style={{ transform: 'rotateX(5deg) translateZ(50px)' }}
                  >
                    {/* Website content */}
                    {renderLayoutContent()}
                  </div>
                </div>
                
                {/* Phone */}
                <div 
                  className="absolute right-[50px] bottom-[20px] w-[100px] h-[180px] bg-gray-700 dark:bg-gray-900 rounded-xl overflow-hidden border-4 border-gray-800 dark:border-black"
                  style={{ transform: 'rotateY(-20deg) rotateX(5deg) translateZ(100px)' }}
                >
                  <div className="w-full h-full bg-white dark:bg-gray-800 p-1">
                    <div 
                      className="w-full h-[20px]"
                      style={{ backgroundColor: getColorFromPalette(2) }}
                    ></div>
                    <div 
                      className="w-full h-[40px] mt-1"
                      style={{ backgroundColor: getColorFromPalette(3) }}
                    ></div>
                    <div 
                      className="w-full h-[30px] mt-1"
                      style={{ backgroundColor: getColorFromPalette(4) }}
                    ></div>
                    <div 
                      className="w-full h-[30px] mt-1"
                      style={{ backgroundColor: getColorFromPalette(4) }}
                    ></div>
                  </div>
                </div>
                
                {/* Tablet */}
                <div 
                  className="absolute left-[50px] bottom-[0px] w-[150px] h-[200px] bg-gray-700 dark:bg-gray-900 rounded-xl overflow-hidden border-4 border-gray-800 dark:border-black"
                  style={{ transform: 'rotateY(20deg) rotateX(5deg) translateZ(70px)' }}
                >
                  <div className="w-full h-full bg-white dark:bg-gray-800 p-1">
                    <div 
                      className="w-full h-[25px]"
                      style={{ backgroundColor: getColorFromPalette(2) }}
                    ></div>
                    <div 
                      className="w-full h-[60px] mt-1"
                      style={{ backgroundColor: getColorFromPalette(3) }}
                    ></div>
                    <div className="flex mt-1 h-[80px]">
                      <div 
                        className="w-2/3 h-full"
                        style={{ backgroundColor: getColorFromPalette(4) }}
                      ></div>
                      <div 
                        className="w-1/3 h-full ml-1"
                        style={{ backgroundColor: getColorFromPalette(1) }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Instructions overlay */}
              {!isDragging && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/30 dark:bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                    დააკლიკეთ და გადაათრიეთ მაკეტის დასატრიალებლად
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h3 className="font-medium text-gray-800 dark:text-white">მაკეტის კონტროლი</h3>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Auto-rotation control */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-gray-700 dark:text-gray-300">ავტომატური როტაცია</label>
                  <div 
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      isRotating ? 'bg-indigo-500 justify-end' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    onClick={() => setIsRotating(!isRotating)}
                  >
                    <div className="w-4 h-4 rounded-full bg-white mx-1"></div>
                  </div>
                </div>
                
                {isRotating && (
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">როტაციის სიჩქარე</label>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="3" 
                      step="0.5" 
                      value={rotationSpeed} 
                      onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>ნელი</span>
                      <span>სწრაფი</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Zoom control */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">მასშტაბი</label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="1.5" 
                  step="0.1" 
                  value={zoom} 
                  onChange={(e) => setZoom(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>შემცირება</span>
                  <span>გადიდება</span>
                </div>
              </div>
              
              {/* Reset view */}
              <button 
                className="w-full py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/30 transition-colors"
                onClick={() => {
                  setRotation({ x: 15, y: 0 });
                  setZoom(1);
                }}
              >
                საწყის მდგომარეობაზე დაბრუნება
              </button>
            </div>
          </div>
          
          {/* Design summary */}
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h3 className="font-medium text-gray-800 dark:text-white">თქვენი დიზაინის შეჯამება</h3>
            </div>
            
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">ბიზნესის ტიპი:</span>
                  <span className="text-gray-800 dark:text-white font-medium">
                    {designChoices.businessType || 'არ არის არჩეული'}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">პერსონალობა:</span>
                  <span className="text-gray-800 dark:text-white font-medium">
                    {designChoices.businessPersonality || 'არ არის არჩეული'}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">ფერთა პალიტრა:</span>
                  <span className="text-gray-800 dark:text-white font-medium">
                    {designChoices.colorPalette || 'არ არის არჩეული'}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">განლაგება:</span>
                  <span className="text-gray-800 dark:text-white font-medium">
                    {designChoices.layoutType || 'არ არის არჩეული'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          3D მაკეტი საშუალებას გაძლევთ ნახოთ, როგორ გამოიყურება თქვენი ვებგვერდი სხვადასხვა მოწყობილობაზე.
          ყველა ცვლილება რეალურ დროში აისახება მაკეტზე.
        </p>
      </div>
    </div>
  );
};

export default ThreeDMockup;
