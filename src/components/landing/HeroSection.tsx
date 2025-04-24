'use client';

import React from 'react';
import MotionDiv from '@/components/motion/MotionDiv';
import MotionH1 from '@/components/motion/MotionH1';
import MotionP from '@/components/motion/MotionP';
import MotionA from '@/components/motion/MotionA';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 z-0"></div>
      
      {/* Animated website illustrations */}
      <div className="absolute inset-0 z-0 opacity-20">
        <MotionDiv 
          className="absolute top-1/4 left-1/4 w-64 h-64"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 shadow-xl"></div>
        </MotionDiv>
        
        <MotionDiv 
          className="absolute top-1/3 right-1/4 w-48 h-48"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-tr from-pink-400 to-orange-500 shadow-xl"></div>
        </MotionDiv>
        
        <MotionDiv 
          className="absolute bottom-1/4 left-1/3 w-56 h-56"
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-bl from-green-400 to-teal-500 shadow-xl"></div>
        </MotionDiv>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <MotionH1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          გაფართოებული ვიზუალური ვებგვერდის დიზაინერი
        </MotionH1>
        
        <MotionP 
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          შექმენით თქვენი იდეალური ვებგვერდი ინტერაქტიული ვიზუალური დიზაინერით. 
          აირჩიეთ სტილი, ფერები, განლაგება და ფუნქციები ინტუიციური ინტერფეისით.
        </MotionP>
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <MotionA 
            href="#experience-selector"
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium shadow-lg hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            დაიწყეთ დიზაინი
          </MotionA>
          <MotionA 
            href="#examples"
            className="px-8 py-4 bg-white text-indigo-600 border border-indigo-200 rounded-full font-medium shadow-md hover:bg-indigo-50 transition-colors dark:bg-gray-800 dark:text-indigo-400 dark:border-gray-700 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ნახეთ მაგალითები
          </MotionA>
        </MotionDiv>
      </div>
      
      {/* Scroll indicator */}
      <MotionDiv 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </MotionDiv>
    </section>
  );
};

export default HeroSection;
