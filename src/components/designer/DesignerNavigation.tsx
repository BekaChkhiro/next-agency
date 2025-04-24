'use client';

import React from 'react';
import Link from 'next/link';
import MotionDiv from '@/components/motion/MotionDiv';
import MotionSpan from '@/components/motion/MotionSpan';
import MotionButton from '@/components/motion/MotionButton';

const DesignerNavigation: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <MotionDiv 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">ვებ დიზაინერი</span>
          </MotionDiv>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link href="/" passHref>
            <MotionSpan 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              მთავარი
            </MotionSpan>
          </Link>
          
          <Link href="/designer/quick" passHref>
            <MotionSpan 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              სწრაფი ვერსია
            </MotionSpan>
          </Link>
          
          <Link href="/designer/full" passHref>
            <MotionSpan 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              სრული ვერსია
            </MotionSpan>
          </Link>
          
          <MotionButton 
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            დახმარება
          </MotionButton>
        </nav>
      </div>
    </header>
  );
};

export default DesignerNavigation;
