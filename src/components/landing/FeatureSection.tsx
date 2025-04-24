'use client';

import React from 'react';
import { FiMonitor, FiServer, FiSmartphone, FiHeadphones } from 'react-icons/fi';
import MotionDiv from '@/components/motion/MotionDiv';
import MotionH2 from '@/components/motion/MotionH2';
import MotionP from '@/components/motion/MotionP';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <FiMonitor className="w-6 h-6" />,
      title: 'Custom Website Development',
      description: 'We build tailor-made websites that perfectly align with your business goals and brand identity.'
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: 'Platform Development',
      description: 'We create powerful web platforms and applications that streamline your business operations and enhance user experience.'
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: 'Responsive Design',
      description: 'All our websites are fully responsive, ensuring optimal performance across all devices and screen sizes.'
    },
    {
      icon: <FiHeadphones className="w-6 h-6" />,
      title: 'Ongoing Support',
      description: 'We provide continuous technical support and maintenance to ensure your website remains secure and up-to-date.'
    }
  ];

  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-white dark:bg-gray-800 z-0">
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
            <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">What We Offer</p>
          </div>
          
          <MotionH2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-indigo-600 dark:text-indigo-400">Services</span>
          </MotionH2>
          
          <MotionP 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            NextAgency offers comprehensive web development services for businesses of all sizes. We create custom platforms and websites tailored to your specific needs.
          </MotionP>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <MotionDiv 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
