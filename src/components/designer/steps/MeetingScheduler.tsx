import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCalendar, HiOutlineMail, HiOutlinePhone, HiOutlineDocumentText } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';

interface MeetingSchedulerProps {
  designChoices: any;
  updateDesign: (key: string, value: any) => void;
  isQuickVersion: boolean;
}

const MeetingScheduler: React.FC<MeetingSchedulerProps> = ({ 
  designChoices, 
  updateDesign,
  isQuickVersion 
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Load any existing contact data
    if (designChoices.contactInfo) {
      setName(designChoices.contactInfo.name || '');
      setEmail(designChoices.contactInfo.email || '');
      setPhone(designChoices.contactInfo.phone || '');
      setNotes(designChoices.contactInfo.notes || '');
    }
  }, [designChoices.contactInfo]);

  const validateForm = () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return false;
    }
    
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      updateDesign('contactInfo', {
        name,
        email,
        phone,
        notes
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  // Define types for summary items
  type SummaryItem = {
    icon: string;
    label: string;
    value: any;
    category: string;
  };

  type GroupedItems = {
    [key: string]: SummaryItem[];
  };

  type SummaryResult = {
    items: SummaryItem[];
    groupedItems: GroupedItems;
  };

  // Helper function to render design choices summary
  const renderDesignSummary = (): SummaryResult => {
    const summaryItems: SummaryItem[] = [];
    
    // Helper function to safely add items to the summary
    const addToSummary = (key: string, label: string, icon: string, category: string) => {
      if (designChoices[key] !== undefined && designChoices[key] !== null && designChoices[key] !== '') {
        const value = Array.isArray(designChoices[key]) 
          ? designChoices[key].join(', ')
          : designChoices[key];
        
        summaryItems.push({
          icon,
          label,
          value,
          category
        });
      }
    };
    
    // Business details
    addToSummary('businessType', 'Business Type', 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', 'business');
    
    addToSummary('businessPersonality', 'Business Personality', 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', 'business');
    
    addToSummary('businessName', 'Business Name', 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 'business');
    
    addToSummary('industry', 'Industry', 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', 'business');
    
    // Visual design
    addToSummary('visualStyle', 'Visual Style', 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', 'design');
    
    addToSummary('colorScheme', 'Color Scheme', 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', 'design');
    
    addToSummary('typography', 'Typography', 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', 'design');
    
    addToSummary('imageStyle', 'Image Style', 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', 'design');
    
    // Content
    addToSummary('contentPriorities', 'Content Priorities', 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', 'content');
    
    addToSummary('contentType', 'Content Type', 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', 'content');
    
    addToSummary('contentTone', 'Content Tone', 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', 'content');
    
    addToSummary('languages', 'Languages', 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129', 'content');
    
    // Structure
    addToSummary('layoutArchitecture', 'Layout Architecture', 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z', 'structure');
    
    addToSummary('navigationStyle', 'Navigation Style', 'M4 6h16M4 12h16M4 18h16', 'structure');
    
    addToSummary('footerStyle', 'Footer Style', 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z', 'structure');
    
    addToSummary('pageCount', 'Number of Pages', 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', 'structure');
    
    // Features
    addToSummary('interactiveFeatures', 'Interactive Features', 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', 'features');
    
    addToSummary('mobileExperience', 'Mobile Experience', 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', 'features');
    
    addToSummary('specialNeeds', 'Special Requirements', 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z', 'features');
    
    addToSummary('accessibilityLevel', 'Accessibility Level', 'M15 12a3 3 0 11-6 0 3 3 0 016 0z', 'features');
    
    addToSummary('seoRequirements', 'SEO Requirements', 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', 'features');
    
    // Integrations
    addToSummary('socialMedia', 'Social Media', 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', 'integrations');
    
    addToSummary('analytics', 'Analytics', 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', 'integrations');
    
    addToSummary('paymentGateways', 'Payment Gateways', 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', 'integrations');
    
    addToSummary('thirdPartyServices', 'Third-Party Services', 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z', 'integrations');
    
    // Timeline & Budget
    addToSummary('timeline', 'Project Timeline', 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', 'timeline');
    
    addToSummary('budget', 'Budget Range', 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 'timeline');
    
    addToSummary('priority', 'Project Priority', 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', 'timeline');
    
    // User Journey
    addToSummary('userJourney', 'User Journey', 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', 'user');
    
    addToSummary('targetAudience', 'Target Audience', 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', 'user');
    
    addToSummary('conversionGoals', 'Conversion Goals', 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', 'user');
    
    // Contact Information
    if (name || email || phone || notes) {
      if (name) {
        summaryItems.push({
          icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
          label: 'Name',
          value: name,
          category: 'contact'
        });
      }
      
      if (email) {
        summaryItems.push({
          icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
          label: 'Email',
          value: email,
          category: 'contact'
        });
      }
      
      if (phone) {
        summaryItems.push({
          icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
          label: 'Phone',
          value: phone,
          category: 'contact'
        });
      }
      
      if (notes) {
        summaryItems.push({
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
          label: 'Additional Notes',
          value: notes,
          category: 'contact'
        });
      }
    }
    
    // Group items by category
    const groupedItems = summaryItems.reduce<GroupedItems>((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
    
    return { items: summaryItems, groupedItems };
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const motionItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (isSubmitted) {
    const summary = renderDesignSummary();
    
    return (
      <motion.div 
        className="py-4 sm:py-8 max-w-4xl mx-auto px-3 sm:px-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-5 sm:mb-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md shadow-green-500/10 border border-green-200 dark:border-green-800/30">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-300 mb-2 sm:mb-3">Project Information Submitted!</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto">
            Thank you for providing your information. Our team will review your design choices and contact you soon to discuss the next steps for your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
          {/* Contact Details */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-fit">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border-b border-indigo-100 dark:border-indigo-800/20">
              <h3 className="font-medium text-indigo-800 dark:text-indigo-300">Your Contact Details</h3>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-start">
                {!isMobile && (
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
                <div className="w-full">
                  <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-white">{name}</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{email}</p>
                  {phone && <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{phone}</p>}
                </div>
              </div>
              
              {notes && (
                <div className="flex items-start">
                  {!isMobile && (
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  <div className="w-full">
                    <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-white">Additional Notes</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{notes}</p>
                  </div>
                </div>
              )}
              
              <div className="pt-4">
                <button 
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg font-medium transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 flex items-center justify-center"
                  onClick={() => setIsSubmitted(false)}
                >
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Information
                </button>
              </div>
            </div>
          </div>
          
          {/* Design Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border-b border-indigo-100 dark:border-indigo-800/20">
              <h3 className="font-medium text-indigo-800 dark:text-indigo-300">Your Design Choices</h3>
            </div>
            <div className="p-4 sm:p-6 max-h-[400px] sm:max-h-[500px] overflow-y-auto">
              {summary.items.length > 0 ? (
                <div className="space-y-6">
                  {Object.entries(summary.groupedItems).map(([category, items], categoryIndex) => (
                    <div key={categoryIndex} className="space-y-3">
                      <h4 className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-200 capitalize border-b border-gray-200 dark:border-gray-700 pb-1">
                        {category}
                      </h4>
                      <div className="grid grid-cols-1 gap-2 sm:gap-3">
                        {items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            {!isMobile && (
                              <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                              </svg>
                            )}
                            <div className="w-full">
                              <p className="font-medium text-gray-800 dark:text-white text-xs sm:text-sm">{item.label}</p>
                              <p className="text-xs text-gray-600 dark:text-gray-300">{item.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <p className="text-gray-500 dark:text-gray-400">No design choices have been made yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-10 text-center bg-indigo-50 dark:bg-indigo-900/20 p-3 sm:p-5 rounded-xl border border-indigo-100 dark:border-indigo-800/30 shadow-sm max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium text-indigo-800 dark:text-indigo-300">Check Your Inbox</span>
          </div>
          <p className="text-indigo-700 dark:text-indigo-300">
            A confirmation email has been sent to your email address. Our team will contact you within 24-48 hours to discuss the next steps for your project.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="py-4">
      <div className="text-center mb-4 sm:mb-8 max-w-2xl mx-auto px-3 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">Almost There!</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Complete your contact information to finalize your website design project and schedule a consultation with our team.
        </p>
      </div>

      {/* Main Content - Side by Side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 max-w-6xl mx-auto px-3 sm:px-6">
        {/* Design Summary Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-fit border border-gray-100 dark:border-gray-700"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="p-5 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/20 border-b border-indigo-100 dark:border-indigo-800/20">
            <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Your Design Choices Summary
            </h3>
          </div>
          
          <div className="p-3 sm:p-6 max-h-[300px] sm:max-h-[600px] overflow-y-auto">
            {renderDesignSummary().items.length > 0 ? (
              <div className="space-y-6">
                {Object.entries(renderDesignSummary().groupedItems).map(([category, items], categoryIndex) => (
                  <motion.div key={categoryIndex} variants={motionItem} className="space-y-3">
                    <h4 className="font-medium text-sm sm:text-lg text-gray-700 dark:text-gray-200 capitalize border-b border-gray-200 dark:border-gray-700 pb-1 sm:pb-2">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {items.map((item, itemIndex) => (
                        <motion.div key={itemIndex} variants={motionItem} className="flex items-start p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800/30 shadow-sm">
                          {!isMobile && (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                          )}
                          <div className="w-full">
                            <p className="font-medium text-xs sm:text-base text-gray-800 dark:text-white">{item.label}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">{item.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                <svg className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400 font-medium">No design choices have been made yet.</p>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Return to previous steps to make your selections.</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-fit border border-gray-100 dark:border-gray-700"
          variants={motionItem}
          initial="hidden"
          animate="show"
          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          transition={{ duration: 0.2 }}
        >
        <div className="p-5 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/20 border-b border-indigo-100 dark:border-indigo-800/20">
          <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 flex items-center">
            <HiOutlineCalendar className="w-5 h-5 mr-2" />
            Your Contact Information
          </h3>
        </div>
        
        <div className="p-3 sm:p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2.5 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-10 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm text-sm sm:text-base"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineMail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm text-sm sm:text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlinePhone className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full pl-10 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm text-sm sm:text-base"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Additional Notes
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <HiOutlineDocumentText className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <textarea
                    id="notes"
                    rows={isMobile ? 2 : 3}
                    className="w-full pl-10 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm text-sm sm:text-base"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any specific requirements or questions..."
                  />
                </div>
              </div>
              
              {error && (
                <div className="p-2 sm:p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/20 rounded-lg text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className={`w-full px-3 sm:px-6 py-2 sm:py-3.5 rounded-lg font-medium transition-all duration-200 shadow-sm text-sm sm:text-base ${
                  isSubmitting
                    ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white hover:shadow-md hover:shadow-indigo-500/30 transform hover:-translate-y-0.5'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Information'
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      </div>

      <div className="mt-4 sm:mt-8 text-center max-w-lg mx-auto bg-blue-50 dark:bg-blue-900/20 p-2.5 sm:p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 mx-3 sm:mx-auto">
        <div className="flex items-center justify-center mb-1.5 sm:mb-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm sm:text-base font-medium text-blue-800 dark:text-blue-300">What happens next?</span>
        </div>
        <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-400">
          After submitting your information, our team will review your design choices and contact you within 24-48 hours to discuss the next steps for your project.
        </p>
      </div>
    </div>
  );
};

export default MeetingScheduler;
