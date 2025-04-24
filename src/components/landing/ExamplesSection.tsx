'use client';

import React from 'react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import MotionDiv from '@/components/motion/MotionDiv';
import MotionH2 from '@/components/motion/MotionH2';
import MotionP from '@/components/motion/MotionP';

const ExamplesSection: React.FC = () => {
  const examples = [
    {
      title: 'TechSolutions Inc.',
      description: 'A comprehensive corporate website with service catalog, team profiles, and integrated customer portal.',
      image: '/examples/tech-solutions.jpg',
      tags: ['Corporate', 'B2B', 'Customer Portal']
    },
    {
      title: 'FreshMarket Online Store',
      description: 'Full-featured e-commerce platform with inventory management, payment processing, and delivery tracking.',
      image: '/examples/fresh-market.jpg',
      tags: ['E-commerce', 'Retail', 'Payment Integration']
    },
    {
      title: 'CreativeStudio Agency',
      description: 'Dynamic portfolio website showcasing the agency\'s work with interactive galleries and case studies.',
      image: '/examples/creative-studio.jpg',
      tags: ['Portfolio', 'Creative', 'Interactive']
    },
    {
      title: 'HealthPlus Medical Center',
      description: 'Healthcare platform with appointment scheduling, patient portal, and telemedicine capabilities.',
      image: '/examples/health-plus.jpg',
      tags: ['Healthcare', 'Booking System', 'Patient Portal']
    }
  ];

  return (
    <section id="examples" className="py-24 px-4 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 z-0">
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
            <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Our Work</p>
          </div>
          
          <MotionH2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </MotionH2>
          
          <MotionP 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Browse through some of the websites and platforms we've developed for our clients across various industries.
          </MotionP>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {examples.map((example, index) => (
            <MotionDiv 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 group-hover:scale-105 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center w-4/5 h-4/5">
                    <div className="w-1/2 h-6 bg-white/20 rounded mb-4"></div>
                    <div className="w-3/4 h-4 bg-white/20 rounded mb-2"></div>
                    <div className="w-2/3 h-4 bg-white/20 rounded mb-6"></div>
                    <div className="grid grid-cols-3 gap-3 w-full">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-white/10 rounded aspect-square"></div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image 
                  src={example.image} 
                  alt={example.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="inline-flex items-center gap-1 text-white font-medium">
                      View Project <FiExternalLink className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{example.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{example.description}</p>
                <div className="flex flex-wrap gap-2">
                  {example.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
