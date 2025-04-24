'use client';

import React from 'react';
import Image from 'next/image';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import MotionDiv from '@/components/motion/MotionDiv';
import MotionH1 from '@/components/motion/MotionH1';
import MotionP from '@/components/motion/MotionP';
import MotionA from '@/components/motion/MotionA';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 z-0">
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-block px-4 py-1 mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Professional Web Development</p>
            </div>
            
            <MotionH1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Elevate Your <span className="text-indigo-600 dark:text-indigo-400">Business</span> Online
            </MotionH1>
            
            <MotionP 
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We create stunning, high-performance websites that convert visitors into customers. Custom-built for your unique business needs.
            </MotionP>
            
            {/* Key benefits */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Responsive Design',
                  'SEO Optimization',
                  'Fast Performance',
                  'Conversion Focused'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                      <FiCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MotionA 
                href="#experience-selector"
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium text-center hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Packages
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MotionA>
              <MotionA 
                href="#examples"
                className="px-8 py-4 bg-white text-indigo-600 border border-indigo-200 rounded-lg font-medium text-center hover:bg-indigo-50 transition-colors dark:bg-gray-800 dark:text-indigo-400 dark:border-gray-700 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                See Our Work
              </MotionA>
            </MotionDiv>
            
            {/* Trust indicators */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">5.0 rating from 100+ clients</span>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {['Trustpilot', 'Google', 'Clutch'].map((platform, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{platform} Verified</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>
          </div>
          
          {/* Right side - Image */}
          <MotionDiv 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
              <div className="absolute -right-4 -bottom-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              
              {/* Main image container with browser mockup */}
              <div className="relative">
                {/* Browser mockup */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Browser header */}
                  <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-3 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="mx-auto bg-white dark:bg-gray-700 rounded-full px-4 py-1 text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      yourwebsite.com
                    </div>
                  </div>
                  
                  {/* Website mockup content */}
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 aspect-[16/10] flex items-center justify-center">
                    <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col">
                      <div className="w-1/2 h-6 bg-white/20 rounded mb-4"></div>
                      <div className="w-3/4 h-4 bg-white/20 rounded mb-2"></div>
                      <div className="w-2/3 h-4 bg-white/20 rounded mb-6"></div>
                      <div className="flex gap-2 mb-6">
                        <div className="w-24 h-8 bg-white/30 rounded"></div>
                        <div className="w-24 h-8 bg-white/10 rounded"></div>
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-3">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-white/10 rounded aspect-square"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -right-8 -top-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 flex items-center gap-2 animate-float">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">SEO Optimized</span>
                </div>
                
                <div className="absolute -left-8 -bottom-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 flex items-center gap-2 animate-float animation-delay-2000">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Fast Loading</span>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
