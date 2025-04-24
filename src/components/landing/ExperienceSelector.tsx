'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiPackage, FiStar } from 'react-icons/fi';
import MotionDiv from '@/components/motion/MotionDiv';
import MotionSpan from '@/components/motion/MotionSpan';
import MotionH2 from '@/components/motion/MotionH2';
import MotionP from '@/components/motion/MotionP';

const ExperienceSelector: React.FC = () => {
  return (
    <section id="experience-selector" className="py-24 px-4 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 z-0">
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100 dark:bg-green-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
            <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Pricing</p>
          </div>
          
          <MotionH2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-indigo-600 dark:text-indigo-400">Packages</span>
          </MotionH2>
          
          <MotionP 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We offer flexible development packages to meet the needs of different businesses. Choose the option that best suits your requirements.
          </MotionP>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Standard Package Card */}
          <MotionDiv 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative group border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Card header */}
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Standard Package</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">$999</span>
                    <span className="text-sm text-white/80 ml-2">starting price</span>
                  </div>
                </div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <FiPackage className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Card content */}
            <div className="p-8">
              <div className="flex items-center mb-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center mr-3">
                  <span className="text-indigo-600 dark:text-indigo-300 font-medium">2-4</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Weeks delivery time</p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Perfect for small to medium businesses needing a professional website with essential features and responsive design.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Responsive Design',
                  'Up to 5 Pages',
                  'Contact Form',
                  'Basic SEO Setup',
                  '1 Month Support'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                      <FiStar className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center">
                <Link href="/designer/quick" passHref>
                  <MotionSpan 
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-indigo-600 text-white rounded-lg font-medium cursor-pointer shadow-lg shadow-indigo-500/20 group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Request Standard Package
                    <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MotionSpan>
                </Link>
              </div>
            </div>
          </MotionDiv>

          {/* Premium Package Card */}
          <MotionDiv 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative group border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Popular tag */}
            <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              POPULAR
            </div>
            
            {/* Card header */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Premium Package</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">$2499</span>
                    <span className="text-sm text-white/80 ml-2">starting price</span>
                  </div>
                </div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <FiStar className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Card content */}
            <div className="p-8">
              <div className="flex items-center mb-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center mr-3">
                  <span className="text-purple-600 dark:text-purple-300 font-medium">4-8</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Weeks delivery time</p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive development solution for businesses needing custom platforms, advanced functionality, and extensive support.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Custom Platform Development',
                  'Unlimited Pages',
                  'Advanced Features',
                  'Full SEO Optimization',
                  '3 Months Support'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                      <FiStar className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center">
                <Link href="/designer/full" passHref>
                  <MotionSpan 
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-purple-600 text-white rounded-lg font-medium cursor-pointer shadow-lg shadow-purple-500/20 group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Request Premium Package
                    <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MotionSpan>
                </Link>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSelector;
