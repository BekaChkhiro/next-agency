'use client';

import React from 'react';
import Link from 'next/link';
import MotionDiv from '@/components/motion/MotionDiv';
import MotionSpan from '@/components/motion/MotionSpan';

const ExperienceSelector: React.FC = () => {
  return (
    <section id="experience-selector" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <MotionDiv 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">აირჩიეთ თქვენი გამოცდილება</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            გადაწყვიტეთ რამდენი დრო გსურთ დაუთმოთ თქვენი ვებგვერდის დიზაინს. ორივე ვარიანტი შექმნის მაღალი ხარისხის შედეგს.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Version Card */}
          <MotionDiv 
            className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg overflow-hidden relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-8">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white text-center">სწრაფი ვერსია</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">5-7 წუთი</p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                იდეალურია თუ დრო შეზღუდული გაქვთ. სწრაფად გაივლით ძირითად ეტაპებს და მიიღებთ პროფესიონალურ შედეგს.
              </p>
              <div className="flex justify-center">
                <Link href="/designer/quick" passHref>
                  <MotionSpan 
                    className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-medium cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    აირჩიეთ სწრაფი ვერსია
                  </MotionSpan>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </MotionDiv>

          {/* Full Version Card */}
          <MotionDiv 
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg overflow-hidden relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-8">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white text-center">სრული ვერსია</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">10-15 წუთი</p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                სრული დიზაინის გამოცდილება ყველა ფუნქციით. იდეალურია თუ გსურთ მაქსიმალურად მორგებული და დეტალური შედეგი.
              </p>
              <div className="flex justify-center">
                <Link href="/designer/full" passHref>
                  <MotionSpan 
                    className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-medium cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    აირჩიეთ სრული ვერსია
                  </MotionSpan>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSelector;
