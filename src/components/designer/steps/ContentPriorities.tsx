import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContentPrioritiesProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

// Content sections
const contentSections = [
  {
    id: 'products',
    name: 'პროდუქტები/სერვისები',
    description: 'თქვენი პროდუქტების ან სერვისების დეტალური აღწერა',
    icon: '📦'
  },
  {
    id: 'about',
    name: 'კომპანიის შესახებ/ისტორია',
    description: 'ინფორმაცია თქვენი ბიზნესის შესახებ და ისტორია',
    icon: '🏢'
  },
  {
    id: 'team',
    name: 'გუნდის წევრები',
    description: 'თქვენი გუნდის წევრების წარდგენა',
    icon: '👥'
  },
  {
    id: 'testimonials',
    name: 'კლიენტების შეფასებები',
    description: 'კმაყოფილი კლიენტების გამოხმაურებები',
    icon: '⭐'
  },
  {
    id: 'blog',
    name: 'ბლოგი/სიახლეები',
    description: 'სტატიები, სიახლეები და განახლებები',
    icon: '📰'
  },
  {
    id: 'contact',
    name: 'საკონტაქტო ინფორმაცია',
    description: 'როგორ დაგიკავშირდნენ თქვენ',
    icon: '📞'
  },
  {
    id: 'gallery',
    name: 'გალერეა/პორტფოლიო',
    description: 'თქვენი ნამუშევრების ან პროდუქტების ვიზუალური გამოფენა',
    icon: '🖼️'
  }
];

const ContentPriorities: React.FC<ContentPrioritiesProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const [priorities, setPriorities] = useState<string[]>(
    designChoices.contentPriorities?.length > 0 
      ? designChoices.contentPriorities 
      : contentSections.map(section => section.id)
  );
  
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggingId(id);
    e.dataTransfer.effectAllowed = 'move';
    // Required for Firefox
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    if (id !== draggingId) {
      setDragOverId(id);
    }
  };

  const handleDrop = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    
    if (draggingId && draggingId !== id) {
      const newPriorities = [...priorities];
      const draggedIndex = newPriorities.indexOf(draggingId);
      const dropIndex = newPriorities.indexOf(id);
      
      // Remove the dragged item
      newPriorities.splice(draggedIndex, 1);
      
      // Insert it at the new position
      newPriorities.splice(dropIndex, 0, draggingId);
      
      setPriorities(newPriorities);
      updateDesign('contentPriorities', newPriorities);
    }
    
    setDraggingId(null);
    setDragOverId(null);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
    setDragOverId(null);
  };

  const getContentSectionById = (id: string) => {
    return contentSections.find(section => section.id === id) || contentSections[0];
  };

  return (
    <div className="py-4">
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        დაალაგეთ კონტენტის სექციები მნიშვნელობის მიხედვით. გადაათრიეთ ელემენტები სასურველი თანმიმდევრობით.
      </p>

      <div className="max-w-xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">როგორ გამოვიყენოთ:</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            1. გადაათრიეთ ელემენტები ზემოთ ან ქვემოთ პრიორიტეტის შესაცვლელად
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            2. ყველაზე მაღალი პრიორიტეტის ელემენტები გამოჩნდება თქვენი საიტის თავში
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h3 className="font-medium text-gray-800 dark:text-white">კონტენტის პრიორიტეტები</h3>
          </div>
          
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {priorities.map((id, index) => {
              const section = getContentSectionById(id);
              
              return (
                <motion.li 
                  key={id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, id)}
                  onDragOver={(e) => handleDragOver(e, id)}
                  onDrop={(e) => handleDrop(e, id)}
                  onDragEnd={handleDragEnd}
                  className={`p-4 flex items-center cursor-move transition-colors ${
                    draggingId === id 
                      ? 'bg-indigo-50 dark:bg-indigo-900/20' 
                      : dragOverId === id 
                        ? 'bg-gray-50 dark:bg-gray-700' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="mr-4 text-2xl">{section.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-white">{section.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{section.description}</p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium">
                      {index + 1}
                    </span>
                    <svg className="w-5 h-5 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Visual preview of content order */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h3 className="font-medium text-gray-800 dark:text-white">ვიზუალური წინასწარი ხედვა</h3>
          </div>
          
          <div className="p-4">
            <div className="w-full h-8 bg-gray-200 dark:bg-gray-700 mb-4 rounded"></div>
            
            {priorities.slice(0, 3).map((id, index) => {
              const section = getContentSectionById(id);
              
              return (
                <div key={id} className="mb-3">
                  <div className="flex items-center mb-1">
                    <span className="text-sm mr-2">{section.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{section.name}</span>
                  </div>
                  <div className={`w-full h-${12 - index * 2} bg-gray-100 dark:bg-gray-700 rounded`}></div>
                </div>
              );
            })}
            
            <div className="w-full h-4 bg-gray-200 dark:bg-gray-600 mt-4 rounded opacity-70"></div>
            <div className="w-full h-4 bg-gray-200 dark:bg-gray-600 mt-2 rounded opacity-50"></div>
            <div className="w-full h-4 bg-gray-200 dark:bg-gray-600 mt-2 rounded opacity-30"></div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          კონტენტის პრიორიტეტების განსაზღვრა დაგეხმარებათ მომხმარებლებს ადვილად მიაწოდოთ ყველაზე მნიშვნელოვანი ინფორმაცია.
        </p>
      </div>
    </div>
  );
};

export default ContentPriorities;
